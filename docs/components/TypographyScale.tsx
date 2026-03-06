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

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--x-color-border-subtle, #f3f4f6)",
  fontSize: "13px",
  color: "var(--x-color-fg-neutral, #374151)",
};

export function TypographyScale() {
  return (
    <div style={{ margin: "24px 0", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
        <thead>
          <tr>
            <th
              style={{
                ...cellStyle,
                textAlign: "left",
                fontWeight: 600,
                width: "140px",
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
              Size
            </th>
            <th
              style={{
                ...cellStyle,
                textAlign: "right",
                fontWeight: 600,
                width: "50px",
              }}
            >
              px
            </th>
            <th
              style={{
                ...cellStyle,
                textAlign: "right",
                fontWeight: 600,
                width: "70px",
              }}
            >
              Line height
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ token, rem, px, lh }) => (
            <tr key={token}>
              <td style={{ ...cellStyle, fontFamily: "monospace", fontSize: "12px" }}>
                {token}
              </td>
              <td style={cellStyle}>
                <span
                  style={{
                    fontSize: rem,
                    lineHeight: lh,
                    color: "var(--x-color-fg-neutral, #111827)",
                  }}
                >
                  {SAMPLE}
                </span>
              </td>
              <td style={{ ...cellStyle, textAlign: "right", fontFamily: "monospace" }}>
                {rem}
              </td>
              <td style={{ ...cellStyle, textAlign: "right", color: "#6b7280" }}>
                {px}
              </td>
              <td style={{ ...cellStyle, textAlign: "right" }}>
                {lh}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        style={{
          marginTop: "8px",
          fontSize: "12px",
          color: "var(--x-color-fg-neutral-subtle, #9ca3af)",
        }}
      >
        기준 1rem = 16px
      </p>
    </div>
  );
}
