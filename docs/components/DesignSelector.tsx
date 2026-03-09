"use client";

import { useTheme } from "pine-design-system";

const DESIGNS = ["basic", "game", "crayon"] as const;

export function DesignSelector() {
  const { design, setDesign } = useTheme() ?? {};

  if (!design || !setDesign) return null;

  return (
    <div
      className="pds-design-selector"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginRight: "16px",
      }}
    >
      <span
        style={{
          fontSize: "12px",
          fontWeight: 500,
          color: "#6b7280",
          marginRight: "2px",
        }}
      >
        Design
      </span>
      {DESIGNS.map((d) => {
        const isSelected = design === d;
        return (
          <button
            key={d}
            type="button"
            data-selected={isSelected ? "true" : undefined}
            onClick={() => setDesign(d)}
            style={{
              padding: "4px 10px",
              fontSize: "12px",
              fontWeight: 500,
              borderRadius: "6px",
              border: "1px solid #e5e7eb",
              cursor: "pointer",
              textTransform: "capitalize",
              transition: "background 0.15s, color 0.15s, border-color 0.15s",
              background: isSelected ? "#111827" : "transparent",
              color: isSelected ? "#fff" : "#374151",
              borderColor: isSelected ? "#111827" : "#e5e7eb",
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.currentTarget.style.background = "#f3f4f6";
                e.currentTarget.style.borderColor = "#d1d5db";
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }
            }}
          >
            {d}
          </button>
        );
      })}
    </div>
  );
}
