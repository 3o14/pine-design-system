"use client";

import {
  BASIC_SEMANTIC_TEXT_SIZE_ORDER,
  basicThemeSemanticTextStyles,
} from "pine-design-system";

const SAMPLE = "The quick brown fox jumps over the lazy dog.";

function remToPx(rem: string): number {
  const m = rem.match(/^([\d.]+)rem$/);
  return m ? parseFloat(m[1]) * 16 : 0;
}

const cellClass =
  "py-2.5 px-3 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300";

export function TypographyScale() {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse min-w-[520px]">
        <thead>
          <tr>
            <th className={`${cellClass} text-left font-semibold w-[140px]`}>Token</th>
            <th className={`${cellClass} text-left font-semibold`}>Preview</th>
            <th className={`${cellClass} text-right font-semibold w-20`}>Size</th>
            <th className={`${cellClass} text-right font-semibold w-[50px]`}>px</th>
            <th className={`${cellClass} text-right font-semibold w-[70px]`}>Line height</th>
          </tr>
        </thead>
        <tbody>
          {BASIC_SEMANTIC_TEXT_SIZE_ORDER.map((token) => {
            const rem = basicThemeSemanticTextStyles.fontSize[token];
            const lhStr = basicThemeSemanticTextStyles.lineHeight[token];
            const lh = parseFloat(lhStr);
            const px = remToPx(rem);
            return (
              <tr key={token}>
                <td className={`${cellClass} font-mono text-xs`}>{token}</td>
                <td className={cellClass}>
                  <span
                    className="text-gray-900 dark:text-gray-100"
                    style={{ fontSize: rem, lineHeight: lh }}
                  >
                    {SAMPLE}
                  </span>
                </td>
                <td className={`${cellClass} text-right font-mono`}>{rem}</td>
                <td className={`${cellClass} text-right text-gray-500 dark:text-gray-400`}>
                  {px}
                </td>
                <td className={`${cellClass} text-right`}>{lh}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Base: 1rem = 16px</p>
    </div>
  );
}
