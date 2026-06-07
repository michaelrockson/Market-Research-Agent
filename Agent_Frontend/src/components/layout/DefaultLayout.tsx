import React from "react";
import HeaderBar from "./HeaderBar.tsx";
import SideBar from "./SideBar.tsx";
import DashboardPage from "../../pages/DashboardPage.tsx";

export default function DefaultLayout(): React.JSX.Element {
  return (
    <>
      <section className="li-grid li-grid-default-layout">
        <SideBar />
        <div>
          <HeaderBar />
          <DashboardPage />
        </div>
      </section>
    </>
  );
}
