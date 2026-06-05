import { useState } from "react";

export type AnalyticsCardsPayload = {
  id?: number;
  Tag: string;
  Data: number | string;
};

const mockData: AnalyticsCardsPayload[] = [
  {
    id: 0,
    Tag: "Agent Health",
    Data: 92.0,
  },
  {
    id: 1,
    Tag: "Agent Runs",
    Data: 16,
  },
  {
    id: 2,
    Tag: "Problem Gathered",
    Data: 45,
  },
  {
    id: 3,
    Tag: "Reports Sent",
    Data: 4,
  },
];

export function useDashboardOverviewCards() {
  const [cardData] = useState(mockData);

  return { cardData };
}
