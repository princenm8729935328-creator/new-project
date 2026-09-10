import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * One genome, many cells, drawn as a switchboard.
 *
 * The reader picks a cell type and sees which of the same set of genes is on.
 * That is the entire concept of differentiation, and showing the identical gene
 * row under every cell type is what makes it land.
 */

const GENES = [
  'housekeeping',
  'haemoglobin',
  'myosin',
  'ion channels',
  'keratin',
  'rubisco-like',
] as const;

interface CellType {
  readonly name: string;
  readonly on: readonly boolean[];
  readonly detail: string;
}

const TYPES: readonly CellType[] = [
  {
    name: 'Neuron',
    on: [true, false, false, true, false, false],
    detail:
      'Packed with ion channels and able to grow a fibre a metre long. It has the haemoglobin gene and never uses it. Neurons in an adult human mostly do not divide at all, which is a large part of why nerve damage does not repair.',
  },
  {
    name: 'Muscle cell',
    on: [true, false, true, true, false, false],
    detail:
      'Filled with contractile filaments and mitochondria to power them. A muscle cell can afford to be almost nothing but machinery for pulling, because it will never need to swim, sense or digest.',
  },
  {
    name: 'Red blood cell',
    on: [false, true, false, false, false, false],
    detail:
      'A mammalian red blood cell goes further than any other: it ejects its own nucleus to make room for more haemoglobin. It cannot make new proteins, cannot repair itself, and lasts about four months. A cell that gave up being a complete cell in exchange for being a better container.',
  },
  {
    name: 'Skin cell',
    on: [true, false, false, false, true, false],
    detail:
      'Fills itself with keratin and then dies, leaving a tough waterproof layer of its own remains. The outer surface of your skin is made of dead specialised cells doing their job posthumously.',
  },
];

export default function CellSpecialisation(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const type = TYPES[Math.min(pick, TYPES.length - 1)];
  const LEFT = 100;
  const COL = 44;

  return (
    <Stack>
      <Figure height={186}>
        <text x={12} y={14} fontSize={9} fill={C.dim}>
          the same genes in every cell — different ones switched on
        </text>
        {GENES.map((g, i) => (
          <text
            key={g}
            x={LEFT + i * COL + COL / 2}
            y={40}
            textAnchor="end"
            fontSize={7.5}
            fill={C.faint}
            transform={`rotate(-40 ${LEFT + i * COL + COL / 2} 40)`}
          >
            {g}
          </text>
        ))}
        {TYPES.map((t, r) => (
          <g key={t.name} onClick={() => setPick(r)} style={{ cursor: 'pointer' }}>
            <rect
              x={8}
              y={46 + r * 28}
              width={364}
              height={24}
              rx={3}
              fill={r === pick ? 'rgba(148,162,192,0.16)' : 'transparent'}
            />
            <text x={16} y={62 + r * 28} fontSize={9.5} fill="rgba(233,238,247,0.95)">
              {t.name}
            </text>
            {t.on.map((on, i) => (
              <rect
                key={i}
                x={LEFT + i * COL + 6}
                y={52 + r * 28}
                width={24}
                height={12}
                rx={6}
                fill={on ? C.life : 'rgba(148,162,192,0.18)'}
              />
            ))}
          </g>
        ))}
        <text x={12} y={178} fontSize={8.5} fill={C.faint}>
          green: expressed · grey: present but silent
        </text>
      </Figure>

      <Note>
        {type ? (
          <>
            <strong>{type.name}.</strong> {type.detail} The genes are not lost — that was settled by
            cloning experiments in which a nucleus from a differentiated adult cell directed the
            development of a whole animal. The gene list here is illustrative rather than a real
            expression profile.
          </>
        ) : null}
      </Note>
    </Stack>
  );
}
