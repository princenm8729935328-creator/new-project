# Writing content

The working guide for anyone adding scientific content. The rules here are the
ones `src/content/schema/validate.ts` enforces — if a rule feels unclear, read
the validator; it is the authority.

## Adding a topic

1. Create `src/content/topics/<section-slug>/<topic-slug>.ts`.
2. Export a `Topic`. Choose a slug and never change it — slugs are public URLs.
3. Spread it into `TOPICS` in `src/content/topics/index.ts`.
4. `npm run test` — the validator will tell you what is missing.

```ts
import { topicId, type Topic } from '@/content/schema/topic';
import { sectionId } from '@/content/schema/section';
import { referenceId } from '@/content/schema/reference';

export const EXPANSION: Topic = {
  id: topicId('expansion-of-space'),
  slug: 'expansion-of-space',
  sectionId: sectionId('universe'),
  title: 'The expansion of space',
  summary: {
    essential:
      'Distant galaxies are moving away from us, and the further away they are, the faster they recede.',
    detailed: '…',
  },
  order: 1,
  status: 'draft',
  blocks: [
    {
      id: 'claim-recession',
      kind: 'claim',
      statement: {
        essential: 'The further away a galaxy is, the faster it is receding from us.',
      },
      evidence: 'established',
      references: [referenceId('hubble-1929'), referenceId('planck-2018-vi')],
    },
  ],
};
```

## Choosing an evidence level

Ask what would have to be true for the statement to be wrong.

| Level             | Use when                                                                                                                                       | Citation                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `established`     | Repeated, independent measurement. Essentially no working scientist disputes it.                                                               | ≥1                                                                   |
| `model`           | A well-tested framework that explains and predicts the evidence — strongly supported, but a model of reality rather than a direct observation. | ≥1                                                                   |
| `active-research` | Genuinely under investigation. Competing explanations exist.                                                                                   | ≥1                                                                   |
| `open-question`   | Science does not have an answer. State it as a question.                                                                                       | ≥1                                                                   |
| `speculation`     | Not established science. Included to show how scientists think.                                                                                | 0, but a `speculationNote` saying what would test it is **required** |

When in doubt, choose the weaker level. Overstating certainty is the failure
mode this system exists to prevent.

## Writing at three depths

`essential` is mandatory. Write it for someone with no background and no
mathematics — this is the hardest of the three and should be written first.
`detailed` adds mechanism and evidence. `technical` adds formalism.

A missing depth falls back to the nearest shallower one, so it is always safe to
ship `essential` alone and deepen later.

Simplification is allowed. Misrepresentation is not. Where a simple explanation
is known to be incomplete, add a `callout` with `tone: 'misconception'` saying
so.

## Citing

- Add the source to `src/content/references/index.ts` once; cite it by id
  everywhere.
- Fill `supports` — one line on exactly what the source backs. A reviewer reads
  this instead of the whole paper.
- Prefer the primary source over a summary of it. Prefer a review article over a
  press release, always.
- Reference ids are permanent.

## Numbers

Never write a measured value into prose. Use a `quantity` block:

```ts
{
  id: 'age',
  label: 'Age of the Universe',
  value: 13.797,
  unit: 'Gyr',
  uncertainty: { plusMinus: 0.023 },
  context: 'Planck 2018 base-ΛCDM fit.',
  references: [referenceId('planck-2018-vi')],
}
```

A value without an uncertainty raises a validation warning. If the number really
is approximate, say so with `uncertainty: { kind: 'order-of-magnitude' }` rather
than omitting it.

## Figures

Every figure needs a spec in `src/content/visualizations.ts` before it can
render. Write the caption as though the reader will see nothing else:

- `data-driven` — say which data, and cite it.
- `to-scale` — say _what_ is to scale (sizes? distances? both?).
- `schematic` — say what has been distorted for clarity.
- `artistic` — say that it is an illustration and what is known versus imagined.

`description` is the screen-reader text and the fallback on a device that cannot
run the figure. It must convey the actual point, not "an animation of a black
hole".

## Open questions

Use the `open-question` block, not a hedged claim. It forces the three things a
reader needs: the question, why it matters, and what evidence would settle it.

## Status and review

`planned` → `draft` → `in-review` → `published`. Only `published` topics are
visible to readers. Set `reviewedOn` when a topic has been checked against its
sources, and update it whenever the content changes materially.

A scientific error is a bug. Fix it, say so in the commit message, and re-stamp
`reviewedOn`.
