"use client";

import { spacing } from "pine-design-system";

const entries = Object.entries(spacing) as [keyof typeof spacing, string][];

function pxFromSpacingValue(value: string): number {
	const m = value.match(/^([\d.]+)px$/);
	return m ? parseFloat(m[1]) : 0;
}

const MAX_BAR_PX = 200;
const MAX_TOKEN_PX = Math.max(...entries.map(([, v]) => pxFromSpacingValue(v)), 1);

const cellClass =
  "py-2.5 px-3 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300";

export function SpacingScale() {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse min-w-[400px]">
        <thead>
          <tr>
            <th className={`${cellClass} text-left font-semibold w-[100px]`}>Token</th>
            <th className={`${cellClass} text-left font-semibold`}>Preview</th>
            <th className={`${cellClass} text-right font-semibold w-20`}>Value</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([token, value]) => {
            const px = pxFromSpacingValue(value);
            const barWidth = MAX_TOKEN_PX > 0 ? (px / MAX_TOKEN_PX) * MAX_BAR_PX : 0;
            return (
              <tr key={token}>
                <td className={`${cellClass} font-mono text-xs`}>{token}</td>
                <td className={cellClass}>
                  <div className="w-full max-w-[200px] h-6 flex items-center">
                    <div
                      className="h-3 rounded bg-violet-500 dark:bg-violet-400"
                      style={{
                        width: barWidth,
                        minWidth: px === 0 ? 0 : 4,
                      }}
                    />
                  </div>
                </td>
                <td className={`${cellClass} text-right font-mono`}>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
