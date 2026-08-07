# DESIGN.md

This research site shares the **LifeOS Industrial** personal skin.

**Canonical visual law:** [`personal-agent/DESIGN.md`](../personal-agent/DESIGN.md)  
**Tokens:** `@angelguirao/personal-tokens`  
**Portfolio map:** [`personal-agent/docs/DESIGN-SYSTEMS.md`](../personal-agent/docs/DESIGN-SYSTEMS.md)

## Site intent

Public field notes on a forming concept (meta-harness) — not a product marketing clone of peer sites. Industrial zinc + rare amber; Space Grotesk / DM Sans / JetBrains Mono.

**Accent discipline:** amber (`#d97706`) is a rare 1–2px signal only. Never use amber-700 / cream-yellow soft fills as chrome — they read as terracotta. Eyebrows, chips, buttons, and selection stay cool zinc.

## Motion (this surface)

- Section enter: opacity + `translateY` only, ease-out, ~400–500ms, respect `prefers-reduced-motion`.
- Landscape filter: chip press feedback ≤200ms; list crossfade opacity only.
- Ambient: optional `void-breathe` on the canvas — pause when reduced motion.
- Do not animate layout width/height; no mascot theater copied from peers.

## shadcn

Radix-based kit under `src/components/ui/`, CSS vars bridged to Industrial tokens in `src/styles/global.css`. Prefer existing primitives over one-offs.

Do not invent a second personal palette. Holzen Nox is out of scope.
