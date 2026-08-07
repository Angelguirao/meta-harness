/** @typedef {{ name: string; layer: string; note: string; url?: string }} Peer */

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Paperclip",
    layer: "company control plane",
    note: "Issue/work-item centric — org chart, budgets, hired agents. Strong coordination; human-board shaped.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Omnigent",
    layer: "orchestration wrap",
    note: "Session-centric meta-harness — swap/policy/shared live sessions over Claude Code / Codex / Pi.",
    url: "https://omnigent.ai/",
  },
  {
    name: "Agno AgentOS",
    layer: "run control plane",
    note: "Run/workflow-centric — durable runs, teams, multi-framework AgentOS. Execution unit ≠ Work Object.",
    url: "https://www.agno.com/",
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
    name: "OpenWorker",
    layer: "intent → deliverable",
    note: "Chat → task UX that finishes work; lighter organizational work graph than a full Work/Run/Session triad.",
    url: "https://github.com/andrewyng/openworker",
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
