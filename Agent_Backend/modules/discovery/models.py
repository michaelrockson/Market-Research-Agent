from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime

from shared.database import Base


class CuratedItem(Base):
    __tablename__ = "curated_items"

    id = Column(Integer, primary_key = True, autoincrement = True)
    submission_id = Column(String(20), nullable = False, unique = True)
    scheduled_deletion = Column(Boolean, default = False)


class ValidatedPost(Base):
    __tablename__ = "validated_posts"

    id = Column(Integer, primary_key = True, autoincrement = True)
    submission_id = Column(String(100), nullable = False, unique = True)
    validated_at = Column(
        DateTime(timezone = True),
        default = lambda: datetime.now(timezone.utc),
        nullable = False
    )
    is_processed = Column(Boolean, default = False, nullable = False)
