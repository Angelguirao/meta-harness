/** @typedef {{ name: string; layer: string; note: string; url?: string }} Peer */

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Paperclip",
    layer: "company control plane",
    note: "Org chart, budgets, hired agents. Closest “run a company of agents” product.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Omnigent",
    layer: "orchestration wrap",
    note: "One layer over Claude Code / Codex / Pi: swap, policy, shared live sessions.",
    url: "https://omnigent.ai/",
  },
  {
    name: "Polygraph",
    layer: "orchestration wrap",
    note: "Cross-repo graph + memory that survives the session. Agent-agnostic.",
    url: "https://trypolygraph.com/",
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
    name: "Stanford Meta-Harness",
    layer: "harness search",
    note: "Different sense of the word: outer loop that rewrites harness code from traces.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "metaharness.tools",
    layer: "peer map",
    note: "Nx’s public map of the category. Useful field guide; not our dictionary.",
    url: "https://metaharness.tools/#top",
  },
];
