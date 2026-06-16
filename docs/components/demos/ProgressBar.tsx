"use client";

import { ProgressBar } from "pine-design-system";

export function ProgressBarDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
      <ProgressBar value={72} label="Uploading" showValue />
      <ProgressBar value={null} label="Loading…" />
    </div>
  );
}

export function ProgressBarSizeDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
      <ProgressBar size="small" value={60} label="Small" />
      <ProgressBar size="medium" value={60} label="Medium" />
      <ProgressBar size="large" value={60} label="Large" />
    </div>
  );
}

export function ProgressBarIntentDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
      <ProgressBar intent="primary" value={60} label="Primary" showValue />
      <ProgressBar intent="secondary" value={60} label="Secondary" showValue />
      <ProgressBar intent="success" value={100} label="Success" showValue />
      <ProgressBar intent="warning" value={80} label="Warning" showValue />
      <ProgressBar intent="danger" value={30} label="Danger" showValue />
      <ProgressBar intent="neutral" value={50} label="Neutral" showValue />
    </div>
  );
}

export function ProgressBarIndeterminateDemo() {
  return (
    <div style={{ width: "100%" }}>
      <ProgressBar value={null} label="Loading…" />
    </div>
  );
}

export function ProgressBarFormatDemo() {
  return (
    <div style={{ width: "100%" }}>
      <ProgressBar
        value={2}
        max={5}
        label="Setup steps"
        showValue
        formatValue={(v) => `${v} / 5 steps`}
      />
    </div>
  );
}
