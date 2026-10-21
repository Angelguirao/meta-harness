# OOCS — Operator-OS Capability Spec

v0.1 draft of the capability vocabulary used by meta-harness catalogs.

| File | Role |
|------|------|
| [`OOCS-v0.1.md`](./OOCS-v0.1.md) | Normative prose |
| [`feature-ids.json`](./feature-ids.json) | Registry of feature IDs |
| [`schemas/catalog-entry.schema.json`](./schemas/catalog-entry.schema.json) | Entry shape |
| [`fixtures/sample-entry.json`](./fixtures/sample-entry.json) | Example entry |

## Commands

From the repo root:

```bash
npm run spec:extract   # regenerate feature-ids.json from FEATURES.md
npm run validate:spec  # validate sample (or path) against OOCS rules
```

```bash
npm run validate:spec -- packages/spec/fixtures/sample-entry.json
```
