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

const agentData = [
  { month: "Jan", runs: 45 },
  { month: "Feb", runs: 60 },
  { month: "March", runs: 72 },
  { month: "April", runs: 14 },
  { month: "May", runs: 35 },
  { month: "June", runs: 92 },
  { month: "July", runs: 140 },
  { month: "August", runs: 45 },
];

export default function DashboardLineChart(): React.JSX.Element {
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
            strokeWidth={3}
            fill="rgb(39 166 68 / 0.42)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
