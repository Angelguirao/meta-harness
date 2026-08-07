/** @typedef {{ name: string; organs: string[]; note: string; url?: string; self?: boolean }} Peer */

/** @type {{ id: string; label: string; miss: string }[]} */
export const PARTS = [
  {
    id: "continuity",
    label: "continuity",
    miss: "Thursday’s “retries in the gateway” dies with the chat. Git has the patch; nothing has the why.",
  },
  {
    id: "scope",
    label: "scope",
    miss: "Cancel-order needs payments API + web + design-system. You clone three trees and babysit three PRs.",
  },
  {
    id: "constraint",
    label: "constraint",
    miss: "Spend, write paths, and prod risk stay in the prompt. The agent hopes; nothing enforces.",
  },
  {
    id: "work",
    label: "work",
    miss: "Deps and status live in your head or a board the agent can’t trust after context resets.",
  },
  {
    id: "retrieve",
    label: "retrieve",
    miss: "Answers come from memory and lucky grep — not live systems with citations.",
  },
  {
    id: "swap",
    label: "swap",
    miss: "The shop is glued to one CLI. Changing muscle means rewriting the product.",
  },
];

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Polygraph",
    organs: ["scope", "continuity"],
    note: "Cross-repo work with memory that outlives a session.",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Omnigent",
    organs: ["swap", "constraint", "continuity"],
    note: "One control surface over Claude Code, Codex, Pi, custom agents.",
    url: "https://omnigent.ai/",
  },
  {
    name: "Paperclip",
    organs: ["work", "constraint"],
    note: "Company-shaped control plane: issues, budgets, HITL.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Beads",
    organs: ["work"],
    note: "Issue graph agents can keep after the chat dies.",
    url: "https://beads.gascity.com/",
  },
  {
    name: "QM",
    organs: ["swap", "work"],
    note: "Queue and dispatch across harnesses.",
    url: "https://qm.ycombinator.com/",
  },
  {
    name: "Agno AgentOS",
    organs: ["swap", "constraint"],
    note: "Runtime OS for agent apps — runs and policy, not your world model.",
    url: "https://www.agno.com/",
  },
  {
    name: "Cloudflare OS",
    organs: ["constraint", "swap"],
    note: "Sandbox + worker surface; constraint as infrastructure.",
    url: "https://os.cloudflare.app/",
  },
  {
    name: "Cerebras Knowledge",
    organs: ["retrieve"],
    note: "Meet data where it lives; distill; answer with proof. An organ, not the shop.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
  {
    name: "Stanford Meta-Harness",
    organs: ["swap"],
    note: "Searches over harness *code* — optimization loop, not orchestration shop.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "OpenWorker",
    organs: ["swap", "constraint"],
    note: "Local worker + sandbox; muscle with rails.",
    url: "https://github.com/andrewyng/openworker",
  },
  {
    name: "LifeOS",
    organs: ["work", "continuity", "swap"],
    note: "World model + walker heavy. Scope, trusted handoff, OS sandbox still thin.",
    url: "https://github.com/Angelguirao/personal-ai-os",
    self: true,
  },
];

/** @param {string[]} organs */
export function ownsLabel(organs) {
  return organs.join(" · ");
}
