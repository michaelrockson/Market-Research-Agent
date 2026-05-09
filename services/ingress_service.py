from typing import Dict, List, Any

from clients.reddit_client import get_reddit_client
from database import get_session
from repositories.validated_post_repository import ValidatedPostRepository
from settings import settings
from utils.helpers import get_comments_from_submission, get_post_by_id
from utils.logger import logger


class IngressService:
    """
    Service for handling Reddit data ingestion, focused on fetching posts
    that have been validated by the scout bot and retrieving their comments.
    """


    def __init__(self):
        self.reddit = get_reddit_client()
        self.validated_repo = ValidatedPostRepository()
        self.session = get_session()
        self.comment_limit = settings.DEFAULT_COMMENT_LIMIT
        self.posts = []
        self.submission_ids = []
        self.comments = []


    def fetch_validated_posts(self) -> List[Dict[str, Any]]:
        """
        Reads unprocessed submission IDs from the `validated_posts` table,
        fetches each post's full data directly from the Reddit API using its
        submission ID.

        Then marks those records as processed so they are not
        picked up again on the next run.

        Returns:
            List[Dict[str, Any]]: List of post data dicts for validated submissions.
        """
        if not self.reddit:
            logger.warning("Reddit client not found. Reconnecting...")
            self.reddit = get_reddit_client()

        try:
            validated_repo = ValidatedPostRepository()
            unprocessed = validated_repo.get_unprocessed()

            if not unprocessed:
                logger.warning(
                    "fetch_validated_posts: no unprocessed validated posts found.")
                return []

            submission_ids = [record.submission_id for record in unprocessed]
            logger.info(
                f"fetch_validated_posts: {len(submission_ids)} validated IDs to scrape: {submission_ids}"
            )

            posts: List[Dict[str, Any]] = []
            processed_ids: List[str] = []

            for submission_id in submission_ids:
                try:
                    post_data = get_post_by_id(self.reddit, submission_id)
                    posts.append(post_data)
                    processed_ids.append(submission_id)

                except Exception as e:
                    logger.error(
                        f"Failed to fetch submission '{submission_id}': {e}",
                        exc_info = True
                    )

            if processed_ids:
                validated_repo.mark_as_processed(processed_ids)
                self.session.commit()
                logger.info(
                    f"fetch_validated_posts: marked {len(processed_ids)} record(s) as processed."
                )

            self.posts = posts
            logger.info(
                f"fetch_validated_posts: collected {len(posts)} post(s).")
            return posts

        except Exception as e:
            self.session.rollback()
            logger.error(f"fetch_validated_posts failed: {e}", exc_info = True)
            return []

        finally:
            self.session.close()


    def fetch_post_ids(self) -> List[str]:
        """
        Extract submission IDs from the fetched posts.
        Returns:
            List[str]: List of submission IDs.
        """
        if not self.posts:
            logger.warning(
                "No posts available. Running fetch_validated_posts() first...")
            self.fetch_validated_posts()

        submission_ids: List[str] = []

        for post in self.posts:
            if "submission_id" in post:
                submission_ids.append(post["submission_id"])

        self.submission_ids = submission_ids
        logger.info(f"Extracted {len(submission_ids)} submission IDs.")
        return submission_ids


    def fetch_reddit_comments(self) -> List[Dict[str, Any]]:
        """
        Fetch comments for each submission ID collected from posts.
        Returns:
            List[Dict[str, Any]]: List of comment data dictionaries.
        """
        if not self.submission_ids:
            logger.warning(
                "No submission IDs available. Running fetch_post_ids()...")
            self.fetch_post_ids()

        comments_collected: List[Dict[str, Any]] = []
        logger.info(
            f"Fetching comments from {len(self.submission_ids)} submissions...")

        for submission_id in self.submission_ids:
            try:
                comments = get_comments_from_submission(self.reddit,
                                                        submission_id,
                                                        self.comment_limit)
                comments_collected.extend(comments)
            except Exception as e:
                logger.error(
                    f"Error fetching comments for submission {submission_id}: {e}",
                    exc_info = True)

        self.comments = comments_collected
        logger.info(f"Collected {len(comments_collected)} comments")
        return comments_collected
