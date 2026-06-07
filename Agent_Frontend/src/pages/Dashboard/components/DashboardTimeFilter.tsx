import React from "react";

export type TimePeriod = "weekly" | "monthly" | "3months" | "6months";

interface Props {
  value: TimePeriod;
  onChange: (period: TimePeriod) => void;
}

const PERIODS: { label: string; value: TimePeriod }[] = [
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "3 Months", value: "3months" },
  { label: "6 Months", value: "6months" },
];

export default function DashboardTimeFilter({ value, onChange }: Props): React.JSX.Element {
  return (
    <div className="li-flex li-flex-no-gap" style={{ background: "rgba(255,255,255,0.02)", padding: 2, borderRadius: 6, border: "1px solid rgba(255,255,255,0.05)" }}>
      {PERIODS.map((period) => (
        <button
          key={period.value}
          className={`li-btn li-btn-xs ${value === period.value ? "li-btn-secondary" : "li-btn-ghost"}`}
          style={{ height: 26, fontSize: "11px", padding: "0 8px", border: value === period.value ? undefined : "none", background: value === period.value ? "rgba(255,255,255,0.06)" : "transparent" }}
          onClick={() => onChange(period.value)}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}
