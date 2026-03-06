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

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--x-color-border-subtle, #f3f4f6)",
  fontSize: "13px",
  color: "var(--x-color-fg-neutral, #374151)",
};

function truncateCss(value: string, maxLen: number) {
  if (value.length <= maxLen) return value;
  return value.slice(0, maxLen - 3) + "...";
}

export function ShadowScale() {
  return (
    <div style={{ margin: "24px 0", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
        <thead>
          <tr>
            <th
              style={{
                ...cellStyle,
                textAlign: "left",
                fontWeight: 600,
                width: "80px",
              }}
            >
              Token
            </th>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 600 }}>
              Preview
            </th>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 600 }}>
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {SHADOW_TOKENS.map(({ token, value }) => (
            <tr key={token}>
              <td
                style={{
                  ...cellStyle,
                  fontFamily: "monospace",
                  fontSize: "12px",
                }}
              >
                {token}
              </td>
              <td style={cellStyle}>
                <div
                  style={{
                    width: "80px",
                    height: "56px",
                    backgroundColor: "var(--x-color-bg-default, #ffffff)",
                    border: "1px solid var(--x-color-border-subtle, #e5e7eb)",
                    borderRadius: "8px",
                    boxShadow: value,
                  }}
                />
              </td>
              <td
                style={{
                  ...cellStyle,
                  fontFamily: "monospace",
                  fontSize: "11px",
                  color: "var(--x-color-fg-neutral-subtle, #6b7280)",
                  maxWidth: "320px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
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
