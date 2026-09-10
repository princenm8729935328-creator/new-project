import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The fast loop and the slow loop, drawn at their true relative rates.
 *
 * Reading the carbon cycle correctly means holding two timescales at once: a
 * huge, nearly balanced biological exchange, and a tiny, unbalanced geological
 * one that actually sets the atmosphere over millions of years. Showing them
 * separately is the only way to avoid the fast loop swamping the picture.
 */

const VIEWS = ['Fast, biological', 'Slow, geological', 'Both'] as const;

export default function BiologicalCarbonCycle(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={192}>
        <rect x={20} y={26} width={340} height={26} rx={4} fill="rgba(143,184,255,0.2)" />
        <text x={190} y={43} textAnchor="middle" fontSize={9.5} fill={C.air}>
          atmosphere — about 875 Gt C
        </text>

        {(view === 0 || view === 2) && (
          <g>
            <rect x={30} y={96} width={110} height={34} rx={4} fill="rgba(79,224,192,0.3)" />
            <text x={85} y={117} textAnchor="middle" fontSize={9} fill={C.life}>
              plants, soil
            </text>
            <line x1={62} y1={94} x2={62} y2={54} stroke={C.life} strokeWidth={5} opacity={0.75} />
            <path d="M62,52 l-4,8 l8,0 z" fill={C.life} />
            <text x={30} y={78} fontSize={7.5} fill={C.life}>
              120 Gt/yr
            </text>
            <line
              x1={112}
              y1={54}
              x2={112}
              y2={94}
              stroke={C.warm}
              strokeWidth={5}
              opacity={0.75}
            />
            <path d="M112,96 l-4,-8 l8,0 z" fill={C.warm} />
            <text x={120} y={78} fontSize={7.5} fill={C.warm}>
              118 Gt/yr
            </text>

            <rect x={166} y={96} width={110} height={34} rx={4} fill="rgba(111,179,255,0.25)" />
            <text x={221} y={117} textAnchor="middle" fontSize={9} fill={C.water}>
              surface ocean
            </text>
            <line
              x1={198}
              y1={94}
              x2={198}
              y2={54}
              stroke={C.water}
              strokeWidth={5}
              opacity={0.75}
            />
            <path d="M198,52 l-4,8 l8,0 z" fill={C.water} />
            <line
              x1={246}
              y1={54}
              x2={246}
              y2={94}
              stroke={C.water}
              strokeWidth={5}
              opacity={0.55}
            />
            <path d="M246,96 l-4,-8 l8,0 z" fill={C.water} />
            <text x={252} y={78} fontSize={7.5} fill={C.water}>
              ~90 Gt/yr
            </text>
          </g>
        )}

        {(view === 1 || view === 2) && (
          <g>
            <rect x={286} y={96} width={76} height={34} rx={4} fill="rgba(197,143,106,0.3)" />
            <text x={324} y={117} textAnchor="middle" fontSize={9} fill={C.rock}>
              rock
            </text>
            <line x1={306} y1={94} x2={306} y2={54} stroke={C.rock} strokeWidth={1.6} />
            <path d="M306,52 l-3,6 l6,0 z" fill={C.rock} />
            <text x={276} y={78} textAnchor="end" fontSize={7.5} fill={C.rock}>
              0.3 Gt/yr
            </text>
            <line x1={344} y1={54} x2={344} y2={94} stroke={C.rock} strokeWidth={1.6} />
            <path d="M344,96 l-3,-6 l6,0 z" fill={C.rock} />
          </g>
        )}

        <text x={190} y={158} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          {view === 0
            ? 'huge and nearly balanced — turns over in years to centuries'
            : view === 1
              ? 'tiny and unbalanced — but it is the only route in or out over millions of years'
              : 'arrow width is proportional to flux: the geological arrows are hundreds of times thinner'}
        </text>
        <text x={190} y={176} textAnchor="middle" fontSize={8.5} fill={C.hot}>
          fossil fuel burning currently adds about 10 Gt/yr
        </text>
      </Figure>

      <ToggleRow label="Loop" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Photosynthesis pulls roughly 120 gigatonnes of carbon a year out of the air; respiration and decay return almost the same amount. The seasonal wobble visible in atmospheric CO₂ records is the northern hemisphere’s forests breathing in during summer and out during winter. Because it is nearly balanced, this enormous flux does not by itself set the atmospheric concentration.'
          : view === 1
            ? 'Volcanoes release about 0.3 gigatonnes a year; silicate weathering and carbonate burial remove a similar amount. These are a few hundredths of the biological fluxes — but they are the only ways carbon actually enters or leaves the surface system, so over millions of years they control the atmosphere entirely. The tiny fraction of organic carbon that escapes decay and is buried is also why there is oxygen in the air: buried carbon is oxygen not consumed.'
            : 'Both at once, with arrow width proportional to flux. Fossil fuel burning takes carbon the slow cycle removed over hundreds of millions of years and returns it in a few centuries. The weathering thermostat will remove it — over hundreds of thousands of years, which is why it is not a solution on any timescale that concerns anyone alive. Figures are approximate and vary between assessments.'}
      </Note>
    </Stack>
  );
}
