/**
 * Landscape data — hooks from primary sources (2026-08-07).
 * Keep hooks ≤12 words.
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
    miss: "Tomorrow’s agent inherits the patch, not the plan.",
  },
  {
    id: "scope",
    label: "scope",
    miss: "Cross-repo work — you are still the integration bus.",
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

/** Primary orchestration peers. */
export const TWO_SHOPS = [
  {
    name: "Polygraph",
    by: "Nx",
    organs: ["scope", "continuity"],
    claim: "See across repos. Remember across sessions.",
    hook: "Synthetic monorepo graph, coordinated PRs, durable handoff.",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Omnigent",
    by: "Databricks",
    organs: ["swap", "constraint", "continuity"],
    claim: "Swap the muscle. Enforce the rails.",
    hook: "One runner over Claude Code / Codex / Pi; policy + sandbox in code.",
    url: "https://omnigent.ai/",
  },
];

/** @type {{ id: Lane; title: string; quiet?: boolean }[]} */
export const LANES = [
  { id: "org-os", title: "org OS" },
  { id: "work-graph", title: "work" },
  { id: "fleet", title: "fleet" },
  { id: "retrieve", title: "retrieve" },
  { id: "optimize", title: "optimize", quiet: true },
  { id: "adjacent", title: "adjacent", quiet: true },
];

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Paperclip",
    by: "Paperclip",
    lane: "org-os",
    organs: ["work", "constraint"],
    hook: "Org chart, budgets that halt spend, ticket traces.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Cloudflare OS",
    by: "Cloudflare",
    lane: "org-os",
    organs: ["constraint", "retrieve"],
    hook: "Zero-trust workspace; agents start with no access.",
    url: "https://blog.cloudflare.com/cloudflare-os/",
  },
  {
    name: "Agno AgentOS",
    by: "Agno",
    lane: "org-os",
    organs: ["swap", "constraint"],
    hook: "Private agent platform — runs, HITL, BYOC.",
    url: "https://www.agno.com/",
  },
  {
    name: "Beads",
    by: "gastownhall",
    lane: "work-graph",
    organs: ["work"],
    hook: "Dolt issues agents can trust after context dies.",
    url: "https://beads.gascity.com/",
  },
  {
    name: "QM",
    by: "YC",
    lane: "fleet",
    organs: ["swap", "constraint", "continuity"],
    hook: "Multiplayer Slack/web harness; scoped sandboxes.",
    url: "https://qm.ycombinator.com/",
  },
  {
    name: "Cerebras Knowledge",
    by: "Cerebras",
    lane: "retrieve",
    organs: ["retrieve"],
    hook: "Meet data where it lives; answer with citations.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
  {
    name: "Stanford Meta-Harness",
    by: "Lee et al.",
    lane: "optimize",
    organs: ["swap"],
    hook: "Searches harness code — not orchestration.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "metaharness",
    by: "SuperagenticAI",
    lane: "optimize",
    organs: ["swap"],
    hook: "Open loop over harness files on disk.",
    url: "https://superagenticai.github.io/metaharness/",
  },
  {
    name: "OpenWorker",
    by: "Andrew Ng",
    lane: "adjacent",
    organs: ["constraint", "swap"],
    hook: "Desktop coworker — different job.",
    url: "https://github.com/andrewyng/openworker",
  },
  {
    name: "TBD",
    by: "private",
    lane: "org-os",
    organs: ["work", "continuity"],
    hook: "Private. Control plane heavy; scope thin.",
    url: "",
    self: true,
  },
];

/** @param {Lane} lane */
export function peersInLane(lane) {
  return PEERS.filter((p) => p.lane === lane && !p.self);
}
