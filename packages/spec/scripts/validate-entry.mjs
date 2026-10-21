import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const specRoot = path.resolve(__dirname, "..");

const registry = JSON.parse(
  fs.readFileSync(path.join(specRoot, "feature-ids.json"), "utf8"),
);
const knownIds = new Set(registry.ids);

const schema = JSON.parse(
  fs.readFileSync(
    path.join(specRoot, "schemas/catalog-entry.schema.json"),
    "utf8",
  ),
);

const entryPath =
  process.argv[2] ?? path.join(specRoot, "fixtures/sample-entry.json");
const entry = JSON.parse(fs.readFileSync(entryPath, "utf8"));

const errors = [];

function fail(msg) {
  errors.push(msg);
}

if (typeof entry.projectId !== "string" || !/^[a-z][a-z0-9-]*$/.test(entry.projectId)) {
  fail("projectId MUST match ^[a-z][a-z0-9-]*$");
}
if (typeof entry.name !== "string" || entry.name.length < 1) {
  fail("name MUST be a non-empty string");
}
const lanes = schema.properties.lane.enum;
if (!lanes.includes(entry.lane)) {
  fail(`lane MUST be one of: ${lanes.join(", ")}`);
}
if (!Array.isArray(entry.covers) || entry.covers.length < 1) {
  fail("covers MUST be a non-empty array");
}

for (const [i, row] of (entry.covers ?? []).entries()) {
  const where = `covers[${i}]`;
  if (!row || typeof row !== "object") {
    fail(`${where} MUST be an object`);
    continue;
  }
  if (!knownIds.has(row.featureId)) {
    fail(`${where}.featureId "${row.featureId}" is not in OOCS v0.1 registry`);
  }
  if (!["claimed", "documented", "evidenced"].includes(row.level)) {
    fail(`${where}.level MUST be claimed|documented|evidenced`);
  }
  if (row.level === "evidenced") {
    if (!row.evidence || typeof row.evidence.url !== "string") {
      fail(`${where}: level evidenced REQUIRES evidence.url`);
    }
  }
}

if (errors.length) {
  console.error(`Invalid: ${entryPath}`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`OK: ${entryPath} (${entry.covers.length} coverage rows)`);
