# Roadmap

meta-harness documents and structures the **operator-OS layer** above coding-agent
runtimes: products that define agents and roles, assign work, isolate permissions,
and allow an operator to walk away while the underlying harness stays swappable.

**Today:** a single-page Astro research surface plus draft catalogs
(`FEATURES.md`, `FEATURE_MAP.md`, `LANDSCAPE.md`, `CANDIDATES.md`).

**Direction:** evolve those catalogs into a maintained open toolkit — a versioned
capability specification, a knowledge graph of the field, and a constraint-based
decision engine — with the website, CLI, and API as clients of the same data.

---

## Goals

1. Make definition **(E)** machine-checkable, not only editorial.
2. Answer coverage and tradeoff questions in code (with citations).
3. Keep the dataset reusable via packages and a read-only API.
4. Remain a **research and decision instrument**, not an agent execution platform.

---

## Target layout

```
packages/spec       # Operator-OS Capability Spec (OOCS), versioned
packages/schema     # JSON Schema / Zod derived from OOCS
packages/graph      # graph build and query (features ↔ projects ↔ citations)
packages/engine     # constraint scoring → ranked shortlist + tradeoffs
packages/catalog    # field dataset for this domain
packages/cli        # validate, query, decide, export, snapshot
packages/tokens     # design tokens
apps/web            # multi-route UI (browse, graph, decide)
apps/api            # read-only HTTP API
```

---

## Phase 1 — Capability specification

Publish **OOCS v0.1**, aligned with existing feature IDs
(`agent.*`, `work.*`, `session.*`, `policy.*`, `interrupt.*`, `memory.*`, …).

- Distinguish normative requirements from informative notes
- Semver rules for ID stability (breaking ID changes = major)
- Evidence model: source URL, optional quote/anchor, last-verified date
- Conformance levels: `claimed` / `documented` / `evidenced`

**In progress:** draft lives under `packages/spec/` (prose, ID registry from
`FEATURES.md`, catalog-entry schema, `npm run validate:spec`).

**Exit criteria:** a third party can author a valid catalog entry from the spec alone.

---

## Phase 2 — Knowledge graph

Compile the catalog into a graph:

- **Nodes:** Feature, Project, Approach, Citation, Lane, Bundle  
- **Edges:** covers, cites, competes_with, implements_id, demoted_reason  

Checked-in graph artifacts plus a builder; query from the CLI. Web UI for
neighborhood views around a project or feature.

**Exit criteria:** multi-hop queries (e.g. neighborhood of a core project) are
supported as first-class operations.

---

## Phase 3 — Decision engine

Constraint input (YAML/JSON), for example:

```yaml
require:
  - id.selfhost
  - policy.isolate
prefer:
  - interrupt.hitl
  - id.yaml
avoid:
  - id.managed
lane: core
```

Transparent, documented scoring (not model-generated). Outputs: ranked shortlist,
tradeoff report between top candidates, and warnings for missing evidence.

Exposed as `mh decide` and a `/decide` flow in the web app that writes the same
constraint file.

**Exit criteria:** decision runs are reproducible and suitable for real tool-selection
experiments.

---

## Phase 4 — Clients and distribution

- Web: feature pages, project dossiers, graph explorer, decide wizard, shareable URLs
- API: `/v1/spec`, `/v1/graph/…`, `/v1/decide`
- npm packages for spec, schema, catalog, and engine
- CI: schema/graph validation, citation link checks, full monorepo build
- Production web deploy on a dedicated project

---

## Phase 5 — Field operations

- Immutable catalog snapshots (`catalog@YYYY.MM`) for reproducible decisions
- Diff views between snapshots
- Contribution guide and issue templates for evidenced approaches
- Collaboration via pull requests on the public repository

---

## Non-goals

- Hosting or proxying language models
- Executing third-party agent fleets or providing sandbox/job infrastructure
- Model-quality benchmarks or training/eval datasets
- Multi-tenant accounts, waitlists, or payment systems

---

## Near-term focus

Complete Phase 1–2 enough that the site and CLI read from a single validated catalog,
then land Phase 3 so compare/decide are engine-backed rather than hand-maintained tables.
