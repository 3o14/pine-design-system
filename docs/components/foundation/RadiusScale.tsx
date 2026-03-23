"use client";

import { radius } from "pine-design-system";

const entries = Object.entries(radius);

const cellClass =
  "py-2.5 px-3 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300";

export function RadiusScale() {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse min-w-[360px]">
        <thead>
          <tr>
            <th className={`${cellClass} text-left font-semibold w-[100px]`}>Token</th>
            <th className={`${cellClass} text-left font-semibold`}>Preview</th>
            <th className={`${cellClass} text-right font-semibold w-20`}>Value</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([token, value]) => (
            <tr key={token}>
              <td className={`${cellClass} font-mono text-xs`}>{token}</td>
              <td className={cellClass}>
                <div
                  className="w-16 h-16 bg-gray-200 dark:bg-gray-700"
                  style={{ borderRadius: value }}
                />
              </td>
              <td className={`${cellClass} text-right font-mono`}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
