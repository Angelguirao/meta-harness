/**
 * Landscape data — hooks from primary sources (2026-08-07).
 * Organs = our frame. Keep hooks to one sentence.
 *
 * @typedef {'orchestration' | 'org-os' | 'work-graph' | 'fleet' | 'retrieve' | 'optimize' | 'adjacent'} Lane
 * @typedef {{
 *   name: string;
 *   by: string;
 *   lane: Lane;
 *   organs: string[];
 *   hook: string;
 *   url: string;
 *   self?: boolean;
 * }} Peer
 */

/** @type {{ id: string; label: string; miss: string }[]} */
export const PARTS = [
  {
    id: "continuity",
    label: "continuity",
    miss: "The why dies with the chat. Git only has the patch.",
  },
  {
    id: "scope",
    label: "scope",
    miss: "Cross-repo work — you are the integration bus.",
  },
  {
    id: "constraint",
    label: "constraint",
    miss: "Spend and risk live in the prompt, not in code.",
  },
  {
    id: "work",
    label: "work",
    miss: "Deps sit in a board agents can’t trust after reset.",
  },
  {
    id: "retrieve",
    label: "retrieve",
    miss: "Answers from memory and lucky grep, not citations.",
  },
  {
    id: "swap",
    label: "swap",
    miss: "Glued to one CLI — changing muscle rewrites the shop.",
  },
];

/** Primary orchestration peers — the contrast that defines the lane. */
export const TWO_SHOPS = [
  {
    name: "Polygraph",
    by: "Nx",
    organs: ["scope", "continuity"],
    claim: "See across repos. Remember across sessions.",
    hook: "Indexes your repos into a dependency graph (synthetic monorepo), coordinates cross-repo PRs, durable sessions you can hand off.",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Omnigent",
    by: "Databricks",
    organs: ["swap", "constraint", "continuity"],
    claim: "Swap the muscle. Enforce the rails.",
    hook: "One runner over Claude Code, Codex, Pi, SDKs — contextual policies and OS sandbox in code, live shareable sessions.",
    url: "https://omnigent.ai/",
  },
];

/** @type {{ id: Lane; title: string; quiet?: boolean }[]} */
export const LANES = [
  { id: "org-os", title: "Org / workspace OS" },
  { id: "work-graph", title: "Work graph" },
  { id: "fleet", title: "Fleet harness" },
  { id: "retrieve", title: "Retrieve organ" },
  { id: "optimize", title: "optimization", quiet: true },
  { id: "adjacent", title: "adjacent", quiet: true },
];

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Paperclip",
    by: "Paperclip",
    lane: "org-os",
    organs: ["work", "constraint"],
    hook: "Company of agents: org chart, mission→tasks, budgets that halt spend, ticket traces.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Cloudflare OS",
    by: "Cloudflare",
    lane: "org-os",
    organs: ["constraint", "retrieve"],
    hook: "Company AI workspace; agents start with zero access; Gatekeepers + sandboxed gadgets.",
    url: "https://blog.cloudflare.com/cloudflare-os/",
  },
  {
    name: "Agno AgentOS",
    by: "Agno",
    lane: "org-os",
    organs: ["swap", "constraint"],
    hook: "Private agent platform: runs, sessions, HITL, RBAC, traces — BYOC, not cross-repo coding.",
    url: "https://www.agno.com/",
  },
  {
    name: "Beads",
    by: "gastownhall",
    lane: "work-graph",
    organs: ["work"],
    hook: "Dolt-backed issues for agents — deps, `bd ready`, sync that survives context loss.",
    url: "https://beads.gascity.com/",
  },
  {
    name: "QM",
    by: "YC",
    lane: "fleet",
    organs: ["swap", "constraint", "continuity"],
    hook: "Multiplayer work harness (Slack + web): per-scope memory, sandbox, swappable drivers.",
    url: "https://qm.ycombinator.com/",
  },
  {
    name: "Cerebras Knowledge",
    by: "Cerebras",
    lane: "retrieve",
    organs: ["retrieve"],
    hook: "Ingest where data lives → distill → retrieve → cite. An organ inside a stack, not the shop.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
  {
    name: "Stanford Meta-Harness",
    by: "Lee et al.",
    lane: "optimize",
    organs: ["swap"],
    hook: "Outer loop that rewrites harness code from full traces — optimization, not the shop.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "metaharness",
    by: "SuperagenticAI",
    lane: "optimize",
    organs: ["swap"],
    hook: "Open library that evolves harness files (instructions, scripts, routing) on disk.",
    url: "https://superagenticai.github.io/metaharness/",
  },
  {
    name: "OpenWorker",
    by: "Andrew Ng",
    lane: "adjacent",
    organs: ["constraint", "swap"],
    hook: "Local desktop coworker for finished everyday work — different job entirely.",
    url: "https://github.com/andrewyng/openworker",
  },
  {
    name: "TBD",
    by: "private",
    lane: "org-os",
    organs: ["work", "continuity"],
    hook: "Private. Thesis: durable meaning + control plane heavy; scope / handoff / sandbox thin.",
    url: "",
    self: true,
  },
];

/** @param {Lane} lane */
export function peersInLane(lane) {
  return PEERS.filter((p) => p.lane === lane && !p.self);
}
