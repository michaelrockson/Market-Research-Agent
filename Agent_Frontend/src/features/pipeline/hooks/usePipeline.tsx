import { useCallback, useState } from "react";
import {
  applyEdgeChanges,
  applyNodeChanges,
  type EdgeChange,
  type NodeChange,
} from "@xyflow/react";
import type { PipelineEdge, PipelineNode } from "../models/PipelineModels.ts";

const initialNodes: PipelineNode[] = [
  {
    id: "1",
    type: "custom",
    position: { x: -30, y: 200 },
    data: { label: "Reddit Scraper" },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 280, y: 30 },
    data: { label: "Filter by Keyword" },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 560, y: 280 },
    data: { label: "Sentiment Analyzer" },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 840, y: 30 },
    data: { label: "Pain Point Extractor" },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 1120, y: 260 },
    data: { label: "Duplicate Filter" },
  },
  {
    id: "6",
    type: "custom",
    position: { x: 1450, y: 120 },
    data: { label: "Save to Database" },
  },
];

const initialEdges: PipelineEdge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
];

export function usePipeline() {
  const [nodes, setNodes] = useState<PipelineNode[]>(initialNodes);
  const [edges, setEdges] = useState<PipelineEdge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange<PipelineNode>[]) =>
      setNodes((prev) => applyNodeChanges(changes, prev)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange<PipelineEdge>[]) =>
      setEdges((prev) => applyEdgeChanges(changes, prev)),
    [],
  );

  return { nodes, edges, onNodesChange, onEdgesChange };
}
