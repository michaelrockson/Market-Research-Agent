import React from "react";
import { MdCheckCircle } from "react-icons/md";

export default function PipelineStatusHeader(): React.JSX.Element {
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
      <div className="li-flex-lg">
        <div className="li-input-group">
          <select
            name="stages"
            id="stages"
            defaultValue=""
            className="li-btn li-btn-secondary li-btn-lg li-select"
          >
            <option value="" disabled>
              Select Pipeline
            </option>
            <option value="scout">Scout</option>
            <option value="scrape">Scrape</option>
            <option value="analyze">Analyze</option>
            <option value="process">Process</option>
            <option value="deliver">Deliver</option>
            <option value="all">All Pipelines</option>
          </select>
        </div>

        <button className="li-btn li-btn-lg li-btn-secondary">
          Trigger Run
        </button>
      </div>
    </div>
  );
}
