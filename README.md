# Cosmos Atlas

An interactive, cinematic Space & Universe knowledge platform — the history of
the Universe from its earliest describable moment to modern humanity, alongside
the physical laws that explain it.

**Current status: Phase 0 (Foundation).** The architecture, design system,
content model and application shell are built and tested. **No section content
has been written, and the Cosmic Timeline has not been built.** Every section in
the app says so on its own page.

See [PROJECT_PLAN.md](./PROJECT_PLAN.md) for the full architecture and roadmap.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173, also exposed on the LAN
```

To read it on a phone — the primary target device — run `npm run dev` and open
the Network URL it prints from a device on the same Wi-Fi.

```bash
npm run verify     # format check → lint → typecheck → test → build
```

Requires Node 20+.

## What exists today

| Area                        | State                                                                          |
| --------------------------- | ------------------------------------------------------------------------------ |
| Content schema + validator  | Built, tested. Citation and evidence rules are enforced in CI.                 |
| Section registry (14 areas) | Built. Routes, navigation and home cards all derive from it.                   |
| Reference pool              | 14 real primary sources, seeded.                                               |
| Glossary                    | 10 terms, seeded.                                                              |
| Design system               | Tokens, typography, `Panel`, `EvidenceBadge`, `PhaseNotice`, atmosphere layer. |
| Visualization architecture  | Frame, registry, quality tiers, gated frame loop. No renderers yet.            |
| App shell                   | Routing, navigation sheet, reading-depth control, error boundary.              |
| Pages                       | Home, Section, Topic, Method, Not found.                                       |
| Tests                       | 32, across content validation, units and component behaviour.                  |

## The three commitments

1. **Nothing is asserted without a source** — enforced by the content validator.
2. **Every statement declares how firmly it is known** — enforced by the type
   system: a claim cannot exist without an evidence level.
3. **No illustration is presented as an observation** — enforced by
   `VisualizationFrame`, the only path a figure takes to the screen.

`/method` in the running app explains this to readers, rendered from the same
constants the validator enforces.

## Layout

```
src/content/          The scientific corpus. Framework-free, independently testable.
src/design-system/    Tokens, primitives, atmosphere.
src/visualization/    Figure frame, quality tiers, renderer registry.
src/features/         Pages.
src/app/              Routing, providers, layout shell.
```

Dependencies point downward only: `content/` imports nothing from the UI layers.
