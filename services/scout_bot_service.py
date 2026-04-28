from typing import List, Dict

from nltk.sentiment import SentimentIntensityAnalyzer

from clients.reddit_client import get_reddit_client
from settings import settings


class ScoutBotService:
    def __init__(self):
        self.subreddits = settings.DEFAULT_SUBREDDITS
        self.search_queries = settings.SEARCH_QUERIES
        self.reddit = get_reddit_client()
        self.sia = SentimentIntensityAnalyzer()
        self.search_results = []
        self.search_result_sentiments = []


    def search_subreddit(self):

        if not self.reddit:
            raise RuntimeError("Failed to create a reddit instance!")

        search_results_list: List[List[Dict]] = []

        for subreddit in self.subreddits:

            for search_query in self.search_queries:

                cumulated_search_results: List[Dict] = []
                search_results = self.reddit.subreddit(subreddit).search(
                    search_query,
                    sort = "top",
                    limit = 2,
                    time_filter = "month")

                for search_result in search_results:
                    cumulated_search_results.append(
                        {"subreddit": subreddit, "search_query": search_query,
                         "post_title": search_result.title, })

                search_results_list.append(cumulated_search_results)

        return search_results_list
