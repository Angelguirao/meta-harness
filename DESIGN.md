---
version: alpha
name: Meta-Harness Field Notes
description: >
  Public research / field notes on harnesses and agent systems. Reading surface
  with brand-first hero, long-form measure, zinc hatch atmosphere. DM Sans body,
  Space Grotesk sparingly for brand only when needed — or prefer system-adjacent
  sans with hairline rules. Cool zinc + rare amber; not a SaaS landing page.
  Not PersonalOS Workbench. Not Holzen Nox.
colors:
  primary: "#18181B"
  background: "#FAFAFA"
  background-breathe: "#F4F4F5"
  foreground: "#18181B"
  muted: "#71717A"
  accent: "#D97706"
  accent-soft: "rgba(217, 119, 6, 0.1)"
  accent-strong: "#B45309"
  surface: "#FFFFFF"
  border: "#E4E4E7"
typography:
  display:
    fontFamily: DM Sans
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  body-md:
    fontFamily: DM Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.45
rounded:
  sm: 4px
  md: 6px
spacing:
  md: 16px
  lg: 24px
---

## Overview

**Field notes.** Public research writing — brand (`meta-harness`) is the hero, one lede, long-form sections, measure ~38rem. Personality is calm sans reading + zinc hatch/grain atmosphere. Amber only as sparse stack-rule or link hover — never cream fills or chip dashboards.

This is **not** PersonalOS Workbench density, **not** Atlas, **not** Codex Literata, **not** Session Ledger Plex, and **not** Holzen Nox.

## Colors

Imported from `@angelguirao/personal-tokens`.

- **Ground / surface / border:** cool zinc.
- **Accent:** amber — stack rule / sparse hover only.
- No cream panels, no amber-700 chrome blocks.

## Typography

- **Display / body:** DM Sans — clean research sans.
- **Mono:** JetBrains Mono — codes and technical asides.
- Brand name can carry weight; avoid italic display theater.

## Layout

- Brand-first first viewport; one lede.
- Hairline rules; light grain; no card grids as default marketing.
- Prefer none motion; reduced-motion respected if any motion returns.

## Components

Astro + small Radix button island today. Expand with local shadcn only when interaction needs it. Do not import PersonalOS desk components wholesale.

## Do's and Don'ts

**Do**

- Keep brand hero + long-form measure.
- Amber sparse; zinc atmosphere.
- Read this file before restyling.

**Don't**

- SaaS landing cards, numbered marketing lists, scroll-reveal theater by default.
- Cream / terracotta journal stacks.
- PersonalOS mono-chip Workbench as the reading chrome.

## Figma

Deferred.

## Agent prompt guide

1. Portfolio map: `personal-agent/docs/DESIGN-SYSTEMS.md`.
2. Field notes: DM Sans, zinc hatch, brand-first.
3. If a mock looks like PersonalOS desk or Atlas — wrong product.
