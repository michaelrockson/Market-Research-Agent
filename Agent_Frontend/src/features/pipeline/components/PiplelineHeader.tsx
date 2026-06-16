import React from "react";
import { MdCheckCircle } from "react-icons/md";

export default function PipelineHeader(): React.JSX.Element {
  return (
    <div className="li-flex li-justify-between">
      <div>
        <div className="li-mb-lg li-flex">
          <div className="li-greeting-icon-wrap li-pipeline-icon--success">
            <MdCheckCircle size={28} />
          </div>
          <div className="li-mb-sm li-flex-col">
            <h2 className="li-greeting-headline">Agent Pipelines</h2>
            <p className="li-greeting-sub">
              Five stage agent processing pipeline
            </p>
          </div>
        </div>
      </div>
      <div>
        <button className="li-btn li-btn-lg li-btn-secondary">
          Run All Pipelines
        </button>
      </div>
    </div>
  );
}
