"use client";

const FAMILIES: { theme: string; name: string; stack: string }[] = [
  {
    theme: "basic",
    name: "sans (Inter)",
    stack:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  {
    theme: "basic",
    name: "mono (Roboto Mono)",
    stack:
      "'Roboto Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
  },
  {
    theme: "game",
    name: "pixel (DungGeunMo)",
    stack: "'DungGeunMo', system-ui, -apple-system, sans-serif",
  },
  {
    theme: "crayon",
    name: "crayon (온글잎-승훈체)",
    stack: "'온글잎-승훈체', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
];

const SAMPLE = "안녕하세요 Hello 123";

const cardStyle: React.CSSProperties = {
  padding: "16px 20px",
  borderRadius: "8px",
  border: "1px solid var(--x-color-border, #e5e7eb)",
  background: "var(--x-color-bg-default, #ffffff)",
};

export function FontFamilyPreview() {
  return (
    <div style={{ margin: "24px 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {FAMILIES.map(({ theme, name, stack }) => (
          <div key={name} style={cardStyle}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--x-color-fg-neutral-subtle, #6b7280)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "8px",
              }}
            >
              {theme}
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--x-color-fg-neutral, #374151)",
                marginBottom: "12px",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontFamily: stack,
                fontSize: "1.25rem",
                lineHeight: 1.5,
                color: "var(--x-color-fg-neutral, #111827)",
                marginBottom: "12px",
              }}
            >
              {SAMPLE}
            </div>
            <code
              style={{
                display: "block",
                fontSize: "11px",
                color: "var(--x-color-fg-neutral-subtle, #9ca3af)",
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
              }}
            >
              {stack}
            </code>
          </div>
        ))}
      </div>
      <p
        style={{
          marginTop: "12px",
          fontSize: "12px",
          color: "var(--x-color-fg-neutral-subtle, #9ca3af)",
        }}
      >
        game·crayon 테마는 웹폰트(DungGeunMo, 온글잎-승훈체) 로드 시 해당 글꼴로 표시됩니다.
      </p>
    </div>
  );
}
