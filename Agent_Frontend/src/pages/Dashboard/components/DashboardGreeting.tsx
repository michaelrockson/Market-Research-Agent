import React from "react";
import type { GreetingProps } from "../models/DashboardModels.ts";
import { useDashboardGreeting } from "../hooks/useDashboardGreeting.tsx";

export default function DashboardGreeting({
  username,
}: GreetingProps): React.JSX.Element {
  const { greetingMessage, greetingIcon } = useDashboardGreeting();

  const firstName = username.split(" ")[0];

  return (
    <div className="li-greeting">
      <div className="li-greeting-icon-wrap">{greetingIcon}</div>
      <div>
        <h2 className="li-greeting-headline">
          {greetingMessage},{" "}
          <span className="li-greeting-name">{firstName}</span>
          <span className="li-greeting-wave">👋</span>
        </h2>
        <p className="li-greeting-sub">
          Here's what's happening with your agents and pipelines today.
        </p>
      </div>
    </div>
  );
}
