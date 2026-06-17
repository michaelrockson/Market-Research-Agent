import React from "react";
import {
  ModelSettings,
  SettingsHeader,
  SubredditSettings,
} from "../features/settings/index.ts";

export default function SettingsPage(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-flex li-flex-col li-gap-lg li-h-full">
      <SettingsHeader />
      <SubredditSettings />
      <ModelSettings />
    </section>
  );
}
