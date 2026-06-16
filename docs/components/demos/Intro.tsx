"use client";

import { Badge, Button } from "pine-design-system";

export function IntroDemo() {
  return (
    <>
      <Button variant="solid" intent="primary">Primary</Button>
      <Button variant="outline" intent="secondary">Secondary</Button>
      <Badge intent="success">Success</Badge>
      <Badge intent="warning" showDot>Warning</Badge>
    </>
  );
}
