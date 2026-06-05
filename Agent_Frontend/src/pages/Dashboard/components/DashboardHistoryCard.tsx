import React from "react";

export default function DashboardHistoryCard(): React.JSX.Element {
  return (
    <section className="li-section-sm">
      <div className="li-card li-hover-lift">
        <h3 className="li-mb-md">Recent Findings</h3>
        <span className="li-stat li-stat-delta">+12%</span>
      </div>
    </section>
  );
}
