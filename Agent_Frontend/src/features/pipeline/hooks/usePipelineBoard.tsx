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
    position: { x: 0, y: 200 },
    data: {
      label: "Scout",
      description: "Discovers trending subreddits and targets",
      status: "success",
      step: 1,
      startTime: "09:01:04",
      processTime: "1m 12s",
      totalRunTime: "1m 12s",
      outputCount: 48,
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 400, y: 50 },
    data: {
      label: "Scrape",
      description: "Pulls posts and comments from targets",
      status: "success",
      step: 2,
      startTime: "09:02:16",
      processTime: "2m 08s",
      totalRunTime: "3m 20s",
      outputCount: 1284,
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 800, y: 300 },
    data: {
      label: "Analyze",
      description: "Runs sentiment & topic classification",
      status: "running",
      step: 3,
      startTime: "09:04:24",
      processTime: "—",
      totalRunTime: "—",
      outputCount: undefined,
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 1200, y: 50 },
    data: {
      label: "Process",
      description: "Aggregates and enriches analysis data",
      status: "idle",
      step: 4,
      startTime: "—",
      processTime: "—",
      totalRunTime: "—",
      outputCount: undefined,
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 1600, y: 300 },
    data: {
      label: "Deliver",
      description: "Exports results to downstream consumers",
      status: "idle",
      step: 5,
      startTime: "—",
      processTime: "—",
      totalRunTime: "—",
      outputCount: undefined,
    },
  },
];

const initialEdges: PipelineEdge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
];

const mockPipelineRunHistory = [
  {
    id: 1,
    pipeline: "run-001",
    status: "Success",
    duration: "2m 34s",
    triggered: "2 weeks ago",
  },
  {
    id: 2,
    pipeline: "run-002",
    status: "Success",
    duration: "1m 15s",
    triggered: "12 days ago",
  },
  {
    id: 3,
    pipeline: "run-003",
    status: "Success",
    duration: "15m 32s",
    triggered: "16 weeks ago",
  },
  {
    id: 4,
    pipeline: "run-004",
    status: "Success",
    duration: "3m 12s",
    triggered: "24 weeks ago",
  },
  {
    id: 5,
    pipeline: "run-005",
    status: "Running",
    duration: "1m 8s",
    triggered: "32 weeks ago",
  },
];

export function usePipelineBoard() {
  const [nodes, setNodes] = useState<PipelineNode[]>(initialNodes);
  const [edges, setEdges] = useState<PipelineEdge[]>(initialEdges);
  const [runHistory] = useState(mockPipelineRunHistory);

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

  return { nodes, edges, onNodesChange, onEdgesChange, runHistory };
}
