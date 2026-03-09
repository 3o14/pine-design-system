"use client";

import type { ReactNode } from "react";
import { useState, useCallback } from "react";

type ActiveTab = "preview" | "code";

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="not-prose my-6 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      {code && (
        <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <div className="ml-auto flex items-center gap-1">
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
        </div>
      )}
      {activeTab === "preview" || !code ? (
        <div className="p-6 flex flex-wrap items-center gap-3 bg-white dark:bg-gray-950 min-h-[80px]">
          {children}
        </div>
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
