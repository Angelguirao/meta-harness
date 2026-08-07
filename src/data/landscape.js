/** @typedef {{ name: string; owns: string; note: string; url?: string }} Peer */

/** @type {{ id: string; label: string; miss: string }[]} */
export const PARTS = [
  {
    id: "continuity",
    label: "continuity",
    miss: "Last week's retry decision dies with the chat. Git has the diff; nothing has the why.",
  },
  {
    id: "scope",
    label: "scope",
    miss: "Cancel-order needs API + web + design-system. You are the integration bus.",
  },
  {
    id: "constraint",
    label: "constraint",
    miss: "Spend, write paths, and risk stay in the prompt. The agent hopes; nothing enforces.",
  },
  {
    id: "work",
    label: "work graph",
    miss: "Tickets live in your head or a board agents can't trust after context resets.",
  },
  {
    id: "retrieve",
    label: "retrieve",
    miss: "Answers come from memory and lucky grep, not live systems with citations.",
  },
  {
    id: "swap",
    label: "swap",
    miss: "The product is glued to one CLI. Changing muscle means rewriting the shop.",
  },
];

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Polygraph",
    owns: "scope · continuity",
    note: "Cross-repo work with memory that outlives a session.",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Omnigent",
    owns: "swap · constraint · continuity",
    note: "One control surface over Claude Code, Codex, Pi, custom agents.",
    url: "https://omnigent.ai/",
  },
  {
    name: "Paperclip",
    owns: "work · constraint",
    note: "Company-shaped control plane: issues, budgets, HITL.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Beads",
    owns: "work",
    note: "Issue graph agents can keep after the chat dies.",
    url: "https://beads.gascity.com/",
  },
  {
    name: "QM",
    owns: "swap · work",
    note: "Queue and dispatch across harnesses.",
    url: "https://qm.ycombinator.com/",
  },
  {
    name: "Agno AgentOS",
    owns: "swap · constraint",
    note: "Runtime OS for agent apps — runs and policy, not your world model.",
    url: "https://www.agno.com/",
  },
  {
    name: "Cerebras Knowledge",
    owns: "retrieve",
    note: "Meet data where it lives; distill; answer with proof. An organ, not the shop.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
  {
    name: "Stanford Meta-Harness",
    owns: "swap (search)",
    note: "Outer loop that searches over harness code — different job than orchestration.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "OpenWorker",
    owns: "swap · constraint",
    note: "Local worker + sandbox; muscle with rails.",
    url: "https://github.com/andrewyng/openworker",
  },
];
