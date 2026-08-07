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
    miss: "Why dies with the chat. Git keeps the patch.",
  },
  {
    id: "scope",
    label: "scope",
    miss: "Cross-repo work makes you the integration bus.",
  },
  {
    id: "constraint",
    label: "constraint",
    miss: "Spend and risk stay in the prompt.",
  },
  {
    id: "work",
    label: "work",
    miss: "Deps live somewhere agents can’t trust after reset.",
  },
  {
    id: "retrieve",
    label: "retrieve",
    miss: "Answers from memory and lucky grep.",
  },
  {
    id: "swap",
    label: "swap",
    miss: "Glued to one CLI; changing muscle rewrites the shop.",
  },
];

/** @type {{ id: Lane; title: string }[]} */
export const LANES = [
  { id: "orchestration", title: "Orchestration" },
  { id: "org-os", title: "Org / workspace OS" },
  { id: "work-graph", title: "Work graph" },
  { id: "fleet", title: "Fleet harness" },
  { id: "retrieve", title: "Retrieve" },
  { id: "optimize", title: "Optimization (different job)" },
  { id: "adjacent", title: "Adjacent" },
];

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Polygraph",
    by: "Nx",
    lane: "orchestration",
    organs: ["scope", "continuity"],
    hook: "Synthetic monorepo graph across repos; durable sessions you can hand off.",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Omnigent",
    by: "Databricks",
    lane: "orchestration",
    organs: ["swap", "constraint", "continuity"],
    hook: "One runner over Claude Code, Codex, Pi — policies and sandbox in code, live shared sessions.",
    url: "https://omnigent.ai/",
  },
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
    hook: "Ingest where data lives → distill → retrieve → cite. An organ, not the whole shop.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
  {
    name: "Stanford Meta-Harness",
    by: "Lee et al.",
    lane: "optimize",
    organs: ["swap"],
    hook: "Outer loop that rewrites harness code from full traces — not orchestration.",
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
    hook: "Local desktop coworker for finished everyday work — not a coding meta-harness.",
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
