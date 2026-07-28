#!/usr/bin/env node
/**
 * Syncs docs/public/llms.txt and docs/public/llms-full.txt to the package root
 * so they ship inside the published npm package (node_modules/pine-design-system/).
 * Source of truth is docs/public/ — edit there, not the root copies.
 * Run: pnpm run sync-llms
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const header =
	"<!-- Auto-generated from docs/public/{name} — do not edit directly. Run `pnpm run sync-llms` to update. -->\n\n";

for (const name of ["llms.txt", "llms-full.txt"]) {
	const source = readFileSync(join(rootDir, "docs", "public", name), "utf-8");
	writeFileSync(join(rootDir, name), header.replace("{name}", name) + source, "utf-8");
}

console.log("✅ llms.txt and llms-full.txt synced to package root!");
