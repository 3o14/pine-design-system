"use client";

import { Spinner } from "pine-design-system";

const row = { display: "flex", alignItems: "center", gap: "1.5rem" } as const;

export function SpinnerDemo() {
  return <Spinner />;
}

export function SpinnerSizeDemo() {
  return (
    <div style={row}>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  );
}

export function SpinnerIntentDemo() {
  return (
    <div style={row}>
      <Spinner intent="primary" />
      <Spinner intent="secondary" />
      <Spinner intent="success" />
      <Spinner intent="warning" />
      <Spinner intent="danger" />
      <Spinner intent="neutral" />
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
