import React from "react";
import DashboardAnalyticsCard from "./DashboardAnalyticsCard.tsx";
import { useDashboardOverviewCards } from "../../../hooks/useDashboardOverviewCards.tsx";

export default function DashboardOverviewCards(): React.JSX.Element {
  const { cardData } = useDashboardOverviewCards();
  return (
    <section className="li-section-sm li-grid li-grid-4">
      {cardData.map((data) => (
        <DashboardAnalyticsCard key={data.id} Tag={data.Tag} Data={data.Data} />
      ))}
    </section>
  );
}
