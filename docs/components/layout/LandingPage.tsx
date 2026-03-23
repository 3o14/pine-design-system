"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme as useDocsTheme } from "nextra-theme-docs";
import { Button, type Design } from "pine-design-system";

type ThemeMode = "light" | "dark";

const DESIGNS: Design[] = ["basic", "game", "crayon"];

const INSTALL_CMD = "npm install pine-design-system";

const palette = {
  light: {
    pageBackgroundColor: "#f9fafb",
    cardBackgroundColor: "#ffffff",
    borderColor: "#e5e7eb",
    textColor: "#111827",
    mutedTextColor: "#6b7280",
    subtleTextColor: "#9ca3af",
    codeBackgroundColor: "#f3f4f6",
    codeTextColor: "#1f2937",
    labelTextColor: "#374151",
    featureSectionBackgroundColor: "#ffffff",
  },
  dark: {
    pageBackgroundColor: "#030712",
    cardBackgroundColor: "#030712",
    borderColor: "#1f2937",
    textColor: "#f9fafb",
    mutedTextColor: "#9ca3af",
    subtleTextColor: "#6b7280",
    codeBackgroundColor: "#111827",
    codeTextColor: "#e5e7eb",
    labelTextColor: "#d1d5db",
    featureSectionBackgroundColor: "rgba(17,24,39,0.3)",
  },
};

export function LandingPage() {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useDocsTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode: ThemeMode = mounted && resolvedTheme === "dark" ? "dark" : "light";
  const themeColors = palette[themeMode];

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(INSTALL_CMD).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: themeColors.pageBackgroundColor,
        color: themeColors.textColor,
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: `1px solid ${themeColors.borderColor}`,
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: themeColors.cardBackgroundColor,
        }}
      >
        <strong style={{ fontSize: "18px", fontWeight: 600 }}>Pine Design System</strong>
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link
            href="/introduction"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: themeColors.mutedTextColor,
              textDecoration: "none",
            }}
          >
            Docs
          </Link>
          <a
            href="https://github.com/3o14/pine-design-system"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: themeColors.mutedTextColor,
              textDecoration: "none",
            }}
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
            color: themeColors.textColor,
          }}
        >
          Token-driven themes, React UI components
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: themeColors.mutedTextColor,
            maxWidth: "600px",
            marginBottom: "40px",
            lineHeight: 1.7,
          }}
        >
          Pine Design System is a React UI library that lets you switch between{" "}
          <strong>basic</strong>, <strong>game</strong>, and <strong>crayon</strong> looks in a
          single codebase. Built on Base UI for accessibility, with light and dark mode support.
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
          <Button
            variant="solid"
            intent="primary"
            size="large"
            onClick={() => router.push("/get-started")}
          >
            Get Started
          </Button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              border: `1px solid ${themeColors.borderColor}`,
              backgroundColor: themeColors.codeBackgroundColor,
              padding: "10px 16px",
              fontFamily: "monospace",
              fontSize: "14px",
              gap: "8px",
            }}
          >
            <span style={{ color: themeColors.subtleTextColor, userSelect: "none" }}>$</span>
            <span style={{ color: themeColors.codeTextColor }}>{INSTALL_CMD}</span>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                marginLeft: "4px",
                padding: "4px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: themeColors.mutedTextColor,
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
      <section style={{ padding: "64px 24px", borderTop: `1px solid ${themeColors.borderColor}` }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", color: themeColors.textColor }}>
            Switch themes with one design prop
          </h2>
          <p style={{ color: themeColors.mutedTextColor, marginBottom: "40px", maxWidth: "600px", lineHeight: 1.6 }}>
            Change only the <strong>design</strong> prop on{" "}
            <code
              style={{
                borderRadius: "4px",
                backgroundColor: themeColors.codeBackgroundColor,
                padding: "2px 6px",
                fontSize: "14px",
              }}
            >
              ThemeProvider
            </code>{" "}
            and the same buttons render with different styles.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {DESIGNS.map((design) => {
              const label = design.charAt(0).toUpperCase() + design.slice(1);
              return (
                <div
                  key={design}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    borderRadius: "12px",
                    border: `1px solid ${themeColors.borderColor}`,
                    backgroundColor: themeColors.cardBackgroundColor,
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: themeColors.labelTextColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      padding: "24px 24px 0",
                    }}
                  >
                    {label}
                  </span>
                  <iframe
                    title={`${label} design preview`}
                    src={`/embed/theme-preview?design=${design}&theme=${themeMode}`}
                    style={{
                      width: "100%",
                      height: 200,
                      border: "none",
                      display: "block",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section
        style={{
          padding: "64px 24px",
          borderTop: `1px solid ${themeColors.borderColor}`,
          backgroundColor: themeColors.featureSectionBackgroundColor,
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
            <h3 style={{ fontWeight: 600, fontSize: "18px", marginBottom: "8px", color: themeColors.textColor }}>
              Token-based theming
            </h3>
            <p style={{ fontSize: "14px", color: themeColors.mutedTextColor, lineHeight: 1.6 }}>
              Vanilla Extract token contracts keep color, spacing, and typography in one place,
              resolved per theme.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: "18px", marginBottom: "8px", color: themeColors.textColor }}>
              Built on Base UI
            </h3>
            <p style={{ fontSize: "14px", color: themeColors.mutedTextColor, lineHeight: 1.6 }}>
              Headless primitives for keyboard and screen reader accessibility with consistent
              behavior.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: "18px", marginBottom: "8px", color: themeColors.textColor }}>
              Light and dark
            </h3>
            <p style={{ fontSize: "14px", color: themeColors.mutedTextColor, lineHeight: 1.6 }}>
              Sync the theme prop with system preferences so every design supports light and dark
              mode.
            </p>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: `1px solid ${themeColors.borderColor}`,
          padding: "24px",
          textAlign: "center",
          fontSize: "14px",
          color: themeColors.subtleTextColor,
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
