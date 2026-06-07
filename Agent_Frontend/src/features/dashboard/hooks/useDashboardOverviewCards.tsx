import { useEffect, useRef, useState } from "react";
import type {
  AnalyticsCardsPayload,
  DashboardData,
} from "../models/DashboardModels.ts";

export function useDashboardOverviewCards(payload: DashboardData | null) {
  const [cardData, setCardData] = useState<AnalyticsCardsPayload[]>([]);
  const isBootstrapped = useRef(false);

  useEffect(() => {
    if (payload?.analyticsCardData && !isBootstrapped.current) {
      setCardData(payload.analyticsCardData);
      isBootstrapped.current = true;
    }
  }, [payload?.analyticsCardData]);

  return { cardData };
}
