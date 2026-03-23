"use client";

import type { ReactNode } from "react";

type Align = "left" | "center" | "right";

export interface DocTableProps {
  /** Table headers */
  headers: string[];
  /** Table rows. Each row is an array of cell values (string or ReactNode) */
  rows: (string | ReactNode)[][];
  /** Alignment per column. Default: first column left, rest left. Center recommended for default value column */
  align?: Align[];
}

function renderCell(content: string | ReactNode): ReactNode {
  if (typeof content !== "string") return content;
  // Render strings in `code` format as <code>
  if (content.startsWith("`") && content.endsWith("`") && content.length > 1) {
    return (
      <code className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs font-mono">
        {content.slice(1, -1)}
      </code>
    );
  }
  return content;
}

const alignClass: Record<Align, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function DocTable({ headers, rows, align }: DocTableProps) {
  const defaultAlign: Align[] = headers.map((_, i) => (i === 1 ? "center" : "left"));
  const alignment = align ?? defaultAlign;

  return (
    <div className="not-prose my-4 overflow-x-auto">
      <div className="w-full rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  className={`px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 whitespace-nowrap ${alignClass[alignment[i] ?? "left"]}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-100 dark:border-gray-800 last:border-b-0"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 text-gray-700 dark:text-gray-300 ${alignClass[alignment[cellIndex] ?? "left"]}`}
                  >
                    {renderCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
