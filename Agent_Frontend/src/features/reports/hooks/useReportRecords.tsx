import { useState } from "react";

const mockReportRecords = [
  {
    id: "PP-203",
    painpoint: "No way to pause a subscription without full cancellation",
    run: "#run-0041",
    status: "New",
  },
  {
    id: "PP-202",
    painpoint: "Zapier integrations break silently with no error notifications",
    run: "#run-0041",
    status: "New",
  },
  {
    id: "PP-201",
    painpoint:
      "Onboarding checklist resets every time you log in from a new device",
    run: "#run-0041",
    status: "New",
  },
  {
    id: "PP-200",
    painpoint: "Can't export data to CSV without upgrading to enterprise tier",
    run: "#run-0041",
    status: "Archived",
  },
  {
    id: "PP-199",
    painpoint: "Bulk editing tasks requires too many clicks",
    run: "#run-0040",
    status: "Archived",
  },
  {
    id: "PP-198",
    painpoint: "Search results don't update after changing filters",
    run: "#run-0040",
    status: "Archived",
  },
  {
    id: "PP-197",
    painpoint: "No dark mode support on mobile app",
    run: "#run-0039",
    status: "New",
  },
  {
    id: "PP-196",
    painpoint: "Email notifications arrive hours after the actual event",
    run: "#run-0045",
    status: "New",
  },
];

export function useReportRecords() {
  const [reportRecords] = useState(mockReportRecords);

  return { reportRecords };
}
