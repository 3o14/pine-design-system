"use client";

const RADIUS_TOKENS = [
  { token: "none", value: "0px" },
  { token: "xxs", value: "2px" },
  { token: "xs", value: "4px" },
  { token: "sm", value: "6px" },
  { token: "md", value: "8px" },
  { token: "lg", value: "12px" },
  { token: "xl", value: "16px" },
  { token: "xxl", value: "24px" },
  { token: "xxxl", value: "32px" },
  { token: "full", value: "100%" },
] as const;

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--x-color-border-subtle, #f3f4f6)",
  fontSize: "13px",
  color: "var(--x-color-fg-neutral, #374151)",
};

export function RadiusScale() {
  return (
    <div style={{ margin: "24px 0", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 360 }}>
        <thead>
          <tr>
            <th
              style={{
                ...cellStyle,
                textAlign: "left",
                fontWeight: 600,
                width: "100px",
              }}
            >
              Token
            </th>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 600 }}>
              Preview
            </th>
            <th
              style={{
                ...cellStyle,
                textAlign: "right",
                fontWeight: 600,
                width: "80px",
              }}
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {RADIUS_TOKENS.map(({ token, value }) => (
            <tr key={token}>
              <td style={{ ...cellStyle, fontFamily: "monospace", fontSize: "12px" }}>
                {token}
              </td>
              <td style={cellStyle}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "var(--x-color-bg-neutral, #e5e7eb)",
                    ...(token === "full"
                      ? { borderRadius: "100%" }
                      : { borderTopRightRadius: value }),
                  }}
                />
              </td>
              <td style={{ ...cellStyle, textAlign: "right", fontFamily: "monospace" }}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
