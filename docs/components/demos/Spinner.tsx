"use client";

import { Spinner } from "pine-design-system";

const row = { display: "flex", alignItems: "center", gap: "1.5rem" } as const;

export function SpinnerDemo() {
  return <Spinner />;
}

export function SpinnerSizeDemo() {
  return (
    <div style={row}>
      <Spinner size="small" decorative />
      <Spinner size="medium" decorative />
      <Spinner size="large" decorative />
    </div>
  );
}

export function SpinnerIntentDemo() {
  return (
    <div style={row}>
      <Spinner intent="primary" decorative />
      <Spinner intent="secondary" decorative />
      <Spinner intent="success" decorative />
      <Spinner intent="warning" decorative />
      <Spinner intent="danger" decorative />
      <Spinner intent="neutral" decorative />
    </div>
  );
}

export function SpinnerLabelDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Spinner size="small" label="Loading comments" />
      <span aria-hidden="true">Loading comments…</span>
    </div>
  );
}

export function SpinnerDecorativeDemo() {
  return (
    <button
      type="button"
      aria-disabled="true"
      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
    >
      <Spinner size="small" intent="current" decorative />
      Saving…
    </button>
  );
}
