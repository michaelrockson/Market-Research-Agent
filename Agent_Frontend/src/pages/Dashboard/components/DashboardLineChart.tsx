import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { AgentPayload } from "../models/DashboardModels.ts";

interface Props {
  agentData: AgentPayload[];
}

export default function DashboardLineChart({
  agentData,
}: Props): React.JSX.Element {
  return (
    <div className="li-card li-hover-lift">
      <div className="li-flex li-justify-between li-mb-md">
        <h3 className="li-mb-md">Agent Activity</h3>
      </div>
      <ResponsiveContainer width="100%" aspect={2.2}>
        <AreaChart data={agentData}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="2"
            stroke="#62666d"
          />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="runs"
            stroke="#27a644"
            strokeWidth={2}
            fill="rgb(39 166 68 / 0.22)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
