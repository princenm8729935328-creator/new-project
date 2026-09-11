import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * Which systems a modern brain recruits to make each kind of tool.
 *
 * Brain regions drawn as labelled zones on a schematic lateral view. The caveat
 * matters more than the result and is stated in the note: this is a modern brain
 * shaped by a lifetime of language doing the task, not a fossil brain.
 */

interface Zone {
  readonly id: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly rx: number;
  readonly ry: number;
  readonly oldowan: boolean;
  readonly acheulean: boolean;
  readonly does: string;
}

const ZONES: readonly Zone[] = [
  {
    id: 'visual',
    label: 'visual',
    x: 288,
    y: 108,
    rx: 30,
    ry: 24,
    oldowan: true,
    acheulean: true,
    does: 'seeing the core, judging the edge angle and where the next flake will come from',
  },
  {
    id: 'motor',
    label: 'motor / sensory',
    x: 190,
    y: 66,
    rx: 40,
    ry: 20,
    oldowan: true,
    acheulean: true,
    does: 'aiming and delivering the blow, and feeling the impact through the hammerstone',
  },
  {
    id: 'parietal',
    label: 'parietal',
    x: 246,
    y: 80,
    rx: 30,
    ry: 22,
    oldowan: true,
    acheulean: true,
    does: 'integrating what is seen with where the hands are — the spatial side of tool use',
  },
  {
    id: 'premotor',
    label: 'ventral premotor',
    x: 132,
    y: 92,
    rx: 26,
    ry: 20,
    oldowan: false,
    acheulean: true,
    does: 'organising an action into sub-sequences that serve a later goal',
  },
  {
    id: 'ifg',
    label: 'inferior frontal',
    x: 96,
    y: 116,
    rx: 26,
    ry: 20,
    oldowan: false,
    acheulean: true,
    does: 'holding a hierarchy of nested goals — and, on the other side of the brain, part of the circuitry used for syntax',
  },
];

export default function ToolmakingCognition(_props: VisualizationProps): ReactNode {
  const [view, setView] = useState(1);
  const acheulean = view === 1;

  return (
    <Stack>
      <Figure height={196}>
        <path
          d="M70,110 C70,58 130,36 196,36 C268,36 318,62 322,106 C326,140 280,158 214,158 C140,158 70,146 70,110 Z"
          fill="rgba(148,162,192,0.08)"
          stroke="rgba(148,162,192,0.35)"
          strokeWidth={1.4}
        />
        <path
          d="M78,140 C110,150 150,152 176,150"
          fill="none"
          stroke="rgba(148,162,192,0.3)"
          strokeWidth={1}
        />

        {ZONES.map((z) => {
          const on = acheulean ? z.acheulean : z.oldowan;
          const extra = acheulean && !z.oldowan;
          return (
            <g key={z.id}>
              <ellipse
                cx={z.x}
                cy={z.y}
                rx={z.rx}
                ry={z.ry}
                fill={
                  on ? (extra ? 'rgba(255,143,110,0.28)' : 'rgba(79,224,192,0.2)') : 'transparent'
                }
                stroke={on ? (extra ? C.hot : C.life) : 'rgba(148,162,192,0.2)'}
                strokeWidth={on ? 1.4 : 0.8}
                strokeDasharray={on ? undefined : '3 3'}
              />
              <text
                x={z.x}
                y={z.y + 3}
                textAnchor="middle"
                fontSize={7.5}
                fill={on ? (extra ? C.hot : C.life) : C.faint}
              >
                {z.label}
              </text>
            </g>
          );
        })}

        <text x={14} y={18} fontSize={9} fill={C.dim}>
          {acheulean ? 'making a handaxe' : 'striking a flake'}
        </text>
        {acheulean ? (
          <text x={14} y={178} fontSize={8} fill={C.hot}>
            orange: recruited for the handaxe and not for the flake
          </text>
        ) : (
          <text x={14} y={178} fontSize={8} fill={C.life}>
            visual and motor systems, largely
          </text>
        )}
        <text x={14} y={190} fontSize={7.5} fill={C.faint}>
          schematic lateral view; zone positions approximate
        </text>
      </Figure>

      <ToggleRow
        label="Task"
        options={['Oldowan flake', 'Acheulean handaxe']}
        value={view}
        onChange={setView}
      />

      <Note>
        You cannot scan a Homo erectus brain. You can teach a modern person to make the same tools,
        image them while they do it, and see what the task requires. Oldowan knapping draws mainly
        on visual and motor systems. The Acheulean recruits those and additional right frontal
        regions associated with organising actions into hierarchies — sequences of sub-goals serving
        a larger plan — some of which have counterparts on the left side involved in syntax. That
        has fuelled a long-running proposal that complex toolmaking and language share machinery for
        structured sequencing. The limitation is specific and important: every participant grew up
        speaking a language and using tools, so this shows how a modern brain performs the task, not
        how the original makers did. What it does establish is a fact about the task rather than the
        knapper — that the Acheulean demands hierarchical planning — and the step from there to
        conclusions about extinct cognition is a long one the literature does not always take
        carefully.
      </Note>
    </Stack>
  );
}
