"use client";

import { useTheme } from "pine-design-system";

const DESIGNS = ["basic", "game", "crayon"] as const;

export function DesignSelector() {
  const { design, setDesign } = useTheme() ?? {};

  if (!design || !setDesign) return null;

  return (
    <div className="pds-design-selector flex items-center gap-1.5 mr-4">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-0.5">
        Design
      </span>
      {DESIGNS.map((d) => {
        const isSelected = design === d;
        return (
          <button
            key={d}
            type="button"
            data-selected={isSelected ? "true" : undefined}
            onClick={() => setDesign(d)}
            className={`px-2.5 py-1 text-xs font-medium rounded-md border cursor-pointer capitalize transition-colors ${
              isSelected
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
                : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            {d}
          </button>
        );
      })}
    </div>
  );
}
