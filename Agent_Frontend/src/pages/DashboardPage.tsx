import React from "react";
import LoadingScreen from "../components/ui/LoadingScreen.tsx";
import ErrorScreen from "../components/ui/ErrorScreen.tsx";
import {
  DashboardGreeting,
  DashboardHistoryCard,
  DashboardOverviewCards,
  DashboardOverviewCharts,
  useDashboardHexChart,
  useDashboardHistoryCard,
  useDashboardLineChart,
  useDashboardOverviewCards,
  useDashboardPage,
} from "../features/dashboard/index.ts";

export default function DashboardPage(): React.JSX.Element {
  const { payload, loading, error } = useDashboardPage();

  const { cardData } = useDashboardOverviewCards(payload);
  const { agentData } = useDashboardLineChart(payload);
  const { pipelineData } = useDashboardHexChart(payload);
  const { record } = useDashboardHistoryCard(payload);

  if (loading) return <LoadingScreen />;
  if (error)
    return (
      <ErrorScreen
        statusCode={500}
        message="Unable to fetch dashboard data. Please try again later."
      />
    );

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
