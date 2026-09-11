import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Two independent lines of evidence for the same conclusion.
 *
 * A skeleton shows what a body could do; a trackway shows what a body did. The
 * toggle puts them side by side because the convergence — not either one alone
 * — is what closed the argument about early bipedalism.
 */

interface Element {
  readonly id: string;
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
  readonly have: boolean;
}

const SKELETON: readonly Element[] = [
  { id: 'skull', x: 178, y: 20, w: 24, h: 20, have: false },
  { id: 'jaw', x: 180, y: 42, w: 20, h: 8, have: true },
  { id: 'spine', x: 186, y: 52, w: 8, h: 44, have: true },
  { id: 'ribsL', x: 164, y: 56, w: 20, h: 30, have: true },
  { id: 'ribsR', x: 196, y: 56, w: 20, h: 30, have: false },
  { id: 'armL', x: 150, y: 58, w: 8, h: 46, have: true },
  { id: 'armR', x: 222, y: 58, w: 8, h: 46, have: true },
  { id: 'handL', x: 146, y: 106, w: 14, h: 10, have: false },
  { id: 'handR', x: 220, y: 106, w: 14, h: 10, have: false },
  { id: 'pelvis', x: 170, y: 98, w: 40, h: 16, have: true },
  { id: 'femurL', x: 174, y: 116, w: 9, h: 40, have: true },
  { id: 'femurR', x: 197, y: 116, w: 9, h: 40, have: false },
  { id: 'tibiaL', x: 175, y: 158, w: 8, h: 32, have: true },
  { id: 'tibiaR', x: 197, y: 158, w: 8, h: 32, have: false },
  { id: 'footL', x: 168, y: 190, w: 20, h: 7, have: false },
  { id: 'footR', x: 192, y: 190, w: 20, h: 7, have: false },
];

export default function LucyCompleteness(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(0);

  return (
    <Stack>
      <Figure height={206}>
        {view === 0 ? (
          <g>
            <text x={14} y={16} fontSize={9} fill={C.dim}>
              AL 288-1 — about 40% of one skeleton, 3.2 Ma
            </text>
            {SKELETON.map((e) => (
              <rect
                key={e.id}
                x={e.x}
                y={e.y}
                width={e.w}
                height={e.h}
                rx={3}
                fill={e.have ? C.life : 'transparent'}
                stroke={e.have ? 'transparent' : 'rgba(148,162,192,0.35)'}
                strokeDasharray={e.have ? undefined : '3 3'}
                opacity={e.have ? 0.8 : 1}
              />
            ))}
            <rect x={14} y={32} width={9} height={9} rx={2} fill={C.life} opacity={0.8} />
            <text x={28} y={40} fontSize={8} fill={C.life}>
              recovered
            </text>
            <rect
              x={14}
              y={48}
              width={9}
              height={9}
              rx={2}
              fill="none"
              stroke="rgba(148,162,192,0.35)"
              strokeDasharray="3 3"
            />
            <text x={28} y={56} fontSize={8} fill={C.faint}>
              not recovered
            </text>
            <text x={14} y={188} fontSize={8} fill={C.warm}>
              pelvis and knee present: anatomy says upright walking
            </text>
            <text x={14} y={200} fontSize={8} fill={C.hot}>
              but anatomy shows capability, not habit
            </text>
          </g>
        ) : (
          <g>
            <text x={14} y={16} fontSize={9} fill={C.dim}>
              Laetoli, Tanzania — footprints in volcanic ash, 3.66 Ma
            </text>
            {Array.from({ length: 7 }, (_, i) => {
              const x = 46 + i * 44;
              const y = i % 2 === 0 ? 78 : 108;
              return (
                <g key={i}>
                  <ellipse cx={x} cy={y} rx={11} ry={17} fill="rgba(79,224,192,0.35)" />
                  <ellipse cx={x} cy={y + 10} rx={9} ry={7} fill={C.life} opacity={0.75} />
                  <ellipse cx={x - 1} cy={y - 13} rx={4} ry={4} fill={C.life} opacity={0.6} />
                </g>
              );
            })}
            <text x={46} y={142} fontSize={8} fill={C.life}>
              deep heel strike
            </text>
            <text x={190} y={142} fontSize={8} fill={C.life}>
              raised arch
            </text>
            <text x={290} y={142} fontSize={8} fill={C.life}>
              big toe in line
            </text>
            <text x={14} y={172} fontSize={8} fill={C.warm}>
              behaviour preserved directly — an animal walking, not a body’s capability
            </text>
            <text x={14} y={190} fontSize={8} fill={C.hot}>
              but no fossils in the ash: the maker’s species is an inference
            </text>
          </g>
        )}
      </Figure>

      <ToggleRow
        label="Evidence"
        options={['Lucy’s skeleton', 'The Laetoli trackway']}
        value={view}
        onChange={setView}
      />

      <Note>
        {view === 0
          ? 'Before 1974 the record consisted of isolated teeth and fragments, rarely associated with each other. With one individual you can ask how the parts fit together — whether arm length matches leg length, how the pelvis and femur articulate. Lucy showed an upright-walking animal with a chimpanzee-sized brain, which settled the order of events. Element positions here are schematic; the recovered/missing split is approximately right.'
          : 'A volcano laid down fine ash, rain dampened it, animals walked across it, and it set like cement. The prints show a deep heel strike, a raised arch and a big toe in line with the others — the signature of walking the way we walk. Experimental work reproducing the depth profile with modern walkers supports an extended-limb gait rather than the bent-knee walking of a chimpanzee. What the prints cannot tell you is who made them: no fossils were found in the ash, and the usual attribution to Australopithecus afarensis is a reasonable inference rather than a demonstration.'}
      </Note>
    </Stack>
  );
}
