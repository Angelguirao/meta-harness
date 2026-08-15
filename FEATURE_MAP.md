# Feature → project → approach (draft v1)

Companion to [`FEATURES.md`](./FEATURES.md) and [`LANDSCAPE.md`](./LANDSCAPE.md).

**Rule:** under each feature, only projects with a **primary-source approach**. No Y/N. Empty = nobody strong yet (or not researched).

**Scope this draft:** `os-candidate` (+ `ref-postma-agentos` as reference) on core OS bundles; substrate under execution; harnesses only where they are the muscle being routed.

**Sources cited inline.** Approaches are paraphrases of primary claims — re-verify before publishing.

---

# Bundle 1 — Agent & role model

## `agent.catalog` — Named agent catalog

- **Paperclip** — Agents are hired into an org with titles/roles; “CEO / CTO / eng …” as first-class entities. ([paperclip.ing](https://paperclip.ing/))
- **Open Company** — Six fixed AI employees (developer, designer, accountant, sales, marketer, tax). ([opencompany.sh](https://opencompany.sh/))
- **Multica** — Agents have profiles, report status, appear beside humans in the activity feed. ([multica.ai](https://multica.ai/))
- **Nairi** — Multiple named agents (e.g. checkout fix, triage, release notes), each in its own container. ([nairi.ai](https://nairi.ai/))
- **Omnigent** — Built-in multi-AI agents (Polly, Debby) plus custom agents in YAML. ([omnigent.ai](https://omnigent.ai/))
- **Postma AgentOS (ref)** — Named agents with role prompts (`spec`, `plan`, `senior-dev`, …). ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))

## `agent.role_prompt` — Per-agent role contract

- **Paperclip** — Job description + goal alignment down the org chart; agents know what to do and why. ([paperclip.ing](https://paperclip.ing/))
- **Postma AgentOS (ref)** — Foundational OS prompt + per-agent role prompt; one-job contracts. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Open Company** — Each role owns a function end-to-end and ships finished output, not suggestions. ([opencompany.sh](https://opencompany.sh/))

## `agent.skills` — Skills attached per agent

- **Multica** — Skills = reusable capability packs (code/config/context); library compounds. ([multica.ai](https://multica.ai/))
- **Nairi** — Skills + MCP tools + rules shape what a shared agent can do. ([nairi.ai](https://nairi.ai/))
- **HQ** — Turn workflows into `/commands`; `/hq-sync` ships skills to the whole team. ([hqforwork.com](https://hqforwork.com/))
- **Paperclip** — `SKILL.md` so agents discover context they need. ([paperclip.ing](https://paperclip.ing/))
- **Postma AgentOS (ref)** — Skills (prompt or file) attached per agent (e.g. `/plan`). ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))

## `agent.harness_binding` — Per-agent harness binding

- **Omnigent** — YAML agent portable across Claude Code / Codex / Pi with one-line harness change. ([omnigent.ai](https://omnigent.ai/), [Databricks announce](https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents))
- **Nairi** — Per-agent choice of Claude Code, Codex, or OpenCode. ([nairi.ai](https://nairi.ai/))
- **Multica** — Daemon auto-detects Claude Code, Codex, OpenClaw, OpenCode. ([multica.ai](https://multica.ai/))
- **Paperclip** — Adapters: Claude, Codex, Cursor, Hermes, OpenClaw, Pi, OpenCode — “if it can receive a heartbeat, it’s hired.” ([paperclip.ing](https://paperclip.ing/))
- **Polygraph** — Runs behind Codex / Claude Code / OpenCode (agent-agnostic meta-harness). ([trypolygraph.com](https://trypolygraph.com/))

## `agent.collaboration_list` — Spawn allowlist

- **Omnigent** — Compose subagents using different harnesses in the same agent; built-in orchestrators. ([omnigent.ai](https://omnigent.ai/))
- **Postma AgentOS (ref)** — `collaborationList`: may spawn only listed agents as subtasks. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Paperclip** — Delegation up/down org chart; cross-team requests to best agent — governance gates hiring. ([paperclip.ing](https://paperclip.ing/))

## `agent.as_employee` — Business-function roles

- **Open Company** — Explicit: six business roles as the product. ([opencompany.sh](https://opencompany.sh/))
- **Paperclip** — Company mental model: hire CMO/CTO/…, not “prompt an AI.” ([paperclip.ing](https://paperclip.ing/))
- **HappyRobot** — AI workers in enterprise workflows (logistics, utilities, …); vertical deployment. ([happyrobot.ai](https://www.happyrobot.ai/))
- **CRHQ** — “We build employees” / multi-agent team per human (marketing-forward; verify depth). ([crhq.ai](https://crhq.ai/))

## `agent.profiles` — Agents as actors in the UI

- **Multica** — Humans and agents in the same assign dropdown and interleaved activity feed. ([multica.ai](https://multica.ai/))
- **Paperclip** — Org chart UI; tickets with agent owners. ([paperclip.ing](https://paperclip.ing/))

---

# Bundle 2 — Work system

## `work.tasks` / `work.kanban` / `work.assign_agent`

- **Paperclip** — Ticket system: owner, status, thread; every conversation traced. ([paperclip.ing](https://paperclip.ing/))
- **Multica** — Full lifecycle enqueue → claim → start → complete/fail; board shared by humans and agents. ([multica.ai](https://multica.ai/))
- **Nairi** — Web tasks UI with full execution trace; Slack/Discord as intake. ([nairi.ai](https://nairi.ai/))
- **Postma AgentOS (ref)** — Kanban todo/doing/review/done; assign agent; run now/schedule/recurring. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))

## `work.templates` / `work.chains` / `work.approval_gate`

- **Postma AgentOS (ref)** — `compound-engineer-workflow` 9-step chain; approval gates API-enforced (agent cannot mark done). ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Paperclip** — Board approves strategy/hires before agents proceed; autonomy is granted. ([paperclip.ing](https://paperclip.ing/))

## `work.goals` / `work.dod` / `work.orchestrator` / `work.progress_log`

- **Paperclip** — Mission → project goal → agent goal → task; goal alignment is the spine. ([paperclip.ing](https://paperclip.ing/))
- **Postma AgentOS (ref)** — Goals with Definition of Done, orchestrator after each session, progress log, spend/time/stuck rails. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Open Company** — Outcome to a role (not a Zapier graph); each run reports cost and what it produced. ([opencompany.sh](https://opencompany.sh/))

## `work.spend_cap` / `work.time_cap` / `work.stuck_detection`

- **Paperclip** — Monthly budgets per agent; at 100% agent auto-pauses; soft warn at 80%. ([paperclip.ing](https://paperclip.ing/))
- **Omnigent** — Stateful spend caps (e.g. pause after every $100); contextual cost policies. ([omnigent.ai](https://omnigent.ai/), Databricks announce)
- **Postma AgentOS (ref)** — Goal spend cap, max duration, stuck after ~19 identical iterations. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Open Company** — Token silo / budget dial; spend metered onto the line. ([opencompany.sh](https://opencompany.sh/))

## `work.skills_library`

- **Multica** — Skill library shared across agents. ([multica.ai](https://multica.ai/))
- **HQ** — Team skills accumulate and sync. ([hqforwork.com](https://hqforwork.com/))
- **Nairi** — Reusable prompts & workflows. ([nairi.ai](https://nairi.ai/))

## `work.queue`

- **Multica** — Explicit task queue semantics and WebSocket progress. ([multica.ai](https://multica.ai/))
- **Paperclip** — Heartbeats + ticket assignment wake agents. ([paperclip.ing](https://paperclip.ing/))

---

# Bundle 3 — Session lifecycle

## `session.record` / `session.stream` / `session.cost`

- **Omnigent** — Uniform sandboxed session; tool streams; cost tracked for policies; REST + multi-surface access. ([omnigent.ai](https://omnigent.ai/))
- **Nairi** — Full execution trace in tasks UI. ([nairi.ai](https://nairi.ai/))
- **Paperclip** — Full tool-call tracing on tickets; cost per agent/task/project. ([paperclip.ing](https://paperclip.ing/))
- **Polygraph** — Session history with description, PRs, traces; reference past sessions. ([trypolygraph.com](https://trypolygraph.com/))
- **Postma AgentOS (ref)** — Session entity with status, toolCallLog, costUsd, commit SHAs. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))

## `session.provision` / `session.destroy`

- **Postma AgentOS (ref)** — Ephemeral container: clone → inject → work → commit → **destroy**; next run clean. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Nairi** — Each agent in its own container inside org tenant. ([nairi.ai](https://nairi.ai/))
- **Omnigent** — Launch on local machine or hosted sandboxes (Modal, Daytona, …). ([Databricks announce](https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents))

## `session.resume` / `session.share` / `session.search`

- **Polygraph** — Hand off session across agents (repos/branches/PRs/logs travel); session history searchable. ([trypolygraph.com](https://trypolygraph.com/))
- **Omnigent** — Share live session; comment; co-drive; same session on web/mobile/desktop/API. ([omnigent.ai](https://omnigent.ai/))
- **Delta (fleet)** — Thread + worktree replicated; cloud runner keeps going; share link. ([zed.dev/blog/introducing-delta](https://zed.dev/blog/introducing-delta)) — fleet, not full OS, but strong session continuity pattern

## `session.pause_inbox`

- **Postma AgentOS (ref)** — `waiting-inbox`; human reply resumes session. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Omnigent** — Risk-based escalation / human approval in contextual policies. ([omnigent.ai](https://omnigent.ai/))
- **Paperclip** — Ticket thread is the human↔agent channel with approve/override. ([paperclip.ing](https://paperclip.ing/))

## `session.commit`

- **Postma AgentOS (ref)** — Commit if git-write granted; record SHAs. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Polygraph** — Coordinated PRs / one place for PRs and CI as part of cross-repo session. ([trypolygraph.com](https://trypolygraph.com/))
- **Nairi** — Agents open PRs from Slack tasks. ([nairi.ai](https://nairi.ai/))

---

# Bundle 4 — Isolation & policy

## `policy.default_deny` / `policy.per_agent_mcp` / `policy.per_agent_repo` / `policy.filesystem_acl` / `policy.network_allowlist`

- **Postma AgentOS (ref)** — Hard product requirements: default deny; per-agent MCP/repo/FS/network; FS via MCP with server-side ACL; network allowlist as second wall. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Omnigent** — OS sandbox: restrict FS/network; hide credentials; broker on egress; YOLO safely. Contextual policies beyond allow/deny (e.g. after npm install, require approve to git push). ([omnigent.ai](https://omnigent.ai/), Databricks announce)
- **Nairi** — Secrets as placeholders; domain-pinned; each agent own container; self-host daemon. ([nairi.ai](https://nairi.ai/))
- **Cloudflare OS** — Agents start with no access; zero-trust workspace; isolation + policies. ([blog](https://blog.cloudflare.com/cloudflare-os/), [os.cloudflare.app](https://os.cloudflare.app/))
- **HQ** — `hq run` uses secrets at runtime without printing/pasting. ([hqforwork.com](https://hqforwork.com/))

## `policy.secrets_vault` / `policy.secret_domain_pin`

- **Nairi** — Vault; domain-pinned keys; stand-ins in agent context. ([nairi.ai](https://nairi.ai/))
- **Omnigent** — Credentials hidden from agent; injected on approved egress. ([omnigent.ai](https://omnigent.ai/))
- **Postma AgentOS (ref)** — Secret Manager refs; inject only listed keys. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **HQ** — Shared API keys/logins; agents use via `hq run`. ([hqforwork.com](https://hqforwork.com/))

## `policy.spend` / `policy.approvals` / `policy.audit` / `policy.org_rules`

- **Paperclip** — Hard budget stop; board approval for hires/strategy; immutable audit log on tickets. ([paperclip.ing](https://paperclip.ing/))
- **Omnigent** — Spend caps + risk escalation in code at meta-harness layer. ([omnigent.ai](https://omnigent.ai/))
- **HappyRobot** — Evals + governance for enterprise-critical flows (platform claim). ([happyrobot.ai](https://www.happyrobot.ai/))
- **Sierra / Agentforce** — Guardrails/systems in CX/CRM — **verify** how much is code policy vs product packaging.

---

# Bundle 6 — Routing (harness / runner / model)

## `route.multi_harness` / `route.swap_harness` / `route.compose`

- **Omnigent** — Primary wedge: common API over CLIs + SDKs; one-line swap; compose multi-harness teams. ([omnigent.ai](https://omnigent.ai/))
- **Paperclip** — Explicitly: uses Claude Code/OpenClaw/etc.; orchestrates them into a company. ([paperclip.ing](https://paperclip.ing/))
- **Nairi** — Multi-harness per agent; “rent the intelligence, own the context.” ([nairi.ai](https://nairi.ai/))
- **Multica** — Management layer over coding CLIs; open to add backends. ([multica.ai](https://multica.ai/))
- **Polygraph** — Agent-agnostic; plugs into existing harnesses. ([trypolygraph.com](https://trypolygraph.com/))
- **LifeOS** — Intent engineering across Claude Code / Cursor / Codex — **verify** swap depth. ([ourlifeos.ai](https://ourlifeos.ai/))

## `route.runner_cloud` / `route.runner_local` / `route.runner_policy`

- **Omnigent** — Local or hosted sandbox providers (Modal, Daytona, Fly, Railway…). ([Databricks announce](https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents))
- **Postma AgentOS (ref)** — Cloud Claude managed agents vs cheap local VM (Claude YOLO / Grok); per-agent and per-goal routing. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Nairi** — Managed cloud or self-hosted `nairid`. ([nairi.ai](https://nairi.ai/))
- **Multica** — Local daemons + cloud runtimes in one panel. ([multica.ai](https://multica.ai/))

## `route.model_router` / `route.role_dispatch`

- **Omnigent** — Model routing in contextual policies; Polly/Debby orchestration patterns. ([omnigent.ai](https://omnigent.ai/))
- **Paperclip** — Org-chart / goal dispatch; heartbeat wakes the right agent. ([paperclip.ing](https://paperclip.ing/))
- **Postma AgentOS (ref)** — Goal orchestrator chooses next specialist from allow list. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Open Company** — Dispatch by business role owning the function. ([opencompany.sh](https://opencompany.sh/))

---

# Bundle 7 — Human interrupt & multiplayer

## `human.inbox` / `human.mcq` / `human.push`

- **Postma AgentOS (ref)** — Inbox MCP only when stuck/need decision; MCQ; PWA + push. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Paperclip** — Ticket thread as structured interrupt/approve channel. ([paperclip.ing](https://paperclip.ing/))
- **Omnigent** — Escalation / approvals in policy; multi-device session access. ([omnigent.ai](https://omnigent.ai/))

## `human.channels` / `human.web_ui` / `multi.shared_workspace` / `multi.no_per_seat`

- **Nairi** — Slack/Discord primary; web app; no per-seat team plan. ([nairi.ai](https://nairi.ai/))
- **Multica** — Web board + activity; open source self-host. ([multica.ai](https://multica.ai/))
- **HQ** — Email/Slack agents on shared company context; desktop Company-OS workspace. ([hqforwork.com](https://hqforwork.com/))
- **Palette (fleet)** — Shared folders + multi-harness for whole team. ([palette.team](https://palette.team/))
- **QM / AQ (fleet)** — Multiplayer Slack/web ADE surfaces. ([qm.ycombinator.com](https://qm.ycombinator.com/), [aq.dev](https://aq.dev/))

## `multi.thread`

- **Omnigent** — Co-drivable live session as collaboration place. ([omnigent.ai](https://omnigent.ai/))
- **Polygraph** — Session handoff across people/agents. ([trypolygraph.com](https://trypolygraph.com/))
- **Delta (fleet)** — Thread-centric multiplayer coding with agents. ([zed blog](https://zed.dev/blog/introducing-delta))

## `human.always_chat` (usually adjacent)

- **Grok Bot / OpenWorker / Hermes** — Desktop/always-on teammates; map here only as contrast, not OS-core. ([x.ai/bot](https://x.ai/bot), [OpenWorker](https://github.com/andrewyng/openworker), [Hermes](https://github.com/nousresearch/hermes-agent))

---

# Bundle 5 — Memory & continuity

## `memory.session_store` / `memory.cross_session` / `memory.org`

- **Polygraph** — Primary wedge: memory that survives sessions; institutional handoff; past session recall. ([trypolygraph.com](https://trypolygraph.com/))
- **Omnigent** — Server holds shared history/policies across harness swaps. ([omnigent.ai](https://omnigent.ai/))
- **HQ** — Decisions/docs/playbooks accumulate; every agent starts from HQ. ([hqforwork.com](https://hqforwork.com/))
- **HappyRobot** — Context captured by doing work compounds into living business model. ([happyrobot.ai](https://www.happyrobot.ai/))
- **metaharness.tools (ref)** — Distilled memory / “dreaming” as capability map item. ([metaharness.tools](https://metaharness.tools/))

## `memory.repo_graph` / `repo.multi` / `repo.coord_pr`

- **Polygraph** — Indexes repos; package/API graph; synthetic monorepo; coordinated PRs/CI. ([trypolygraph.com](https://trypolygraph.com/))
- **metaharness.tools (ref)** — Cross-repo provisioning/work as meta-harness capability. ([metaharness.tools](https://metaharness.tools/))

## `memory.company_brain` / `memory.artifact_store`

- **HQ** — Explicit company brain. ([hqforwork.com](https://hqforwork.com/))
- **Postma AgentOS (ref)** — R2 + filesystem MCP for durable artifacts outside ephemeral containers. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Cloudflare OS** — Shared org workspace with controlled data access. ([blog](https://blog.cloudflare.com/cloudflare-os/))

## `memory.citations` / retrieve

- **Cerebras Knowledge (retrieve)** — Meet data where it lives; answer with citations. ([blog](https://www.cerebras.ai/blog/how-we-built-our-knowledge-base))
- **Cloudflare OS** — Listed under retrieve-ish org access claims — **verify**.

---

# Bundle 8 — Triggers & automation

## `trig.webhook` / `trig.cron` / `trig.event` / `trig.chain_on_approve`

- **Postma AgentOS (ref)** — Webhooks (support inbound, bug report); cron automations; approval → fix chain. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Paperclip** — Heartbeat schedules; ticket assignment as wake event. ([paperclip.ing](https://paperclip.ing/))
- **Multica** — Unattended overnight runs via task lifecycle. ([multica.ai](https://multica.ai/))
- **Nairi** — Public API for custom flows; Slack messages as intake. ([nairi.ai](https://nairi.ai/))
- **Open Company** — Continuous role work on a budgeted loop (automation as default mode). ([opencompany.sh](https://opencompany.sh/))
- **HappyRobot** — Event-heavy enterprise workflows (outage, FNOL, track & trace). ([happyrobot.ai](https://www.happyrobot.ai/))

---

# Bundle 0 — Identity & packaging

## `id.definition` / `id.opensource` / `id.selfhost` / `id.yaml` / `id.cli` / `id.api` / tenancy

- **Omnigent** — Calls itself meta-harness; Apache 2.0; CLI/install; YAML agents; multi-surface API. ([omnigent.ai](https://omnigent.ai/))
- **Polygraph** — Calls itself meta-harness; brew install; early-access free. ([trypolygraph.com](https://trypolygraph.com/))
- **Paperclip** — MIT; `npx paperclipai onboard`; local embedded Postgres or remote; multi-company isolation. ([paperclip.ing](https://paperclip.ing/))
- **Open Company** — OSS self-host default; BYO model keys. ([opencompany.sh](https://opencompany.sh/))
- **Nairi** — Managed + OSS daemon `nairid`; Team/Hobby plans. ([nairi.ai](https://nairi.ai/))
- **Multica** — Fully OSS; self-host. ([multica.ai](https://multica.ai/))
- **Cloudflare OS** — Open platform claim. ([os.cloudflare.app](https://os.cloudflare.app/))
- **Postma AgentOS (ref)** — Single-operator; YAML + `agentos` CLI push/pull. ([gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4))
- **Agno** — AgentOS / BYOC platform — keep as borderline until we map features tightly. ([agno.com](https://www.agno.com/))

---

# Bundle 10 — Execution substrate (how hands run)

*OS products that declare an approach, then standalone substrate.*

## Declared by OS / partial OS

- **Nairi** — Dedicated **containers** per agent; optional self-host K8s. → `exec.container`
- **Omnigent** — **OS sandbox** + hosted providers (Modal, Daytona, …) or local. → `exec.container` / provider sandboxes + `policy.sandbox`
- **Postma AgentOS (ref)** — Ephemeral **container** (cloud SDK) or **local VM** worker. → `exec.container` + `exec.local_process` / VM
- **Multica** — Local daemon process + cloud runtimes. → `exec.local_process` + cloud
- **eve (partial)** — Harness outside; sandbox adapter (Vercel Sandbox / Docker / …). → `exec.harness_outside` + `exec.container`
- **Ralph Loop (partial)** — Agentic CLIs inside **Docker Sandboxes**. → `exec.docker_sandbox`
- **Rivet agentOS** — In-process OS; mount sandboxes; wraps Claude Code/Codex/OpenCode/Pi. → `exec.isolate` + `exec.harness_outside`
- **Amp Orbs** — Remote machine per thread (32GB/16 core; sleep). → `exec.dedicated_computer`
- **Cloudflare Computer** — Shared FS; isolate first, container when needed. → `exec.hybrid_isolate_container`
- **Flue** — CF-native harness-outside-sandbox (modified Pi). → `exec.harness_outside`

## Standalone substrate (index approaches briefly)

| Project | Approach | Features touched |
|---|---|---|
| **E2B** | Ephemeral cloud sandboxes for code-running agents | `exec.container` |
| **Fly Sprites** | Hardware-isolated computers; bill→0 when idle; durable FS | `exec.microvm`, `exec.scale_to_zero`, `exec.dedicated_computer` |
| **Naïve** | Warm isolates / economics for always-on agents | `exec.isolate`, `exec.warm_pool` |
| **Ona** | Dedicated sandboxed agent computers / API-first envs | `exec.dedicated_computer` |
| **Daytona** | Composable computers for AI-generated code | `exec.dedicated_computer` |
| **CreateOS** | Firecracker microVMs; fast cold start | `exec.microvm` |
| **Unikraft** | ~10ms cold start; stateful scale-to-zero; network shield | `exec.microvm`, `exec.scale_to_zero`, `exec.network_shield` |
| **Firecracker** | microVM VMM primitive | `infra-primitive` / `exec.microvm` |
| **Docker Sandboxes** | Disposable Docker isolation for agents | `exec.docker_sandbox` |
| **OpenAI Sandbox Agents** | Explicit harness vs compute split; sandbox = hands | `exec.harness_outside`, `exec.managed_session` |
| **Modal** | Serverless containers; common Omnigent target | `exec.container` |
| **Vercel Sandbox** | eve’s default deployed sandbox backend | `exec.container` |
| **Clam** | OpenClaw inside secure VM | `exec.dedicated_computer` |
| **Agency** | K8s control plane + stateful runner pods | `exec.container` (+ orchestration of substrate) |

---

# Coverage sketch (core OS × core wedges)

See [`CANDIDATES.md`](./CANDIDATES.md) for demotions.

| Project | Strongest wedge (from sources) | Thin / unknown |
|---|---|---|
| **Polygraph** | Memory + repo graph + session handoff | Work board, budgets, role catalog |
| **Omnigent** | Multi-harness swap + policy sandbox + live collab | Org chart / ticket company model |
| **Paperclip** | Org/work/budget/governance over any heartbeat agent | Deep FS/network deny (says agents are yours to secure) |
| **Nairi** | Team Slack fleet + per-agent container + vault + multi-harness | Goals/DoD orchestrator |
| **Multica** | Task queue lifecycle + skills + multi-CLI | Strong network ACL story |
| **Open Company** | Business-role OS + budget/revenue loop | Multi-harness coding depth |
| **HappyRobot** | Enterprise work + compounding ops context + evals | Multi-harness coding swap |
| **Cloudflare OS** | Zero-trust org workspace | Agent fleet work graph depth — **watch** |
| **Postma (ref)** | Most complete *spec* of the OS feature surface | Not a shipped product |

### Demoted (still cited where instructive)

| Project | Layer | Strongest wedge | Why not core OS |
|---|---|---|---|
| **HQ** | `adjacent` | Company brain, `/commands`, vault, Slack/email agents | Context layer under tools — not work-board fleet OS |
| **LifeOS** | `harness` | Intent/TELOS over Claude Code·Cursor·Codex | Personal direction layer, not multi-agent fleet |
| **CRHQ** | `fleet` | Satellite VPS + skills + use-case workers | Managed workers on your box, not org-chart OS |
| **Agno** | `control` | AgentOS APIs, HITL, sessions, BYOC | Build-your-platform control plane |
| **Sierra** | `adjacent` | CX agents, Ghostwriter, guardrails, monitors | Conversational CX platform |
| **Agentforce** | `adjacent` | Manager + specialists, Atlas 3.0, A2A (Summer ’26 GA) | CRM-bound multi-agent orchestration |

---

## Gaps / next research passes

1. ~~Deep-read Sierra, Agentforce, LifeOS, CRHQ, Agno, HQ~~ → done; locked in [`CANDIDATES.md`](./CANDIDATES.md).  
2. Fill remaining FEATURES.md IDs still empty (many `surf.*`, `obs.*`, `tools.*`).  
3. Deeper Cloudflare OS primary pass before essay weight.  
4. ~~**Next build:** site IA~~ → shipped: definition E + Operator OS + Features (approach prose) + Field.

## Revision

- **v1** — 2026-08-15. Core bundles + memory/triggers/packaging/execution from primary pages + Postma gist + prior Reader pulls.
- **v1.1** — 2026-08-15. Verify pass; demotions applied.
