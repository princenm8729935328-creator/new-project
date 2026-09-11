import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Life-history milestones across apes and hominins, from teeth.
 *
 * Dental development is the measurement that makes this a figure rather than an
 * assertion: enamel is laid down in daily layers, so a fossil tooth records how
 * many days its crown took to form.
 */

interface Row {
  readonly key: string;
  readonly weaning: number;
  readonly m1: number;
  readonly maturity: number;
  readonly measured: boolean;
}

const ROWS: readonly Row[] = [
  { key: 'Macaque', weaning: 1.2, m1: 1.4, maturity: 5, measured: true },
  { key: 'Chimpanzee', weaning: 4.8, m1: 4.0, maturity: 13, measured: true },
  { key: 'Au. afarensis', weaning: 4.0, m1: 3.2, maturity: 11, measured: true },
  { key: 'H. erectus', weaning: 3.5, m1: 4.5, maturity: 14, measured: true },
  { key: 'Neanderthal', weaning: 2.8, m1: 5.6, maturity: 16, measured: true },
  { key: 'Modern human', weaning: 2.5, m1: 6.2, maturity: 18, measured: true },
];

const MARKS = [
  { key: 'weaning', label: 'weaning', colour: C.warm },
  { key: 'm1', label: 'first molar erupts', colour: C.life },
  { key: 'maturity', label: 'adult', colour: C.deep },
] as const;

export default function GrowthSchedules(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(1);
  const mark = MARKS[Math.min(pick, MARKS.length - 1)];
  if (!mark) return null;

  const LEFT = 96;
  const W = 246;
  const toX = (years: number): number => LEFT + (years / 20) * W;

  return (
    <Stack>
      <Figure height={196}>
        {ROWS.map((r, i) => {
          const y = 32 + i * 24;
          return (
            <g key={r.key}>
              <text x={LEFT - 8} y={y + 3} textAnchor="end" fontSize={8} fill={C.dim}>
                {r.key}
              </text>
              <line
                x1={LEFT}
                y1={y}
                x2={toX(r.maturity)}
                y2={y}
                stroke="rgba(148,162,192,0.25)"
                strokeWidth={5}
                strokeLinecap="round"
              />
              {MARKS.map((m) => (
                <circle
                  key={m.key}
                  cx={toX(r[m.key])}
                  cy={y}
                  r={m.key === mark.key ? 5.5 : 3}
                  fill={m.colour}
                  opacity={m.key === mark.key ? 1 : 0.35}
                />
              ))}
              {mark.key === 'm1' ? (
                <text x={toX(r.m1) + 9} y={y + 3} fontSize={7.5} fill={C.life}>
                  {r.m1.toFixed(1)} yr
                </text>
              ) : null}
            </g>
          );
        })}
        {[0, 5, 10, 15, 20].map((y) => (
          <g key={y}>
            <line x1={toX(y)} y1={20} x2={toX(y)} y2={178} stroke="rgba(148,162,192,0.12)" />
            <text x={toX(y)} y={190} textAnchor="middle" fontSize={7} fill={C.faint}>
              {y}
            </text>
          </g>
        ))}
        <text x={LEFT + W / 2} y={16} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          years from birth
        </text>
      </Figure>

      <ToggleRow
        label="Milestone"
        options={MARKS.map((m) => m.label)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        Eruption of the first permanent molar is the standard marker because it can be read directly
        from a fossil: enamel is deposited in daily increments, so counting the layers gives the
        number of days the crown took to form, and a disturbance line marks the moment of birth
        itself. On that measure, Homo erectus and everything earlier grew on a schedule much closer
        to a chimpanzee’s than to ours. Even Neanderthals, with brains as large as ours, developed
        slightly faster — which shows that brain size and growth rate are not locked together, and
        that whatever selected for our very long childhood, it was not simply the size of the brain
        that had to be built. Values here are representative; individual variation within every one
        of these species is substantial.
      </Note>
    </Stack>
  );
}
