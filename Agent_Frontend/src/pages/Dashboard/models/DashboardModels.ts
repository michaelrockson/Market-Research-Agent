export type AnalyticsCardsPayload = {
  id?: number;
  tag: string;
  data: number | string;
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
