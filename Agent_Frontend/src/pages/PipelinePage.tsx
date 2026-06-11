import React from "react";
import { AgentPipeline } from "../features/pipeline/index..ts";
import PipelineRunHistory from "../features/pipeline/components/PipelineRunHistory.tsx";

export default function PipelinePage(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-flex li-flex-col li-h-full">
      <AgentPipeline />
      <PipelineRunHistory />
    </section>
  );
}
