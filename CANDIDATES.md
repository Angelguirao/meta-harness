# Candidate lock (v1)

Locked from [`FEATURE_MAP.md`](./FEATURE_MAP.md) + primary re-reads (2026-08-15).

**Definition (E):** operator OS for a fleet of agents — define agents/roles, assign work, isolate permissions, walk away; runtime/harness underneath is swappable.

Admission is soft: strong coverage across **agent · work · session · policy · interrupt · memory**, with packaging/execution as amplifiers — not a hard gate checklist.

---

## Core OS (primary essay + feature-map peers)

These are the projects the site should treat as **same-lane** under E.

| ID | Why they stay |
|---|---|
| `polygraph` | Org of agents + durable/shared memory + sandboxed repos/channels; harnesses are clients |
| `omnigent` | Multi-harness runner + policy + sandbox + shareable sessions; OS over muscle |
| `paperclip` | Org chart, tickets, budgets that halt, heartbeats; explicit company-of-agents |
| `nairi` | Slack-native fleet, roles, containers, vault; walk-away workers |
| `multica` | Task lifecycle over many CLIs; workers + knowledge + daemon runtimes |
| `open-company` | Named AI employees, token→work→revenue loop, self-host company OS |
| `happyrobot` | Ops workers + living business context; multi-organ shop, not coding-vertical |

**Cloudflare OS** (`cloudflare-os`) stays **watch** — zero-trust org workspace claim is on-lane, but public surface is thinner than the seven above; fill approaches before promoting to core essay.

---

## Demotions (were `os-candidate`)

| ID | New layer | Why |
|---|---|---|
| `hq` | `adjacent` | **Company brain / shared context** for Claude Code·Cursor·MCP — skills, secrets, sync. Agents in Slack/email sit *on* HQ; HQ does not claim the work board + permission OS. Context layer, not fleet operator OS. |
| `lifeos` | `harness` | **Personal intent OS** over Claude Code/Cursor/Codex (TELOS, hill-climbing, Cortex). One human’s direction layer — not a multi-agent fleet you assign and walk away from. |
| `crhq` | `fleet` | **Satellite VPS + skills + use-case workers** (SEO, support, triage). Strong packaging/execution; product is managed agent workers on your box, not org-chart OS. |
| `agno` | `control` | **Build/run your own agent platform** — AgentOS APIs, HITL, sessions, BYOC. Production control plane you assemble into an OS; not the OS product itself. |
| `sierra` | `adjacent` | **CX conversational platform** — Ghostwriter agents, guardrails, monitors, multichannel. Outcome-priced customer agents, not walk-away company fleet OS. |
| `agentforce` | `adjacent` | **CRM-native multi-agent orchestration** (Manager + specialists, Atlas 3.0, A2A GA Summer ’26). Real fleet routing inside Salesforce — platform-bound agentic CRM, not portable operator OS. |

---

## Keep nearby (not core, still map when feature-relevant)

| Layer | IDs |
|---|---|
| `os-partial` | `eve`, `langsmith-deployment`, `ralph-loop`, `flue`, `background-agents`, `software-factory`, `withone`, `pullfrog` |
| `fleet` | `qm`, `aq`, `delta`, `palette`, `langsmith-fleet`, **`crhq`** |
| `control` | **`agno`**, plus existing control-lane peers |
| `adjacent` | **`hq`**, **`sierra`**, **`agentforce`**, OpenWorker, Hermes, … |
| `harness` | **`lifeos`**, coding harnesses |
| `reference` | Postma/Ian Nuttall AgentOS gist — architecture only |

---

## Site implication

Done on the public page (2026-08-15): definition E → Operator OS → Features (approach prose) → Field. No organ chips. Demoted products only where instructive (HQ under memory/secrets; Sierra/Agentforce/LifeOS in elsewhere).

## Still open (do not block site)

- Exact Cloudflare OS placement after deeper primary read.
- Whether Multica / Open Company get equal essay weight to Polygraph·Omnigent·Paperclip·Nairi (all stay core; depth may differ).
- Empty FEATURES bundles (`obs.*`, `surf.*`, `tools.*`) — fill later; not admission-critical.
