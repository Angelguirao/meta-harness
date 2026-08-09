/**
 * Landscape data — hooks from primary sources (2026-08-09).
 * Keep hooks ≤12 words.
 *
 * Taxonomy is by *layer claim*, not customer vertical.
 * A logistics ops platform that owns continuity + constraint + work
 * is a shop. A desktop coworker that does not claim the shop is adjacent.
 *
 * @typedef {'shop' | 'control' | 'framework' | 'observe' | 'work' | 'fleet' | 'retrieve' | 'optimize' | 'adjacent'} Lane
 * @typedef {{
 *   name: string;
 *   by: string;
 *   lane: Lane;
 *   organs: string[];
 *   hook: string;
 *   url: string;
 * }} Peer
 * @typedef {{
 *   name: string;
 *   by: string;
 *   organs: string[];
 *   claim: string;
 *   hook: string;
 *   url: string;
 * }} FullShop
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

/**
 * Featured full shops — multi-organ meta-harnesses.
 * Vertical (coding / ops / CX) does not decide membership.
 */
/** @type {FullShop[]} */
export const FULL_SHOPS = [
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
  {
    name: "HappyRobot",
    by: "HappyRobot",
    organs: ["continuity", "constraint", "work"],
    claim: "Own the work. Compound the context.",
    hook: "AI workers + living business context across ops workflows.",
    url: "https://www.happyrobot.ai/",
  },
];

/**
 * Field lanes — precise layers around the shop.
 * `quiet` lanes collapse into the elsewhere line.
 */
/** @type {{ id: Lane; title: string; dek: string; quiet?: boolean }[]} */
export const LANES = [
  {
    id: "shop",
    title: "also shop",
    dek: "Multi-organ shop claims — different vertical, same layer.",
  },
  {
    id: "control",
    title: "control plane",
    dek: "Runs, sessions, HITL, deploy APIs — not the full shop.",
  },
  {
    id: "framework",
    title: "framework",
    dek: "Libraries that build the muscle loop.",
  },
  {
    id: "observe",
    title: "observe",
    dek: "Traces, evals, agent-engineering feedback.",
  },
  {
    id: "work",
    title: "work organ",
    dek: "Trusted work graph the shop can dispatch against.",
  },
  {
    id: "fleet",
    title: "fleet",
    dek: "Multiplayer / company-wide agent surfaces.",
  },
  {
    id: "retrieve",
    title: "retrieve",
    dek: "Answers with citations — not lucky grep.",
  },
  {
    id: "optimize",
    title: "optimize",
    dek: "Searches harness code — not orchestration.",
    quiet: true,
  },
  {
    id: "adjacent",
    title: "adjacent",
    dek: "Nearby product that does not claim the shop layer.",
    quiet: true,
  },
];

/** @type {Peer[]} */
export const PEERS = [
  // —— also shop (featured FULL_SHOPS are separate) ——
  {
    name: "Sierra",
    by: "Sierra",
    lane: "shop",
    organs: ["continuity", "constraint"],
    hook: "Multichannel CX agents with guardrails and systems.",
    url: "https://sierra.ai/",
  },
  {
    name: "Agentforce",
    by: "Salesforce",
    lane: "shop",
    organs: ["work", "constraint"],
    hook: "CRM-native agents across Salesforce workflows.",
    url: "https://www.salesforce.com/agentforce/",
  },
  {
    name: "Paperclip",
    by: "Paperclip",
    lane: "shop",
    organs: ["work", "constraint"],
    hook: "Org chart, budgets that halt spend, ticket traces.",
    url: "https://paperclip.ing/",
  },
  {
    name: "LifeOS",
    by: "Miessler",
    lane: "shop",
    organs: ["continuity", "swap"],
    hook: "Intent engineering on Claude Code / Cursor / Codex.",
    url: "https://ourlifeos.ai/",
  },
  {
    name: "Cloudflare OS",
    by: "Cloudflare",
    lane: "shop",
    organs: ["constraint", "retrieve"],
    hook: "Zero-trust workspace; agents start with no access.",
    url: "https://blog.cloudflare.com/cloudflare-os/",
  },

  // —— control plane ——
  {
    name: "Agno AgentOS",
    by: "Agno",
    lane: "control",
    organs: ["swap", "constraint"],
    hook: "Runtime + APIs — runs, sessions, HITL, BYOC.",
    url: "https://www.agno.com/",
  },
  {
    name: "LangSmith Deployment",
    by: "LangChain",
    lane: "control",
    organs: ["continuity", "constraint"],
    hook: "Durable agent server — threads, HITL, checkpoints.",
    url: "https://www.langchain.com/langsmith/deployment",
  },

  // —— framework (LangChain suite split) ——
  {
    name: "LangGraph",
    by: "LangChain",
    lane: "framework",
    organs: ["swap"],
    hook: "Low-level orchestration runtime for stateful agents.",
    url: "https://www.langchain.com/langgraph",
  },
  {
    name: "LangChain",
    by: "LangChain",
    lane: "framework",
    organs: ["swap"],
    hook: "Agent framework — models, tools, templates.",
    url: "https://www.langchain.com/",
  },
  {
    name: "deepagents",
    by: "LangChain",
    lane: "framework",
    organs: ["swap", "continuity"],
    hook: "Harness SDK — planning, subagents, filesystem.",
    url: "https://docs.langchain.com/oss/python/deepagents/overview",
  },

  // —— observe ——
  {
    name: "LangSmith",
    by: "LangChain",
    lane: "observe",
    organs: ["constraint"],
    hook: "Trace, evaluate, improve agents across frameworks.",
    url: "https://www.langchain.com/",
  },

  // —— work / fleet / retrieve ——
  {
    name: "Beads",
    by: "gastownhall",
    lane: "work",
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
    name: "LangSmith Fleet",
    by: "LangChain",
    lane: "fleet",
    organs: ["work", "swap"],
    hook: "Company-wide agents from plain-language tasks.",
    url: "https://www.langchain.com/",
  },
  {
    name: "Cerebras Knowledge",
    by: "Cerebras",
    lane: "retrieve",
    organs: ["retrieve"],
    hook: "Meet data where it lives; answer with citations.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },

  // —— quiet ——
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
    hook: "Desktop coworker — does not claim the shop.",
    url: "https://github.com/andrewyng/openworker",
  },
];

/** @param {Lane} lane */
export function peersInLane(lane) {
  return PEERS.filter((p) => p.lane === lane);
}
