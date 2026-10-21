import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../../..");
const featuresPath = path.join(root, "FEATURES.md");
const outPath = path.join(__dirname, "../feature-ids.json");

const md = fs.readFileSync(featuresPath, "utf8");
const ids = [...md.matchAll(/\| `([a-z][a-z0-9_.]+)` \|/g)].map((m) => m[1]);
const unique = [...new Set(ids)].sort();

const payload = {
  version: "0.1.0",
  generatedFrom: "FEATURES.md",
  count: unique.length,
  ids: unique,
};

fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Wrote ${unique.length} feature IDs → packages/spec/feature-ids.json`);
