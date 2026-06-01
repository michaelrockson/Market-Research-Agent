import React from "react";
import HeaderBar from "../shared/components/HeaderBar.tsx";
import DashboardPage from "../pages/Dashboard/DashboardPage.tsx";

export default function DefaultLayout(): React.JSX.Element {
  return (
    <>
      <section className="li-grid li-grid-default-layout">
        <div className="li-container li-border-right">
          <h1>Sidebar</h1>
        </div>
        <div>
          <HeaderBar />
          <DashboardPage />
        </div>
      </section>
    </>
  );
}
