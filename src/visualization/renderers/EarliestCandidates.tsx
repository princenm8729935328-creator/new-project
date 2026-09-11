import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The three candidate earliest hominins, and how much each rests on.
 *
 * The material column is the point. Each of these arguments turns on one or two
 * features of a small number of specimens, and drawing that alongside the claim
 * keeps the reader calibrated.
 */

interface Candidate {
  readonly key: string;
  readonly ma: string;
  readonly place: string;
  readonly material: string;
  readonly argument: string;
  readonly objection: string;
  readonly strength: number;
}

const CANDIDATES: readonly Candidate[] = [
  {
    key: 'Sahelanthropus',
    ma: '~7.0 Ma',
    place: 'Chad',
    material: 'one distorted skull, a few teeth, a femur',
    argument:
      'The opening where the spinal cord enters the skull sits further forward than in a chimpanzee — which is what happens when a head is balanced on top of a vertical spine rather than hung from a horizontal one.',
    objection:
      'The skull is badly crushed, so the reconstruction involves judgement, and the diagnostic value of that character has been questioned. The femur has been read both ways by different teams.',
    strength: 0.4,
  },
  {
    key: 'Orrorin',
    ma: '~6.0 Ma',
    place: 'Kenya',
    material: 'thigh bone fragments, a few teeth',
    argument:
      'The internal architecture of the femoral neck — how the bone has thickened in response to loading — resembles that of bipeds rather than apes.',
    objection:
      'Very little material, and the internal structure has been imaged and read differently by different groups. No comparable finds have appeared to test it.',
    strength: 0.35,
  },
  {
    key: 'Ardipithecus',
    ma: '4.4 Ma',
    place: 'Ethiopia',
    material: 'a partial skeleton, plus other individuals',
    argument:
      'A pelvis with upright-walking features together with a foot that still has a grasping big toe: on the ground bipedal, in the trees a climber, a combination no living primate has. Small canines and no knuckle-walking adaptations.',
    objection:
      'The pelvis, which carries most of the bipedal signal, was crushed and its reconstruction is disputed by researchers who have had less access to the original material.',
    strength: 0.6,
  },
];

export default function EarliestCandidates(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(2);
  const c = CANDIDATES[Math.min(pick, CANDIDATES.length - 1)];
  if (!c) return null;

  return (
    <Stack>
      <Figure height={186}>
        {CANDIDATES.map((x, i) => {
          const y = 34 + i * 44;
          const active = i === pick;
          return (
            <g key={x.key} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <text
                x={14}
                y={y}
                fontSize={9.5}
                fill={active ? C.life : C.dim}
                fontWeight={active ? 700 : 400}
              >
                {x.key}
              </text>
              <text x={14} y={y + 12} fontSize={7.5} fill={C.faint}>
                {x.ma} · {x.place}
              </text>
              <rect
                x={190}
                y={y - 10}
                width={170}
                height={9}
                rx={4}
                fill="rgba(148,162,192,0.14)"
              />
              <rect
                x={190}
                y={y - 10}
                width={170 * x.strength}
                height={9}
                rx={4}
                fill={active ? C.warm : 'rgba(255,210,127,0.45)'}
              />
              <text x={190} y={y + 12} fontSize={7} fill={C.faint}>
                {x.material}
              </text>
            </g>
          );
        })}
        <text x={190} y={18} fontSize={8} fill={C.dim}>
          strength of the bipedalism case
        </text>
        <text x={14} y={176} fontSize={7.5} fill={C.faint}>
          bar lengths summarise the state of the argument, not a measurement
        </text>
      </Figure>

      <ToggleRow
        label="Candidate"
        options={CANDIDATES.map((x) => x.key)}
        value={pick}
        onChange={setPick}
      />

      <Note>
        <strong>{c.key}</strong>, {c.ma}, {c.place}. Known from {c.material}.{' '}
        <strong>The argument:</strong> {c.argument} <strong>The objection:</strong> {c.objection}{' '}
        Near a branching point the two lineages have barely diverged, so a fossil from this window
        is expected to look like a generalised ape with a handful of suggestive traits — and a
        handful of traits is exactly what is easiest to read two ways.
      </Note>
    </Stack>
  );
}
