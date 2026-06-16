import React from "react";
import { PipelineBoard, PipelineHeader } from "../features/pipeline/index..ts";
import PipelineRunHistory from "../features/pipeline/components/PipelineRunHistory.tsx";
import PipelineOverviewCards from "../features/pipeline/components/PipelineOverviewCards.tsx";

export default function PipelinePage(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-flex li-flex-col li-gap-lg li-h-full">
      <PipelineHeader />
      <PipelineOverviewCards />
      <PipelineBoard />
      <PipelineRunHistory />
    </section>
  );
}
