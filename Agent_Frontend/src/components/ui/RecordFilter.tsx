import type { ReportFilterProps, ReportPeriod } from "./models/UiModels.ts";
import React from "react";

const RECORDOPTIONS: { label: string; value: ReportPeriod }[] = [
  { label: "All", value: "all" },
  { label: "New", value: "new" },
  { label: "Archived", value: "archived" },
];

export default function RecordFilter({
  value,
  onChange,
}: ReportFilterProps): React.JSX.Element {
  return (
    <div
      className="li-flex li-flex-no-gap"
      style={{
        background: "rgba(255,255,255,0.02)",
        padding: 2,
        borderRadius: 6,
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {RECORDOPTIONS.map((period) => (
        <button
          key={period.value}
          className={`li-btn li-btn-xs ${value === period.value ? "li-btn-secondary" : "li-btn-ghost"}`}
          style={{
            height: 26,
            fontSize: "11px",
            padding: "0 8px",
            border: value === period.value ? undefined : "none",
            background:
              value === period.value ? "rgba(255,255,255,0.06)" : "transparent",
          }}
          onClick={() => onChange(period.value)}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}
