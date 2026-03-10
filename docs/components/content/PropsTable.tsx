"use client";

import { useState } from "react";

export interface PropDefinition {
  name: string;
  type: string;
  description?: string;
  default?: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
  /** 섹션 제목. 기본 "Props" */
  title?: string;
}

function ChevronDown({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PropsTable({ props: propList, title = "Props" }: PropsTableProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="not-prose mt-8 mb-10">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h3>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        {/* Header row */}
        <div className="grid grid-cols-[1fr_1fr_auto] gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          <div>Prop</div>
          <div>Type</div>
          <div className="w-6" />
        </div>

        {/* Prop rows */}
        {propList.map((prop, index) => {
          const hasDetails = prop.description || (prop.default !== undefined && prop.default !== "");
          const isExpanded = expanded[prop.name] ?? false;

          return (
            <div
              key={prop.name}
              className={
                index < propList.length - 1
                  ? "border-b border-gray-200 dark:border-gray-700"
                  : ""
              }
            >
              <div
                role={hasDetails ? "button" : undefined}
                tabIndex={hasDetails ? 0 : undefined}
                onClick={hasDetails ? () => toggle(prop.name) : undefined}
                onKeyDown={
                  hasDetails
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggle(prop.name);
                        }
                      }
                    : undefined
                }
                className={`grid grid-cols-[1fr_1fr_auto] gap-4 items-center px-4 py-3 transition-colors ${
                  hasDetails ? "cursor-pointer" : ""
                } ${isExpanded ? "bg-gray-50 dark:bg-gray-900/50" : ""}`}
              >
                <div className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">
                    {prop.name}
                    {!prop.required && "?"}
                  </code>
                </div>
                <div className="font-mono text-xs text-gray-500 dark:text-gray-400 break-all">
                  {prop.type}
                </div>
                <div className="w-6 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  {hasDetails ? (
                    <ChevronDown expanded={isExpanded} />
                  ) : (
                    <span className="w-4 h-4 inline-block" />
                  )}
                </div>
              </div>

              {/* Expanded details */}
              {hasDetails && isExpanded && (
                <div className="px-4 py-3 pt-3 pb-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                  <div className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {prop.description && (
                      <p
                        className={
                          prop.default !== undefined && prop.default !== ""
                            ? "mb-2"
                            : "mb-0"
                        }
                      >
                        {prop.description}
                      </p>
                    )}
                    {prop.default !== undefined && prop.default !== "" && (
                      <div className="text-xs">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          Default:{" "}
                        </span>
                        <code className="bg-white dark:bg-gray-950 px-1.5 py-0.5 rounded text-[11px] border border-gray-200 dark:border-gray-700">
                          {prop.default}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
