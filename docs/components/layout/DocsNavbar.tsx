"use client";

import { Navbar } from "nextra-theme-docs";
import { DesignSelector } from "./DesignSelector";

export function DocsNavbar() {
  return (
    <Navbar
      logo={<strong>Pine Design System</strong>}
      projectLink="https://github.com/3o14/pine-design-system"
    >
      <DesignSelector />
    </Navbar>
  );
}
