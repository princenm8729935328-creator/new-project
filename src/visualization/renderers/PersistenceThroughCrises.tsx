import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Where life keeps most of itself, which is why catastrophes do not reach it.
 *
 * The visible biosphere is not where the biosphere mostly is. Drawing the
 * depth profile and then applying each catastrophe to it shows why an asteroid
 * that eliminates every large animal barely registers two kilometres down.
 */

interface Crisis {
  readonly key: string;
  readonly reach: number;
  readonly detail: string;
}

const CRISES: readonly Crisis[] = [
  {
    key: 'Asteroid impact',
    reach: 0.28,
    detail:
      'Darkens the sky and collapses food chains that depend on sunlight. Devastating for anything living off living plants or plankton; almost irrelevant to a bacterium two kilometres down living on hydrogen seeping from rock, which has never used sunlight and does not notice.',
  },
  {
    key: 'Snowball Earth',
    reach: 0.42,
    detail:
      'Ice covers the surface, possibly to the equator, for tens of millions of years. Volcanic hot spots, sub-ice ocean circulation and hydrothermal systems keep running throughout, and photosynthesis probably persisted in thin ice and open patches.',
  },
  {
    key: 'Gamma-ray burst',
    reach: 0.2,
    detail:
      'A hypothetical case sometimes raised. It would strip ozone and irradiate the surface. It would not reach anything under a few metres of water, soil or rock — which is most of the biosphere by cell count.',
  },
  {
    key: 'Massive volcanism',
    reach: 0.35,
    detail:
      'The end-Permian mechanism: carbon dioxide, methane and sulphur released over hundreds of thousands of years, warming and acidifying the oceans and stripping their oxygen. It came closer than anything else in the record to ending complex life, and still left the subsurface untouched.',
  },
];

const BANDS: readonly (readonly [string, string])[] = [
  ['above ground and canopy', 'birds, insects, spores'],
  ['surface, sunlit ocean', 'nearly everything visible'],
  ['soil and shallow sediment', 'a large share of all cells'],
  ['deep sediment', 'slow microbes, divide over years'],
  ['crust, kilometres down', 'living on hydrogen from rock'],
];

export default function PersistenceThroughCrises(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const crisis = CRISES[Math.min(pick, CRISES.length - 1)];
  if (!crisis) return null;

  return (
    <Stack>
      <Figure height={192}>
        {BANDS.map(([name, who], i) => {
          const y = 20 + i * 32;
          const hit = i / BANDS.length < crisis.reach;
          return (
            <g key={name}>
              <rect
                x={12}
                y={y}
                width={356}
                height={28}
                rx={3}
                fill={hit ? 'rgba(255,143,110,0.18)' : 'rgba(79,224,192,0.12)'}
              />
              <text x={22} y={y + 13} fontSize={9} fill={hit ? C.hot : C.life}>
                {name}
              </text>
              <text x={22} y={y + 24} fontSize={7.5} fill={C.faint}>
                {who}
              </text>
              <text x={358} y={y + 18} textAnchor="end" fontSize={8} fill={hit ? C.hot : C.life}>
                {hit ? 'devastated' : 'largely unaffected'}
              </text>
            </g>
          );
        })}
      </Figure>

      <ToggleRow
        label="Catastrophe"
        options={CRISES.map((c) => c.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        {crisis.detail} This is why life has been continuous for four billion years without ever
        needing anything to protect it: a large share of living cells are in places almost nothing
        reaches, and every survivor reproduces into an emptied world. Note also the selection effect
        — we could only be observing from a planet where life persisted, so persistence on its own
        is not evidence that it was likely.
      </Note>
    </Stack>
  );
}
