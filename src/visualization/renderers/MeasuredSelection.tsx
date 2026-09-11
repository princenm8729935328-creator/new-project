import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Effect sizes for ongoing selection in living populations, drawn to scale.
 *
 * The whole point is how small these are. A figure that magnified them for
 * legibility would destroy the finding, so the projections are shown over ten
 * generations against the range of normal variation.
 */

interface Finding {
  readonly key: string;
  readonly study: string;
  readonly perDecade: number;
  readonly over10gen: string;
  readonly detail: string;
}

const FINDINGS: readonly Finding[] = [
  {
    key: 'Age at first birth',
    study: 'Framingham, USA',
    perDecade: 0.035,
    over10gen: 'about 3 months earlier',
    detail:
      'The Framingham Heart Study has followed residents of one Massachusetts town, then their children and grandchildren, since 1948, with detailed medical measurements throughout — which makes it possible to ask whether women with particular characteristics had more children, and whether those characteristics are passed on.',
  },
  {
    key: 'Total cholesterol',
    study: 'Framingham, USA',
    perDecade: 0.02,
    over10gen: 'about 4 mg/dL lower',
    detail:
      'Directional selection towards slightly lower total cholesterol, projected to shift the population mean by a fraction of a percent over ten generations. Real, statistically significant, and tiny.',
  },
  {
    key: 'Height',
    study: 'Framingham, USA',
    perDecade: 0.015,
    over10gen: 'about 1–2 cm shorter',
    detail:
      'Also directional, and dwarfed by the environmental effect: average height in many countries changed more from improved childhood nutrition in one century than selection would produce in a thousand years.',
  },
  {
    key: 'Education-associated variants',
    study: 'Iceland',
    perDecade: 0.01,
    over10gen: 'about 0.3 standard deviations',
    detail:
      'Icelandic genealogies reaching back centuries, combined with genetic data on a large fraction of the living population, show variants statistically associated with years of education declining slightly across the twentieth century. This result is easy to misreport and has been: the variants index a population- and context-specific statistical association, not any intrinsic capacity, and the magnitude is trivial beside the effect of changes in education systems over the same period.',
  },
];

export default function MeasuredSelection(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const f = FINDINGS[Math.min(pick, FINDINGS.length - 1)];
  if (!f) return null;

  const LEFT = 24;
  const W = 332;

  return (
    <Stack>
      <Figure height={190}>
        <text x={LEFT} y={16} fontSize={8.5} fill={C.dim}>
          measured shift per decade, against the range of normal variation
        </text>

        <rect x={LEFT} y={30} width={W} height={34} rx={5} fill="rgba(148,162,192,0.12)" />
        <text x={LEFT + W / 2} y={51} textAnchor="middle" fontSize={8} fill={C.faint}>
          how much people already differ from each other
        </text>

        {FINDINGS.map((x, i) => {
          const y = 84 + i * 24;
          const active = i === pick;
          const w = Math.max(W * x.perDecade, 2.5);
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <text x={LEFT} y={y} fontSize={7.5} fill={active ? C.life : C.dim}>
                {x.key}
              </text>
              <rect
                x={LEFT + 200}
                y={y - 8}
                width={w}
                height={10}
                rx={2}
                fill={active ? C.life : 'rgba(79,224,192,0.4)'}
              />
              <text x={LEFT + 200 + w + 6} y={y} fontSize={7} fill={C.faint}>
                {(x.perDecade * 100).toFixed(1)}%
              </text>
            </g>
          );
        })}

        <text x={LEFT} y={176} fontSize={8} fill={C.warm}>
          over ten generations ({f.key.toLowerCase()}): {f.over10gen}
        </text>
      </Figure>

      <ToggleRow
        label="Finding"
        options={FINDINGS.map((x) => x.key.split(' ')[0] ?? x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>
          {f.key} — {f.study}.
        </strong>{' '}
        {f.detail} This is the honest scale of contemporary human evolution, and it sits between two
        popular exaggerations. It is not true that evolution has stopped. It is also not true that
        humans are noticeably changing within historical memory: at these rates, visible change
        takes hundreds of generations, and only if the pressure stays constant, which for human
        social environments it almost never does. Anyone claiming to have detected a large, fast
        evolutionary change in modern humans is making a claim far stronger than the measurements
        support. Bar magnitudes here are illustrative of the relative scale rather than exact
        published coefficients.
      </Note>
    </Stack>
  );
}
