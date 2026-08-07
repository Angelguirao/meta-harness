# meta-harness

Public field notes on the layer above AI agent harnesses — problems, nature, landscape, and how [LifeOS](https://github.com/Angelguirao/personal-ai-os) fits. **Not** a product pitch or a mirror of peer dictionaries.

**Live:** [meta-harness.vercel.app](https://meta-harness.vercel.app) (after first deploy)

## Develop

```bash
npm install
npm run dev
npm run build
```

## Design

LifeOS Industrial — see [`DESIGN.md`](./DESIGN.md) and the portfolio map in `personal-agent/docs/DESIGN-SYSTEMS.md`. Sync tokens from the meta-repo:

```bash
# from projects root
node scripts/sync-personal-tokens.mjs
```

## Stack

Astro · React islands · Tailwind 4 · shadcn-style Radix button · motion/react · `@angelguirao/personal-tokens`

## License

MIT
