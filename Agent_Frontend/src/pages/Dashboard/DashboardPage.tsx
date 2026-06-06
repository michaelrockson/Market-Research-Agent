import React from "react";
import DashboardOverviewCharts from "./components/DashboardOverviewCharts.tsx";
import DashboardOverviewCards from "./components/DashboardOverviewCards.tsx";
import DashboardHistoryCard from "./components/DashboardHistoryCard.tsx";
import DashboardGreeting from "./components/DashboardGreeting.tsx";
import { useDashboardPage } from "./hooks/useDashboardPage.tsx";
import { useDashboardOverviewCards } from "./hooks/useDashboardOverviewCards.tsx";
import { useDashboardLineChart } from "./hooks/useDashboardLineChart.tsx";
import { useDashboardHexChart } from "./hooks/useDashboardHexChart.tsx";
import { useDashboardHistoryCard } from "./hooks/useDashboardHistoryCard.tsx";

export default function DashboardPage(): React.JSX.Element {
  const { payload, loading, error } = useDashboardPage();

  const { cardData } = useDashboardOverviewCards(payload);
  const { agentData } = useDashboardLineChart(payload);
  const { pipelineData } = useDashboardHexChart(payload);
  const { record } = useDashboardHistoryCard(payload);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: Unable to fetch data</div>;

  return (
    <>
      <section className="li-section-sm li-px-lg li-animate-fade-in">
        <DashboardGreeting username="Michael Rockson" />
        <DashboardOverviewCards cardData={cardData} />
        <DashboardOverviewCharts
          agentData={agentData}
          pipelineData={pipelineData}
        />
        <DashboardHistoryCard record={record} />
      </section>
    </>
  );
}
