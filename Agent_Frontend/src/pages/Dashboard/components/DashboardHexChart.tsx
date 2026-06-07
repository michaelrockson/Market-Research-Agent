import React, { useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { PipelinePayload } from "../models/DashboardModels.ts";
import DashboardTimeFilter, {
  type TimePeriod,
} from "./DashboardTimeFilter.tsx";

interface Props {
  pipelineData: PipelinePayload[];
}

interface TooltipProps {
  active?: boolean;
  payload?: { value: number; payload: PipelinePayload }[];
}

function PipelineTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="li-chart-tooltip">
      <p className="li-chart-tooltip-label">{payload[0].payload.pipeline}</p>
      <div className="li-chart-tooltip-value">
        <span>
          <span
            className="li-chart-tooltip-dot"
            style={{ background: "#ff4500" }}
          />
          Runs
        </span>
        <span>{payload[0].value}</span>
      </div>
    </div>
  );
}

const ANGLE_STYLE = {
  fontSize: 11,
  fill: "#8a8f98",
  fontFamily: "Inter, sans-serif",
};

export default function DashboardHexChart({
  pipelineData,
}: Props): React.JSX.Element {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("6months");

  return (
    <div className="li-card li-hover-lift">
      {/* Card header */}
      <div className="li-flex li-justify-between li-items-center li-mb-md">
        <div>
          <h3 style={{ marginBottom: 2 }}>Pipeline Activity</h3>
          <p className="li-text-xs li-text-muted">
            Run frequency by pipeline type
          </p>
        </div>
      </div>

      <DashboardTimeFilter value={timePeriod} onChange={setTimePeriod} />

      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <RadarChart
          data={pipelineData}
          margin={{ top: 10, right: 32, bottom: 10, left: 32 }}
        >
          <PolarGrid stroke="rgba(255,255,255,0.07)" />
          <PolarAngleAxis dataKey="pipeline" tick={ANGLE_STYLE} />
          <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
          <Radar
            dataKey="runs"
            stroke="#ff6a33"
            strokeWidth={2}
            fill="#ff4500"
            fillOpacity={0.18}
            dot={{ fill: "#ff6a33", r: 3, strokeWidth: 0 }}
          />
          <Tooltip content={<PipelineTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
