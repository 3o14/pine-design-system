"use client";

import { Dropdown } from "pine-design-system";

const dropdownOptions = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

export function DropdownDemo() {
  return (
    <Dropdown options={dropdownOptions} placeholder="Select an option" />
  );
}

export function DropdownSizeDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "200px" }}>
      <Dropdown options={dropdownOptions} size="small" placeholder="Small" />
      <Dropdown options={dropdownOptions} size="medium" placeholder="Medium" />
      <Dropdown options={dropdownOptions} size="large" placeholder="Large" />
    </div>
  );
}
