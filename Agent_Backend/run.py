import sys

from shared.database.init_db import init_db
from modules.filtering.filtering_pipeline import CorePipeline
from modules.delivery.delivery_pipeline import EgressPipeline
from modules.reddit_sync.ingress_pipeline import IngressPipeline
from modules.discovery.discovery_pipeline import ScoutBotPipeline
from modules.analysis.analysis_pipeline import SentimentPipeline
from shared.settings import settings
from shared.utils.helpers import run_pipeline
from shared.utils.logger import logger

if __name__ == "__main__":
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
            sys.exit(1)

    logger.info("Full pipeline execution successful.")
    sys.exit(0)
