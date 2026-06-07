import React, { useEffect, useState } from "react";
import { MdNotificationsNone, MdSearch } from "react-icons/md";

function useLiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  return now;
}

function formatTimestamp(date: Date): string {
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

interface Props {
  pageTitle?: string;
  notificationCount?: number;
}

export default function HeaderBar({
  pageTitle = "Dashboard",
  notificationCount = 0,
}: Props): React.JSX.Element {
  const now = useLiveClock();

  return (
    <header className="li-border-b li-navbar">
      <div className="li-container">
        <div className="li-nav li-justify-between">
          <div className="li-flex li-flex-col li-flex-no-gap">
            <nav className="li-header-breadcrumb">
              <h3 className="li-text-muted li-text-h3">{pageTitle}</h3>
            </nav>
          </div>

          <div className="li-flex li-items-center">
            <span className="li-header-timestamp">{formatTimestamp(now)}</span>

            <div className="li-header-search-wrap">
              <MdSearch className="li-header-search-icon" size={16} />
              <input
                className="li-input li-header-search"
                type="text"
                placeholder="Search findings..."
                id="header-search"
              />
            </div>

            <button
              className="li-header-bell"
              aria-label="Notifications"
              id="header-notifications"
            >
              <MdNotificationsNone size={20} />
              {notificationCount > 0 && (
                <span className="li-header-bell-badge">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
