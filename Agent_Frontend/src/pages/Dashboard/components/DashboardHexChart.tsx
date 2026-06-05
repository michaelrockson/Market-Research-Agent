import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const pipelineData: {
  pipeline: string;
  runs: number;
}[] = [
  { pipeline: "Scout", runs: 62 },
  { pipeline: "Ingress", runs: 82 },
  { pipeline: "Sentiment", runs: 62 },
  { pipeline: "Core", runs: 76 },
  { pipeline: "Egress", runs: 15 },
];

export default function DashboardHexChart(): React.JSX.Element {
  return (
    <div className="li-card li-hover-lift">
      <h3 className="li-mb-md">Pipeline Activity</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <RadarChart
          data={pipelineData}
          margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="pipeline" />
          <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
          <Radar
            dataKey="runs"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
