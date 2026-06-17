from sqlalchemy import Column, Integer, String, ForeignKey, JSON, Boolean
from sqlalchemy.orm import relationship

from shared.database import Base


class Sentiment(Base):
    __tablename__ = "sentiments"

    id = Column(Integer, primary_key = True, autoincrement = True)
    post_id = Column(String(20), ForeignKey(
        "posts.submission_id", ondelete = "CASCADE"), nullable = False)
    sentiment_results = Column(JSON, nullable = False)
    is_curated = Column(Boolean, default = False)

    post = relationship("Post", back_populates = "sentiments")
