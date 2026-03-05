"use client";

import type { ReactNode } from "react";
import { useState, useEffect, useCallback } from "react";
import { useTheme as useDocsTheme } from "nextra-theme-docs";
import { ThemeProvider } from "pine-design-system";

type Design = "basic" | "game" | "crayon";
type ThemeMode = "light" | "dark";
type ActiveTab = "preview" | "code";

interface ComponentPreviewProps {
  children: ReactNode;
  defaultDesign?: Design;
  code?: string;
}

export function ComponentPreview({
  children,
  defaultDesign = "basic",
  code,
}: ComponentPreviewProps) {
  const [design, setDesign] = useState<Design>(defaultDesign);
  const [activeTab, setActiveTab] = useState<ActiveTab>("preview");
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useDocsTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme: ThemeMode =
    mounted && resolvedTheme === "dark" ? "dark" : "light";

  const handleCopy = useCallback(() => {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="not-prose my-6 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <span className="text-xs font-medium text-gray-400 dark:text-gray-500 mr-1">
          Design
        </span>
        {(["basic", "game", "crayon"] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDesign(d)}
            className={
              "rounded px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none " +
              (design === d
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                : "text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white")
            }
          >
            {d}
          </button>
        ))}
        {code && (
          <div className="ml-auto flex items-center gap-1 border-l border-gray-200 dark:border-gray-700 pl-3">
            {(["preview", "code"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={
                  "rounded px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none capitalize " +
                  (activeTab === tab
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white")
                }
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>
      {activeTab === "preview" || !code ? (
        <ThemeProvider design={design} theme={currentTheme} syncWithSystem={false}>
          <div className="p-6 flex flex-wrap items-center gap-3 bg-white dark:bg-gray-950 min-h-[80px]">
            {children}
          </div>
        </ThemeProvider>
      ) : (
        <div className="relative bg-gray-950">
          <button
            type="button"
            onClick={handleCopy}
            className="absolute top-3 right-3 z-10 rounded px-2.5 py-1 text-xs font-medium text-gray-400 hover:text-white hover:bg-gray-700 transition-colors focus:outline-none"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre className="overflow-x-auto p-5 pr-20 text-sm text-gray-100 font-mono leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
