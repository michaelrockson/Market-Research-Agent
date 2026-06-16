import React from "react";
import PipelineCards from "./PipelineCards.tsx";
import { usePipelineAnalytics } from "../hooks/usePipelineAnalytics.tsx";

export default function PipelineOverviewCards(): React.JSX.Element {
  const { analyticsPayload } = usePipelineAnalytics();

  return (
    <section className="li-section-sm li-grid li-grid-4">
      {analyticsPayload.map((data) => (
        <PipelineCards key={data.id} {...data} />
      ))}
    </section>
  );
}
