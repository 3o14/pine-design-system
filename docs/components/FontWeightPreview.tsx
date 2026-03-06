"use client";

const WEIGHTS: { token: string; value: number }[] = [
  { token: "regular", value: 400 },
  { token: "medium", value: 500 },
  { token: "semibold", value: 600 },
  { token: "bold", value: 700 },
];

const SAMPLE = "The quick brown fox jumps over the lazy dog.";

export function FontWeightPreview() {
  return (
    <div style={{ margin: "24px 0" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 400 }}>
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid var(--x-color-border, #e5e7eb)",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "var(--x-color-fg-neutral, #374151)",
                  width: "100px",
                }}
              >
                Token
              </th>
              <th
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid var(--x-color-border, #e5e7eb)",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "var(--x-color-fg-neutral, #374151)",
                  width: "60px",
                }}
              >
                Value
              </th>
              <th
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid var(--x-color-border, #e5e7eb)",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "var(--x-color-fg-neutral, #374151)",
                }}
              >
                Preview
              </th>
            </tr>
          </thead>
          <tbody>
            {WEIGHTS.map(({ token, value }) => (
              <tr key={token}>
                <td
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid var(--x-color-border-subtle, #f3f4f6)",
                    fontFamily: "monospace",
                    fontSize: "13px",
                    color: "var(--x-color-fg-neutral, #374151)",
                  }}
                >
                  {token}
                </td>
                <td
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid var(--x-color-border-subtle, #f3f4f6)",
                    fontSize: "13px",
                    color: "var(--x-color-fg-neutral-subtle, #6b7280)",
                  }}
                >
                  {value}
                </td>
                <td
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid var(--x-color-border-subtle, #f3f4f6)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: value,
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      color: "var(--x-color-fg-neutral, #111827)",
                    }}
                  >
                    {SAMPLE}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
