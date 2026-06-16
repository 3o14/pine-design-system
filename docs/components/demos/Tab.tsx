"use client";

import { Tab } from "pine-design-system";

const tabItems = [
  { value: "one", label: "Overview", content: <p style={{ padding: "16px 0" }}>Overview panel content.</p> },
  { value: "two", label: "Details", content: <p style={{ padding: "16px 0" }}>Details panel content.</p> },
  { value: "three", label: "Settings", content: <p style={{ padding: "16px 0" }}>Settings panel content.</p> },
];

export function TabDemo() {
  return <Tab tabs={tabItems} />;
}

export function TabVerticalDemo() {
  return <Tab tabs={tabItems} orientation="vertical" />;
}
