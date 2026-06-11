import { Handle, type NodeProps, Position } from "@xyflow/react";
import type { PipelineNode } from "../models/PipelineModels.ts";
import { Md3dRotation } from "react-icons/md";

export default function PipelineNode({
  data,
  selected,
}: NodeProps<PipelineNode>) {
  return (
    <div className={`custom-node ${selected ? "selected" : ""}`}>
      <Handle type="target" position={Position.Left} />

      <div className="node-content li-card-mute">
        <div className="li-flex li-justify-between">
          <div>
            <h3 className="li-job-card-header">{data.label}</h3>
            <p className="li-text-secondary">Sub-text</p>
          </div>
          <Md3dRotation style={{ width: 28, height: 28 }} />
        </div>

        <div className="li-border-b li-mt-md"></div>
        <div className="li-mt-md li-px-sm li-py-sm">
          <ul>
            <li>Agent Pipeline</li>
            <li>Duration: 3m 2s</li>
          </ul>
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
