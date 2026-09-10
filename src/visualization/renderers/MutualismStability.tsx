import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * How mutualisms survive cheating.
 *
 * The interesting question is not why partners cooperate but why the
 * arrangement is not destroyed by individuals that take without giving. Three
 * real mechanisms, each with the case that demonstrates it.
 */

interface Mechanism {
  readonly key: string;
  readonly title: string;
  readonly detail: string;
}

const MECHANISMS: readonly Mechanism[] = [
  {
    key: 'Sanctions',
    title: 'The partner punishes',
    detail:
      'Legume plants house nitrogen-fixing bacteria in root nodules and feed them sugar. Experiments in which nodules were supplied with argon instead of nitrogen — so the bacteria could not fix any — showed the plant cutting oxygen supply to those nodules, and the bacteria inside reproduced far less. The plant detects and penalises non-performance.',
  },
  {
    key: 'Vertical transmission',
    title: 'Their fate is your fate',
    detail:
      'When a symbiont is passed directly from parent to offspring, its reproductive future is bound to the host’s. Harming the host harms its own descendants. Aphid endosymbionts are transmitted this way and are entirely cooperative; symbionts transmitted horizontally between unrelated hosts are far more often parasitic.',
  },
  {
    key: 'Partner choice',
    title: 'Trade with whoever performs',
    detail:
      'Plants connected to several mycorrhizal fungi send more carbon to the fungi delivering more phosphorus, and the fungi reciprocate by sending more phosphorus to the more generous plants. Both sides preferentially allocate to good partners, which is a market rather than a punishment.',
  },
];

export default function MutualismStability(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const m = MECHANISMS[Math.min(pick, MECHANISMS.length - 1)];
  if (!m) return null;

  return (
    <Stack>
      <Figure height={176}>
        <text x={190} y={22} textAnchor="middle" fontSize={10} fill={C.life}>
          {m.title}
        </text>

        <circle cx={104} cy={92} r={30} fill={C.life} opacity={0.7} />
        <text x={104} y={96} textAnchor="middle" fontSize={9} fill="#0f1a17">
          host
        </text>

        {[0, 1, 2].map((i) => {
          const cheat = i === 1;
          const cy = 50 + i * 42;
          const rewarded = pick === 0 ? !cheat : pick === 1 ? true : !cheat;
          return (
            <g key={i}>
              <circle cx={276} cy={cy} r={17} fill={cheat ? C.hot : C.water} opacity={0.75} />
              <text x={276} y={cy + 3} textAnchor="middle" fontSize={8} fill="#0f1a17">
                {cheat ? 'cheat' : 'gives'}
              </text>
              <line
                x1={134}
                y1={92}
                x2={258}
                y2={cy}
                stroke={rewarded ? C.life : 'rgba(255,143,110,0.4)'}
                strokeWidth={rewarded ? 2.4 : 1}
                strokeDasharray={rewarded ? undefined : '3 3'}
              />
            </g>
          );
        })}
        <text x={190} y={162} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          thick line: resources flowing · dashed: withheld
        </text>
      </Figure>

      <ToggleRow
        label="Mechanism"
        options={MECHANISMS.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>{m.detail}</Note>
    </Stack>
  );
}
