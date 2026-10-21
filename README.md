# meta-harness

A **living map** of the operator-OS layer above AI coding agents — not an agent
runtime, and not another link dump.

## Why this matters

Tools keep claiming “Agent OS,” “control plane,” or “fleet of agents” while meaning
different things. Homepages blur roles, tasks, permissions, and walk-away operation
with the chat tool underneath. Without a shared vocabulary and cited coverage, you
re-read the same marketing every time the field moves — and you cannot compare
products on equal terms.

meta-harness exists so that category has a **stable feature language**, primary-source
approaches, and (over time) software to query and decide — instead of vibes.

## What this repo is

| It is | It is not |
|-------|-----------|
| Research + tooling to **map and compare** operator-OS products | A product that **runs** your agents |
| Definition **(E)** made concrete via catalogs and OOCS | Model hosting or eval benchmarks |
| Public MIT field notes evolving into spec / graph / decide clients | Accounts, waitlist, or billing |

**Definition (E):** an operator OS for a fleet of agents — roles, work, permissions,
walk-away — with a swappable harness underneath.

## Status

- **Now:** Astro notebook + catalogs (`FEATURES.md`, `FEATURE_MAP.md`, `LANDSCAPE.md`,
  `CANDIDATES.md`) and draft OOCS under `packages/spec/`
- **Next:** versioned spec maturity, knowledge graph, decision engine, CLI, API —
  see [`ROADMAP.md`](./ROADMAP.md)

## Develop

```bash
npm install
npm run dev
npm run validate:spec   # OOCS sample catalog entry
```

See [`DESIGN.md`](./DESIGN.md). Licensed under MIT.
