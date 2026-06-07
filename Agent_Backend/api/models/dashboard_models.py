from typing import Literal, Optional
from pydantic import BaseModel


class AnalyticsCardsStruct(BaseModel):
    id: int
    tag: str
    data: int | str
    trend: Optional[float] = None
    trendDirection: Optional[Literal["up", "down", "neutral"]] = None
    variant: Optional[Literal["info", "success", "warning", "error", "brand"]] = "brand"


class PipelineDataStruct(BaseModel):
    pipeline: str
    runs: int


class AgentRunStruct(BaseModel):
    month: str
    runs: int


class AgentRecordsStruct(BaseModel):
    id: int
    title: str
    content: str
    data: str
    subreddit: str
