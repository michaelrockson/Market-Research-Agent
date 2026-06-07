import React, { useState } from "react";
import { MdInbox, MdArrowForward } from "react-icons/md";
import type { Record } from "../models/DashboardModels.ts";
import DashboardTimeFilter, {
  type TimePeriod,
} from "./DashboardTimeFilter.tsx";

interface Props {
  record: Record[];
}

function EmptyState() {
  return (
    <div className="li-empty-state">
      <MdInbox className="li-empty-state-icon" />
      <p className="li-empty-state-title">No findings yet</p>
      <p className="li-empty-state-sub">
        Agent records will appear here once the pipelines start running.
      </p>
    </div>
  );
}

function truncate(text: string, max = 72): string {
  return text.length > max ? text.slice(0, max) + "…" : text;
}

export default function DashboardHistoryCard({
  record,
}: Props): React.JSX.Element {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("weekly");

  return (
    <section className="li-section-sm">
      <div className="li-card li-hover-lift">
        {/* Card header */}
        <div className="li-flex li-justify-between li-items-center li-mb-md">
          <div>
            <h3 style={{ marginBottom: 2 }}>Recent Findings</h3>
            <p className="li-text-xs li-text-muted">
              Latest records surfaced by your agents
            </p>
          </div>
          <div className="li-flex li-items-center">
            <DashboardTimeFilter value={timePeriod} onChange={setTimePeriod} />
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

        {record.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="li-table-container">
            <table className="li-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Finding</th>
                  <th>Subreddit</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {record.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        maxWidth: 200,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.title}
                    </td>
                    <td style={{ maxWidth: 320 }} title={row.content}>
                      {truncate(row.content)}
                    </td>
                    <td>
                      {row.subreddit ? (
                        <span className="li-badge-subreddit">
                          {row.subreddit}
                        </span>
                      ) : (
                        <span className="li-text-muted li-text-xs">—</span>
                      )}
                    </td>
                    <td>{row.data}</td>
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
