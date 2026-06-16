import { Handle, type NodeProps, Position } from "@xyflow/react";
import type { PipelineNode } from "../models/PipelineModels.ts";
import { MdCheckCircle } from "react-icons/md";
import { GoStack } from "react-icons/go";

export default function PipelineNode({
  data,
  selected,
}: NodeProps<PipelineNode>) {
  return (
    <div className={`custom-node ${selected ? "selected" : ""}`}>
      <Handle type="target" position={Position.Left} />

      <div className="node-content li-card-mute" style={{ width: 320 }}>
        <div className="li-flex li-justify-between">
          <div className="li-flex">
            <GoStack size={40} className="li-stat-trend-neutral" />
            <h2 className="li-h2">{data.label}</h2>
          </div>
        </div>

        <div className="li-flex-col">
          <div className="li-flex-xxl li-justify-between li-mt-md li-px-sm li-py-sm">
            <h3 className="li-text-muted li-h3">Run-Status:</h3>
            <span className="li-text-muted li-text-lg">
              <MdCheckCircle size={36} className="li-stat-trend-up" />
            </span>
          </div>
        </div>

        <button className="li-btn li-btn-secondary li-w-full li-mt-lg li-btn-lg">
          Run Stage
        </button>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
