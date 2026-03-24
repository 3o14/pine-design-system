"use client";

import type { ReactNode } from "react";
import { useState, useCallback } from "react";
import { Highlight, themes } from "prism-react-renderer";

type ActiveTab = "preview" | "code";

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
  /** Preview area alignment. Defaults to center */
  align?: "center" | "start";
  /** Minimum height of the preview area */
  minHeight?: number;
}

export function ComponentPreview({
  children,
  code,
  align = "center",
  minHeight = 120,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const tabBase =
    "px-0.5 pb-0.5 mr-5 -mb-px text-sm border-b-2 border-transparent cursor-pointer transition-colors";
  const tabActive = "font-semibold text-gray-900 dark:text-gray-100 border-gray-900 dark:border-gray-100";
  const tabInactive = "font-normal text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300";

  return (
    <div className="not-prose my-5 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Tab header */}
      <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-5 py-3 bg-white dark:bg-gray-950">
        <button
          type="button"
          onClick={() => setActiveTab("preview")}
          className={`${tabBase} ${activeTab === "preview" ? tabActive : tabInactive}`}
        >
          Preview
        </button>
        {code && (
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={`${tabBase} ${activeTab === "code" ? tabActive : tabInactive}`}
          >
            Code
          </button>
        )}
        {code && activeTab === "code" && (
          <button
            type="button"
            onClick={handleCopy}
            className="ml-auto px-2.5 py-1 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>

      {/* Preview panel */}
      {(activeTab === "preview" || !code) && (
        <div
          className={`flex flex-wrap items-end gap-3 p-8 bg-white dark:bg-gray-950 ${
            align === "center" ? "justify-center" : "justify-start"
          } [&>*]:inline-flex [&>*]:items-center`}
          style={{ minHeight }}
        >
          {children}
        </div>
      )}

      {/* Code panel */}
      {activeTab === "code" && code && (
        <div className="!bg-white">
          <Highlight theme={themes.github} code={code.trim()} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className} overflow-x-auto py-5 px-6 m-0 text-[13px] leading-relaxed font-mono !bg-white`}
                style={{ ...style, background: "#ffffff" }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      )}
    </div>
  );
}
