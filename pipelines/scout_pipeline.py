from services.scout_bot_service import ScoutBotService
from utils.logger import logger


class ScoutBotPipeline:
    """
    Pipeline responsible for scouting and validating potential pain points from Reddit.
    This is the first stage in the system, identifying software-solvable problems.
    """


    def __init__(self):
        self.service = ScoutBotService()


    def run(self):
        """
        Executes the scouting pipeline:
        1. Agent validates and stores IDs in the database (internally calls search and analysis).
        """
        try:
            logger.info("Scout Bot pipeline started")

            logger.info("Executing scout agent validation...")
            self.service.agent_validate_posts()

            logger.info("Scout Bot pipeline complete")
            return True

        except Exception as e:
            logger.error(f"Error in Scout Bot pipeline: {e}",
                         exc_info = True)
            return {"error": str(e)}

