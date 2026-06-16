"use client";

import { Fragment, type ReactNode } from "react";
import { useEffect, useState } from "react";
import { useTheme as useDocsTheme } from "nextra-theme-docs";
import { Text, ThemeProvider } from "pine-design-system";
import releases from "../../content/changelog.json";

type SemverType = "major" | "minor" | "patch";

interface ChangelogEntry {
  hash: string;
  summary: string;
  body?: string;
}
interface ChangelogSection {
  type: SemverType;
  entries: ChangelogEntry[];
}
interface ChangelogRelease {
  version: string;
  sections: ChangelogSection[];
}

const data = releases as ChangelogRelease[];

/** Render inline `**bold**` and `` `code` `` spans inside a line of text. */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-gray-900 dark:text-gray-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={key}
          className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.85em] font-mono text-gray-800 dark:bg-gray-800 dark:text-gray-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={key}>{part}</Fragment>;
  });
}

/** Lightweight renderer for the changeset body markdown (headings, bullets, paragraphs). */
function renderBody(body: string, keyPrefix: string): ReactNode {
  const lines = body.split("\n");
  const blocks: ReactNode[] = [];
  let list: { indent: number; content: string }[] = [];

  const flushList = () => {
    if (list.length === 0) return;
    const items = list;
    list = [];
    blocks.push(
      <ul key={`${keyPrefix}-ul-${blocks.length}`} className="my-1 space-y-1">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"
            style={{ marginLeft: item.indent > 0 ? item.indent * 16 : 0, listStyleType: "disc", listStylePosition: "inside" }}
          >
            {renderInline(item.content, `${keyPrefix}-li-${i}`)}
          </li>
        ))}
      </ul>
    );
  };

  lines.forEach((raw, i) => {
    // Section labels: "## New Components" or a full-line bold "**Other Changes:**".
    const heading = /^#+\s+(.*)$/.exec(raw);
    const boldLabel = /^\*\*(.+?)\*\*:?\s*$/.exec(raw);
    const label = heading?.[1] ?? boldLabel?.[1];
    if (label) {
      flushList();
      blocks.push(
        <p
          key={`${keyPrefix}-label-${i}`}
          className="mt-4 mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 first:mt-0 dark:text-gray-500"
        >
          {label.replace(/:$/, "")}
        </p>
      );
      return;
    }
    const bullet = /^(\s*)[-*]\s+(.*)$/.exec(raw);
    if (bullet) {
      list.push({ indent: Math.floor(bullet[1].length / 2), content: bullet[2] });
      return;
    }
    if (raw.trim() === "") {
      flushList();
      return;
    }
    flushList();
    blocks.push(
      <p key={`${keyPrefix}-p-${i}`} className="my-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {renderInline(raw, `${keyPrefix}-p-${i}`)}
      </p>
    );
  });
  flushList();

  return blocks;
}

export function Changelog() {
  const { resolvedTheme } = useDocsTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const theme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  if (data.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400">No releases yet.</p>
    );
  }

  return (
    <ThemeProvider design="basic" theme={theme} syncWithSystem={false} applyGlobal={false} style={{ display: "contents" }}>
      <div className="not-prose relative flex flex-col gap-12 pl-7">
        {/* Continuous timeline rail */}
        <span
          aria-hidden
          className="absolute left-1 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800"
        />
        {data.map((release) => (
          <section key={release.version} id={release.version} className="relative scroll-mt-24">
            {/* Dot on the rail */}
            <span
              aria-hidden
              className="absolute top-2.25 h-2.5 w-2.5 rounded-full border-2 border-white bg-gray-300 dark:border-gray-950 dark:bg-gray-600"
              style={{ left: "-28px" }}
            />

            {/* Release header: version */}
            <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a href={`#${release.version}`} className="no-underline">
                <Text as="h2" size="xlarge" weight="bold">
                  {release.version}
                </Text>
              </a>
            </div>

            {/* Entries */}
            <div className="flex flex-col gap-5">
              {release.sections.flatMap((section) =>
                section.entries.map((entry, ei) => {
                  const key = `${release.version}-${section.type}-${ei}`;
                  return (
                    <div key={key}>
                      <Text as="p" weight="semibold" size="medium">
                        {renderInline(entry.summary, `${key}-sum`)}
                      </Text>
                      {entry.body && <div className="mt-2">{renderBody(entry.body, key)}</div>}
                    </div>
                  );
                })
              )}
            </div>
          </section>
        ))}
      </div>
    </ThemeProvider>
  );
}
