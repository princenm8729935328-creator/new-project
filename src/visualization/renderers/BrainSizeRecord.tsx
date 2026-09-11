import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Endocranial volume against time, as scattered specimens rather than a curve.
 *
 * A trend line here would be a lie about the data. Plotting individual points,
 * including the ones that sit far off any trend, is what shows that brain
 * expansion was not something every hominin lineage was doing.
 */

interface Spec {
  readonly key: string;
  readonly ma: number;
  readonly cc: number;
  readonly lineage: 'austral' | 'homo' | 'nean' | 'small' | 'sapiens';
}

const SPECS: readonly Spec[] = [
  { key: 'Au. afarensis', ma: 3.2, cc: 420, lineage: 'austral' },
  { key: 'Au. africanus', ma: 2.6, cc: 460, lineage: 'austral' },
  { key: 'P. boisei', ma: 1.8, cc: 510, lineage: 'austral' },
  { key: 'H. habilis', ma: 1.9, cc: 610, lineage: 'homo' },
  { key: 'Dmanisi', ma: 1.8, cc: 640, lineage: 'homo' },
  { key: 'H. erectus (early)', ma: 1.6, cc: 870, lineage: 'homo' },
  { key: 'H. erectus (late)', ma: 0.5, cc: 1050, lineage: 'homo' },
  { key: 'H. heidelbergensis', ma: 0.5, cc: 1200, lineage: 'homo' },
  { key: 'H. floresiensis', ma: 0.07, cc: 420, lineage: 'small' },
  { key: 'H. naledi', ma: 0.29, cc: 500, lineage: 'small' },
  { key: 'Neanderthal', ma: 0.06, cc: 1450, lineage: 'nean' },
  { key: 'H. sapiens (early)', ma: 0.19, cc: 1400, lineage: 'sapiens' },
  { key: 'H. sapiens (now)', ma: 0, cc: 1350, lineage: 'sapiens' },
];

const COLOURS: Record<Spec['lineage'], string> = {
  austral: 'rgba(148,162,192,0.7)',
  homo: C.warm,
  nean: C.deep,
  small: C.hot,
  sapiens: C.life,
};

export default function BrainSizeRecord(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);

  const LEFT = 40;
  const RIGHT = 14;
  const TOP = 24;
  const BOT = 152;
  const W = 380 - LEFT - RIGHT;
  const toX = (ma: number): number => LEFT + W - (Math.min(ma, 3.5) / 3.5) * W;
  const toY = (cc: number): number => BOT - ((cc - 350) / 1250) * (BOT - TOP);

  const selected = SPECS[Math.min(pick, SPECS.length - 1)];

  return (
    <Stack>
      <Figure height={196}>
        {[500, 1000, 1500].map((cc) => (
          <g key={cc}>
            <line
              x1={LEFT}
              y1={toY(cc)}
              x2={LEFT + W}
              y2={toY(cc)}
              stroke="rgba(148,162,192,0.12)"
            />
            <text x={LEFT - 5} y={toY(cc) + 3} textAnchor="end" fontSize={7} fill={C.faint}>
              {cc}
            </text>
          </g>
        ))}
        <text x={12} y={18} fontSize={7.5} fill={C.faint}>
          brain volume (cm³)
        </text>

        {SPECS.map((s, i) => {
          const active = i === pick;
          return (
            <g key={s.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <circle
                cx={toX(s.ma)}
                cy={toY(s.cc)}
                r={active ? 7 : 4.5}
                fill={COLOURS[s.lineage]}
                opacity={active ? 1 : 0.75}
                stroke={active ? '#fff' : 'none'}
                strokeWidth={1.2}
              />
            </g>
          );
        })}

        {[3, 2, 1, 0].map((t) => (
          <text key={t} x={toX(t)} y={BOT + 14} textAnchor="middle" fontSize={7} fill={C.faint}>
            {t === 0 ? 'now' : `${t} Ma`}
          </text>
        ))}

        <text x={LEFT} y={182} fontSize={9} fill={COLOURS[selected?.lineage ?? 'homo']}>
          {selected?.key}: {selected?.cc} cm³ at{' '}
          {selected?.ma === 0 ? 'present' : `${selected?.ma} Ma`}
        </text>
        <text x={LEFT} y={194} fontSize={7.5} fill={C.faint}>
          one representative value per group; within-species variation is large
        </text>
      </Figure>

      <ToggleRow
        label="Highlight"
        options={[
          'Australopiths',
          'Early Homo',
          'H. erectus',
          'Small-brained',
          'Neanderthal',
          'H. sapiens',
        ]}
        value={
          selected?.lineage === 'austral'
            ? 0
            : selected?.lineage === 'homo'
              ? 1
              : selected?.lineage === 'small'
                ? 3
                : selected?.lineage === 'nean'
                  ? 4
                  : 5
        }
        onChange={(i) => {
          const want: Spec['lineage'][] = ['austral', 'homo', 'homo', 'small', 'nean', 'sapiens'];
          const target = want[i] ?? 'homo';
          const idx = SPECS.findIndex((s) => s.lineage === target);
          if (idx >= 0) setPick(idx);
        }}
      />

      <Note>
        No line is drawn through these points, deliberately. Brain size barely moves for the first
        two million years of hominin existence, rises through the Homo erectus range, and rises
        again steeply in the last half-million years — in the Neanderthal and Homo sapiens lineages
        separately, from a common ancestor with a smaller brain. And it was not a trend everyone was
        on: Homo naledi at 500 cm³ and Homo floresiensis at around 420 cm³ were both alive well
        after the expansion was under way. There is also the awkward recent fact that average human
        brain volume appears to have declined by something like 5–10% over the last ten to thirty
        thousand years, with bodies shrinking over the same period and the magnitude, cause and even
        existence of the decline all currently disputed.
      </Note>
    </Stack>
  );
}
