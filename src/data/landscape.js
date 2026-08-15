/**
 * Site content — aligned to FEATURES.md / LANDSCAPE.md / FEATURE_MAP.md / CANDIDATES.md.
 * Definition (E): operator OS for a fleet of agents.
 * No organ chips. Approaches in prose, not Y/N.
 *
 * @typedef {'control' | 'fleet' | 'work' | 'retrieve' | 'observe' | 'framework' | 'substrate' | 'optimize' | 'adjacent'} Lane
 * @typedef {{ name: string; by: string; claim: string; hook: string; url: string }} CoreOs
 * @typedef {{ name: string; url: string; approach: string }} Approach
 * @typedef {{ id: string; title: string; dek: string; approaches: Approach[] }} Feature
 * @typedef {{ name: string; by: string; lane: Lane; hook: string; url: string }} Peer
 */

/** @type {CoreOs[]} */
export const CORE_OS = [
  {
    name: "Polygraph",
    by: "Nx",
    claim: "Memory and graph across repos and sessions.",
    hook: "Synthetic monorepo, coordinated PRs, durable handoff behind harnesses.",
    url: "https://trypolygraph.com/",
  },
  {
    name: "Omnigent",
    by: "Databricks",
    claim: "One runner over many harnesses — with rails.",
    hook: "YAML agents across Claude Code / Codex / Pi; policy + sandbox in code.",
    url: "https://omnigent.ai/",
  },
  {
    name: "Paperclip",
    by: "Paperclip",
    claim: "Company of agents: org chart, tickets, budgets that halt.",
    hook: "Hire roles, assign work, heartbeats; adapters if it can receive a pulse.",
    url: "https://paperclip.ing/",
  },
  {
    name: "Nairi",
    by: "Nairi",
    claim: "Slack fleet — each agent in its own container.",
    hook: "Claude Code / Codex / OpenCode, vault, domain-pinned secrets.",
    url: "https://nairi.ai/",
  },
  {
    name: "Multica",
    by: "Multica",
    claim: "Task queue over coding CLIs.",
    hook: "Enqueue → claim → complete; humans and agents on one board.",
    url: "https://multica.ai/",
  },
  {
    name: "Open Company",
    by: "Zeenie AI",
    claim: "Six AI employees on a token → work → revenue loop.",
    hook: "Business roles own functions end-to-end; self-host default.",
    url: "https://opencompany.sh/",
  },
  {
    name: "HappyRobot",
    by: "HappyRobot",
    claim: "Ops workers + living business context.",
    hook: "Enterprise workflows compound context; vertical is not the test.",
    url: "https://www.happyrobot.ai/",
  },
];

/** Watch — on-lane claim, thin public surface (CANDIDATES). */
export const CORE_WATCH = {
  name: "Cloudflare OS",
  by: "Cloudflare",
  hook: "Zero-trust org workspace for agents — watch until approaches fill.",
  url: "https://os.cloudflare.app/",
};

/**
 * Feature spine for the page — curated from FEATURE_MAP.
 * Prefer core OS; demoted peers only when the approach teaches.
 */
/** @type {Feature[]} */
export const FEATURES = [
  {
    id: "agent-catalog",
    title: "Named agents & roles",
    dek: "Distinct identities — not one anonymous chat.",
    approaches: [
      {
        name: "Paperclip",
        url: "https://paperclip.ing/",
        approach: "Hire into an org chart; titles and goals are first-class.",
      },
      {
        name: "Open Company",
        url: "https://opencompany.sh/",
        approach: "Six fixed employees (dev, design, sales, …) own functions end-to-end.",
      },
      {
        name: "Nairi",
        url: "https://nairi.ai/",
        approach: "Named workers (triage, release notes, …), each in its own container.",
      },
      {
        name: "Omnigent",
        url: "https://omnigent.ai/",
        approach: "Built-in agents plus custom ones declared in YAML.",
      },
      {
        name: "Multica",
        url: "https://multica.ai/",
        approach: "Profiles beside humans in the same activity feed.",
      },
    ],
  },
  {
    id: "work",
    title: "Assign work",
    dek: "Durable tasks you can hand to an agent and walk away from.",
    approaches: [
      {
        name: "Paperclip",
        url: "https://paperclip.ing/",
        approach: "Tickets with owner, status, thread; every conversation traced.",
      },
      {
        name: "Multica",
        url: "https://multica.ai/",
        approach: "Queue lifecycle: enqueue → claim → start → complete/fail.",
      },
      {
        name: "Nairi",
        url: "https://nairi.ai/",
        approach: "Slack/Discord intake; web tasks UI with full execution trace.",
      },
      {
        name: "Postma AgentOS",
        url: "https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4",
        approach: "Kanban + goals with definition of done (blueprint, not a product).",
      },
    ],
  },
  {
    id: "budgets",
    title: "Budgets that halt",
    dek: "Spend and risk live in code — not only in the prompt.",
    approaches: [
      {
        name: "Paperclip",
        url: "https://paperclip.ing/",
        approach: "Monthly budget per agent; at 100% the agent auto-pauses.",
      },
      {
        name: "Omnigent",
        url: "https://omnigent.ai/",
        approach: "Stateful spend caps and risk escalation in the runner.",
      },
      {
        name: "Open Company",
        url: "https://opencompany.sh/",
        approach: "Token silo metered onto the work line.",
      },
    ],
  },
  {
    id: "sessions",
    title: "Sessions you can hand off",
    dek: "Runs as objects — stream, share, resume, search.",
    approaches: [
      {
        name: "Polygraph",
        url: "https://trypolygraph.com/",
        approach: "Handoff carries repos, branches, PRs, logs; past sessions recall.",
      },
      {
        name: "Omnigent",
        url: "https://omnigent.ai/",
        approach: "Share and co-drive a live sandboxed session across surfaces.",
      },
      {
        name: "Nairi",
        url: "https://nairi.ai/",
        approach: "Per-agent container; full tool trace on the task.",
      },
      {
        name: "Paperclip",
        url: "https://paperclip.ing/",
        approach: "Tool-call tracing on tickets; cost per agent/task/project.",
      },
    ],
  },
  {
    id: "policy",
    title: "Isolation & secrets",
    dek: "Least privilege enforced outside the model.",
    approaches: [
      {
        name: "Omnigent",
        url: "https://omnigent.ai/",
        approach: "OS sandbox on FS/network; credentials brokered on egress.",
      },
      {
        name: "Nairi",
        url: "https://nairi.ai/",
        approach: "Vault with domain-pinned keys; stand-ins in agent context.",
      },
      {
        name: "Cloudflare OS",
        url: "https://os.cloudflare.app/",
        approach: "Agents start with no access in a zero-trust workspace.",
      },
      {
        name: "HQ",
        url: "https://hqforwork.com/",
        approach: "`hq run` uses secrets at runtime without pasting them (context layer).",
      },
    ],
  },
  {
    id: "routing",
    title: "Swap the muscle",
    dek: "Harness underneath is swappable — or at least not the product.",
    approaches: [
      {
        name: "Omnigent",
        url: "https://omnigent.ai/",
        approach: "One-line harness change; compose multi-harness teams.",
      },
      {
        name: "Paperclip",
        url: "https://paperclip.ing/",
        approach: "Adapters for Claude, Codex, Cursor, Hermes, OpenClaw, Pi, OpenCode…",
      },
      {
        name: "Nairi",
        url: "https://nairi.ai/",
        approach: "Per-agent choice of Claude Code, Codex, or OpenCode.",
      },
      {
        name: "Multica",
        url: "https://multica.ai/",
        approach: "Daemon detects coding CLIs; management layer over them.",
      },
      {
        name: "Polygraph",
        url: "https://trypolygraph.com/",
        approach: "Agent-agnostic — plugs in behind existing harnesses.",
      },
    ],
  },
  {
    id: "memory",
    title: "Memory that compounds",
    dek: "Tomorrow inherits the plan — not only the patch.",
    approaches: [
      {
        name: "Polygraph",
        url: "https://trypolygraph.com/",
        approach: "Durable session memory + package/API graph across trees.",
      },
      {
        name: "HappyRobot",
        url: "https://www.happyrobot.ai/",
        approach: "Doing the work compounds into a living business model.",
      },
      {
        name: "Omnigent",
        url: "https://omnigent.ai/",
        approach: "Server holds shared history and policies across harness swaps.",
      },
      {
        name: "HQ",
        url: "https://hqforwork.com/",
        approach: "Company brain — playbooks sync so every tool starts sharp (adjacent).",
      },
    ],
  },
  {
    id: "channels",
    title: "Where the operator lives",
    dek: "Interrupt, approve, walk away — from Slack, web, or inbox.",
    approaches: [
      {
        name: "Nairi",
        url: "https://nairi.ai/",
        approach: "Slack/Discord primary; no per-seat team tax.",
      },
      {
        name: "Paperclip",
        url: "https://paperclip.ing/",
        approach: "Ticket thread is the human↔agent approve channel.",
      },
      {
        name: "Omnigent",
        url: "https://omnigent.ai/",
        approach: "Risk escalation in policy; same session on web/mobile/API.",
      },
      {
        name: "Multica",
        url: "https://multica.ai/",
        approach: "Web board + overnight unattended runs.",
      },
    ],
  },
];

/** @type {{ id: Lane; title: string; dek: string; quiet?: boolean }[]} */
export const LANES = [
  {
    id: "control",
    title: "control plane",
    dek: "Runs, sessions, HITL, deploy APIs — assemble into an OS; not the OS product.",
  },
  {
    id: "fleet",
    title: "fleet",
    dek: "Multiplayer ADE / managed workers — shared surface, not full operator OS.",
  },
  {
    id: "work",
    title: "work",
    dek: "Trusted work graph the OS can dispatch against.",
  },
  {
    id: "retrieve",
    title: "retrieve",
    dek: "Answers with citations — not lucky grep.",
  },
  {
    id: "observe",
    title: "observe",
    dek: "Traces, evals, agent-engineering feedback.",
  },
  {
    id: "framework",
    title: "framework",
    dek: "Libraries that build the muscle loop.",
  },
  {
    id: "substrate",
    title: "substrate",
    dek: "Isolates, sandboxes, agent computers — under the muscle.",
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
    dek: "Nearby product that does not claim the operator OS.",
    quiet: true,
  },
];

/** @type {Peer[]} */
export const PEERS = [
  {
    name: "Agno AgentOS",
    by: "Agno",
    lane: "control",
    hook: "Build/run your platform — APIs, HITL, sessions, BYOC.",
    url: "https://www.agno.com/",
  },
  {
    name: "LangSmith Deployment",
    by: "LangChain",
    lane: "control",
    hook: "Durable agent server — threads, HITL, checkpoints.",
    url: "https://www.langchain.com/langsmith/deployment",
  },
  {
    name: "eve",
    by: "Vercel",
    lane: "control",
    hook: "Durable sessions, sandbox, HITL — production built in.",
    url: "https://vercel.com/blog/introducing-eve",
  },
  {
    name: "Ralph Loop",
    by: "Ralph Loop",
    lane: "control",
    hook: "Loops a task list in Docker until the job is done.",
    url: "https://ralphloop.sh/",
  },
  {
    name: "QM",
    by: "YC",
    lane: "fleet",
    hook: "Multiplayer Slack/web harness; scoped sandboxes.",
    url: "https://qm.ycombinator.com/",
  },
  {
    name: "AQ",
    by: "AQ",
    lane: "fleet",
    hook: "Multiplayer ADE — live terminals on your VM.",
    url: "https://aq.dev/",
  },
  {
    name: "Delta",
    by: "Zed",
    lane: "fleet",
    hook: "Multiplayer threads; code and conversation stay connected.",
    url: "https://zed.dev/blog/introducing-delta",
  },
  {
    name: "Palette",
    by: "Palette",
    lane: "fleet",
    hook: "Claude Code, Codex, Gemini on files you already share.",
    url: "https://palette.team/",
  },
  {
    name: "CRHQ",
    by: "CRHQ",
    lane: "fleet",
    hook: "Satellite VPS + skills + use-case workers — managed fleet.",
    url: "https://crhq.ai/",
  },
  {
    name: "LangSmith Fleet",
    by: "LangChain",
    lane: "fleet",
    hook: "Company-wide agents from plain-language tasks.",
    url: "https://www.langchain.com/",
  },
  {
    name: "Beads",
    by: "gastownhall",
    lane: "work",
    hook: "Dolt issues agents can trust after context dies.",
    url: "https://beads.gascity.com/",
  },
  {
    name: "Cerebras Knowledge",
    by: "Cerebras",
    lane: "retrieve",
    hook: "Meet data where it lives; answer with citations.",
    url: "https://www.cerebras.ai/blog/how-we-built-our-knowledge-base",
  },
  {
    name: "LangSmith",
    by: "LangChain",
    lane: "observe",
    hook: "Trace, evaluate, improve agents across frameworks.",
    url: "https://www.langchain.com/",
  },
  {
    name: "LangGraph",
    by: "LangChain",
    lane: "framework",
    hook: "Low-level orchestration runtime for stateful agents.",
    url: "https://www.langchain.com/langgraph",
  },
  {
    name: "LangChain",
    by: "LangChain",
    lane: "framework",
    hook: "Agent framework — models, tools, templates.",
    url: "https://www.langchain.com/",
  },
  {
    name: "deepagents",
    by: "LangChain",
    lane: "framework",
    hook: "Harness SDK — planning, subagents, filesystem.",
    url: "https://docs.langchain.com/oss/python/deepagents/overview",
  },
  {
    name: "DeepSeek Harness",
    by: "DeepSeek",
    lane: "framework",
    hook: "Models, tools, sessions, sandboxes — every piece a plugin.",
    url: "https://deepseek.com/harness/en/",
  },
  {
    name: "agentOS",
    by: "Rivet",
    lane: "substrate",
    hook: "In-process V8/WASM OS; mount sandboxes when needed.",
    url: "https://github.com/rivet-dev/agentos",
  },
  {
    name: "E2B",
    by: "E2B",
    lane: "substrate",
    hook: "Ephemeral cloud sandboxes for code-running agents.",
    url: "https://e2b.dev/",
  },
  {
    name: "Sprites",
    by: "Fly",
    lane: "substrate",
    hook: "Hardware-isolated computers that sleep when idle.",
    url: "https://fly.io/sprites",
  },
  {
    name: "Naïve",
    by: "Naïve",
    lane: "substrate",
    hook: "Warm isolates — economics for always-on agents.",
    url: "https://usenaive.ai/",
  },
  {
    name: "Ona",
    by: "Ona",
    lane: "substrate",
    hook: "Dedicated agent computers with strong isolation.",
    url: "https://ona.com/",
  },
  {
    name: "Daytona",
    by: "Daytona",
    lane: "substrate",
    hook: "Composable computers for AI-generated code.",
    url: "https://www.daytona.io/",
  },
  {
    name: "CreateOS",
    by: "CreateOS",
    lane: "substrate",
    hook: "Hardware-isolated sandbox platforms for AI agents.",
    url: "https://createos.sh/",
  },
  {
    name: "Stanford Meta-Harness",
    by: "Lee et al.",
    lane: "optimize",
    hook: "Searches harness code — not orchestration.",
    url: "https://yoonholee.com/meta-harness/",
  },
  {
    name: "metaharness",
    by: "SuperagenticAI",
    lane: "optimize",
    hook: "Open loop over harness files on disk.",
    url: "https://superagenticai.github.io/metaharness/",
  },
  {
    name: "HQ",
    by: "Indigo",
    lane: "adjacent",
    hook: "Company brain / shared context — not the fleet operator OS.",
    url: "https://hqforwork.com/",
  },
  {
    name: "Sierra",
    by: "Sierra",
    lane: "adjacent",
    hook: "CX conversational platform — not walk-away company OS.",
    url: "https://sierra.ai/",
  },
  {
    name: "Agentforce",
    by: "Salesforce",
    lane: "adjacent",
    hook: "CRM multi-agent orchestration — platform-bound.",
    url: "https://www.salesforce.com/agentforce/",
  },
  {
    name: "LifeOS",
    by: "Miessler",
    lane: "adjacent",
    hook: "Personal intent OS over coding harnesses — not a fleet.",
    url: "https://ourlifeos.ai/",
  },
  {
    name: "OpenWorker",
    by: "Andrew Ng",
    lane: "adjacent",
    hook: "Desktop coworker — does not claim the OS.",
    url: "https://github.com/andrewyng/openworker",
  },
  {
    name: "Hermes",
    by: "Nous Research",
    lane: "adjacent",
    hook: "Always-on learning agent — not the OS layer.",
    url: "https://github.com/nousresearch/hermes-agent",
  },
  {
    name: "Grok Bot",
    by: "xAI",
    lane: "adjacent",
    hook: "Desktop teammates with their own computer — not the OS.",
    url: "https://x.ai/bot",
  },
];

export const REFERENCES = [
  {
    name: "metaharness.tools",
    url: "https://metaharness.tools/",
    hook: "Named the orchestration gap.",
  },
  {
    name: "Postma AgentOS",
    url: "https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4",
    hook: "Blueprint: roles, Kanban, goals, deny-by-default, ephemeral sessions.",
  },
];

/** @param {Lane} lane */
export function peersInLane(lane) {
  return PEERS.filter((p) => p.lane === lane);
}
