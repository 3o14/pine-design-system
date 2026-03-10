"use client";

import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "pine-design-system";

const DESIGN_STORAGE_KEY = "pine-docs-design";

export function DesignThemeProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [design, setDesign] = useState<"basic" | "game" | "crayon">("basic");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const stored = localStorage.getItem(DESIGN_STORAGE_KEY);
    if (stored === "basic" || stored === "game" || stored === "crayon") {
      setDesign(stored);
    }
  }, [mounted]);

  const theme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  return (
    <ThemeProvider
      design={design}
      theme={theme}
      syncWithSystem={false}
      onDesignChange={(d) => {
        setDesign(d);
        if (typeof window !== "undefined") {
          localStorage.setItem(DESIGN_STORAGE_KEY, d);
        }
      }}
    >
      {children}
    </ThemeProvider>
  );
}
