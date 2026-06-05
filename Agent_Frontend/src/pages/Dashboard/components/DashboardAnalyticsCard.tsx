import React from "react";
import type { AnalyticsCardsPayload } from "../../../hooks/useDashboardOverviewCards.tsx";

export default function DashboardAnalyticsCard({
  Tag,
  Data,
}: AnalyticsCardsPayload): React.JSX.Element {
  return (
    <div className="li-card li-hover-lift">
      <p className="li-text-sm li-text-secondary li-mb-sm">{Tag}</p>
      <h1 className="li-mb-md">{Data}</h1>
    </div>
  );
}
