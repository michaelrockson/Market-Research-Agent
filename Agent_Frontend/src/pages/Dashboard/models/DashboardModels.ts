import type { IconType } from "react-icons";

export type AnalyticsCardVariant = "info" | "success" | "warning" | "error" | "brand";

export type AnalyticsCardsPayload = {
  id?: number;
  tag: string;
  data: number | string;
  trend?: number;
  trendDirection?: "up" | "down" | "neutral";
  variant?: AnalyticsCardVariant;
  icon?: IconType;
};

export type httpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type PipelinePayload = {
  pipeline: string;
  runs: number;
};

export type Record = {
  id: number;
  title: string;
  content: string;
  data: string;
  subreddit?: string;
};

export type AgentPayload = {
  month: string;
  runs: number;
};

export interface DashboardData {
  analyticsCardData: AnalyticsCardsPayload[];
  pipelineData: PipelinePayload[];
  agentRecords: Record[];
  agentPayload: AgentPayload[];
}

export interface GreetingProps {
  username: string;
}
