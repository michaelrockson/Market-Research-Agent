from sqlalchemy import Column, Integer, Text

from shared.database import Base


class ProcessedBriefs(Base):
    __tablename__ = "processed_briefs"

    id = Column(Integer, primary_key = True, autoincrement = True)
    curated_content = Column(Text, nullable = False)
