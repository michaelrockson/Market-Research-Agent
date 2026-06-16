import { useState } from "react";
import type { PipelineAnalyticsPayload } from "../models/PipelineModels.ts";

const analyticsData: PipelineAnalyticsPayload[] = [
  {
    id: 0,
    tag: "Last Agentic Run",
    data: "3d",
  },

  {
    id: 1,
    tag: "Last Manual Trigger",
    data: "12w",
  },
  {
    id: 2,
    tag: "Run-Duration",
    data: "12m 52s",
  },
  {
    id: 3,
    tag: "Status",
    data: "Success",
  },
];

export function usePipelineAnalytics() {
  const [analyticsPayload] = useState(analyticsData);

  return { analyticsPayload };
}
