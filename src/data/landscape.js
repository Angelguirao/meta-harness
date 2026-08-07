/** @typedef {{ name: string; owns: string; url?: string }} Peer */

/** @type {{ id: string; label: string; blurb: string }[]} */
export const PARTS = [
  {
    id: "continuity",
    label: "continuity",
    blurb: "Prior attempts survive the chat. Why is queryable.",
  },
  {
    id: "scope",
    label: "scope",
    blurb: "Work crosses repos and tools without you as the bus.",
  },
  {
    id: "constraint",
    label: "constraint",
    blurb: "Spend, writes, risk — enforced, not hoped.",
  },
  {
    id: "work",
    label: "work graph",
    blurb: "Tickets and deps agents can trust after context dies.",
  },
  {
    id: "retrieve",
    label: "retrieve",
    blurb: "Meet data where it lives; distill; answer with proof.",
  },
  {
    id: "swap",
    label: "swap",
    blurb: "Claude / Codex / Deep Agents are muscle, not the brain.",
  },
];

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Polygraph",
    owns: "scope · continuity",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Omnigent",
    owns: "swap · constraint · continuity",
    url: "https://omnigent.ai/",
  },
  {
    name: "Paperclip",
    owns: "work · constraint",
    url: "https://paperclip.ing/",
  },
  {
    name: "Beads",
    owns: "work",
    url: "https://beads.gascity.com/",
  },
  {
    name: "QM",
    owns: "swap · work",
    url: "https://qm.ycombinator.com/",
  },
  {
    name: "Agno AgentOS",
    owns: "swap · constraint",
    url: "https://www.agno.com/",
  },
  {
    name: "Cerebras Knowledge",
    owns: "retrieve",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
  {
    name: "Stanford Meta-Harness",
    owns: "swap (search the harness)",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "OpenWorker",
    owns: "swap · constraint (local)",
    url: "https://github.com/andrewyng/openworker",
  },
];
