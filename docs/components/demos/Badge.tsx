"use client";

import { Badge } from "pine-design-system";

export function BadgeDemo() {
  return (
    <>
      <Badge intent="primary">Primary</Badge>
      <Badge intent="success" variant="outline">Success</Badge>
      <Badge intent="warning" showDot>Warning</Badge>
      <Badge intent="danger" variant="subtle">Danger</Badge>
    </>
  );
}

export function BadgeVariantDemo() {
  return (
    <>
      <Badge variant="solid" intent="primary">Solid</Badge>
      <Badge variant="outline" intent="primary">Outline</Badge>
      <Badge variant="subtle" intent="primary">Subtle</Badge>
      <Badge variant="weak" intent="primary">Weak</Badge>
    </>
  );
}

export function BadgeIntentDemo() {
  return (
    <>
      <Badge intent="primary">Primary</Badge>
      <Badge intent="secondary">Secondary</Badge>
      <Badge intent="success">Success</Badge>
      <Badge intent="warning">Warning</Badge>
      <Badge intent="danger">Danger</Badge>
      <Badge intent="neutral">Neutral</Badge>
    </>
  );
}

export function BadgeSizeDemo() {
  return (
    <>
      <Badge size="small" intent="primary">Small</Badge>
      <Badge size="medium" intent="primary">Medium</Badge>
      <Badge size="large" intent="primary">Large</Badge>
      <Badge size="xlarge" intent="primary">XLarge</Badge>
    </>
  );
}

export function BadgeDotDemo() {
  return (
    <>
      <Badge intent="success" showDot>Active</Badge>
      <Badge intent="danger" showDot>Error</Badge>
      <Badge intent="warning" showDot>Pending</Badge>
    </>
  );
}
