import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import EmptyDataState from "../../../components/ui/EmptyDataState.tsx";
import { useReportRecords } from "../hooks/useReportRecords.tsx";
import RecordFilter from "../../../components/ui/RecordFilter.tsx";
import type { ReportPeriod } from "../../../components/ui/models/UiModels.ts";

export default function ReportRecords(): React.JSX.Element {
  const { reportRecords } = useReportRecords();
  const [reportPeriod, setReportPeriod] = useState<ReportPeriod>("all");

  return (
    <section className="li-section-sm">
      <div className="li-card">
        <div className="li-flex li-justify-between li-items-center li-mb-md">
          <div>
            <h3 style={{ marginBottom: 2 }}>Report Records</h3>
          </div>
          <div className="li-flex-lg li-items-center">
            <div className="li-flex">
              <span className="li-text-muted li-text-sm li-mt-sm">Sort:</span>
              <RecordFilter value={reportPeriod} onChange={setReportPeriod} />
            </div>
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

        {reportRecords.length === 0 ? (
          <EmptyDataState />
        ) : (
          <div className="li-table-container">
            <table className="li-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Pain Point</th>
                  <th>Run</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {reportRecords.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id ?? "N/A"}</td>
                    <td>{row.painpoint ?? "N/A"}</td>
                    <td>{row.run ?? "N/A"}</td>
                    <td>
                      <span
                        className={`li-badge li-badge-warning status-${row.status.toLowerCase()}`}
                      >
                        {row.status}
                      </span>
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
