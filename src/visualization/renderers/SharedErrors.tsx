import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Three kinds of shared genomic error, each one hard to explain any other way.
 *
 * Drawn rather than described because the chromosome 2 case in particular is a
 * geometric argument: two things joined end to end leave their ends in the
 * middle, and a picture makes that immediate.
 */

const VIEWS = ['Chromosome 2', 'Viral insertions', 'Broken genes'] as const;

export default function SharedErrors(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={196}>
        {view === 0 ? (
          <g>
            <text x={16} y={16} fontSize={8.5} fill={C.dim}>
              chimpanzee: two separate chromosomes
            </text>
            <rect x={16} y={26} width={150} height={14} rx={7} fill="rgba(111,179,255,0.4)" />
            <rect x={176} y={26} width={130} height={14} rx={7} fill="rgba(201,168,255,0.4)" />
            {[16, 160, 176, 300].map((x) => (
              <rect key={x} x={x} y={26} width={6} height={14} rx={3} fill={C.warm} />
            ))}
            <circle cx={70} cy={33} r={4} fill={C.hot} />
            <circle cx={230} cy={33} r={4} fill={C.hot} />

            <text x={16} y={70} fontSize={8.5} fill={C.dim}>
              human chromosome 2: one chromosome
            </text>
            <rect x={16} y={80} width={290} height={14} rx={7} fill="rgba(79,224,192,0.35)" />
            {[16, 300].map((x) => (
              <rect key={x} x={x} y={80} width={6} height={14} rx={3} fill={C.warm} />
            ))}
            <rect x={160} y={80} width={12} height={14} fill={C.warm} />
            <circle cx={70} cy={87} r={4} fill={C.hot} />
            <circle
              cx={230}
              cy={87}
              r={4}
              fill="rgba(255,143,110,0.35)"
              stroke={C.hot}
              strokeDasharray="2 2"
            />

            <path d={`M166,100 l0,10`} stroke={C.warm} strokeWidth={1.2} />
            <text x={166} y={122} textAnchor="middle" fontSize={8} fill={C.warm}>
              chromosome-end sequence, in the middle
            </text>
            <path d={`M230,100 l0,22`} stroke={C.hot} strokeWidth={1.2} strokeDasharray="2 2" />
            <text x={230} y={140} textAnchor="middle" fontSize={8} fill={C.hot}>
              a second, switched-off centromere
            </text>

            <text x={16} y={166} fontSize={8} fill={C.faint}>
              yellow = telomere repeats (normally only at chromosome ends)
            </text>
            <text x={16} y={180} fontSize={8} fill={C.faint}>
              orange = centromere (a chromosome normally has exactly one)
            </text>
          </g>
        ) : view === 1 ? (
          <g>
            <text x={16} y={16} fontSize={8.5} fill={C.dim}>
              the same viral remains, at the same positions, in both genomes
            </text>
            {['Human', 'Chimpanzee', 'Gorilla'].map((sp, r) => (
              <g key={sp}>
                <text x={16} y={48 + r * 40} fontSize={8.5} fill={C.dim}>
                  {sp}
                </text>
                <rect
                  x={16}
                  y={54 + r * 40}
                  width={340}
                  height={10}
                  rx={5}
                  fill="rgba(148,162,192,0.16)"
                />
                {[0.08, 0.21, 0.39, 0.52, 0.71, 0.88].map((f, i) => (
                  <rect
                    key={f}
                    x={16 + 340 * f}
                    y={54 + r * 40}
                    width={7}
                    height={10}
                    fill={r === 2 && i === 3 ? 'transparent' : C.deep}
                    opacity={0.85}
                  />
                ))}
              </g>
            ))}
            <text x={16} y={176} fontSize={8} fill={C.faint}>
              a retrovirus inserts at effectively random positions in three billion
            </text>
            <text x={16} y={190} fontSize={8} fill={C.faint}>
              letters. Sharing a position means sharing the ancestor it landed in.
            </text>
          </g>
        ) : (
          <g>
            <text x={16} y={16} fontSize={8.5} fill={C.dim}>
              GULO — the gene for making vitamin C
            </text>
            {[
              ['Most mammals', C.life, 'works'],
              ['Human', C.hot, 'broken'],
              ['Chimpanzee', C.hot, 'broken'],
              ['Macaque', C.hot, 'broken'],
            ].map(([label, colour, state], r) => (
              <g key={label as string}>
                <text x={16} y={44 + r * 30} fontSize={8.5} fill={C.dim}>
                  {label as string}
                </text>
                <rect
                  x={120}
                  y={34 + r * 30}
                  width={180}
                  height={12}
                  rx={3}
                  fill={r === 0 ? 'rgba(79,224,192,0.3)' : 'rgba(255,143,110,0.2)'}
                />
                {r > 0 ? (
                  <g>
                    <path d={`M188,${34 + r * 30} l0,12`} stroke={C.hot} strokeWidth={2} />
                    <path d={`M238,${34 + r * 30} l0,12`} stroke={C.hot} strokeWidth={2} />
                  </g>
                ) : null}
                <text x={310} y={44 + r * 30} fontSize={8} fill={colour as string}>
                  {state as string}
                </text>
              </g>
            ))}
            <text x={16} y={168} fontSize={8} fill={C.faint}>
              The gene is present in all of them. In primates it is disabled by
            </text>
            <text x={16} y={182} fontSize={8} fill={C.faint}>
              the same lesions in the same places — an inherited breakage.
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow label="Evidence" options={[...VIEWS]} value={view} onChange={setView} />

      <Note>
        {view === 0
          ? 'Every other great ape has 24 pairs of chromosomes; humans have 23. If we share an ancestor with them, a fusion must have happened — and a fusion should leave the joined ends visible in the middle of the product. Human chromosome 2 carries exactly that: telomere repeats, head to head, at an internal position where they have no business being, plus the remains of a second centromere at the position predicted by lining it up against the two chimpanzee chromosomes. This was a prediction before it was an observation.'
          : view === 1
            ? 'Retroviruses copy themselves into host DNA at essentially arbitrary positions. If that happens in a cell that makes eggs or sperm, the insertion is inherited. Around 8% of the human genome is this kind of wreckage, and thousands of insertions sit at identical coordinates in humans and chimpanzees. Positions are schematic here; the finding is that the coordinates match. The gap in the gorilla row shows the pattern used to build trees: insertions shared by some lineages and not others mark branching points.'
            : 'Humans, chimpanzees and other primates all carry the gene for the last enzyme in vitamin C synthesis, and in all of them it is disabled — by the same specific lesions. A working gene shared between species could reflect shared requirements. A gene broken the same way cannot: nothing needs it broken in that particular manner. This is the plagiarism test applied to genomes, and it is why the genetic case for common ancestry is considered closed.'}
      </Note>
    </Stack>
  );
}
