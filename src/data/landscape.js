/**
 * Landscape data — notes grounded in primary sources (fetched 2026-08-07).
 * Organs are our research frame, not each vendor's vocabulary.
 *
 * @typedef {'orchestration' | 'org-os' | 'work-graph' | 'fleet' | 'retrieve' | 'optimize' | 'adjacent'} Lane
 * @typedef {{
 *   name: string;
 *   by?: string;
 *   lane: Lane;
 *   organs: string[];
 *   note: string;
 *   url: string;
 *   self?: boolean;
 * }} Peer
 */

/** @type {{ id: string; label: string; miss: string }[]} */
export const PARTS = [
  {
    id: "continuity",
    label: "continuity",
    miss: "The why lives in a dead chat. Git has the patch; the next session starts cold.",
  },
  {
    id: "scope",
    label: "scope",
    miss: "Work crosses repos. You clone, branch, paste context, and land PRs by hand.",
  },
  {
    id: "constraint",
    label: "constraint",
    miss: "Spend, writes, and egress stay in the prompt. Nothing enforces them in code.",
  },
  {
    id: "work",
    label: "work",
    miss: "Deps and ownership live in a board agents can’t trust after context resets.",
  },
  {
    id: "retrieve",
    label: "retrieve",
    miss: "Answers come from memory and lucky grep — not live systems with citations.",
  },
  {
    id: "swap",
    label: "swap",
    miss: "The product is glued to one CLI. Changing muscle means rewriting the shop.",
  },
];

/** @type {{ id: Lane; title: string; blurb: string }[]} */
export const LANES = [
  {
    id: "orchestration",
    title: "Orchestration meta-harness",
    blurb:
      "Layer above coding harnesses: cross-repo, session memory, swap, policy. The sense metaharness.tools focuses on.",
  },
  {
    id: "org-os",
    title: "Org / workspace OS",
    blurb:
      "Company-shaped control planes: goals, org charts, budgets, sandboxed workspaces — not only the coding loop.",
  },
  {
    id: "work-graph",
    title: "Work graph for agents",
    blurb: "Issue graphs built so agents survive context loss.",
  },
  {
    id: "fleet",
    title: "Fleet / multiplayer harness",
    blurb: "Many people, many sessions, shared admin — still a harness, with org-scale ops.",
  },
  {
    id: "retrieve",
    title: "Retrieve organ",
    blurb:
      "Knowledge that meets data where it lives. Can sit inside a fuller stack; not the whole shop.",
  },
  {
    id: "optimize",
    title: "Harness optimization",
    blurb:
      "Outer loop that searches over harness *code*. Same word, different job from orchestration.",
  },
  {
    id: "adjacent",
    title: "Adjacent (not the same job)",
    blurb: "Useful agents that are not meta-harnesses for coding work.",
  },
];

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Polygraph",
    by: "Nx",
    lane: "orchestration",
    organs: ["scope", "continuity"],
    note: "Indexes repos into a dependency graph (synthetic monorepo), coordinates cross-repo PRs/CI, durable sessions you can hand off, session history with traces. Agent-agnostic; built by the Nx team.",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Omnigent",
    by: "Databricks",
    lane: "orchestration",
    organs: ["swap", "constraint", "continuity"],
    note: "Apache-2.0 meta-harness: one runner/API over Claude Code, Codex, Pi, SDKs. Composition via YAML; contextual policies (spend, approvals) in code; OS sandbox + secret brokering; live shareable sessions (terminal/web/mobile).",
    url: "https://omnigent.ai/",
  },
  {
    name: "Paperclip",
    by: "Paperclip",
    lane: "org-os",
    organs: ["work", "constraint"],
    note: "MIT control plane to run a company of agents: org chart, mission→task alignment, monthly budgets that halt spend, ticket threads with tool-call traces, board-level governance. BYO agent (Claude, Codex, OpenClaw, …) via heartbeats — not a coding meta-harness by itself.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Cloudflare OS",
    by: "Cloudflare",
    lane: "org-os",
    organs: ["constraint", "retrieve"],
    note: "Open-source AI workspace on Cloudflare: agent chat grounded in org context/skills, sandboxed “gadgets,” Access + Gatekeepers (agents start with zero access). Governance and company grounding first; not cross-repo coding orchestration.",
    url: "https://blog.cloudflare.com/cloudflare-os/",
  },
  {
    name: "Agno AgentOS",
    by: "Agno",
    lane: "org-os",
    organs: ["swap", "constraint"],
    note: "Private-by-default agent platform/runtime: runs, sessions, memory, knowledge, HITL, RBAC, traces — BYOC. Framework + control plane for shipping agent products, not Nx-style cross-repo coding coordination.",
    url: "https://www.agno.com/",
  },
  {
    name: "Beads",
    by: "gastownhall",
    lane: "work-graph",
    organs: ["work"],
    note: "Dolt-backed issue tracker for AI agents: hash IDs, dependency-aware `bd ready`, formulas/molecules/gates, JSON CLI, sync over Dolt. Built so work survives context loss — a work organ, not a full meta-harness.",
    url: "https://beads.gascity.com/",
  },
  {
    name: "QM",
    by: "YC",
    lane: "fleet",
    organs: ["swap", "constraint", "continuity"],
    note: "YC-open-sourced multiplayer harness for startups (Slack + web). Per-person and per-room scopes: memory, files, keychain, crons, durable sandbox. Swappable drivers (Pi, OpenCode, Codex, Claude Code). Admin postures for tool approval. Fleet ops, not synthetic-monorepo coding.",
    url: "https://qm.ycombinator.com/",
  },
  {
    name: "Cerebras Knowledge",
    by: "Cerebras",
    lane: "retrieve",
    organs: ["retrieve"],
    note: "Internal KB blog (Jul 2026): ingest Slack/wiki/code/incidents where they live → distill → multi-list retrieve → fuse/rerank → answer + citations. Used by humans and agents. Classic retrieve organ; does not claim continuity/scope/constraint.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
  {
    name: "Stanford Meta-Harness",
    by: "Lee et al.",
    lane: "optimize",
    organs: ["swap"],
    note: "COLM 2026 paper: outer loop where a coding agent reads a filesystem of prior harness code, scores, and raw traces, then proposes a new harness around a frozen LLM. Optimization of harness code — not orchestration across repos/sessions.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "SuperagenticAI metaharness",
    by: "SuperagenticAI",
    lane: "optimize",
    organs: ["swap"],
    note: "Open PyPI library inspired by the Stanford paper: optimize executable harness files (AGENTS.md, bootstrap/validate scripts, routing). Codex-first evidence today; filesystem candidate ledger. Optimization lane, not Polygraph/Omnigent.",
    url: "https://superagenticai.github.io/metaharness/",
  },
  {
    name: "OpenWorker",
    by: "Andrew Ng / aisuite",
    lane: "adjacent",
    organs: ["constraint", "swap"],
    note: "Local-first desktop AI coworker (documents, Slack, calendar, 25+ connectors). Approval-gated writes; BYO model. Everyday finished work — not a meta-harness above Claude Code/Codex for cross-repo engineering.",
    url: "https://github.com/andrewyng/openworker",
  },
  {
    name: "TBD",
    by: "private",
    lane: "org-os",
    organs: ["work", "continuity"],
    note: "Private stack under study. Working thesis: control plane + durable meaning heavy; cross-repo scope, trusted session handoff, and OS sandbox still thin. Not a public product. Not a claim that this is Omnigent or Polygraph.",
    url: "",
    self: true,
  },
];

/** @param {string[]} organs */
export function ownsLabel(organs) {
  return organs.join(" · ");
}

/** @param {Lane} lane */
export function peersInLane(lane) {
  return PEERS.filter((p) => p.lane === lane);
}
