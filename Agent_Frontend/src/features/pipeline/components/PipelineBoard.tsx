import React from "react";
import { usePipelineBoard } from "../hooks/usePipelineBoard.tsx";
import { Background, ConnectionLineType, ReactFlow } from "@xyflow/react";
import PipelineNode from "./PipelineNode.tsx";
import PipelineStatusHeader from "./PiplelineStatusHeader.tsx";

const nodeTypes = {
  custom: PipelineNode,
};

export default function PipelineBoard(): React.JSX.Element {
  const { nodes, edges, onNodesChange, onEdgesChange } = usePipelineBoard();

  return (
    <div className="li-pipeline-workspace li-flex-col li-card">
      <PipelineStatusHeader />

      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodesDraggable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        connectionLineType={ConnectionLineType.Straight}
        defaultEdgeOptions={{
          style: { stroke: "#808080", strokeWidth: 4 },
          type: "",
          animated: true,
        }}
        style={{ width: "100%", height: 360, minHeight: 360 }}
        className="li-card"
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
