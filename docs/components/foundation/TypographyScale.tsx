"use client";

type FontSizeToken =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "display-small"
  | "display-medium"
  | "display-large";

const ROWS: { token: FontSizeToken; rem: string; px: number; lh: number }[] = [
  { token: "xsmall", rem: "0.75rem", px: 12, lh: 1.4 },
  { token: "small", rem: "0.875rem", px: 14, lh: 1.45 },
  { token: "medium", rem: "1rem", px: 16, lh: 1.5 },
  { token: "large", rem: "1.125rem", px: 18, lh: 1.55 },
  { token: "xlarge", rem: "1.25rem", px: 20, lh: 1.6 },
  { token: "display-small", rem: "1.5rem", px: 24, lh: 1.3 },
  { token: "display-medium", rem: "1.875rem", px: 30, lh: 1.25 },
  { token: "display-large", rem: "2.25rem", px: 36, lh: 1.2 },
];

const SAMPLE = "The quick brown fox jumps over the lazy dog.";

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
          {ROWS.map(({ token, rem, px, lh }) => (
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
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Base: 1rem = 16px</p>
    </div>
  );
}
