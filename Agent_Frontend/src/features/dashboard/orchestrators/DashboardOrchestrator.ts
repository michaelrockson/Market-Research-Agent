import { dashboardService } from "../services/DashboardService.ts";
import type { DashboardData } from "../models/DashboardModels.ts";

export async function fetchDashboardData(): Promise<DashboardData> {
  const [analyticsRes, pipelineRes, recordsRes, agentRes] = await Promise.all([
    dashboardService.getAnalyticsCardData(),
    dashboardService.getPipelineData(),
    dashboardService.getAgentRecords(),
    dashboardService.getLineChartData(),
  ]);
  return {
    analyticsCardData: analyticsRes.AnalyticsCards,
    pipelineData: pipelineRes.PipelinePayload,
    agentRecords: recordsRes.AgentRecordsPayload,
    agentPayload: agentRes.AgentRunPayload,
  };
}

export async function refetchAnalyticsCards() {
  const res = await dashboardService.getAnalyticsCardData();
  return res.AnalyticsCards;
}

export async function refetchPipelineData() {
  const res = await dashboardService.getPipelineData();
  return res.PipelinePayload;
}

export async function refetchAgentRecords() {
  const res = await dashboardService.getAgentRecords();
  return res.AgentRecordsPayload;
}

export async function refetchAgentPayload() {
  const res = await dashboardService.getLineChartData();
  return res.AgentRunPayload;
}
