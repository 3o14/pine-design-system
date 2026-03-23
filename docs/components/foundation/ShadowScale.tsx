"use client";

import { shadow } from "pine-design-system";

const entries = Object.entries(shadow);

function truncateCss(value: string, maxLen: number) {
  if (value.length <= maxLen) return value;
  return value.slice(0, maxLen - 3) + "...";
}

const cellClass =
  "py-2.5 px-3 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300";

export function ShadowScale() {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse min-w-[480px]">
        <thead>
          <tr>
            <th className={`${cellClass} text-left font-semibold w-20`}>Token</th>
            <th className={`${cellClass} text-left font-semibold`}>Preview</th>
            <th className={`${cellClass} text-left font-semibold`}>Value</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([token, value]) => (
            <tr key={token}>
              <td className={`${cellClass} font-mono text-xs`}>{token}</td>
              <td className={cellClass}>
                <div
                  className="w-20 h-14 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg"
                  style={{ boxShadow: value }}
                />
              </td>
              <td
                className={`${cellClass} font-mono text-[11px] text-gray-500 dark:text-gray-400 max-w-[320px] overflow-hidden text-ellipsis whitespace-nowrap`}
                title={value}
              >
                {truncateCss(value, 56)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
