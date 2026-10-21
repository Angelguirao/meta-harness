# Operator-OS Capability Spec (OOCS) v0.1

Status: **draft**  
Aligned with feature IDs in [`FEATURES.md`](../../FEATURES.md).  
Machine index: [`feature-ids.json`](./feature-ids.json).

## 1. Purpose

OOCS defines a shared vocabulary for capabilities in the **operator-OS layer** above
coding-agent runtimes: products that define agents/roles, assign work, isolate
permissions, and allow an operator to walk away while the underlying harness remains
swappable (definition **E** in the research spine).

This revision formalizes IDs and evidence rules so catalog entries can be validated.
It does not claim that every product must implement every ID.

## 2. Normative language

| Keyword | Meaning |
|---------|---------|
| **MUST** | Required for a conforming catalog entry that uses the referenced construct |
| **SHOULD** | Recommended; omit only with documented reason |
| **MAY** | Optional |

Informative notes are marked *(informative)*.

## 3. Feature IDs

- A feature ID MUST match `^[a-z][a-z0-9]*(\.[a-z][a-z0-9_]*)+$` (e.g. `agent.catalog`).
- IDs in [`feature-ids.json`](./feature-ids.json) are the **current registry** for v0.1.
- Removing or renaming a published ID is a **breaking** change (semver major).
- Adding an ID is a minor change when documented in FEATURES.md and the registry.

*(informative)* Bundle prefixes today include `id`, `agent`, `work`, `session`,
`policy`, `interrupt`, `memory`, `observe`, `exec`, and related groups in FEATURES.md.

## 4. Evidence

When an entry asserts that a project covers a feature, it MUST include evidence:

| Field | Required | Description |
|-------|----------|-------------|
| `url` | MUST | Primary-source URL |
| `quote` | SHOULD | Short supporting excerpt |
| `accessed` | SHOULD | ISO date (`YYYY-MM-DD`) when verified |

## 5. Conformance levels

For each feature assertion on a project:

| Level | Meaning |
|-------|---------|
| `claimed` | Marketing or secondary claim only |
| `documented` | Primary docs describe the capability |
| `evidenced` | Documented **and** evidence object present and valid |

Catalog tooling MUST reject unknown levels.

## 6. Catalog entry (minimum shape)

A v0.1 catalog entry MUST include:

- `projectId` — stable slug  
- `name` — display name  
- `lane` — one of `core` \| `watch` \| `adjacent` \| `reference`  
- `covers` — array of `{ featureId, level, evidence? }`  

If `level` is `evidenced`, `evidence` MUST be present.

Schema: [`schemas/catalog-entry.schema.json`](./schemas/catalog-entry.schema.json).  
Validate: `npm run validate:spec` (sample fixture included).

## 7. Non-goals *(informative)*

OOCS does not specify agent runtimes, model hosting, or model-quality benchmarks.
Those are out of scope for this project.
