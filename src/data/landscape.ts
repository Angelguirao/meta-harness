/** Working landscape for public research — not a brand claim. */

export type LayerId =
  | "world-model"
  | "org-os"
  | "meta-orch"
  | "meta-opt"
  | "harness"
  | "governance"
  | "compute";

export type Peer = {
  id: string;
  name: string;
  layer: LayerId;
  blurb: string;
  url?: string;
};

export const LAYERS: { id: LayerId; label: string; hint: string }[] = [
  {
    id: "world-model",
    label: "World model",
    hint: "Durable meaning outside any agent chat.",
  },
  {
    id: "org-os",
    label: "Control plane / org OS",
    hint: "Who owns phases, budgets, and resume.",
  },
  {
    id: "meta-orch",
    label: "Meta-harness (orchestration)",
    hint: "Layer above harnesses: memory, swap, policy, cross-boundary work.",
  },
  {
    id: "meta-opt",
    label: "Meta-harness (optimization)",
    hint: "Outer loop that rewrites harness code from traces.",
  },
  {
    id: "harness",
    label: "Harness",
    hint: "One agent loop for one job — tools, sandbox, session.",
  },
  {
    id: "governance",
    label: "Governance",
    hint: "Policy, audit, human gates in code.",
  },
  {
    id: "compute",
    label: "Compute",
    hint: "Where the muscle runs.",
  },
];

export const PEERS: Peer[] = [
  {
    id: "lifeos",
    name: "LifeOS / PersonalOS",
    layer: "org-os",
    blurb:
      "Our experiment: world model + OPEVL walker + harness as muscle. Placement still open.",
  },
  {
    id: "paperclip",
    name: "Paperclip",
    layer: "org-os",
    blurb: "Company of agents — org chart, budgets, board approvals over many harnesses.",
    url: "https://paperclip.ing/",
  },
  {
    id: "cloudflare-os",
    name: "Cloudflare OS",
    layer: "org-os",
    blurb: "Org-shaped AI OS on Workers / Access / Dynamic Workers.",
    url: "https://os.cloudflare.app/",
  },
  {
    id: "agno",
    name: "Agno AgentOS",
    layer: "org-os",
    blurb: "SDK + runtime + control plane UI for agent products.",
    url: "https://www.agno.com/",
  },
  {
    id: "omnigent",
    name: "Omnigent",
    layer: "meta-orch",
    blurb: "Compose, govern, and share sessions over Claude Code / Codex / Pi.",
    url: "https://omnigent.ai/",
  },
  {
    id: "polygraph",
    name: "Polygraph",
    layer: "meta-orch",
    blurb: "Cross-repo graph + session memory behind whichever harness you use.",
    url: "https://trypolygraph.com/",
  },
  {
    id: "qm",
    name: "QM",
    layer: "meta-orch",
    blurb: "YC open-source multiplayer harness for fleets of work agents.",
    url: "https://qm.ycombinator.com/",
  },
  {
    id: "beads",
    name: "Beads",
    layer: "meta-orch",
    blurb: "Dolt-backed issue graph agents can trust after context dies.",
    url: "https://beads.gascity.com/",
  },
  {
    id: "stanford",
    name: "Stanford Meta-Harness",
    layer: "meta-opt",
    blurb: "Filesystem of full traces; proposer rewrites harness code.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    id: "superagentic",
    name: "SuperagenticAI metaharness",
    layer: "meta-opt",
    blurb: "Open optimizer over harness files — Codex-first evidence.",
    url: "https://superagenticai.github.io/metaharness/",
  },
  {
    id: "openworker",
    name: "OpenWorker",
    layer: "harness",
    blurb: "Desktop coworker that delivers finished work with approvals.",
    url: "https://github.com/andrewyng/openworker",
  },
  {
    id: "deep-agents",
    name: "Deep Agents",
    layer: "harness",
    blurb: "LifeOS muscle today — LangGraph library inside Fly jobs.",
  },
];

export const PROBLEMS = [
  {
    title: "The why dies with the session",
    body: "Git keeps what changed. The agent held why. Sessions quit; the organization forgets.",
  },
  {
    title: "Work is not one folder",
    body: "Harnesses start in a repo. Real changes cross frontends, backends, design systems — you become the plumbing.",
  },
  {
    title: "Policy as prompt hope",
    body: "Spend caps, write risk, and sandboxing do not belong in a system prompt. They belong in a layer that can say no.",
  },
  {
    title: "Invisible multiplayer",
    body: "Hundreds of agent runs happen on laptops. Teammates cannot build on what another session already learned.",
  },
];

export const NATURE = [
  {
    title: "Above the employee",
    body: "A harness is the employee. Whatever sits above it owns continuity, boundaries, and constraints across employees.",
  },
  {
    title: "Evidence over slogans",
    body: "We do not inherit a peer’s dictionary. We name the object from problems we feel shipping LifeOS — and revise the name when the product proves otherwise.",
  },
  {
    title: "World model optional but decisive",
    body: "Some bets stop at session + policy. Ours asks whether durable meaning (folio, ledger, trackers) is part of the same object or a sibling OS.",
  },
];

export const OPEN_QUESTIONS = [
  "Is a meta-harness primarily orchestration above coding agents, or can an org control plane with a world model be the same object?",
  "What must survive a harness crash for the layer to have earned its name?",
  "Which missing surface forces a placement call first: session handoff, policy sandbox, or cross-repo?",
  "When does LifeOS stop being a private OS experiment and become something others should install?",
];
