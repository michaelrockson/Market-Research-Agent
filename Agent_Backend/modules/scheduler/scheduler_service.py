from shared.database import get_session
from shared.database.init_db import init_db
from modules.filtering.filtering_pipeline import CorePipeline
from modules.delivery.delivery_pipeline import EgressPipeline
from modules.reddit_sync.ingress_pipeline import IngressPipeline
from modules.discovery.discovery_pipeline import ScoutBotPipeline
from modules.analysis.analysis_pipeline import SentimentPipeline
from modules.reddit_sync.post_repository import PostRepository
from shared.settings import settings
from shared.utils.helpers import run_pipeline
from shared.utils.logger import logger


class JobService:
    """
    Handles scheduled agent jobs.

    This service:
    - Runs the full pipeline sequence (Ingress -> Sentiment -> Core -> Egress).
    - Cleans up curated records from the database.
    """


    def __init__(self):
        self.egress_setting = settings.CHOICE_THREE
        self.session = get_session()
        self.post_repo = PostRepository(self.session)


    def safe_run(self, function):
        def wrapper(*args, **kwargs):
            try:
                logger.info(
                    f"Running {function.__name__ if hasattr(function, '__name__')
                    else 'anonymous function'}")

                result = function(*args, **kwargs)
                logger.info(
                    f"Finished {function.__name__ if hasattr(function, '__name__')
                    else 'anonymous function'}")
                return result

            except Exception:
                logger.exception(
                    f"Error running {function.__name__ if hasattr(function, '__name__')
                    else 'anonymous function'}")


        return wrapper


    def run_scout_bot(self):
        """
        Runs the scout bot pipeline to identify and validate potential pain points.
        """
        logger.info("Starting discovery bot job")
        scout = ScoutBotPipeline()
        status = run_pipeline(scout)
        if not status:
            logger.warning("Discovery bot job interrupted.")
            return
        logger.info("Discovery bot job finished")


    def run_all_pipelines(self):
        """
        Runs the pipelines synchronously in the correct order:
        Scout -> Ingress -> Sentiment -> Core -> Egress
        """
        logger.info("Initializing database...")
        init_db()

        scout = ScoutBotPipeline()
        ingress = IngressPipeline()
        sentiment = SentimentPipeline()
        core = CorePipeline()
        egress = EgressPipeline()

        pipelines = [scout, ingress, sentiment, core, egress]

        for pipeline in pipelines:
            status = False
            if isinstance(pipeline, EgressPipeline):
                status = run_pipeline(pipeline, settings.CHOICE_THREE)
            else:
                status = run_pipeline(pipeline)

            if not status:
                return

        logger.info("Full pipeline execution successful.")


    def cleanup_curated_data(self):
        """
        Deletes records from the database that have been marked as curated
        and preserved in the curated_items table.
        """
        try:
            logger.info("=== Starting cleanup of curated data ===")
            curated_ids = self.post_repo.get_curated_submission_ids()

            if curated_ids:
                self.post_repo.delete_posts_by_submission_ids(curated_ids)
                self.post_repo.delete_all_curated_items()
                self.session.commit()

                logger.info(
                    f"Successfully cleaned up {len(curated_ids)} curated records")
            else:
                logger.info("No curated data found to clean up")

        except Exception as e:
            self.session.rollback()
            logger.error(f"Error during curated data cleanup: {e}",
                         exc_info = True)
        finally:
            self.session.close()
