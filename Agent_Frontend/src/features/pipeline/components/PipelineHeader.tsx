import React from "react";

export default function PipelineHeader(): React.JSX.Element {
  return (
    <div className="li-flex li-justify-between">
      <div className="li-mb-lg">
        <h2 className="li-mb-sm">Agent Pain-point Pipelines</h2>
        <p className="li-text-lg li-text-muted">
          Five-stage agent pipeline for problem gathering and processing
        </p>
      </div>
    </div>
  );
}
