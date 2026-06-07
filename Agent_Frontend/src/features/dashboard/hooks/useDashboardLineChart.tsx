import { useEffect, useRef, useState } from "react";
import type { AgentPayload, DashboardData } from "../models/DashboardModels.ts";

export function useDashboardLineChart(payload: DashboardData | null) {
  const [agentData, setAgentData] = useState<AgentPayload[]>([]);
  const isBootstrapped = useRef(false);

  useEffect(() => {
    if (payload?.agentPayload && !isBootstrapped.current) {
      setAgentData(payload.agentPayload);
      isBootstrapped.current = true;
    }
  }, [payload?.agentPayload]);

  return { agentData };
}
