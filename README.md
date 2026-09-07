# Cosmos Atlas

An interactive, cinematic Space & Universe knowledge platform — the history of
the Universe from its earliest describable moment to modern humanity, alongside
the physical laws that explain it.

**Current status: Phases 0–4 complete.** The foundation, the Cosmic Timeline
(36 cited milestones), Universe & Cosmology (17 topics, 13 figures), Gravity &
Newton (15 topics, 14 figures) and Einstein & Relativity (17 topics, 14
figures) are built. The remaining nine sections say plainly, on their own
pages, that they are not built yet.

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
| Reference pool              | 116 real primary sources.                                                      |
| Glossary                    | 24 terms.                                                                      |
| Design system               | Tokens, typography, `Panel`, `EvidenceBadge`, `PhaseNotice`, atmosphere layer. |
| Visualization architecture  | Frame, registry, quality tiers, gated frame loop. 41 renderers.                |
| App shell                   | Routing, navigation sheet, reading-depth control, error boundary.              |
| Pages                       | Home, Section, Topic, Method, Not found.                                       |
| Tests                       | 164, across content validation, units, pages and scientific-accuracy checks.   |

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
