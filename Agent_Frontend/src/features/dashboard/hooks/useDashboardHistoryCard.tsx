import { useEffect, useRef, useState } from "react";
import type { DashboardData, Record } from "../models/DashboardModels.ts";

export function useDashboardHistoryCard(payload: DashboardData | null) {
  const [record, setRecord] = useState<Record[]>([]);
  const isBootstrapped = useRef(false);

  useEffect(() => {
    if (payload?.agentRecords && !isBootstrapped.current) {
      setRecord(payload.agentRecords);
      isBootstrapped.current = true;
    }
  }, [payload?.agentRecords]);

  return { record };
}
