import React from "react";

export default function PipelineCards({
  data,
  tag,
}: {
  data: string;
  tag: string;
}): React.JSX.Element {
  return (
    <div className="li-card">
      <p className="li-text-sm li-text-secondary li-mb-md">{tag}</p>
      <h3 className="li-h3 li-mb-sm">{data}</h3>
    </div>
  );
}
