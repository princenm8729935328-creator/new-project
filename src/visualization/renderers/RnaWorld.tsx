import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Why RNA is the leading candidate, and what the hypothesis still lacks.
 *
 * The argument for the RNA world is essentially a chicken-and-egg resolution,
 * so the figure is built as three panels: the problem, the proposed solution,
 * and the evidence left behind in modern cells. The fourth panel is the part
 * that gets omitted in popular accounts — the objections.
 */

const PANELS = ['The problem', 'The proposal', 'The fossil', 'The trouble'] as const;

export default function RnaWorld(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);

  const notes = [
    'In every cell alive today, DNA stores the information and proteins do the work — but DNA cannot be copied without proteins, and proteins cannot be made without the information in DNA. Each requires the other, so neither can plausibly have come first.',
    'RNA can do both jobs. It carries a sequence, so it can store information, and it folds into shapes with catalytic activity, so it can act as an enzyme. A world running on RNA alone would need no chicken and no egg — one molecule doing both jobs badly beats two doing them well but needing each other.',
    'The strongest evidence is inside you. The ribosome, which builds every protein in every cell, is a ribozyme: the chemical step that joins amino acids is catalysed by RNA, not by the proteins bolted to its outside. That was established when the structure was solved in 2000, and it is hard to explain unless RNA came first. ATP, coenzyme A, NAD and several other central metabolites are also RNA-like in structure.',
    'Ribose is hard to make prebiotically and unstable once made. RNA degrades quickly, especially in warm water. And nobody has produced an RNA molecule that copies itself accurately enough to sustain evolution — the central experimental target of the field for four decades. Some researchers argue an earlier, simpler genetic polymer preceded RNA, which would preserve the logic while removing the chemistry problem.',
  ];

  return (
    <Stack>
      <Figure height={172}>
        {pick === 0 ? (
          <g>
            <rect x={44} y={44} width={110} height={54} rx={5} fill={C.panel} />
            <rect x={226} y={44} width={110} height={54} rx={5} fill={C.panel} />
            <text x={99} y={70} textAnchor="middle" fontSize={11} fill={C.water}>
              DNA
            </text>
            <text x={99} y={86} textAnchor="middle" fontSize={8} fill={C.faint}>
              stores information
            </text>
            <text x={281} y={70} textAnchor="middle" fontSize={11} fill={C.warm}>
              proteins
            </text>
            <text x={281} y={86} textAnchor="middle" fontSize={8} fill={C.faint}>
              do the work
            </text>
            <path d="M158,58 L222,58" stroke={C.warm} strokeWidth={1.6} />
            <path d="M222,58 l-7,-3.5 l0,7 z" fill={C.warm} />
            <path d="M222,86 L158,86" stroke={C.water} strokeWidth={1.6} />
            <path d="M158,86 l7,-3.5 l0,7 z" fill={C.water} />
            <text x={190} y={50} textAnchor="middle" fontSize={8} fill={C.warm}>
              needed to make
            </text>
            <text x={190} y={104} textAnchor="middle" fontSize={8} fill={C.water}>
              needed to copy
            </text>
            <text x={190} y={136} textAnchor="middle" fontSize={9} fill={C.hot}>
              neither can come first
            </text>
          </g>
        ) : pick === 1 ? (
          <g>
            <rect
              x={130}
              y={40}
              width={120}
              height={64}
              rx={5}
              fill="rgba(79,224,192,0.14)"
              stroke={C.life}
            />
            <text x={190} y={68} textAnchor="middle" fontSize={12} fill={C.life}>
              RNA
            </text>
            <text x={190} y={86} textAnchor="middle" fontSize={8} fill={C.dim}>
              sequence and catalyst
            </text>
            <text x={62} y={68} textAnchor="middle" fontSize={9} fill={C.water}>
              stores
            </text>
            <text x={62} y={80} textAnchor="middle" fontSize={9} fill={C.water}>
              information
            </text>
            <text x={320} y={68} textAnchor="middle" fontSize={9} fill={C.warm}>
              catalyses
            </text>
            <text x={320} y={80} textAnchor="middle" fontSize={9} fill={C.warm}>
              reactions
            </text>
            <path d="M96,72 L126,72" stroke={C.water} strokeWidth={1.4} />
            <path d="M254,72 L286,72" stroke={C.warm} strokeWidth={1.4} />
            <text x={190} y={134} textAnchor="middle" fontSize={9} fill={C.life}>
              one molecule, both jobs
            </text>
          </g>
        ) : pick === 2 ? (
          <g>
            <ellipse cx={190} cy={72} rx={78} ry={44} fill="rgba(148,162,192,0.12)" />
            <ellipse cx={190} cy={72} rx={48} ry={28} fill="rgba(79,224,192,0.3)" />
            <text x={190} y={70} textAnchor="middle" fontSize={9.5} fill={C.life}>
              RNA core
            </text>
            <text x={190} y={83} textAnchor="middle" fontSize={8} fill={C.life}>
              does the chemistry
            </text>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const a = (i / 6) * Math.PI * 2;
              return (
                <circle
                  key={i}
                  cx={190 + Math.cos(a) * 66}
                  cy={72 + Math.sin(a) * 37}
                  r={6}
                  fill={C.warm}
                  opacity={0.75}
                />
              );
            })}
            <text x={190} y={130} textAnchor="middle" fontSize={9} fill={C.dim}>
              the ribosome — proteins on the outside, RNA at the centre
            </text>
          </g>
        ) : (
          <g>
            {[
              'ribose is hard to make and unstable',
              'RNA degrades quickly in warm water',
              'no self-replicating ribozyme exists yet',
            ].map((t, i) => (
              <g key={t}>
                <rect
                  x={30}
                  y={40 + i * 30}
                  width={320}
                  height={24}
                  rx={4}
                  fill="rgba(255,143,110,0.10)"
                />
                <text x={44} y={56 + i * 30} fontSize={9.5} fill={C.hot}>
                  ✕
                </text>
                <text x={62} y={56 + i * 30} fontSize={9} fill="rgba(233,238,247,0.9)">
                  {t}
                </text>
              </g>
            ))}
            <text x={190} y={148} textAnchor="middle" fontSize={8.5} fill={C.warm}>
              a leading hypothesis, not an established account
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="Panel" options={[...PANELS]} value={pick} onChange={setPick} />

      <Note>{notes[pick]}</Note>
    </Stack>
  );
}
