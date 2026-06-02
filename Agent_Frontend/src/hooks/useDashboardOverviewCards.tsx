import { useState } from "react";

export type AnalyticsCardsPayload = {
  id?: number;
  Tag: string;
  Data: number | string;
  Stat: number;
};

const mockData: AnalyticsCardsPayload[] = [
  {
    id: 0,
    Tag: "Agent Health",
    Data: 92.0,
    Stat: 12,
  },
  {
    id: 1,
    Tag: "Agent Runs",
    Data: 16,
    Stat: 12,
  },
  {
    id: 2,
    Tag: "Problem Gathered",
    Data: 45,
    Stat: 12,
  },
  {
    id: 3,
    Tag: "Reports Sent",
    Data: 4,
    Stat: 12,
  },
];

export function useDashboardOverviewCards() {
  const [cardData] = useState(mockData);

  return { cardData };
}
