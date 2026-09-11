import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The march-of-progress image against the actual shape of the record.
 *
 * Drawing the wrong version first, and labelling it as wrong, works better than
 * describing it. Readers recognise the line immediately and can then see what
 * the same species look like when coexistence and extinction are drawn in.
 */

interface Taxon {
  readonly name: string;
  readonly from: number;
  readonly to: number;
  readonly y: number;
  readonly survives: boolean;
}

const TAXA: readonly Taxon[] = [
  { name: 'Au. afarensis', from: 3.9, to: 2.9, y: 34, survives: false },
  { name: 'Au. africanus', from: 3.3, to: 2.1, y: 54, survives: false },
  { name: 'P. boisei', from: 2.3, to: 1.2, y: 74, survives: false },
  { name: 'H. habilis', from: 2.3, to: 1.6, y: 94, survives: false },
  { name: 'H. erectus', from: 2.0, to: 0.11, y: 114, survives: false },
  { name: 'H. naledi', from: 0.34, to: 0.24, y: 134, survives: false },
  { name: 'H. neanderthalensis', from: 0.43, to: 0.04, y: 154, survives: false },
  { name: 'H. sapiens', from: 0.32, to: 0, y: 174, survives: true },
];

export default function CousinsNotAncestors(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);
  const LEFT = 108;
  const W = 244;
  const toX = (ma: number): number => LEFT + W - (ma / 4) * W;

  return (
    <Stack>
      <Figure height={view === 0 ? 150 : 200}>
        {view === 0 ? (
          <g>
            <text x={14} y={18} fontSize={9} fill={C.hot}>
              the familiar image — and it is wrong
            </text>
            {TAXA.filter((_, i) => [0, 3, 4, 7].includes(i)).map((t, i) => (
              <g key={t.name}>
                <circle cx={50 + i * 90} cy={70} r={8 + i * 3} fill={C.faint} opacity={0.5} />
                <path
                  d={`M${50 + i * 90},${78 + i * 3} l0,${16 - i * 2}`}
                  stroke={C.faint}
                  strokeWidth={2}
                />
                <text x={50 + i * 90} y={112} textAnchor="middle" fontSize={7.5} fill={C.dim}>
                  {t.name}
                </text>
                {i < 3 ? (
                  <path
                    d={`M${72 + i * 90},70 l14,0 m-5,-4 l5,4 l-5,4`}
                    fill="none"
                    stroke={C.hot}
                    strokeWidth={1.4}
                  />
                ) : null}
              </g>
            ))}
            <text x={190} y={136} textAnchor="middle" fontSize={8} fill={C.hot}>
              a single line, each one replacing the last
            </text>
          </g>
        ) : (
          <g>
            <text x={14} y={18} fontSize={9} fill={C.life}>
              what the dated record actually contains
            </text>
            {TAXA.map((t) => (
              <g key={t.name}>
                <rect
                  x={toX(t.from)}
                  y={t.y - 6}
                  width={Math.max(toX(t.to) - toX(t.from), 4)}
                  height={11}
                  rx={3}
                  fill={t.survives ? C.life : 'rgba(148,162,192,0.45)'}
                />
                <text x={104} y={t.y + 3} textAnchor="end" fontSize={7.5} fill={C.dim}>
                  {t.name}
                </text>
              </g>
            ))}
            <line x1={toX(2)} y1={26} x2={toX(2)} y2={186} stroke={C.warm} strokeDasharray="3 3" />
            <text x={toX(2)} y={194} textAnchor="middle" fontSize={7.5} fill={C.warm}>
              2 Ma: at least four species alive
            </text>
            {[4, 3, 2, 1, 0].map((t) => (
              <text key={t} x={toX(t)} y={30} textAnchor="middle" fontSize={7} fill={C.faint}>
                {t === 0 ? 'now' : `${t} Ma`}
              </text>
            ))}
          </g>
        )}
      </Figure>

      <ToggleRow
        label="Picture"
        options={['The ladder', 'The record']}
        value={view}
        onChange={setView}
      />

      <Note>
        {view === 0
          ? 'This arrangement comes from an illustration made for a popular book in 1965. It was never a scientific claim, and it encodes two errors: that these species form a single line of descent, and that each replaced the one before. Switch views to see the same species placed against their actual dates.'
          : 'Bars show the span each species is currently known from; dating uncertainty means every edge is softer than drawn, and the bars for poorly sampled species are certainly too short. The important feature is the overlap. For most of the last four million years several hominin species were alive at once, and all but one line ends. Note also that this figure shows when species existed, not who descended from whom — that is a separate and much less settled question.'}
      </Note>
    </Stack>
  );
}
