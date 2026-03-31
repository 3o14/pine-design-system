"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme as useDocsTheme } from "nextra-theme-docs";
import {
  Button,
  Badge,
  Checkbox,
  Switch,
  TextField,
  Dropdown,
  Tab,
  Text,
  ThemeProvider,
  type Design,
} from "pine-design-system";

type ThemeMode = "light" | "dark";

const DESIGNS: Design[] = ["basic", "game", "crayon"];

const INSTALL_CMD = "npm install pine-design-system";

const SHOWCASE_DROPDOWN_OPTIONS = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

const SHOWCASE_TAB_ITEMS = [
  { value: "one", label: "Overview", content: <p style={{ padding: "12px 0 0", margin: 0, fontSize: "13px" }}>Overview content.</p> },
  { value: "two", label: "Details", content: <p style={{ padding: "12px 0 0", margin: 0, fontSize: "13px" }}>Details content.</p> },
  { value: "three", label: "Settings", content: <p style={{ padding: "12px 0 0", margin: 0, fontSize: "13px" }}>Settings content.</p> },
];

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
  const [showcaseDesign, setShowcaseDesign] = useState<Design>("basic");
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

      {/* Components showcase */}
      <section style={{ padding: "64px 24px", borderTop: `1px solid ${themeColors.borderColor}` }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", color: themeColors.textColor }}>
            Components
          </h2>
          <p style={{ color: themeColors.mutedTextColor, marginBottom: "32px", maxWidth: "600px", lineHeight: 1.6 }}>
            Toggle the design to see every component update instantly — same code, different{" "}
            <code
              style={{
                borderRadius: "4px",
                backgroundColor: themeColors.codeBackgroundColor,
                padding: "2px 6px",
                fontSize: "14px",
              }}
            >
              design
            </code>{" "}
            prop.
          </p>

          {/* Design toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
          <div
            style={{
              display: "inline-flex",
              padding: "4px",
              borderRadius: "10px",
              backgroundColor: themeMode === "dark" ? "#1f2937" : "#f3f4f6",
              gap: "2px",
            }}
          >
            {DESIGNS.map((d) => {
              const isActive = showcaseDesign === d;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => setShowcaseDesign(d)}
                  style={{
                    padding: "6px 20px",
                    borderRadius: "7px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 500,
                    transition: "all 0.15s",
                    backgroundColor: isActive
                      ? themeMode === "dark" ? "#374151" : "#ffffff"
                      : "transparent",
                    color: isActive
                      ? themeColors.textColor
                      : themeColors.mutedTextColor,
                    boxShadow: isActive
                      ? "0 1px 3px rgba(0,0,0,0.12)"
                      : "none",
                  }}
                >
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              );
            })}
          </div>
          </div>

          {/* Component grid */}
          <ThemeProvider
            design={showcaseDesign}
            theme={themeMode}
            syncWithSystem={false}
            applyGlobal={false}
            style={{ background: "transparent" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              <ShowcaseCard title="Button" themeColors={themeColors} themeMode={themeMode}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                  <Button variant="solid" intent="primary">Primary</Button>
                  <Button variant="outline" intent="secondary">Secondary</Button>
                  <Button variant="ghost" intent="neutral">Ghost</Button>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Badge" themeColors={themeColors} themeMode={themeMode}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                  <Badge intent="primary">Primary</Badge>
                  <Badge intent="success" showDot>Active</Badge>
                  <Badge intent="warning" variant="subtle">Warning</Badge>
                  <Badge intent="danger" variant="outline">Danger</Badge>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Checkbox" themeColors={themeColors} themeMode={themeMode}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <Checkbox defaultChecked label="Checked" />
                  <Checkbox label="Unchecked" />
                  <Checkbox defaultChecked intent="success" label="Success" />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Switch" themeColors={themeColors} themeMode={themeMode}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <Switch defaultChecked label="Enabled" />
                  <Switch defaultChecked intent="success" label="Success" />
                  <Switch label="Disabled" disabled />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="TextField" themeColors={themeColors} themeMode={themeMode}>
                <div style={{ width: "100%" }}>
                  <TextField label="Name" placeholder="Enter your name" />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Dropdown" themeColors={themeColors} themeMode={themeMode}>
                <div style={{ width: "100%" }}>
                  <Dropdown options={SHOWCASE_DROPDOWN_OPTIONS} placeholder="Select option" />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Tab" themeColors={themeColors} themeMode={themeMode}>
                <div style={{ width: "100%" }}>
                  <Tab tabs={SHOWCASE_TAB_ITEMS} />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Text" themeColors={themeColors} themeMode={themeMode}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Text as="p" size="large" weight="bold">Large Bold</Text>
                  <Text as="p" size="medium">Medium Regular</Text>
                  <Text as="p" size="small" intent="neutral">Small Neutral</Text>
                </div>
              </ShowcaseCard>
            </div>
          </ThemeProvider>
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

function ShowcaseCard({
  title,
  themeColors,
  themeMode,
  children,
}: {
  title: string;
  themeColors: typeof palette.light;
  themeMode: ThemeMode;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: "10px",
        border: `1px solid ${themeColors.borderColor}`,
        backgroundColor: themeColors.cardBackgroundColor,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "8px 14px",
          borderBottom: `1px solid ${themeColors.borderColor}`,
          backgroundColor: themeMode === "dark" ? "#111827" : "#f9fafb",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: themeColors.subtleTextColor,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ padding: "16px", minHeight: "72px", display: "flex", alignItems: "center" }}>
        {children}
      </div>
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
