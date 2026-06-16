import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import type {
  DashboardHistoryCardProps,
  TimePeriod,
} from "../models/DashboardModels.ts";
import { truncate } from "../utils/truncate.ts";
import EmptyDataState from "../../../components/ui/EmptyDataState.tsx";
import TimeFilter from "../../../components/ui/TimeFilter.tsx";

export default function DashboardRecentsCard({
  record,
}: DashboardHistoryCardProps): React.JSX.Element {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("weekly");

  return (
    <section className="li-section-sm">
      <div className="li-card">
        <div className="li-flex li-justify-between li-items-center li-mb-md">
          <div>
            <h3 style={{ marginBottom: 2 }}>Recent Findings</h3>
            <p className="li-text-xs li-text-muted">
              Latest records surfaced by your agents
            </p>
          </div>
          <div className="li-flex li-items-center">
            <TimeFilter value={timePeriod} onChange={setTimePeriod} />
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
          <EmptyDataState />
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
                        <span className="li-badge li-badge-warning">
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
