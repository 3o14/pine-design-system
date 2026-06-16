"use client";

import { TextField } from "pine-design-system";

export function TextFieldDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
      <TextField label="Name" placeholder="Enter your name" />
      <TextField label="Email" placeholder="you@example.com" helperText="We'll never share your email." />
    </div>
  );
}

export function TextFieldVariantDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
      <TextField label="Outline" variant="outline" placeholder="Outline style" />
      <TextField label="Filled" variant="filled" placeholder="Filled style" />
    </div>
  );
}

export function TextFieldStatusDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
      <TextField label="Default" status="default" placeholder="Default" />
      <TextField label="Error" status="error" helperText="This field is required." placeholder="Error" />
      <TextField label="Success" status="success" helperText="Looks good!" placeholder="Success" defaultValue="john@doe.com" />
    </div>
  );
}

export function TextFieldMultilineDemo() {
  return (
    <div style={{ width: "300px" }}>
      <TextField label="Bio" multiline rows={4} placeholder="Tell us about yourself…" />
    </div>
  );
}
