import { type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * The Primate Cognition Test Battery result, as two domains rather than one score.
 *
 * A single "intelligence" bar would hide the finding entirely. Split by domain,
 * the asymmetry is immediate: matched on the physical world, separated on the
 * social one.
 */

interface Row {
  readonly key: string;
  readonly colour: string;
  readonly physical: number;
  readonly social: number;
}

const ROWS: readonly Row[] = [
  { key: '2½-year-old children', colour: C.life, physical: 0.68, social: 0.74 },
  { key: 'Adult chimpanzees', colour: C.warm, physical: 0.68, social: 0.33 },
  { key: 'Adult orangutans', colour: 'rgba(197,143,106,0.85)', physical: 0.59, social: 0.36 },
];

const TASKS = [
  { domain: 'Physical', items: 'space · quantities · causality' },
  { domain: 'Social', items: 'learning from others · communication · reading intentions' },
] as const;

export default function CognitionBattery(_props: VisualizationProps): ReactNode {
  const LEFT = 128;
  const W = 110;

  return (
    <Stack>
      <Figure height={196}>
        {TASKS.map((t, col) => (
          <text
            key={t.domain}
            x={LEFT + col * (W + 18) + W / 2}
            y={20}
            textAnchor="middle"
            fontSize={9}
            fill={col === 1 ? C.life : C.dim}
          >
            {t.domain}
          </text>
        ))}

        {ROWS.map((r, i) => {
          const y = 44 + i * 40;
          return (
            <g key={r.key}>
              <text x={LEFT - 10} y={y + 14} textAnchor="end" fontSize={8} fill={C.dim}>
                {r.key}
              </text>
              {[r.physical, r.social].map((v, col) => (
                <g key={col}>
                  <rect
                    x={LEFT + col * (W + 18)}
                    y={y}
                    width={W}
                    height={20}
                    rx={4}
                    fill="rgba(148,162,192,0.1)"
                  />
                  <rect
                    x={LEFT + col * (W + 18)}
                    y={y}
                    width={W * v}
                    height={20}
                    rx={4}
                    fill={r.colour}
                    opacity={0.85}
                  />
                  <text
                    x={LEFT + col * (W + 18) + 6}
                    y={y + 14}
                    fontSize={8.5}
                    fill="rgba(9,16,14,0.85)"
                  >
                    {Math.round(v * 100)}%
                  </text>
                </g>
              ))}
            </g>
          );
        })}

        <line x1={LEFT + W + 9} y1={28} x2={LEFT + W + 9} y2={168} stroke="rgba(148,162,192,0.2)" />
        <text x={14} y={182} fontSize={7.5} fill={C.faint}>
          proportion of trials solved · 105 children, 106 chimpanzees, 32 orangutans
        </text>
        <text x={14} y={192} fontSize={7.5} fill={C.faint}>
          values approximate the published domain means
        </text>
      </Figure>

      <Note>
        On problems about the physical world — where a hidden object went, which quantity is larger,
        how to get a reward out of a tube — a two-and-a-half-year-old child and an adult chimpanzee
        score about the same. The child is not simply smarter. Move to social problems and the gap
        opens sharply: following a pointing finger, working out what someone was trying to do from a
        failed attempt, learning a solution by watching. The capacity at the centre of that
        difference is sometimes called shared intentionality — holding a goal jointly with someone
        else, and knowing that you both know you are doing it together. It matters because it is
        what makes information transmit accurately, and accurate transmission is what lets knowledge
        accumulate. One real limitation: the children were tested by adults of their own species
        using conventions they had been immersed in since birth, and the chimpanzees were not, so
        the size of the social gap should be held more loosely than its existence.
      </Note>
    </Stack>
  );
}
