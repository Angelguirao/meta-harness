/** @typedef {{ name: string; layer: string; note: string; url?: string }} Peer */

/** Bets that sit above (or search over) agent harnesses. */
/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Paperclip",
    layer: "company control plane",
    note: "Issue-centric company of agents — org chart, budgets, board approvals.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Omnigent",
    layer: "orchestration wrap",
    note: "Session-centric wrap over Claude Code / Codex / Pi — swap, policy, live share.",
    url: "https://omnigent.ai/",
  },
  {
    name: "Polygraph",
    layer: "orchestration wrap",
    note: "Cross-repo graph + memory that survives the session. Agent-agnostic.",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Agno AgentOS",
    layer: "run control plane",
    note: "Durable runs, teams, multi-framework runtime — execution product, not a world model.",
    url: "https://www.agno.com/",
  },
  {
    name: "QM",
    layer: "fleet harness",
    note: "YC’s open quartermaster for many OpenClaw-like agents at work.",
    url: "https://qm.ycombinator.com/",
  },
  {
    name: "Beads",
    layer: "work graph",
    note: "Issues and deps that outlive context windows — Dolt-backed, agent-native.",
    url: "https://beads.gascity.com/",
  },
  {
    name: "OpenWorker",
    layer: "desktop coworker",
    note: "Intent → finished deliverable on your machine; lighter org graph than a full OS.",
    url: "https://github.com/andrewyng/openworker",
  },
  {
    name: "Stanford Meta-Harness",
    layer: "harness search",
    note: "Different word sense: outer loop that rewrites harness code from traces.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "metaharness.tools",
    layer: "peer map",
    note: "Nx’s public map of the category. Field guide — not our dictionary.",
    url: "https://metaharness.tools/#top",
  },
];

/**
 * Related infrastructure that is easy to confuse with the layer above harnesses.
 * Useful to borrow from; wrong as the product category.
 */
/** @type {Peer[]} */
export const ADJACENT = [
  {
    name: "Cerebras Knowledge",
    layer: "org knowledge base",
    note: "Meet data where it lives, distill, retrieve, answer with citations. Powers humans and agents — but the job is find X, not own phases, policy, or cross-repo work.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
];
