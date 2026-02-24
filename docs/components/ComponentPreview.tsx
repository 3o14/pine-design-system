"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ThemeProvider } from "pine-design-system";

type Design = "basic" | "game" | "crayon";
type ThemeMode = "light" | "dark";

interface ComponentPreviewProps {
  children: ReactNode;
  /** Initial design. Default: "basic" */
  defaultDesign?: Design;
  /** Initial theme. Default: "light" */
  defaultTheme?: ThemeMode;
}

export function ComponentPreview({
  children,
  defaultDesign = "basic",
  defaultTheme = "light",
}: ComponentPreviewProps) {
  const [design, setDesign] = useState<Design>(defaultDesign);
  const [theme, setTheme] = useState<ThemeMode>(defaultTheme);

  return (
    <div className="not-prose my-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Design:</span>
        {(["basic", "game", "crayon"] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDesign(d)}
            className={
              "rounded px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 " +
              (design === d
                ? "bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700")
            }
          >
            {d}
          </button>
        ))}
        <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">Mode:</span>
        {(["light", "dark"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            className={
              "rounded px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 " +
              (theme === t
                ? "bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700")
            }
          >
            {t}
          </button>
        ))}
      </div>
      <ThemeProvider design={design} theme={theme} syncWithSystem={false}>
        <div className="min-h-[80px] rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 flex flex-wrap items-center gap-3">
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
}
