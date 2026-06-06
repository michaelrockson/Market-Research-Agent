import React from "react";
import type { AnalyticsCardsPayload } from "../models/DashboardModels.ts";

export default function DashboardAnalyticsCard({
  tag,
  data,
}: AnalyticsCardsPayload): React.JSX.Element {
  return (
    <div className="li-card li-hover-lift">
      <div className="li-flex li-justify-between">
        <p className="li-text-sm li-text-secondary li-mb-sm">{tag}</p>
        {/*    Relevant Icon*/}
      </div>
      <h1 className="li-mb-md li-h1">{data}</h1>
    </div>
  );
}
