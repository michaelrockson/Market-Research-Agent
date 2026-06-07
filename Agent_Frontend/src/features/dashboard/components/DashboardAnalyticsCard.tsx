import React from "react";
import type {
  AnalyticsCardsPayload,
  AnalyticsCardVariant,
} from "../models/DashboardModels.ts";

const variantIconBoxClass: Record<NonNullable<AnalyticsCardVariant>, string> = {
  info: "li-card-icon-box-info",
  success: "li-card-icon-box-success",
  warning: "li-card-icon-box-warning",
  error: "li-card-icon-box-error",
  brand: "li-card-icon-box-brand",
};

export default function DashboardAnalyticsCard({
  tag,
  data,
  trend,
  trendDirection = "neutral",
  variant = "brand",
  icon: Icon,
}: AnalyticsCardsPayload): React.JSX.Element {
  const iconBoxClass = variantIconBoxClass[variant];

  const trendClass =
    trendDirection === "up"
      ? "li-stat-trend li-stat-trend-up"
      : trendDirection === "down"
        ? "li-stat-trend li-stat-trend-down"
        : "li-stat-trend li-stat-trend-neutral";

  return (
    <div className="li-card li-hover-lift">
      <div className="li-flex li-justify-between li-items-center li-mb-md">
        <p className="li-text-sm li-text-secondary">{tag}</p>
        {Icon && (
          <div className={`li-card-icon-box ${iconBoxClass}`}>
            <Icon size={18} />
          </div>
        )}
      </div>

      <h1 className="li-h1 li-mb-sm">{data}</h1>

      {trend !== undefined && (
        <span className={trendClass}>
          {trendDirection === "down" ? "-" : "+"}
          {Math.abs(trend)}%{" "}
          <span style={{ fontWeight: 400, opacity: 0.7 }}>vs last month</span>
        </span>
      )}
    </div>
  );
}
