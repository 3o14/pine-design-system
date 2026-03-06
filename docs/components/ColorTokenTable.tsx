"use client";

import { useState } from "react";
import { lightColors, darkColors } from "pine-design-system";

type Mode = "light" | "dark";
type Intent = "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
type State = "surface" | "surfaceHover" | "surfaceActive" | "text" | "border" | "weak";

const INTENTS: Intent[] = ["primary", "secondary", "success", "warning", "danger", "neutral"];
const STATES: State[] = ["surface", "surfaceHover", "surfaceActive", "text", "border", "weak"];

const STATE_LABELS: Record<State, string> = {
  surface: "surface",
  surfaceHover: "hover",
  surfaceActive: "active",
  text: "text",
  border: "border",
  weak: "weak",
};

function isLight(hex: string): boolean {
  if (!hex.startsWith("#")) return true;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b > 160;
}

function Swatch({ hex, label }: { hex: string; label: string }) {
  const textColor = isLight(hex) ? "#1f2937" : "#f9fafb";
  const isCssMix = hex.startsWith("color-mix");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        minWidth: "80px",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "6px",
          background: hex,
          border: "1px solid rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "9px",
          color: isCssMix ? "#6b7280" : textColor,
          fontWeight: 500,
        }}
        title={hex}
      >
        {isCssMix ? "~" : ""}
      </div>
      <span
        style={{
          fontSize: "10px",
          color: "var(--x-color-fg-neutral-subtle, #9ca3af)",
          fontFamily: "monospace",
          textAlign: "center",
          maxWidth: "80px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function ColorTokenTable() {
  const [mode, setMode] = useState<Mode>("light");
  const palette = mode === "light" ? lightColors.palette : darkColors.palette;

  const buttonBase: React.CSSProperties = {
    padding: "4px 14px",
    borderRadius: "6px",
    border: "none",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background 0.15s",
  };

  return (
    <div style={{ margin: "24px 0" }}>
      {/* Tab switcher */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginBottom: "16px",
          background: "var(--x-color-bg-neutral, #f3f4f6)",
          borderRadius: "8px",
          padding: "4px",
          width: "fit-content",
        }}
      >
        {(["light", "dark"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            style={{
              ...buttonBase,
              background:
                mode === m
                  ? "var(--x-color-bg-default, #ffffff)"
                  : "transparent",
              color:
                mode === m
                  ? "var(--x-color-fg-neutral, #111827)"
                  : "var(--x-color-fg-neutral-subtle, #6b7280)",
              boxShadow: mode === m ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            }}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "13px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  fontWeight: 600,
                  color: "var(--x-color-fg-neutral, #374151)",
                  borderBottom: "1px solid var(--x-color-border, #e5e7eb)",
                  whiteSpace: "nowrap",
                }}
              >
                Intent
              </th>
              {STATES.map((state) => (
                <th
                  key={state}
                  style={{
                    textAlign: "center",
                    padding: "8px 12px",
                    fontWeight: 600,
                    color: "var(--x-color-fg-neutral, #374151)",
                    borderBottom: "1px solid var(--x-color-border, #e5e7eb)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {STATE_LABELS[state]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {INTENTS.map((intent) => (
              <tr
                key={intent}
                style={{
                  borderBottom: "1px solid var(--x-color-border-subtle, #f3f4f6)",
                }}
              >
                <td
                  style={{
                    padding: "12px",
                    fontWeight: 600,
                    color: "var(--x-color-fg-neutral, #374151)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {intent}
                </td>
                {STATES.map((state) => {
                  const hex = palette[intent][state];
                  return (
                    <td
                      key={state}
                      style={{ padding: "12px", textAlign: "center" }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Swatch hex={hex} label={hex.startsWith("#") ? hex : "mix"} />
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Surface tokens */}
      <h4
        style={{
          marginTop: "32px",
          marginBottom: "12px",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--x-color-fg-neutral, #374151)",
        }}
      >
        Surface
      </h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {Object.entries(
          mode === "light" ? lightColors.surface : darkColors.surface
        ).map(([key, hex]) => (
          <div
            key={key}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                background: hex,
                border: "1px solid rgba(0,0,0,0.1)",
              }}
              title={hex}
            />
            <span
              style={{
                fontSize: "11px",
                color: "var(--x-color-fg-neutral, #374151)",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {key}
            </span>
            <span
              style={{
                fontSize: "10px",
                color: "var(--x-color-fg-neutral-subtle, #9ca3af)",
                fontFamily: "monospace",
              }}
            >
              {typeof hex === "string" && hex.startsWith("#") ? hex : "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
