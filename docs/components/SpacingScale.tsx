"use client";

const SPACING_TOKENS: { token: string; value: string; px: number }[] = [
  { token: "none", value: "0px", px: 0 },
  { token: "xxxs", value: "2px", px: 2 },
  { token: "xxs", value: "4px", px: 4 },
  { token: "xs", value: "8px", px: 8 },
  { token: "sm", value: "12px", px: 12 },
  { token: "md", value: "16px", px: 16 },
  { token: "lg", value: "24px", px: 24 },
  { token: "xl", value: "32px", px: 32 },
  { token: "xxl", value: "40px", px: 40 },
  { token: "xxxl", value: "64px", px: 64 },
];

const MAX_BAR_PX = 200;
const MAX_TOKEN_PX = 64;

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--x-color-border-subtle, #f3f4f6)",
  fontSize: "13px",
  color: "var(--x-color-fg-neutral, #374151)",
};

export function SpacingScale() {
  return (
    <div style={{ margin: "24px 0", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 400 }}>
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
          {SPACING_TOKENS.map(({ token, value, px }) => {
            const barWidth =
              MAX_TOKEN_PX > 0 ? (px / MAX_TOKEN_PX) * MAX_BAR_PX : 0;
            return (
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
                      width: "100%",
                      maxWidth: MAX_BAR_PX,
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: barWidth,
                        height: "12px",
                        backgroundColor:
                          "var(--x-color-bg-primary, #8b5cf6)",
                        borderRadius: "4px",
                        minWidth: px === 0 ? 0 : 4,
                      }}
                    />
                  </div>
                </td>
                <td
                  style={{
                    ...cellStyle,
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  {value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
