import { useEffect, useRef, useState } from "react";
import type {
  DashboardData,
  PipelinePayload,
} from "../models/DashboardModels.ts";

export function useDashboardHexChart(payload: DashboardData | null) {
  const [pipelineData, setPipelineData] = useState<PipelinePayload[]>([]);
  const isBootstrapped = useRef(false);

  useEffect(() => {
    if (payload?.pipelineData && !isBootstrapped.current) {
      setPipelineData(payload.pipelineData);
      isBootstrapped.current = true;
    }
  }, [payload?.pipelineData]);

  return { pipelineData };
}
