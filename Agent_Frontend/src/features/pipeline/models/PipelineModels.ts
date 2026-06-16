import type { Edge, Node } from "@xyflow/react";

export type PipelineStageStatus =
  | "idle"
  | "running"
  | "success"
  | "failed"
  | "skipped";

export type PipelineNodeData = {
  label: string;
  description?: string;
  status: PipelineStageStatus;
  step: number;
  startTime?: string;
  processTime?: string;
  totalRunTime?: string;
  outputCount?: number;
};

export type PipelineNode = Node<PipelineNodeData>;
export type PipelineEdge = Edge;

export type PipelineRecord = {
  id: number;
  pipeline: string;
  status?: string;
  duration: string;
};

export interface PipelineRunHistoryCardProps {
  record: PipelineRecord[];
}

export type PipelineAnalyticsPayload = {
  id: number;
  data: string;
  tag: string;
};
