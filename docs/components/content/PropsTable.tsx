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
  /** Section title. Defaults to "Props" */
  title?: string;
}

const GRID_COLS =
  "grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)_2.5rem] gap-4";

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

function PropRow({
  prop,
  isLast,
  isExpanded,
  onToggle,
}: {
  prop: PropDefinition;
  isLast: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const hasDetails =
    !!prop.description || (prop.default !== undefined && prop.default !== "");
  const hasDefault =
    prop.default !== undefined && prop.default !== "";

  const rowContent = (
    <>
      <div className="font-mono text-sm text-gray-900 dark:text-gray-100">
        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">
          {prop.name}
          {!prop.required && "?"}
        </code>
      </div>
      <div className="font-mono text-xs text-gray-500 dark:text-gray-400">
        {hasDefault ? (
          <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-[11px] border border-gray-200 dark:border-gray-700">
            {prop.default}
          </code>
        ) : (
          <span className="text-gray-300 dark:text-gray-600">—</span>
        )}
      </div>
      <div className="font-mono text-xs text-gray-500 dark:text-gray-400 break-all">
        {prop.type}
      </div>
      <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
        {hasDetails ? <ChevronDown expanded={isExpanded} /> : <span className="w-4 h-4 inline-block" />}
      </div>
    </>
  );

  return (
    <div
      className={isLast ? "" : "border-b border-gray-200 dark:border-gray-700"}
    >
      <div
        role={hasDetails ? "button" : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        onClick={hasDetails ? onToggle : undefined}
        onKeyDown={
          hasDetails
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onToggle();
                }
              }
            : undefined
        }
        className={`${GRID_COLS} items-center px-4 py-3 transition-colors ${
          hasDetails ? "cursor-pointer" : ""
        } ${isExpanded ? "bg-gray-50 dark:bg-gray-900/50" : ""}`}
      >
        {rowContent}
      </div>

      {hasDetails && isExpanded && (
        <div className="px-4 py-3 pt-3 pb-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {prop.description && (
              <p className={hasDefault ? "mb-2" : "mb-0"}>{prop.description}</p>
            )}
            {hasDefault && (
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
        <div className={`${GRID_COLS} px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider`}>
          <div>Prop</div>
          <div>Default</div>
          <div>Type</div>
          <div />
        </div>

        {propList.map((prop, index) => (
          <PropRow
            key={prop.name}
            prop={prop}
            isLast={index === propList.length - 1}
            isExpanded={expanded[prop.name] ?? false}
            onToggle={() => toggle(prop.name)}
          />
        ))}
      </div>
    </div>
  );
}
