# Cosmos Atlas — Project Plan

An interactive, cinematic Space & Universe knowledge platform: the history of
the Universe from its earliest describable moment to modern humanity, alongside
the physical laws and theories that explain how any of it works.

This document is the architectural contract for the project. It is written to
be read before writing code, and to be corrected when reality disagrees with
it.

**Status: Phases 0–3 complete.** The foundation, the Cosmic Timeline (36 cited
milestones), Universe & Cosmology (17 topics, 13 figures) and Gravity & Newton
(15 topics, 14 figures) are built. The remaining ten sections are labelled as
unbuilt in the interface.

---

## 1. Project vision

### What this is

An interactive digital science museum, a visual textbook, and a simulation
laboratory in one artifact. A reader should be able to walk in with no
background, follow a single continuous thread from the beginning of the
Universe to the present, and leave understanding not just _what_ happened but
_how we know_.

### What the reader can do

- **Travel cosmic time.** Move continuously through ~62 orders of magnitude of
  time, from the Planck epoch to today, and see what happened at each point.
- **Read at their own level.** Every idea is written three times — essential,
  detailed, technical — and the reader chooses, globally, without hunting for a
  "read more" link.
- **Manipulate physics.** Orbits, spacetime curvature, wave interference, decay
  statistics: the interactive figures are experiments, not decorations.
- **Follow connections.** Topics link to topics along curated edges. Gravity
  leads to relativity leads to black holes leads to thermodynamics.
- **See the boundary of knowledge.** Open questions are first-class content,
  not a footnote — the platform is as clear about what is unknown as about what
  is known.

### What this is not

- Not a news feed, not a blog, not a quiz app.
- Not a place where a striking render is passed off as a photograph.
- Not a site where an unbuilt feature is dressed up with a disabled button or a
  spinner that never resolves. If something is not built, it says so.

### The three commitments

Everything downstream in this document follows from three commitments. They
are implemented as code, not as culture:

1. **Nothing is asserted without a source.** Enforced by
   `validateLibrary` + the content test suite.
2. **Every statement declares how firmly it is known.** Enforced by the
   `EvidenceLevel` field being required on every claim block.
3. **No illustration is presented as an observation.** Enforced by
   `VisualizationFrame`, which is the only path to the screen for a figure and
   always renders the fidelity badge.

---

## 2. Product architecture

### Stack and why

| Concern  | Choice                                          | Reasoning                                                                                                                                     |
| -------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Build    | **Vite 6**                                      | Fast dev loop, first-class code splitting, no config archaeology.                                                                             |
| Language | **TypeScript 5.8, strict**                      | The content model _is_ the product. Types are how "a claim must cite a source" becomes unrepresentable-if-wrong rather than a review comment. |
| UI       | **React 19**                                    | Component model suits a content/visualization split; `lazy` + `Suspense` give per-route and per-figure code splitting for free.               |
| Routing  | **React Router 7**                              | History routing, nested layouts, data-driven route params.                                                                                    |
| Styling  | **Plain CSS + CSS Modules + custom properties** | No runtime cost, no framework lock-in, and design tokens as CSS variables can be read by canvas/WebGL renderers so figures share the palette. |
| Content  | **Typed TS modules**                            | Content is code-reviewed, type-checked, greppable, and diffable. No CMS to run, no fetch waterfall, no build-time schema drift.               |
| Tests    | **Vitest + Testing Library**                    | Same transform pipeline as the app; jsdom is enough for everything below the WebGL line.                                                      |

Deliberately **not** used yet:

- **Three.js / WebGL.** Introduced in Phase 2 (Universe Explorer) or Phase 5,
  whichever needs true 3D first. Most explanatory physics figures are better as
  SVG or Canvas 2D: cheaper on a phone, sharper, accessible, and easier to
  label. Reaching for WebGL first is how mobile performance is lost.
- **A state library.** Route params plus one preferences context cover
  everything so far. Adding Redux/Zustand before there is shared mutable state
  to manage is architecture theatre.
- **A CSS framework.** A premium, distinctive visual identity is the opposite
  of what a utility framework's defaults produce.
- **Web fonts.** A 200 KB font blocks the first thing the reader came for on a
  mobile connection. The display serif is a system stack.

### Layer diagram

```
┌───────────────────────────────────────────────────────────────┐
│ features/          Pages and per-domain UI                    │
│   home  section  topic  method  errors  (timeline → Phase 1)   │
├───────────────────────────────────────────────────────────────┤
│ design-system/     Tokens, primitives, atmosphere              │
│ visualization/     Frame, quality tiers, frame loop, registry  │
├───────────────────────────────────────────────────────────────┤
│ content/           Schema · sections · topics · references     │
│                    glossary · timeline · validation            │
└───────────────────────────────────────────────────────────────┘

Dependency rule: arrows point downward only.
  content/  imports nothing from features/, design-system/ or visualization/.
  It is plain data + pure functions, importable from a bare Node script.
```

That rule is what makes the content set independently reviewable, exportable,
and testable — a scientific reviewer never has to run a bundler.

---

## 3. Application structure

```
src/
├── app/                          Application wiring
│   ├── App.tsx                   Providers → Router → Suspense
│   ├── routes.tsx                Route table (sections are NOT enumerated)
│   ├── ErrorBoundary.tsx
│   ├── layout/
│   │   ├── AppShell.tsx          Persistent frame; never unmounts
│   │   ├── TopBar.tsx            Brand + navigation sheet
│   │   ├── DepthControl.tsx      Global reading-depth selector
│   │   └── RouteFallback.tsx
│   └── providers/
│       ├── ReaderPreferencesProvider.tsx   depth · quality · motion
│       ├── readerPreferencesContext.ts
│       └── useReaderPreferences.ts
│
├── content/                      The scientific corpus (framework-free)
│   ├── schema/                   Types + validation = the accuracy rules
│   │   ├── evidence.ts           EvidenceLevel + citation minimums
│   │   ├── reference.ts          Bibliographic records
│   │   ├── quantity.ts           Values with uncertainties
│   │   ├── depth.ts              essential | detailed | technical
│   │   ├── cosmicTime.ts         Log-time coordinate + formatting
│   │   ├── blocks.ts             The typed content block union
│   │   ├── topic.ts  section.ts  glossary.ts  timeline.ts
│   │   ├── visualization.ts      Fidelity contract for figures
│   │   └── validate.ts           Rules as executable checks
│   ├── sections.ts               ← the 14 areas, as data
│   ├── topics/                   Per-section content (empty until Phase 1)
│   ├── references/               Shared citation pool
│   ├── glossary/                 Term definitions
│   ├── timeline/                 Eras + events (empty until Phase 1)
│   ├── visualizations.ts         Figure specs
│   └── library.ts                Everything, for validation and indexing
│
├── design-system/
│   ├── tokens/                   tokens.css · accents.css
│   ├── styles/                   reset · typography · utilities · global
│   ├── components/               Panel · EvidenceBadge · PhaseNotice
│   └── atmosphere/               StarfieldBackground (decorative, registry-free)
│
├── visualization/
│   ├── core/
│   │   ├── VisualizationFrame.tsx  The only path a figure takes to the screen
│   │   ├── quality.ts              Device tiers and budgets
│   │   ├── useAnimationFrame.ts    Gated, clamped, throttled frame loop
│   │   ├── useInViewport.ts        Viewport + tab-visibility gating
│   │   └── useElementSize.ts       ResizeObserver sizing
│   ├── renderers/                  Figure implementations (from Phase 1)
│   └── registry.ts                 id → { spec, lazy loader }
│
├── features/                     One folder per page family
│   ├── home/  section/  topic/  method/  errors/
│   └── (timeline/ explorer/ search/ … added by their phases)
│
├── lib/                          Tiny shared helpers
└── main.tsx
```

### Conventions

- **One export per file for components**, named after the file.
- **Pages are default exports** — `lazy()` requires it, and it makes the route
  table read cleanly.
- **CSS Modules colocated** with their component, importing only tokens.
- **No barrel files across layers.** `content/schema/index.ts` is the one
  exception, and pages import narrow modules so route chunks stay small.
- **`@/` maps to `src/`** in Vite, TypeScript and Vitest alike.

---

## 4. Navigation

### Model

Three axes, deliberately separate:

1. **Chronological** — the Cosmic Timeline. The spine. Scrolls through time.
2. **Thematic** — the fourteen sections. Reached from the navigation sheet or
   the home page.
3. **Associative** — the knowledge graph. Curated `related` edges and
   `cross-link` blocks inside topics, plus (from Phase 10) search and the
   glossary.

A reader should be able to enter on any axis and transfer to another without
losing their place.

### Routes

| Route                      | Renders   | Notes                                              |
| -------------------------- | --------- | -------------------------------------------------- |
| `/`                        | Home      | Hero + the fourteen sections with honest status    |
| `/method`                  | Method    | How evidence levels and figure fidelity work       |
| `/:sectionSlug`            | Section   | Resolved against the registry — **not** enumerated |
| `/:sectionSlug/:topicSlug` | Topic     | Renders the block list                             |
| `*`                        | Not found |                                                    |

Planned additions, by phase: `/cosmic-timeline` gains an interactive timeline
view (Phase 1), `/search` (Phase 10), `/glossary/:termId` (Phase 10).

Because `/:sectionSlug` resolves against `SECTIONS`, **adding a section adds its
route, its navigation entry and its home-page card with no code change.**

### Navigation UI

A single full-screen sheet, opened from the top bar, rather than a persistent
sidebar. On a phone a sidebar costs a third of the viewport, and the content is
the point. The sheet becomes a two-column list at ≥64rem so desktop is not
penalised for the mobile-first decision. It traps nothing it should not: Escape
closes, focus moves in on open and returns to the trigger on close, and body
scroll is locked while it is open.

The reading-depth control lives inside the sheet — it is a reader setting, not
per-page chrome.

---

## 5. Content / data architecture

### The unit hierarchy

```
Section        one of fourteen areas; a route; an accent
  └─ Topic     the unit of reading and the node of the knowledge graph
       └─ ContentBlock[]   the unit of accountability
```

### Content blocks

A topic body is an ordered array of typed blocks, never a slab of markup. That
is what lets the same content render as a phone article, a side panel beside a
figure, and a source list — and what makes citation a type-level requirement.

| Block           | Purpose                                | Enforced                            |
| --------------- | -------------------------------------- | ----------------------------------- |
| `prose`         | Narrative. Asserts nothing scientific. | —                                   |
| `claim`         | A scientific assertion.                | Evidence level + citation minimum   |
| `quantity`      | Measured values.                       | Source required; uncertainty warned |
| `visualization` | A figure.                              | Must resolve to a registered spec   |
| `callout`       | Note, misconception, history, caution. | —                                   |
| `open-question` | Something science has not answered.    | Must cite                           |
| `definition`    | Inline glossary surfacing.             | Term must exist                     |
| `cross-link`    | An authored graph edge.                | Target must exist                   |

Adding a block kind: add the variant in `schema/blocks.ts`, handle it in
`BlockRenderer` (the switch is exhaustive, so the compiler will insist), and
extend `validateBlock`. Nothing else changes.

### Depth

`DepthText` requires `essential` and allows `detailed` and `technical`.
`resolveDepthText` falls back to the nearest shallower level, so a topic is
never blank because the technical version has not been written. Blocks can also
be scoped to a depth (`depths: ['technical']`) — a derivation appears only to
readers who asked for one.

### References

One shared pool in `content/references/`. A source is entered once and cited
from anywhere; a correction happens in one place. Each record carries a
`supports` note saying exactly what it backs, so a reviewer can audit a citation
without reading the whole paper.

Seeded with 14 real primary sources (Planck 2018, Penzias & Wilson, Hubble
1929, Riess 1998, Perlmutter 1999, Rubin & Ford, LIGO GW150914, EHT M87*,
Einstein 1916, Newton's _Principia_, Patterson 1956, Hublin 2017, Fixsen 2009,
CODATA 2018). The seed exists to prove the citation machinery end to end; the
pool grows with each content phase.

### Quantities

Numbers are structured data — value, unit, uncertainty (symmetric, asymmetric,
or a bound), provenance, sources — never baked into prose. The same measurement
can then appear in a panel, on a chart axis and in a comparison widget without
being retyped, and a revised measurement is a one-line change.

### Cosmic time

Stored once as seconds since the start of the expansion, with `logSeconds`
precomputed (the timeline scrolls on the log axis and must never compute a
logarithm inside an animation frame), plus a `precision` flag — `measured`,
`modelled`, `approximate` — because the early Universe is dated by theory far
more than by observation, and the timeline must say so.

### Validation

`validateLibrary` is the accuracy policy as executable code, run over the whole
corpus by `src/content/library.test.ts`:

- claims meet the citation minimum for their evidence level;
- speculation carries a note saying what would make it testable;
- open questions cite the work that leaves them open;
- values cite a source (and warn without an uncertainty);
- every referenced id — reference, glossary term, topic, visualization,
  section — actually resolves;
- data-driven figures cite their data; every figure has a caption and a text
  description;
- published sections and topics are not empty;
- slugs and reference ids are unique.

An uncited claim fails CI. It does not reach a reader.

---

## 6. Visualization architecture

### The contract

A figure reaches the screen only through `VisualizationFrame`, which pairs a
**spec** (editorial: title, fidelity, caption, description, sources — lives in
the content layer) with a **renderer** (technical: a lazily-loaded React
component). Neither half can render alone. That pairing is what makes the
fidelity badge structurally unavoidable rather than a thing an author might
remember.

### Fidelity levels

| Level         | Meaning                                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-driven` | Drawn from measurements or a published model. **Must cite its data.**                                                                         |
| `to-scale`    | Sizes, distances or times in correct proportion, as the caption states.                                                                       |
| `schematic`   | A diagram of a mechanism. Proportions chosen for clarity.                                                                                     |
| `artistic`    | An illustration. Not a photograph, not a simulation. Badged in a louder colour, because it is the one most likely to be mistaken for reality. |

### What the frame guarantees

- The renderer is code-split and fetched only as the figure nears the viewport.
- Animation is gated on viewport intersection, tab visibility and measured size.
- A device below the figure's `minimumQuality` gets the text description
  instead of a stuttering canvas.
- The text description is the screen-reader label whether or not the canvas
  renders — so a figure is never a hole in the page.
- Sources render under the figure, linked by DOI or arXiv id.

### Renderer contract

Every renderer receives `{ quality, active, reducedMotion, width, height }` and
must honour all five. `active: false` means stop — no timers, no rAF. Particle
counts, resolution scale and target frame rate come from
`QUALITY_BUDGETS[quality]`, never from a hard-coded constant.

### Runtime choice

`svg` for anything static or label-heavy; `canvas2d` for particle fields,
simulations and plots; `css` for pure transitions; `webgl` only when the subject
is genuinely three-dimensional and interactive. The default is the cheapest
runtime that tells the truth.

### Reuse plan

Renderers are built as a small library, not one-offs — `OrbitSimulator`
(Newton, gravity, exoplanets), `SpacetimeGrid` (relativity, black holes),
`WaveField` (quantum, light, gravitational waves), `ScaleComparator` (any two
things whose sizes differ by orders of magnitude), `LogTimeAxis` (the timeline
and any chronology inside a topic). Each is parameterised by content data, so a
new topic usually configures an existing renderer rather than writing one.

### The atmosphere layer

`StarfieldBackground` is decorative and is deliberately **outside** the
registry, so it can never be cited or mistaken for a figure. Its architectural
job is to prove the performance contract end to end: capped pixel ratio,
particle count from the quality budget, frame loop gated on tab visibility, one
static paint and zero ongoing work under reduced motion.

---

## 7. Design system

### Identity

Deep-space dark, one palette. Not a theme preference — it is the subject
matter, and a light mode would fight every figure on the site. Depth comes from
shadow plus a faint rim highlight, never from progressively lighter grey cards.
A high-contrast variant is Phase 11 and slots in as a `[data-contrast]`
override of the semantic token layer alone.

### Tokens

Two layers in `tokens.css`: primitives (raw values) and semantic aliases
(roles). Components reference only the semantic layer.

- **Colour.** Space greys (`--void-*`) and light greys (`--mist-*`) plus accents
  drawn from real astronomical associations — H-alpha red, O III teal, stellar
  blue and yellow — rather than a generic UI palette.
- **Section accents.** Fourteen accents in `accents.css`, applied by setting
  `data-accent` on a container; everything inside reads `--section-accent`
  without knowing which section it is in. Fixed set, so fourteen sections cannot
  drift into fourteen unrelated colour schemes.
- **Evidence colours.** Load-bearing, not decorative — and always paired with a
  text label and a shape cue, so meaning survives greyscale and colour
  blindness.
- **Type.** A system serif for display and headings (considered, museum-like), a
  system sans for body and UI (fast, native on a phone). A fluid `clamp()` scale
  from 360px to 1280px, set once. `--measure: 68ch` caps reading width — the
  single most important legibility control on the site.
- **Motion.** Cinematic means slow and confident, not bouncy. Four durations,
  three easings. `[data-motion="reduced"]` zeroes every duration token at once,
  so a single attribute disables decorative animation across every stylesheet.
- **Space.** A 4px-based ramp. `--touch-target: 44px` is a floor, never reduced.

### Components

Exactly one container primitive — `Panel`, with `quiet` and `bare` variants —
because a museum wall does not have eight kinds of frame. Emphasis comes from
typography and space _inside_ the panel. Anything used more than twice becomes
a component rather than a repeated utility; this is not a utility-first
codebase.

`EvidenceBadge` and `PhaseNotice` are not generic UI: they are the visible
enforcement of two of the three commitments.

### Hierarchy rules

One `ds-display` per page, maximum. Eyebrow labels are the one flourish and are
used sparingly. Every figure gets a caption; every section landing states what
it is before it lists what is in it.

---

## 8. Mobile strategy

The primary device is a phone. That drives structure, not just breakpoints.

- **Portrait first.** Every layout is designed at 360×640 and enhanced upward.
  Breakpoints at 40rem, 48rem and 64rem, in `min-width` only.
- **Landscape is a first-class case,** not an afterthought: figures switch to
  16:9 under `(orientation: landscape) and (max-height: 30rem)` so a phone held
  sideways gets a wide stage rather than a letterboxed square.
- **Touch targets ≥44px,** enforced by `--touch-target` on every control.
- **`svh` not `vh`,** so a collapsing URL bar does not clip the layout.
- **Safe-area insets** respected top and bottom.
- **Zoom is not disabled.** This is a reading platform; `user-scalable=no` is
  an accessibility failure, not a polish detail.
- **`touch-action: manipulation`** on buttons kills the 300ms tap delay;
  `touch-action: none` on figure stages stops a drag inside a simulation from
  scrolling the page.
- **Pointer-only hover effects** — a lift on `:hover` fires on every tap on
  touch and reads as broken, so it is gated behind
  `(hover: hover) and (pointer: fine)`.
- **Sizes come from `ResizeObserver`,** not `window`, so figures stay correct
  inside scrolling panels and across orientation changes.

---

## 9. Performance strategy

### Budgets

| Metric                                        | Target                            |
| --------------------------------------------- | --------------------------------- |
| Initial JS (gzip, shell + vendor)             | ≤ 120 KB                          |
| Per-route chunk (gzip)                        | ≤ 40 KB                           |
| Any single chunk (raw)                        | ≤ 300 KB — Vite warns above this  |
| Largest Contentful Paint, mid-range phone, 4G | ≤ 2.5 s                           |
| Interaction latency in a figure               | ≤ 100 ms                          |
| Sustained frame rate on `medium`              | 60 fps, or an explicit 30 fps cap |

Current Phase 0 build: shell 19.6 KB raw / 7.7 KB gzip, vendor 232 KB raw /
74.2 KB gzip, largest route chunk 16.1 KB raw / 6.3 KB gzip.

### Mechanisms

- **Route-level code splitting.** Every page is `lazy()`. The shell ships
  alone.
- **Figure-level code splitting.** Renderers load through the registry, on
  approach to the viewport. Opening the glossary never downloads a WebGL scene.
- **Quality tiers.** `resolveQualityTier` reads cheap signals — cores, device
  memory, `Save-Data`, pointer coarseness, reduced-motion — once at startup. No
  benchmark loop, because a benchmark on a cold phone is itself a jank source.
  It is deliberately conservative: a mid-range phone lands on `medium` and stays
  smooth rather than landing on `high` and dropping frames. Readers can raise
  the tier by hand; nothing auto-upgrades mid-session.
- **Gated frame loops.** `useAnimationFrame` clamps delta to 50 ms (a tab
  restored after a minute must not deliver a 60-second step), throttles to a
  target fps, and releases its request when inactive.
- **Capped pixel ratio.** 3× on a phone is wasted fill rate; the budget caps at
  1.5–2× and scales resolution below 1 on `low`.
- **No web fonts, no icon font, no runtime CSS engine.**
- **Content is static TS,** tree-shaken and split with the routes that use it —
  no fetch waterfall, no loading skeleton for text.

### Non-goals

No service worker and no offline mode until there is content worth caching
(revisit at Phase 11). No SSR until the SEO case is made; if it is,
`react-router`'s framework mode or a prerender step is the migration path, and
the content layer is already framework-free precisely so that stays cheap.

---

## 10. Testing strategy

Four levels, each with a distinct job:

1. **Content validation** (`library.test.ts`) — the accuracy gate. The whole
   corpus is validated on every run. This is the most important suite in the
   project: it is what makes the scientific commitments enforceable.
2. **Unit tests** — pure logic: depth fallback, cosmic-time formatting, quality
   tier resolution, block validation rules. Fast, no DOM.
3. **Component tests** (Testing Library) — behaviour and the honesty contract:
   an unbuilt section must say it is unbuilt; the nav sheet must list every
   section; depth must be changeable. Queried by role and accessible name, so
   the tests double as accessibility assertions.
4. **End-to-end** (Playwright, from Phase 1) — the timeline gesture on a real
   touch viewport, route transitions, and a Lighthouse budget check in CI.

**Not tested:** exact pixel output of canvas renderers. Instead their _inputs_
are tested (quality budgets, geometry helpers, scale functions) and their
behaviour is asserted at the frame level (does it stop when inactive).

Current state: 32 tests across 7 files, all passing.

### Definition of done for a content phase

- `npm run verify` clean (format, lint, typecheck, test, build).
- Every new claim cites a source; every new figure has a fidelity and a caption.
- Read on a real phone in portrait and landscape.
- No regression against the performance budgets above.

---

## 11. Development workflow

```bash
npm install
npm run dev          # localhost:5173, exposed on the LAN for phone testing
npm run verify       # format:check → lint → typecheck → test → build
```

| Command              | Purpose                                                           |
| -------------------- | ----------------------------------------------------------------- |
| `npm run dev`        | Dev server, host-exposed so a phone on the same Wi-Fi can load it |
| `npm run build`      | Typecheck then production bundle                                  |
| `npm run preview`    | Serve the built bundle                                            |
| `npm run typecheck`  | `tsc --build --force`                                             |
| `npm run lint`       | ESLint (flat config, typescript-eslint, react-hooks)              |
| `npm run test`       | Vitest once                                                       |
| `npm run test:watch` | Vitest in watch mode                                              |
| `npm run format`     | Prettier write                                                    |
| `npm run verify`     | Everything, in the order CI runs it                               |

Test on a real phone, not just a narrow browser window. Emulated touch does not
reproduce thermal throttling, GPU limits, or how a 44px target actually feels.

---

## 12. Git and versioning strategy

- **`main` is always deployable.** Every commit on it passes `verify`.
- **One branch per phase or per topic**, named `phase-<n>-<slug>` or
  `content-<section>-<slug>`.
- **Commits are scoped and legible.** Content commits and engineering commits
  are separate — a scientific reviewer should be able to read a content diff
  without wading through refactors.
- **Slugs are permanent.** A published `slug` is a public URL and appears in
  saved links and citations. Titles may be reworded; slugs may not change. Same
  for reference ids.
- **Corrections are commits.** A scientific error is a bug: fix it, say so in
  the message, and update the topic's `reviewedOn`.
- **Versioning:** `0.x` through the content phases; `1.0.0` when Phases 0–11
  are complete and reviewed.

---

## 13. Extending the platform

The architecture is judged by how little has to change to add something. Adding
each kind of thing:

| To add…               | Do this                                                               | Nothing else changes                                                  |
| --------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **A section**         | Append a record to `sections.ts`, create `content/topics/<slug>/`     | Route, nav entry, home card, phase badge all derive from the registry |
| **A topic**           | Write the module, spread it into `TOPICS`                             | Routing, search, graph, validation read from the registry             |
| **A block kind**      | Add the variant, handle it in `BlockRenderer`, extend `validateBlock` | The exhaustive switch makes the compiler enforce step 2               |
| **A visualization**   | Write the renderer, add a spec, add one loader line                   | Frame, splitting, quality gating, captioning are already there        |
| **An evidence level** | Add to `EVIDENCE_LEVELS` + meta, add a token                          | Badges, the method page and validation all read the constant          |
| **A quality tier**    | Extend `QUALITY_TIERS` and `QUALITY_BUDGETS`                          | Renderers read budgets, never tier names                              |
| **A reading depth**   | Extend `DEPTH_LEVELS` and `DEPTH_META`                                | Fallback resolution is rank-based                                     |

The tell that this is real: `routes.tsx` does not name a single section, and
`MethodPage` renders from the same constants the validator enforces — so the
platform cannot describe a policy it does not implement.

---

## 14. Roadmap

Each phase ends with `verify` clean, a phone read-through, and no unbuilt thing
presented as built.

### Phase 0 — Foundation ✅ complete

Toolchain, strict TypeScript, content schema and validator, section registry,
design system, visualization frame and quality tiers, app shell and routing,
method page, test suite, this document.

### Phase 1 — Cosmic Timeline

The spine. A continuous, gesture-driven log-time axis from the Planck epoch to
now; eras as bands, events as pins, prominence-based label thinning so a phone
never renders hundreds of labels. Events open into topics. First renderers:
`LogTimeAxis`. First real content: eras and the major events, each cited and
each carrying its `precision` flag. Playwright enters here.
_Depends on: Phase 0._

### Phase 2 — Universe Explorer

Cosmology: expansion, the CMB, composition, the standard model and its gaps.
Scale navigation from the observable Universe down to a cluster. Renderers:
`ScaleComparator`, expansion visualiser. WebGL introduced here **only if** the
scale explorer genuinely needs it.
_Depends on: 1._

### Phase 3 — Gravity & Newton ✅ complete

Two published sections, fifteen topics, fourteen figures.

**Gravity** (10 topics): what gravity is; the law of universal gravitation term
by term; mass, weight and the two kinds of mass; free fall; surface gravity;
orbits; escape velocity; tides; planetary systems; the limits of the Newtonian
model. **Newton's Laws** (5 topics): the vocabulary of force, mass and
acceleration, then one page per law, then the Moon test that unified terrestrial
and celestial mechanics.

The interactive laboratories the plan called for were built as several focused
figures rather than one `OrbitSimulator`: `GravityLab` (F = Gm₁m₂/r² with live
masses and separation, and presets labelled by provenance), `OrbitLab`
(velocity-Verlet two-body sandbox with an analytically computed trajectory
classification), `NewtonCannon`, `FreeFallLab` (quadratic drag switchable),
`SecondLawLab`, `FirstLawTrack`, `ThirdLawPairs`, `TidesDiagram`,
`InverseSquareLaw`, `GravityWell`, `EscapeVelocityChart`,
`SurfaceGravityWorlds`, `MoonTest` and `MercuryPrecession`. Every one declares
its model assumptions in its spec caption; none is presented as a simulation of
anything it does not simulate.

The section ends by naming, with citations, exactly where Newtonian gravity
fails — Mercury's perihelion, light deflection, gravitational time dilation,
strong fields — without attempting to explain general relativity, which is
Phase 4.
_Depends on: 1. Independent of 2._

### Phase 4 — Einstein & Relativity

Special then general relativity; simultaneity, time dilation, equivalence,
curvature, and the confirming experiments. Renderer: `SpacetimeGrid`. Reuses
`OrbitSimulator` for the Newton/Einstein comparison — precession shown, not
asserted.
_Depends on: 3._

### Phase 5 — Stars, Galaxies & Black Holes

Stellar formation, fusion, the Hertzsprung–Russell diagram, death and
enrichment; galaxies and the cosmic web; then black holes — horizons,
accretion, Hawking radiation, GW150914 and M87*. The fidelity badge earns its
keep in this phase more than any other.
_Depends on: 2, 4._

### Phase 6 — Quantum Physics

Quantisation, superposition, uncertainty, entanglement, measurement.
Interpretations presented as the open question they are, not resolved for the
reader. Renderer: `WaveField`, double-slit as a reader-run experiment.
_Depends on: 1. Independent of 5._

### Phase 7 — Earth & Life

Planet formation, differentiation, plate tectonics, atmosphere and oceans, and
radiometric dating — how we know any of this. Then the origin of life: what the
earliest evidence actually shows, and how contested it is.
_Depends on: 5._

### Phase 8 — Evolution & Human Evolution

Variation and selection over deep time; the hominin fossil and genetic record;
bipedalism, brains, tools, language, migration. Ancestry as a braided river,
not a ladder — the misconception callout is load-bearing here.
_Depends on: 7._

### Phase 9 — Dark Matter, Dark Energy & Unknowns

The evidence forcing both, the candidates for each, and the honest state of
play. Then the Open Questions section: quantum gravity, the measurement
problem, baryon asymmetry, the Hubble tension, abiogenesis. The
`open-question` block was designed for this phase.
_Depends on: 2, 5, 6._

### Phase 10 — Search, Glossary & Knowledge Graph

A client-side index over topics, glossary terms and timeline events; the
glossary page; inline term surfacing; and a graph view of the curated edges.
Everything it indexes already exists in the content model — this phase adds no
new content shape, which is the point.
_Depends on: content phases it indexes._

### Phase 11 — Scientific review, performance and final polish

Full source audit with `reviewedOn` stamped on every topic. Real-device
performance pass against the budgets. Accessibility audit including a
high-contrast variant. Motion and transition polish. Static fallback for the
written content. `1.0.0`.
_Depends on: all._

### Cross-cutting, every phase

Accessibility (roles, focus, contrast, reduced motion), mobile verification on
real hardware, citation completeness, and this document kept current.

---

## 15. Known gaps

Stated plainly, because an architecture document that only lists strengths is
not useful:

- **No content yet.** Fourteen sections are registered; none has topics. The
  seed references and glossary exist to prove the machinery, not to substitute
  for the work.
- **No renderers yet.** The frame, the registry and the quality system are
  built and tested; the first figure arrives in Phase 1.
- **No e2e tests yet.** Playwright arrives with the first gesture-driven
  surface in Phase 1.
- **No scientific reviewer yet.** The validator enforces that a citation
  _exists_; it cannot check that the citation _supports the claim_. That needs
  a person, and Phase 11 is where it is scheduled — but it should happen
  continuously, not once at the end.
- **No CI pipeline configured.** `npm run verify` is the contract; wiring it to
  a runner is a one-file change when a runner is chosen.
- **Deployment undecided.** History routing needs an SPA fallback from whatever
  host is chosen.
