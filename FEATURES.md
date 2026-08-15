# Meta-harness feature catalog (draft v1)

**Definition (E):** a meta-harness is an **operator OS for a fleet of agents** — you define agents/roles, assign work, isolate what each may touch, and walk away. The runtime/harness underneath is swappable (or at least not the product).

**How to use this doc**
- This is the **complete capability surface** a meta-harness *could* have — not a mandatory checklist.
- Next: landscape project list, then under each feature: projects + approach (prose, not Y/N).
- Cut, merge, or rename freely. IDs are stable handles for later mapping.

**Sense hygiene**
- This catalog is for the **orchestration / operator-OS** sense.
- **Harness optimization** (Stanford Meta-Harness: search over harness code) is out of scope here except as a labeled non-goal.
- **Execution substrate** (Docker, microVM, isolate, …) is included as features the OS *uses or assumes*, not as “being a meta-harness.”

---

## 0. Identity & packaging

| ID | Feature | What it means |
|---|---|---|
| `id.definition` | Explicit meta-harness / AgentOS claim | Product positions itself as the layer above harnesses / OS for agents — not “just a chatbot” or “just a sandbox.” |
| `id.selfhost` | Self-host / BYOC | Operator can run the control plane on their own infra. |
| `id.managed` | Managed cloud control plane | Vendor hosts the OS; operator uses UI/API. |
| `id.opensource` | Open-source control plane | Source available to inspect/fork. |
| `id.yaml` | YAML-as-code / config-as-code | Agents, skills, templates, grants declared in files synced to the plane. |
| `id.cli` | Operator CLI | Create projects/goals/tasks, push/pull config, adjust agents from terminal. |
| `id.api` | Public control API | HTTP/API for custom flows, not only UI. |
| `id.single_operator` | Single-operator design | Built for one human owner (Postma-shaped). |
| `id.team` | Team tenancy | Multiple humans share the same OS/workspace. |
| `id.company` | Company / org tenancy | Org-wide agents, roles, billing, SSO-shaped concerns. |

---

## 1. Agent & role model

| ID | Feature | What it means |
|---|---|---|
| `agent.catalog` | Named agent catalog | Distinct agents with identity (name/title), not one anonymous chat. |
| `agent.role_prompt` | Per-agent role contract | One-job prompts / role definitions per agent. |
| `agent.foundational_prompt` | Shared foundational OS prompt | Common rules (inbox, finish task, least privilege) injected into every session. |
| `agent.skills` | Skills attached per agent | Reusable prompts/scripts/workflows bound to agents. |
| `agent.model` | Per-agent model choice | Different models for planner vs worker, etc. |
| `agent.harness_binding` | Per-agent harness binding | Agent pinned to Claude Code / Codex / OpenCode / Pi / custom. |
| `agent.collaboration_list` | Spawn / collaboration allowlist | Agent may only spawn listed collaborators as subtasks. |
| `agent.templates_roles` | Seed role set | Default roles (spec, plan, review, implement, support, …). |
| `agent.as_employee` | Business-function roles | Roles mapped to company functions (sales, support, accountant, …). |
| `agent.profiles` | Agent profiles in the work UI | Agents appear as first-class actors (status, activity) beside humans. |

---

## 2. Work system (tasks, boards, goals)

| ID | Feature | What it means |
|---|---|---|
| `work.tasks` | Task objects | Durable work units with description, assignee, status. |
| `work.kanban` | Kanban / status machine | e.g. todo → doing → review → done. |
| `work.assign_agent` | Assign task to agent | Same gesture as assigning a human. |
| `work.assign_human` | Assign / leave step to human | Explicit human-owned steps. |
| `work.attachments` | Task attachments | Specs, files, artifacts on the card. |
| `work.activity` | Task activity log | Agent/human notes on the work unit. |
| `work.templates` | Task / workflow templates | Multi-step recipes instantiated into chains. |
| `work.chains` | Follow-up chains | Step N+1 blocked until N is done. |
| `work.approval_gate` | Approval gates | Agent cannot mark done; only human can; API-enforced. |
| `work.schedule_once` | Schedule run-at | Deferred start. |
| `work.recurring` | Recurring tasks | Cron on a task. |
| `work.goals` | Goals / open-ended loops | Long-horizon objective beyond one task. |
| `work.dod` | Definition of done | Checkbox DoD, preferably human-approved before loop starts. |
| `work.orchestrator` | Goal orchestrator | After each session, pick next specialist or stop. |
| `work.progress_log` | Shared progress log | Append-only log across goal sessions. |
| `work.spend_cap` | Spend cap on work/goal | Hard stop when cost ≥ cap. |
| `work.time_cap` | Time / duration cap | Wall-clock stop. |
| `work.stuck_detection` | Stuck detection | Stop after N no-progress iterations. |
| `work.skills_library` | Team skill library | Reusable capabilities compound across agents/tasks. |
| `work.queue` | Task queue / claim lifecycle | enqueue → claim → start → complete/fail (Multica-shaped). |

---

## 3. Session lifecycle

| ID | Feature | What it means |
|---|---|---|
| `session.record` | Session as first-class object | Run has id, status, agent, task/goal link, timestamps, cost. |
| `session.provision` | Provision run environment | Start container/VM/isolate/managed session for the work. |
| `session.inject` | Inject scoped context | Prompts, skills, env, MCP, repos at start. |
| `session.stream` | Live tool/event stream | Watch tool calls / progress in real time. |
| `session.pause_inbox` | Pause for human inbox | Session waits; reply resumes. |
| `session.commit` | Persist via git commit | Commit if policy allows; record SHAs. |
| `session.destroy` | Destroy ephemeral environment | No leftover dirty workspace; next run reinitializes. |
| `session.resume` | Resume / continue session | Durable thread continues (non-ephemeral or checkpointed). |
| `session.share` | Shareable / co-drivable session | Another human joins the same live run. |
| `session.search` | Session search / index | Past sessions findable as context. |
| `session.cost` | Per-session cost tracking | Tokens/dollars attributed to the run. |

---

## 4. Isolation & policy (least privilege)

| ID | Feature | What it means |
|---|---|---|
| `policy.default_deny` | Default deny | No tools/repos/env/network unless granted. |
| `policy.per_agent_mcp` | Per-agent MCP / tool grants | Connections attached by allowlist. |
| `policy.per_agent_repo` | Per-agent repo grants | git-read / git-write per repo mount. |
| `policy.filesystem_acl` | Filesystem ACL | read/write/delete per folder, enforced server-side. |
| `policy.network_allowlist` | Network allowlist | Limited egress hosts; second wall beyond tools. |
| `policy.secrets_vault` | Secrets vault | Secrets by reference; inject at runtime; agent never holds raw where possible. |
| `policy.secret_domain_pin` | Domain-pinned secrets | Key usable only against allowed hosts. |
| `policy.sandbox` | OS / sandbox enforcement | Code execution isolated from control plane. |
| `policy.spend` | Spend / budget policy | Caps, halts, org budgets (not only prompt warnings). |
| `policy.approvals` | Action approval policy | Dangerous tools require human approve. |
| `policy.prompt_injection_assume` | Design for prompt leak | Assume model will try every attached tool; don’t attach what it shouldn’t have. |
| `policy.audit` | Audit log | Who/what agent did; paper trail. |
| `policy.org_rules` | Org rules in code | Policy engine over prompts/tools/actions. |

---

## 5. Memory & continuity

| ID | Feature | What it means |
|---|---|---|
| `memory.session_store` | Durable session store | Transcripts/checkpoints survive beyond the live run. |
| `memory.cross_session` | Cross-session handoff | Next run inherits plan/context, not only the patch. |
| `memory.org` | Org / institutional memory | Coworker sessions contribute to shared knowledge. |
| `memory.dreaming` | Distillation / “dreaming” | Offline pass consolidates runs into reusable knowledge. |
| `memory.company_brain` | Company brain / HQ | Playbooks, decisions, skills as shared starting context. |
| `memory.repo_graph` | Repository knowledge graph | Which repos exist, how they relate, where changes belong. |
| `memory.citations` | Retrieval with citations | Answers grounded in sources (retrieve organ). |
| `memory.artifact_store` | Artifact / object store | Specs, reports, files outside git (e.g. R2). |
| `memory.progress_shared` | Shared goal/task memory | Progress log + shared folder across specialists. |

---

## 6. Routing — harness, runner, model, role

| ID | Feature | What it means |
|---|---|---|
| `route.multi_harness` | Multi-harness support | Claude Code, Codex, OpenCode, Pi, Cursor, … behind one plane. |
| `route.swap_harness` | Swap harness mid-work / one-line | Change muscle without rewriting the shop. |
| `route.compose` | Compose agents / harnesses | Teams of agents; advisor+worker; parallel specialists. |
| `route.runner_cloud` | Cloud managed runner | Vendor/agent-SDK cloud sessions. |
| `route.runner_local` | Local / cheap VM runner | Self-hosted worker (YOLO/local CLI). |
| `route.runner_policy` | Runner routing policy | Planners cloud / workers local; busy→local; per-goal override. |
| `route.model_router` | Model router | Auto or custom routing by task complexity/cost. |
| `route.role_dispatch` | Role-based dispatch | Orchestrator picks next named role. |

---

## 7. Human interrupt & multiplayer

| ID | Feature | What it means |
|---|---|---|
| `human.inbox` | Inbox as interrupt channel | Agents message only when stuck or need a decision. |
| `human.mcq` | Multiple-choice questions | Structured ask-user (radio choices). |
| `human.push` | Push / PWA notify | Mobile notify when done or blocked. |
| `human.channels` | Team channels | Slack / Discord / Teams as operator surfaces. |
| `human.web_ui` | Web operator UI | Tasks, agents, sessions, files in a browser app. |
| `human.desktop` | Desktop operator app | Native/desktop control surface. |
| `human.always_chat` | Always-on chat coworker | Continuous conversational teammate (often adjacent, not OS-core). |
| `multi.shared_workspace` | Shared team workspace | Files/context the whole team and agents share. |
| `multi.thread` | Shared thread / ADE | Multiplayer thread where code + conversation stay tied. |
| `multi.no_per_seat` | Fleet pricing / no per-seat | Whole team shares agents under one subscription shape. |
| `multi.permissions_humans` | Human permission model | Who can approve, view sessions, edit agents. |

---

## 8. Triggers & automation

| ID | Feature | What it means |
|---|---|---|
| `trig.webhook` | Inbound webhooks | External event → scoped job/session. |
| `trig.cron` | Cron automations | Named schedules spawn tasks/agents. |
| `trig.event` | Product events | e.g. issue opened, support message, deploy failed. |
| `trig.chain_on_approve` | Approval → chain | Human approves report → implementation chain starts. |

---

## 9. Repo, workspace & provisioning

| ID | Feature | What it means |
|---|---|---|
| `repo.multi` | Multi-repo awareness | Plane knows more than one repository. |
| `repo.provision` | Provision / clone / worktree | Prepare isolated checkouts before work. |
| `repo.setup` | Setup scripts | Install/bootstrap before agent starts. |
| `repo.coord_pr` | Coordinated PRs | Related changes land together across repos. |
| `repo.mount` | Mount path mapping | Repo → path inside the run environment. |
| `ws.shared_fs` | Shared workspace filesystem | Team folders agents and humans use. |
| `ws.browser_files` | File browser UI | List/open/edit/preview durable files. |

---

## 10. Execution substrate (how hands run)

*Features of the OS’s execution plane — or of standalone substrate products when mapping the landscape.*

| ID | Feature | What it means |
|---|---|---|
| `exec.local_process` | Local process execution | Agent runs on host / SSH target as a process. |
| `exec.container` | Container execution | Docker / OCI container (shared kernel). |
| `exec.docker_sandbox` | Docker Sandboxes product path | Disposable Docker-shaped agent sandboxes. |
| `exec.gvisor` | Userspace kernel isolation | gVisor-class boundary. |
| `exec.microvm` | microVM execution | Firecracker / Unikraft / similar guest kernel. |
| `exec.isolate` | Isolate / in-process runtime | V8/WASM/Workers; not a full Linux box. |
| `exec.hybrid_isolate_container` | Hybrid isolate + container | Light path in isolate; heavy path in container (Cloudflare Computer-shaped). |
| `exec.dedicated_computer` | Dedicated agent computer | Long-lived or sleepable machine UX per agent. |
| `exec.managed_session` | Managed agent session API | Vendor provisions the session (Agent SDK / cloud agents). |
| `exec.warm_pool` | Warm pools | Pre-warmed capacity for faster start. |
| `exec.scale_to_zero` | Scale-to-zero + wake | Idle costs ~0; resume with state. |
| `exec.snapshot` | Snapshots / checkpoints of env | Disk/memory snapshot across pauses. |
| `exec.one_agent_one_machine` | One agent one machine | Hard isolation unit per agent. |
| `exec.harness_outside` | Harness outside sandbox | Control loop outside; tools/FS inside (brain/hands split). |
| `exec.network_shield` | Egress credential shield | Secrets injected on egress, not in agent env. |

---

## 11. Tools, MCP & integrations

| ID | Feature | What it means |
|---|---|---|
| `tools.mcp` | MCP connections | Standard tool servers attached to agents. |
| `tools.builtin_os_mcp` | Built-in OS MCPs | Task/goal/spawn, inbox, filesystem as MCPs. |
| `tools.github` | GitHub integration | Issues/PRs/code via grant. |
| `tools.support` | Support stack integration | Front/Zendesk/etc. scoped to support agents. |
| `tools.browser` | Browser / computer-use | UI-driving tools. |
| `tools.channel_adapters` | Channel adapters | Slack/Discord/… as agent I/O. |
| `tools.openapi` | OpenAPI / HTTP tools | Arbitrary APIs as tools. |
| `tools.1000` | Large tool marketplace | “1000+ tools” style catalogs. |

---

## 12. Observability & evals

| ID | Feature | What it means |
|---|---|---|
| `obs.trace` | Traces / spans | Model + tool timeline per turn/run. |
| `obs.activity_feed` | Global activity feed | Org-wide agent/human actions. |
| `obs.live_viewer` | Live session viewer | Real-time watch UI. |
| `obs.replay` | Replay finished run | Inspect past tool logs. |
| `obs.evals` | Evals / scored suites | Regression tests for agents. |
| `obs.otel` | OpenTelemetry export | Ship spans to existing APM. |
| `obs.usage` | Usage / cost dashboards | Fleet spend visibility. |

---

## 13. Surface area — where the OS shows up

| ID | Feature | What it means |
|---|---|---|
| `surf.slack` | Slack-native ops | @agent in Slack as primary control. |
| `surf.discord` | Discord-native ops | Same for Discord. |
| `surf.ide` | IDE-embedded | Control plane surfaces inside editor. |
| `surf.terminal` | Terminal-native | TUI/CLI as primary. |
| `surf.mobile` | Mobile inbox / steer | Approve/steer from phone. |
| `surf.browser_wasm` | Full app in browser | e.g. heavy client via WASM. |

---

## 14. Explicit non-features (label, don’t confuse)

| ID | Non-feature | Why listed |
|---|---|---|
| `non.optimize_loop` | Harness-code optimization loop | Stanford / SuperagenticAI sense — different object. |
| `non.bare_sandbox` | Sandbox vendor only | Execution without operator OS. |
| `non.bare_harness` | Coding CLI / IDE agent only | Muscle without fleet OS. |
| `non.framework_only` | Library to build loops only | LangGraph-shaped — you still build the OS. |
| `non.coworker_desktop` | Desktop coworker without fleet OS | OpenWorker / Grok Bot-shaped adjacent. |
| `non.observe_only` | Traces/evals only | Observe plane, not operator OS. |

---

## Bundle map (for the page later)

```
Identity & packaging
Agent & role model
Work system
Session lifecycle
Isolation & policy
Memory & continuity
Routing (harness / runner / model)
Human interrupt & multiplayer
Triggers & automation
Repo / workspace provisioning
Execution substrate
Tools / MCP
Observability
Surfaces
```

---

## Revision notes

- **v1** — drafted 2026-08-15 from definition E + Postma AgentOS blueprint + metaharness.tools capabilities + Omnigent/Polygraph/Paperclip/Nairi/Multica/Open Company/HQ/CRHQ/substrate reading list.
- Next doc: **landscape project list** (complete), then fill `feature → project → approach`.
