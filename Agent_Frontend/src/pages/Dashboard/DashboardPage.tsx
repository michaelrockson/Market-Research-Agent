import DashboardOverviewCharts from "./components/DashboardOverviewCharts.tsx";
import DashboardOverviewCards from "./components/DashboardOverviewCards.tsx";
import DashboardHistoryCard from "./components/DashboardHistoryCard.tsx";

export default function DashboardPage() {
  return (
    <>
      <section className="li-section-sm li-px-lg li-animate-fade-in">
        <DashboardOverviewCards />
        <DashboardOverviewCharts />
        <DashboardHistoryCard />
      </section>
    </>
  );
}
