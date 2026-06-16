"use client";

import { Text } from "pine-design-system";

export function TextDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Text as="p" size="display-small" weight="bold">Display Small</Text>
      <Text as="p" size="xlarge" weight="semibold">XLarge Semibold</Text>
      <Text as="p" size="large">Large Regular</Text>
      <Text as="p" size="medium">Medium Regular</Text>
      <Text as="p" size="small">Small Regular</Text>
    </div>
  );
}

export function TextSizeDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Text size="display-large">Display Large</Text>
      <Text size="display-medium">Display Medium</Text>
      <Text size="display-small">Display Small</Text>
      <Text size="xlarge">XLarge</Text>
      <Text size="large">Large</Text>
      <Text size="medium">Medium</Text>
      <Text size="small">Small</Text>
      <Text size="xsmall">XSmall</Text>
    </div>
  );
}

export function TextWeightDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Text weight="regular">Regular — 400</Text>
      <Text weight="medium">Medium — 500</Text>
      <Text weight="semibold">Semibold — 600</Text>
      <Text weight="bold">Bold — 700</Text>
    </div>
  );
}

export function TextIntentDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Text intent="inherit">Inherit</Text>
      <Text intent="primary">Primary</Text>
      <Text intent="success">Success</Text>
      <Text intent="warning">Warning</Text>
      <Text intent="danger">Danger</Text>
      <Text intent="neutral">Neutral</Text>
    </div>
  );
}
