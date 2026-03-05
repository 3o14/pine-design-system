"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTheme as useDocsTheme } from "nextra-theme-docs";
import { ThemeProvider, Button } from "pine-design-system";

type Design = "basic" | "game" | "crayon";
type ThemeMode = "light" | "dark";

const INSTALL_CMD = "npm install pine-design-system";

const palette = {
  light: {
    bg: "#f9fafb",
    cardBg: "#ffffff",
    border: "#e5e7eb",
    text: "#111827",
    textMuted: "#6b7280",
    textSubtle: "#9ca3af",
    codeBg: "#f3f4f6",
    codeText: "#1f2937",
    label: "#374151",
    featureBg: "#ffffff",
  },
  dark: {
    bg: "#030712",
    cardBg: "#030712",
    border: "#1f2937",
    text: "#f9fafb",
    textMuted: "#9ca3af",
    textSubtle: "#6b7280",
    codeBg: "#111827",
    codeText: "#e5e7eb",
    label: "#d1d5db",
    featureBg: "rgba(17,24,39,0.3)",
  },
};

function ThemeCard({ design, themeMode }: { design: Design; themeMode: ThemeMode }) {
  const c = palette[themeMode];
  const label = design.charAt(0).toUpperCase() + design.slice(1);
  return (
    <ThemeProvider design={design} theme={themeMode} syncWithSystem={false} applyGlobal={false}>
      <div
        style={{
          borderRadius: "12px",
          border: `1px solid ${c.border}`,
          backgroundColor: c.cardBg,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <span style={{ fontSize: "13px", fontWeight: 600, color: c.label, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {label}
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Button variant="solid" intent="primary">Solid</Button>
          <Button variant="outline" intent="primary">Outline</Button>
          <Button variant="ghost" intent="primary">Ghost</Button>
          <Button variant="weak" intent="primary">Weak</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export function LandingPage() {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useDocsTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode: ThemeMode = mounted && resolvedTheme === "dark" ? "dark" : "light";
  const c = palette[themeMode];

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(INSTALL_CMD).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: c.bg, color: c.text }}>
      {/* Header */}
      <header
        style={{
          borderBottom: `1px solid ${c.border}`,
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: c.cardBg,
        }}
      >
        <strong style={{ fontSize: "18px", fontWeight: 600 }}>Pine Design System</strong>
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/get-started" style={{ fontSize: "14px", fontWeight: 500, color: c.textMuted, textDecoration: "none" }}>
            Docs
          </Link>
          <a
            href="https://github.com/3o14/pine-design-system"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "14px", fontWeight: 500, color: c.textMuted, textDecoration: "none" }}
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            maxWidth: "720px",
            marginBottom: "16px",
            lineHeight: 1.15,
            color: c.text,
          }}
        >
          토큰 기반 테마, React UI 컴포넌트
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: c.textMuted,
            maxWidth: "600px",
            marginBottom: "40px",
            lineHeight: 1.7,
          }}
        >
          Pine Design System은 <strong>basic</strong>, <strong>game</strong>,{" "}
          <strong>crayon</strong> 디자인을 하나의 코드베이스로 전환할 수 있는 React UI
          라이브러리입니다. Base UI 기반 접근성과 다크/라이트 모드를 지원합니다.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Link href="/get-started">
            <Button variant="solid" intent="primary" size="large">
              Get Started
            </Button>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              border: `1px solid ${c.border}`,
              backgroundColor: c.codeBg,
              padding: "10px 16px",
              fontFamily: "monospace",
              fontSize: "14px",
              gap: "8px",
            }}
          >
            <span style={{ color: c.textSubtle, userSelect: "none" }}>$</span>
            <span style={{ color: c.codeText }}>{INSTALL_CMD}</span>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                marginLeft: "4px",
                padding: "4px",
                borderRadius: "4px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: c.textMuted,
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Copy command"
            >
              {copied ? (
                <span style={{ fontSize: "12px", fontWeight: 500 }}>Copied!</span>
              ) : (
                <CopyIcon />
              )}
            </button>
          </div>
        </div>
      </main>

      {/* Theme showcase */}
      <section style={{ padding: "64px 24px", borderTop: `1px solid ${c.border}` }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", color: c.text }}>
            Design prop 하나로 바꾸는 테마
          </h2>
          <p style={{ color: c.textMuted, marginBottom: "40px", maxWidth: "600px", lineHeight: 1.6 }}>
            <code
              style={{
                borderRadius: "4px",
                backgroundColor: c.codeBg,
                padding: "2px 6px",
                fontSize: "14px",
              }}
            >
              ThemeProvider
            </code>
            의 <strong>design</strong> prop만 바꿔도 동일한 버튼이 서로 다른 스타일로 렌더링됩니다.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {(["basic", "game", "crayon"] as const).map((design) => (
              <ThemeCard key={design} design={design} themeMode={themeMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section
        style={{
          padding: "64px 24px",
          borderTop: `1px solid ${c.border}`,
          backgroundColor: c.featureBg,
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
          }}
        >
          <div>
            <h3 style={{ fontWeight: 600, fontSize: "18px", marginBottom: "8px", color: c.text }}>토큰 기반 테마</h3>
            <p style={{ fontSize: "14px", color: c.textMuted, lineHeight: 1.6 }}>
              Vanilla Extract 토큰 계약으로 색, 간격, 타이포를 한곳에서 관리하고 테마별로 치환합니다.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: "18px", marginBottom: "8px", color: c.text }}>Base UI 기반</h3>
            <p style={{ fontSize: "14px", color: c.textMuted, lineHeight: 1.6 }}>
              headless 프리미티브로 키보드·스크린 리더 접근성과 동작 일관성을 유지합니다.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: "18px", marginBottom: "8px", color: c.text }}>다크/라이트</h3>
            <p style={{ fontSize: "14px", color: c.textMuted, lineHeight: 1.6 }}>
              theme prop과 시스템 설정 동기화로 모든 디자인에서 라이트/다크 모드를 지원합니다.
            </p>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: `1px solid ${c.border}`,
          padding: "24px",
          textAlign: "center",
          fontSize: "14px",
          color: c.textSubtle,
        }}
      >
        <Link href="/get-started" style={{ color: "inherit" }}>
          Get Started
        </Link>
        {" · "}
        <a
          href="https://github.com/3o14/pine-design-system"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
