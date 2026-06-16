/**
 * Parses the changesets-generated root CHANGELOG.md into structured JSON.
 * The root CHANGELOG.md is the single source of truth; this keeps the docs
 * Changelog page in sync with every published release (zero drift).
 * Runs before `next dev` / `next build` (see docs/package.json predev/prebuild).
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const CHANGELOG_PATH = join(__dirname, "../../CHANGELOG.md");
const OUTPUT_PATH = join(__dirname, "../content/changelog.json");

/** Normalize text for duplicate comparison. */
function normalize(text) {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

/** "### Patch Changes" -> "patch" */
function sectionType(heading) {
  const lower = heading.toLowerCase();
  if (lower.includes("major")) return "major";
  if (lower.includes("minor")) return "minor";
  if (lower.includes("patch")) return "patch";
  return "patch";
}

/** Trim leading/trailing blank lines from a body block. */
function trimBlankEdges(lines) {
  let start = 0;
  let end = lines.length;
  while (start < end && lines[start].trim() === "") start++;
  while (end > start && lines[end - 1].trim() === "") end--;
  return lines.slice(start, end);
}

function parseChangelog(markdown) {
  const lines = markdown.split("\n");
  const releases = [];

  let release = null;
  let section = null;
  let entry = null;
  let bodyLines = null;

  const flushBody = () => {
    if (entry && bodyLines) {
      // Drop body bullets that merely repeat the entry summary (P1: dedup).
      const summaryNorm = normalize(entry.summary);
      const deduped = bodyLines.filter((line) => {
        const bullet = /^\s*[-*]\s+(.*)$/.exec(line);
        return !(bullet && normalize(bullet[1]) === summaryNorm);
      });
      const trimmed = trimBlankEdges(deduped);
      entry.body = trimmed.length > 0 ? trimmed.join("\n") : undefined;
    }
    bodyLines = null;
  };

  for (const line of lines) {
    // Release heading: "## 1.0.2" (h2, not the h1 package title)
    const releaseMatch = /^##\s+(?!#)(.+)$/.exec(line);
    if (releaseMatch && !line.startsWith("###")) {
      flushBody();
      entry = null;
      section = null;
      release = { version: releaseMatch[1].trim(), sections: [] };
      releases.push(release);
      continue;
    }

    // Section heading: "### Patch Changes"
    const sectionMatch = /^###\s+(.+)$/.exec(line);
    if (sectionMatch && release) {
      flushBody();
      entry = null;
      section = { type: sectionType(sectionMatch[1]), entries: [] };
      release.sections.push(section);
      continue;
    }

    // Top-level entry bullet: "- <hash>: summary" (no leading whitespace)
    const entryMatch = /^-\s+(.+)$/.exec(line);
    if (entryMatch && section) {
      flushBody();
      const rest = entryMatch[1];
      const hashMatch = /^([0-9a-f]{7,40}):\s+(.*)$/.exec(rest);
      entry = hashMatch
        ? { hash: hashMatch[1], summary: hashMatch[2].trim() }
        : { hash: "", summary: rest.trim() };
      section.entries.push(entry);
      bodyLines = [];
      continue;
    }

    // Indented continuation -> part of the current entry's body (dedent by 2).
    if (entry && bodyLines) {
      bodyLines.push(line.replace(/^ {2}/, ""));
    }
  }

  flushBody();
  return releases;
}

function main() {
  let markdown;
  try {
    markdown = readFileSync(CHANGELOG_PATH, "utf8");
  } catch {
    console.warn(`[generate-changelog] CHANGELOG.md not found at ${CHANGELOG_PATH}; writing empty changelog.`);
    markdown = "";
  }

  const releases = parseChangelog(markdown);

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(releases, null, 2) + "\n");

  const versions = releases.map((r) => r.version).join(", ");
  console.log(`Generated changelog.json (${releases.length} releases: ${versions})`);
}

main();
