"use client";

import { Switch } from "pine-design-system";

export function SwitchDemo() {
  return (
    <>
      <Switch defaultChecked />
      <Switch label="With label" defaultChecked />
      <Switch label="Disabled" disabled />
    </>
  );
}

export function SwitchIntentDemo() {
  return (
    <>
      <Switch defaultChecked intent="primary" label="Primary" />
      <Switch defaultChecked intent="success" label="Success" />
      <Switch defaultChecked intent="warning" label="Warning" />
      <Switch defaultChecked intent="danger" label="Danger" />
    </>
  );
}

export function SwitchSizeDemo() {
  return (
    <>
      <Switch size="small" defaultChecked label="Small" />
      <Switch size="medium" defaultChecked label="Medium" />
      <Switch size="large" defaultChecked label="Large" />
      <Switch size="xlarge" defaultChecked label="XLarge" />
    </>
  );
}
