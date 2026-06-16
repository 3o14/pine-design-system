"use client";

import type { ReactNode } from "react";
import { ThemeProviderWrapper } from "./ThemeProviderWrapper";

export function DocsShell({ children }: { children: ReactNode }) {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
}
