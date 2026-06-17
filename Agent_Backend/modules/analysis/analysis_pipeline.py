from modules.analysis.analysis_service import AnalysisService
from shared.utils.logger import logger


class SentimentPipeline:
    """
    Pipeline responsible for co-ordinating sentiment analysis on stored Reddit data.
    """


    def __init__(self):
        self.service = AnalysisService()


    def run(self):
        """
        Executes the sentiment analysis pipeline: query, analyze, summarize, and store.
        Returns:
            bool: True if the pipeline succeeded and found data, False otherwise.
        """
        try:

            logger.info("Querying posts with comments...")
            posts = self.service.query_posts_with_comments()

            if not posts:
                logger.warning(
                    "No posts available for sentiment analysis. Stopping pipeline.")
                return False

            logger.info("Analyzing analysis...")
            self.service.analyze_post_sentiment()

            logger.info("Summarizing analysis...")
            self.service.summarize_post_sentiment()

            logger.info("Storing analysis results...")
            self.service.store_sentiment_results()

            logger.info("Analysis pipeline complete")
            return True

        except Exception as e:
            logger.error(f"Error in Analysis Analysis pipeline: {e}",
                         exc_info = True)
            return False
