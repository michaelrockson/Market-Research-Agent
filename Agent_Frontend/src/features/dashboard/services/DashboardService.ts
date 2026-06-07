import type {
  AgentPayload,
  AnalyticsCardsPayload,
  httpMethod,
  PipelinePayload,
  Record,
} from "../models/DashboardModels.ts";

class DashboardService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:8000";
  }

  getAnalyticsCardData() {
    return this.request<{ AnalyticsCards: AnalyticsCardsPayload[] }>(
      "/dashboard/analytics/card",
      "GET",
    );
  }

  getPipelineData() {
    return this.request<{ PipelinePayload: PipelinePayload[] }>(
      "/dashboard/chart/agent/pipeline",
      "GET",
    );
  }

  getAgentRecords() {
    return this.request<{ AgentRecordsPayload: Record[] }>(
      "/dashboard/recents/agent/records",
      "GET",
    );
  }

  getLineChartData() {
    return this.request<{ AgentRunPayload: AgentPayload[] }>(
      "/dashboard/chart/agent/runs",
      "GET",
    );
  }

  private async request<T>(
    endpoint: string,
    requestMethod: httpMethod,
    body?: undefined,
  ): Promise<T> {
    const serverResponse = await fetch(`${this.baseUrl}${endpoint}`, {
      method: `${requestMethod}`,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!serverResponse.ok) throw new Error(`${serverResponse.status}`);

    return (await serverResponse.json()) as Promise<T>;
  }
}

export const dashboardService = new DashboardService();
