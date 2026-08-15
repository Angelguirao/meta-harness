# Landscape project list (draft v1)

Companion to [`FEATURES.md`](./FEATURES.md).

**Definition (E):** meta-harness = **operator OS for a fleet of agents**.

**This doc:** complete candidate list + layers.  
**Approaches:** [`FEATURE_MAP.md`](./FEATURE_MAP.md).  
**Core vs demoted:** [`CANDIDATES.md`](./CANDIDATES.md).

### Layer hint legend

| Hint | Meaning |
|---|---|
| `os-candidate` | Plausible full operator OS (fleet + work + isolation + walk-away) — primary fill targets |
| `os-partial` | Strong control / durable-run / loop piece — not clearly full OS alone |
| `fleet` | Multiplayer ADE / shared agent surface — may feed OS features without being the OS |
| `harness` | Agent muscle / coding (or general) loop product |
| `substrate` | Execution plane: container / microVM / isolate / computer / managed compute |
| `work` | Work graph / trusted issues only |
| `observe` | Traces / evals |
| `retrieve` | Knowledge / citations |
| `framework` | Libraries to build loops — you still build the OS |
| `optimize` | Searches harness *code* (other sense of “meta-harness”) |
| `adjacent` | Coworker / always-on agent — not the fleet OS |
| `reference` | Spec / blueprint / essay — not a product peer |
| `infra-primitive` | Low-level VMM / runtime building block |

---

## A. Operator OS candidates (`os-candidate`)

Locked in [`CANDIDATES.md`](./CANDIDATES.md). Layer moves for demotions are applied below.

| ID | Name | By | URL | One-line |
|---|---|---|---|---|
| `polygraph` | Polygraph | Nx | https://trypolygraph.com/ | Cross-repo graph + durable/shared session memory behind harnesses |
| `omnigent` | Omnigent | Databricks | https://omnigent.ai/ | Runner over many harnesses; policy + sandbox; shareable sessions |
| `happyrobot` | HappyRobot | HappyRobot | https://www.happyrobot.ai/ | Ops AI workers + living business context |
| `paperclip` | Paperclip | Paperclip | https://paperclip.ing/ | Org chart, budgets that halt, ticket traces; multi-harness |
| `nairi` | Nairi | Nairi | https://nairi.ai/ | Team-shared Claude Code/Codex/OpenCode; containers; vault; Slack |
| `multica` | Multica | Multica | https://multica.ai/ | Task lifecycle over many CLIs; skills; daemon runtimes |
| `open-company` | Open Company | Zeenie AI | https://opencompany.sh/ | Six AI employees; token budget → work → revenue; self-host |
| `cloudflare-os` | Cloudflare OS | Cloudflare | https://os.cloudflare.app/ / https://blog.cloudflare.com/cloudflare-os/ | Zero-trust org workspace for agents/apps — **watch** (thin public surface) |

---

## B. Partial control / durable run (`os-partial`)

| ID | Name | By | URL | One-line (provisional) |
|---|---|---|---|---|
| `eve` | eve | Vercel | https://vercel.com/eve / blog introducing eve | Filesystem-first agents; durable sessions; sandbox; HITL; channels |
| `langsmith-deployment` | LangSmith Deployment | LangChain | https://www.langchain.com/langsmith/deployment | Durable agent server: threads, HITL, checkpoints |
| `ralph-loop` | Ralph Loop | Ralph Loop | https://ralphloop.sh/ | Long-running loop over task list in Docker sandboxes |
| `flue` | Flue | Cloudflare | (see Flurry / CF docs) | Harness-outside-sandbox with CF primitives (modified Pi) |
| `background-agents` | background-agents | Cole Murray | https://github.com/ColeMurray/background-agents | OSS background coding agents; CF control + Modal data plane |
| `software-factory` | Software Factory | software-factory.dev | https://software-factory.dev/ | Multi-agent SDLC factory (plan/build/review/deploy) |
| `withone` | One / withone.ai | withone | https://www.withone.ai/ | Command center for AI workforce; skills/cron/channels |
| `pullfrog` | Pullfrog | Pullfrog | https://pullfrog.com/ | Agent-powered GitHub bot (narrower surface) |
| `agno` | Agno AgentOS | Agno | https://www.agno.com/ | Build/run agent platform; APIs, HITL, sessions, BYOC — **control**, not the OS product |

---

## C. Fleet / multiplayer ADE (`fleet`)

| ID | Name | By | URL | One-line (provisional) |
|---|---|---|---|---|
| `qm` | QM | YC | https://qm.ycombinator.com/ | Multiplayer Slack/web harness; scoped sandboxes |
| `aq` | AQ | AQ | https://aq.dev/ | Multiplayer ADE; live terminals on your VM |
| `delta` | Delta | Zed | https://www.delta.dev / https://zed.dev/blog/introducing-delta | Multiplayer threads; code + conversation connected; harness sync |
| `palette` | Palette | Palette | https://palette.team/ | Team shared files + Claude Code/Codex/Gemini |
| `langsmith-fleet` | LangSmith Fleet | LangChain | https://www.langchain.com/ | Company-wide agents from plain-language tasks |
| `crhq` | CRHQ | CRHQ | https://crhq.ai/ | Satellite VPS + skills + use-case workers — managed fleet, not org OS |

---

## D. Harnesses / muscle (`harness`)

| ID | Name | By | URL | One-line (provisional) |
|---|---|---|---|---|
| `claude-code` | Claude Code | Anthropic | https://docs.anthropic.com/ | Terminal/IDE coding harness |
| `codex` | Codex CLI | OpenAI | https://openai.com/ | Coding agent CLI harness |
| `opencode` | OpenCode | OpenCode | (ecosystem) | Open coding harness often paired with Nairi/Multica |
| `pi` | Pi | Pi | (ecosystem) | Harness commonly wrapped by Omnigent/agentOS |
| `cursor-agent` | Cursor Agent | Cursor | https://cursor.com/ | IDE-native agent harness |
| `warp-agent` | Warp Agent CLI | Warp | https://www.warp.dev/ | Terminal mux agent; cloud + multi-harness delegation |
| `amp` | Amp | Amp | https://ampcode.com/ | Coding agent; Orbs = remote machines (also substrate) |
| `deepseek-harness` | DeepSeek Harness | DeepSeek | https://deepseek.com/harness/en/ | Pluginized harness (models/tools/sessions/sandboxes/UI) |
| `openclaw` | OpenClaw | OpenClaw | (ecosystem) | Personal assistant / skills runtime — often under OS products |
| `aider` | Aider | Aider | https://aider.chat/ | Git-native coding harness |
| `cline` | Cline | Cline | https://cline.bot/ | Open VS Code agent harness |
| `goose` | Goose | (Block et al.) | (ecosystem) | Local agent harness |
| `openai-agents-sdk` | OpenAI Agents SDK | OpenAI | https://openai.github.io/openai-agents-python/ | SDK harness + sandbox agents path |
| `claude-agent-sdk` | Claude Agent SDK / Managed Agents | Anthropic | Anthropic managed agents | Hosted loop; sandboxes configurable |
| `prime-agent` | Prime Agent | PrimeIntellect | https://github.com/PrimeIntellect-ai/prime-agent | Self-improving RLM agent for long tasks |
| `lifeos` | LifeOS | Miessler | https://ourlifeos.ai/ | Personal intent OS over Claude Code/Cursor/Codex — not a fleet |

---

## E. Execution substrate (`substrate` + `infra-primitive`)

| ID | Name | By | URL | Class (provisional) |
|---|---|---|---|---|
| `e2b` | E2B | E2B | https://e2b.dev/ | container / cloud sandbox |
| `sprites` | Fly Sprites | Fly | https://fly.io/sprites | microVM / sleepable computer |
| `naive` | Naïve | Naïve | https://usenaive.ai/ | warm isolate / agent computer economics |
| `ona` | Ona | Ona | https://ona.com/ | dedicated agent computer (ex-Gitpod) |
| `daytona` | Daytona | Daytona | https://www.daytona.io/ | composable computers for AI code |
| `createos` | CreateOS | CreateOS | https://createos.sh/ | hardware-isolated sandbox platform |
| `rivet-agentos` | Rivet agentOS | Rivet | https://github.com/rivet-dev/agentos | isolate / in-process; mount sandboxes; wrap harnesses |
| `cloudflare-computer` | @cloudflare/computer | Cloudflare | https://blog.cloudflare.com/cloudflare-computer/ | hybrid isolate + container workspace |
| `cloudflare-sandbox` | CF Dynamic Workers / sandboxing | Cloudflare | https://blog.cloudflare.com/dynamic-workers/ | isolate sandboxing |
| `amp-orbs` | Amp Orbs | Amp | https://ampcode.com/news/agents-in-orbs | dedicated remote machine for Amp agents |
| `docker-sandboxes` | Docker Sandboxes | Docker | Docker blog / HN | disposable container sandboxes |
| `modal` | Modal | Modal | https://modal.com/ | serverless containers (common Omnigent/backend target) |
| `vercel-sandbox` | Vercel Sandbox | Vercel | Vercel docs | sandbox behind eve |
| `openai-sandboxes` | OpenAI Sandbox Agents | OpenAI | https://developers.openai.com/api/docs/guides/agents/sandboxes | harness outside; compute in sandbox |
| `unikraft` | Unikraft | Unikraft | https://unikraft.com/ | microVM platform; ~10ms; scale-to-zero |
| `firecracker` | Firecracker | AWS | https://firecracker-microvm.github.io/ | microVM VMM primitive |
| `gvisor` | gVisor | Google | https://gvisor.dev/ | userspace kernel isolation |
| `agency` | Agency | (enterprise writeup) | Readwise / blog | K8s sandbox orchestration control + runners |
| `clam` | Clam | Clam | https://tryclam.com/ | OpenClaw in a secure VM |
| `runwork-sandbox` | Runwork Agent Sandbox | Runwork | https://www.runwork.ai/features/agent-sandbox/ | Claude CLI in isolated sandboxes |
| `helix-agent-virt` | Helix Agent Virtualization | Helix | https://helix.ml/use-cases/agent-virtualization | agent virtualization framing |
| `k8s-agent-sandbox` | Kubernetes Agent Sandbox | CNCF-ish | https://agent-sandbox.github.io/ | K8s agent sandbox project |

---

## F. Single-organ / observe / retrieve / work

| ID | Name | Hint | URL |
|---|---|---|---|
| `beads` | Beads | `work` | https://beads.gascity.com/ |
| `langsmith` | LangSmith | `observe` | https://www.langchain.com/ |
| `cerebras-knowledge` | Cerebras Knowledge | `retrieve` | https://www.cerebras.ai/blog/how-we-built-our-knowledge-base |
| `semantica` | Semantica | `retrieve` | https://getsemantica.ai/ |
| `withone-knowledge` | withoneai/knowledge | `retrieve` | https://github.com/withoneai/knowledge |

---

## G. Frameworks (`framework`)

| ID | Name | By | URL |
|---|---|---|---|
| `langgraph` | LangGraph | LangChain | https://www.langchain.com/langgraph |
| `langchain` | LangChain | LangChain | https://www.langchain.com/ |
| `deepagents` | deepagents | LangChain | https://docs.langchain.com/oss/python/deepagents/overview |
| `mastra` | Mastra | Mastra | https://mastra.ai/ |
| `crewai` | CrewAI | CrewAI | https://www.crewai.com/ |
| `autogen` | AutoGen | Microsoft | https://microsoft.github.io/autogen/ |
| `google-adk` | Agent Development Kit | Google | https://google.github.io/adk-docs/ |
| `cloudflare-agents` | Cloudflare Agents | Cloudflare | https://developers.cloudflare.com/agents/ |
| `ai-sdk` | Vercel AI SDK | Vercel | https://ai-sdk.dev/ |

---

## H. Optimize sense (`optimize`)

| ID | Name | By | URL |
|---|---|---|---|
| `stanford-meta-harness` | Stanford Meta-Harness | Lee et al. | https://yoonholee.com/meta-harness/ |
| `superagentic-metaharness` | metaharness | SuperagenticAI | https://superagenticai.github.io/metaharness/ |

---

## I. Adjacent (`adjacent`)

| ID | Name | By | URL | Note |
|---|---|---|---|---|
| `hq` | HQ | Indigo | https://hqforwork.com/ | Company brain / shared context — not fleet operator OS |
| `sierra` | Sierra | Sierra | https://sierra.ai/ | CX conversational platform |
| `agentforce` | Agentforce | Salesforce | https://www.salesforce.com/agentforce/ | CRM multi-agent orchestration (platform-bound) |
| `openworker` | OpenWorker | Andrew Ng | https://github.com/andrewyng/openworker | |
| `grok-bot` | Grok Bot | xAI | https://x.ai/bot | |
| `hermes` | Hermes Agent | Nous Research | https://github.com/nousresearch/hermes-agent | |

---

## J. References (not products)

| ID | Name | URL | Role |
|---|---|---|---|
| `ref-metaharness-tools` | metaharness.tools | https://metaharness.tools/ | Named the orchestration gap; capability map |
| `ref-postma-agentos` | AgentOS blueprint (Postma → gist) | https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4 | Worked operator-OS spec: roles, Kanban, goals, inbox, deny-by-default, ephemeral sessions, runners |
| `ref-omnigent-announce` | Introducing Omnigent | Databricks blog | Primary source for meta-harness = composition/control/collab |
| `ref-harness-outside` | Run harness outside sandbox (Flurry) | X / essay | Architecture: harness vs compute split; lists eve/Flue/agentOS/Orbs |
| `ref-openai-sandbox-agents` | Sandbox Agents docs | OpenAI | Harness vs compute vocabulary |
| `ref-rubric-harness` | What is an Agent Harness? | https://rubriclabs.com/blog/what-is-an-agent-harness | Harness anatomy |

---

## Counts (v1)

| Hint | Approx. n |
|---|---|
| os-candidate | 14 |
| os-partial | 8 |
| fleet | 5 |
| harness | 15 |
| substrate / infra | 22 |
| work/observe/retrieve | 5 |
| framework | 9 |
| optimize | 2 |
| adjacent | 3 |
| reference | 6 |

---

## Next step

For each feature in `FEATURES.md`, list **relevant project IDs + 1–3 sentence approach** (primary source).  
Suggested fill order:

1. Start with **os-candidate** only under core bundles (agent, work, session, policy, routing, interrupt).  
2. Add **substrate** only under bundle 10 (execution).  
3. Add **harness** only under routing / surfaces where they are the muscle.  
4. Demote/promote `sierra`, `agentforce`, `lifeos`, `crhq`, `agno` after evidence.

## Revision

- **v1** — 2026-08-15. Merged current `landscape.js`, Readwise inbox/tags, Postma gist, Flurry harness-outside list, substrate reading list.
