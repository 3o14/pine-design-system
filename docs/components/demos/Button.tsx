"use client";

import { Button } from "pine-design-system";

export function ButtonDemo() {
  return (
    <>
      <Button variant="solid" intent="primary">Solid</Button>
      <Button variant="outline" intent="primary">Outline</Button>
      <Button variant="ghost" intent="primary">Ghost</Button>
      <Button variant="weak" intent="primary">Weak</Button>
    </>
  );
}

export function ButtonVariantDemo() {
  return (
    <>
      <Button variant="solid" intent="primary">Solid</Button>
      <Button variant="outline" intent="primary">Outline</Button>
      <Button variant="ghost" intent="primary">Ghost</Button>
      <Button variant="weak" intent="primary">Weak</Button>
    </>
  );
}

export function ButtonSizeDemo() {
  return (
    <>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xlarge">XLarge</Button>
    </>
  );
}

export function ButtonIntentDemo() {
  return (
    <>
      <Button intent="primary">Primary</Button>
      <Button intent="secondary">Secondary</Button>
      <Button intent="success">Success</Button>
      <Button intent="warning">Warning</Button>
      <Button intent="danger">Danger</Button>
      <Button intent="neutral">Neutral</Button>
    </>
  );
}

export function ButtonRoundedDemo() {
  return (
    <>
      <Button rounded="small">Small</Button>
      <Button rounded="medium">Medium</Button>
      <Button rounded="large">Large</Button>
    </>
  );
}

export function ButtonFullWidthDemo() {
  return (
    <div className="max-w-[200px]">
      <Button fullWidth intent="primary">Full width</Button>
    </div>
  );
}

export function ButtonDisabledDemo() {
  return (
    <>
      <Button intent="primary">Enabled</Button>
      <Button intent="primary" disabled>Disabled</Button>
    </>
  );
}
