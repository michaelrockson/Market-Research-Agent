import React from "react";
import HeaderBar from "../shared/components/HeaderBar.tsx";
import DashboardPage from "../pages/Dashboard/DashboardPage.tsx";
import SideBar from "../shared/components/SideBar.tsx";

export default function DefaultLayout(): React.JSX.Element {
  return (
    <>
      <section className="li-grid li-grid-default-layout">
        <div className="li-container li-border-right">
          <SideBar />
        </div>
        <div>
          <HeaderBar />
          <DashboardPage />
        </div>
      </section>
    </>
  );
}
