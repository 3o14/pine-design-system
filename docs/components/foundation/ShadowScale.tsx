"use client";

const SHADOW_TOKENS: { token: string; value: string }[] = [
  { token: "none", value: "none" },
  {
    token: "xs",
    value: "0 1px 2px rgba(15, 23, 42, 0.08)",
  },
  {
    token: "sm",
    value:
      "0 1px 3px rgba(15, 23, 42, 0.12), 0 1px 2px rgba(15, 23, 42, 0.08)",
  },
  {
    token: "md",
    value:
      "0 4px 6px -1px rgba(15, 23, 42, 0.12), 0 2px 4px -2px rgba(15, 23, 42, 0.1)",
  },
  {
    token: "lg",
    value:
      "0 10px 15px -3px rgba(15, 23, 42, 0.18), 0 4px 6px -4px rgba(15, 23, 42, 0.12)",
  },
  {
    token: "xl",
    value:
      "0 20px 25px -5px rgba(15, 23, 42, 0.2), 0 10px 10px -5px rgba(15, 23, 42, 0.12)",
  },
];

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
          {SHADOW_TOKENS.map(({ token, value }) => (
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
