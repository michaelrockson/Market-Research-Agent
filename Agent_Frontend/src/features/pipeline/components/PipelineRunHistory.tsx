import React from "react";
import { MdArrowForward } from "react-icons/md";
import EmptyDataState from "../../../components/ui/EmptyDataState.tsx";
import { usePipelineBoard } from "../hooks/usePipelineBoard.tsx";

export default function PipelineRunHistory(): React.JSX.Element {
  const { runHistory } = usePipelineBoard();
  return (
    <section className="li-section-sm">
      <div className="li-card">
        <div className="li-flex li-justify-between li-items-center li-mb-md">
          <div>
            <h3 style={{ marginBottom: 2 }}>Recent Runs</h3>
          </div>
          <div className="li-flex li-items-center">
            <a
              href="#"
              className="li-flex li-items-center li-text-sm li-text-secondary"
              style={{ gap: 4, transition: "color 0.2s" }}
              id="history-view-all"
            >
              View all <MdArrowForward size={14} />
            </a>
          </div>
        </div>

        {runHistory.length === 0 ? (
          <EmptyDataState />
        ) : (
          <div className="li-table-container">
            <table className="li-table">
              <thead>
                <tr>
                  <th>Run ID</th>
                  <th>Triggered</th>
                  <th>Duration</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {runHistory.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        maxWidth: 200,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.pipeline}
                    </td>
                    <td>{row.triggered?.toLocaleString() ?? "—"}</td>
                    <td>{row.duration}</td>
                    <td>
                      {row.status ? (
                        <span className="li-badge li-badge-warning">
                          {row.status}
                        </span>
                      ) : (
                        <span className="li-text-muted li-text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
