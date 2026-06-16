"use client";

import { Checkbox } from "pine-design-system";

export function CheckboxDemo() {
  return (
    <>
      <Checkbox defaultChecked />
      <Checkbox label="With label" />
      <Checkbox label="Disabled" disabled />
    </>
  );
}

export function CheckboxIntentDemo() {
  return (
    <>
      <Checkbox defaultChecked intent="primary" label="Primary" />
      <Checkbox defaultChecked intent="success" label="Success" />
      <Checkbox defaultChecked intent="warning" label="Warning" />
      <Checkbox defaultChecked intent="danger" label="Danger" />
    </>
  );
}

export function CheckboxSizeDemo() {
  return (
    <>
      <Checkbox size="small" defaultChecked label="Small" />
      <Checkbox size="medium" defaultChecked label="Medium" />
      <Checkbox size="large" defaultChecked label="Large" />
      <Checkbox size="xlarge" defaultChecked label="XLarge" />
    </>
  );
}
