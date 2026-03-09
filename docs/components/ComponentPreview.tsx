"use client";

import type { ReactNode, CSSProperties } from "react";
import { useState, useCallback } from "react";
import { Highlight, themes } from "prism-react-renderer";

type ActiveTab = "preview" | "code";

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
  /** 미리보기 영역 정렬. 기본 center */
  align?: "center" | "start";
  /** 미리보기 영역 최소 높이 */
  minHeight?: number;
}

const BORDER_COLOR = "var(--x-color-border, #e5e7eb)";
const BG = "var(--x-color-bg-default, #ffffff)";
const FG = "var(--x-color-fg-neutral, #111827)";
const FG_MUTED = "var(--x-color-fg-neutral-subtle, #6b7280)";

export function ComponentPreview({
  children,
  code,
  align = "center",
  minHeight = 120,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const containerStyle: CSSProperties = {
    border: `1px solid ${BORDER_COLOR}`,
    borderRadius: "12px",
    overflow: "hidden",
    margin: "20px 0",
  };

  const headerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${BORDER_COLOR}`,
    padding: "0 20px",
    background: BG,
  };

  const tabStyle = (isActive: boolean): CSSProperties => ({
    padding: "11px 2px",
    marginRight: "20px",
    marginBottom: "-1px",
    fontSize: "14px",
    fontWeight: isActive ? 600 : 400,
    color: isActive ? FG : FG_MUTED,
    background: "none",
    border: "none",
    borderBottom: isActive ? `2px solid ${FG}` : "2px solid transparent",
    cursor: "pointer",
    transition: "color 0.15s, border-color 0.15s",
  });

  const copyButtonStyle: CSSProperties = {
    marginLeft: "auto",
    padding: "4px 10px",
    fontSize: "12px",
    fontWeight: 500,
    borderRadius: "6px",
    border: `1px solid ${BORDER_COLOR}`,
    background: "transparent",
    cursor: "pointer",
    color: FG_MUTED,
    transition: "color 0.15s",
  };

  const previewStyle: CSSProperties = {
    padding: "32px 24px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: align === "center" ? "center" : "flex-start",
    gap: "12px",
    minHeight,
    background: BG,
  };

  return (
    <div className="not-prose" style={containerStyle}>
      {/* Tab header */}
      <div style={headerStyle}>
        <button
          type="button"
          onClick={() => setActiveTab("preview")}
          style={tabStyle(activeTab === "preview")}
        >
          미리보기
        </button>
        {code && (
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            style={tabStyle(activeTab === "code")}
          >
            코드
          </button>
        )}
        {activeTab === "code" && code && (
          <button type="button" onClick={handleCopy} style={copyButtonStyle}>
            {copied ? "복사됨" : "복사"}
          </button>
        )}
      </div>

      {/* Preview panel */}
      {(activeTab === "preview" || !code) && (
        <div style={previewStyle}>{children}</div>
      )}

      {/* Code panel - GitHub light theme 배경 (#f6f8fa) */}
      {activeTab === "code" && code && (
        <div
          style={{
            background: themes.github.plain.background ?? "#f6f8fa",
          }}
        >
          <Highlight theme={themes.github} code={code.trim()} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className}
                style={{
                  ...style,
                  overflowX: "auto",
                  padding: "20px 24px",
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.65,
                  fontFamily:
                    "'Roboto Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, monospace",
                }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      )}
    </div>
  );
}
