from typing import List, Dict

from nltk.sentiment import SentimentIntensityAnalyzer

from clients.reddit_client import get_reddit_client
from settings import settings
from utils.logger import logger


class ScoutBotService:
    def __init__(self):
        self.subreddits = settings.DEFAULT_SUBREDDITS
        self.search_queries = settings.SEARCH_QUERIES
        self.reddit = get_reddit_client()
        self.sia = SentimentIntensityAnalyzer()
        self.search_results = []
        self.search_result_sentiments = []


    def search_subreddit(self) -> List[List[Dict]] | None:
        """
        Searches configured subreddits using predefined queries and stores the results.
        Results are grouped by combination and stored in self.search_results.
        Returns:
            List[List[Dict]]: Nested list where each inner list contains post dicts
            for a single subreddit/query pair.
        """
        try:
            search_results_list: List[List[Dict]] = []

            for subreddit in self.subreddits:
                for search_query in self.search_queries:
                    cumulated_search_results: List[Dict] = []
                    logger.info(
                        f"Firing Reddit API call on r/{subreddit} with query='{search_query}'")
                    search_results = self.reddit.subreddit(subreddit).search(
                        search_query,
                        sort = "top",
                        limit = 4,
                        time_filter = "month")

                    for search_result in search_results:
                        cumulated_search_results.append(
                            {"subreddit": subreddit,
                             "search_query": search_query,
                             "post_title": search_result.title, })

                    if not cumulated_search_results:
                        logger.warning(
                            f"No results for query '{search_query}' on r/{subreddit}")
                    else:
                        logger.info(
                            f"Query '{search_query}' on r/{subreddit} : {len(cumulated_search_results)} posts")
                    search_results_list.append(cumulated_search_results)

            self.search_results = search_results_list
            logger.info(
                f"Search subreddits completed! {len(search_results_list)} active indexes")
            return search_results_list

        except RuntimeError as e:
            logger.error("Reddit instance check failed: %s", e)
            self.search_results = []
            return []

        except Exception as e:
            logger.error(f"Unexpected error while querying Reddit API: {e}",
                         exc_info = True)
            self.search_results = []
            return []
