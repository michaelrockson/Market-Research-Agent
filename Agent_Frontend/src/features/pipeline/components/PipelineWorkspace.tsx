import React from "react";
import { usePipeline } from "../hooks/usePipeline.tsx";
import { Background, ConnectionLineType, ReactFlow } from "@xyflow/react";
import PipelineNode from "./PipelineNode.tsx";

const nodeTypes = {
  custom: PipelineNode,
};

export default function PipelineWorkspace(): React.JSX.Element {
  const { nodes, edges, onNodesChange, onEdgesChange } = usePipeline();

  return (
    <div className="li-pipeline-workspace li-flex-col li-card">
      <div className="li-mb-lg">
        <h3 className="li-mb-sm">Agent Pipelines</h3>
        <p className="li-text-xs li-text-muted">Jobs run by services</p>
      </div>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        connectionLineType={ConnectionLineType.Straight}
        defaultEdgeOptions={{
          style: { stroke: "#808080", strokeWidth: 3 },
          type: "smoothstep",
          animated: true,
        }}
        style={{ width: "100%", height: 360, minHeight: 360 }}
        className="li-text-secondary li-card"
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
