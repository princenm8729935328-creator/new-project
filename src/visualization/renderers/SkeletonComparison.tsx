import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack, ToggleRow } from './lifeKit';

/**
 * The rebuild, part by part, human against chimpanzee.
 *
 * Schematic outlines rather than accurate skeletal drawings: the figure has to
 * carry one comparison at a time, and an anatomically detailed version would
 * bury it. The fidelity badge says so.
 */

interface Part {
  readonly key: string;
  readonly ape: string;
  readonly human: string;
  readonly why: string;
  readonly y: number;
}

const PARTS: readonly Part[] = [
  {
    key: 'Pelvis',
    y: 92,
    ape: 'tall, flat, blades facing backwards',
    human: 'short, bowl-shaped, blades wrapped round to the side',
    why: 'Puts the hip muscles where they can stop the pelvis tipping when one foot is off the ground. Everything else below follows from this change.',
  },
  {
    key: 'Spine',
    y: 60,
    ape: 'a single gentle curve, like a bow',
    human: 'an S, with a forward curve in the lower back',
    why: 'Shortening the pelvis brought the ribcage down towards the hips, so the lower spine curves forward to put the trunk’s weight back over the hip joints. This curve is also why humans get lower back pain and other apes do not.',
  },
  {
    key: 'Femur',
    y: 124,
    ape: 'runs straight down from the hip',
    human: 'slants inward, knees under the body midline',
    why: 'Brings the feet under the centre of the body so you can balance over one of them. The angle develops during infancy in response to walking, so its presence in a juvenile fossil shows the individual actually walked.',
  },
  {
    key: 'Knee',
    y: 146,
    ape: 'symmetrical, held bent when upright',
    human: 'asymmetrical surfaces, locks straight',
    why: 'A knee loaded at a slant would slide sideways, so the joint surfaces are shaped to resist it. Locking straight is why humans can stand for hours at almost no muscular cost — and why the knee is the joint that wears out.',
  },
  {
    key: 'Foot',
    y: 176,
    ape: 'a grasping hand, big toe out to the side',
    human: 'stiff arched lever, big toe in line',
    why: 'Arches compress under load and spring back, returning roughly a sixth of the energy of each step. The cost is that the foot can no longer grip anything.',
  },
];

export default function SkeletonComparison(_props: VisualizationProps): ReactNode {
  const [pick, setPick] = useState(0);
  const part = PARTS[Math.min(pick, PARTS.length - 1)];
  if (!part) return null;

  const figure = (x: number, human: boolean): ReactNode => (
    <g opacity={0.9}>
      <circle cx={x} cy={28} r={10} fill="rgba(148,162,192,0.35)" />
      <path
        d={human ? `M${x},38 L${x},96` : `M${x},38 C${x - 8},60 ${x + 6},76 ${x},96`}
        stroke={part.key === 'Spine' ? C.life : 'rgba(148,162,192,0.45)'}
        strokeWidth={part.key === 'Spine' ? 4 : 3}
        fill="none"
      />
      <rect
        x={x - (human ? 20 : 13)}
        y={96}
        width={human ? 40 : 26}
        height={human ? 13 : 22}
        rx={4}
        fill={part.key === 'Pelvis' ? C.life : 'rgba(148,162,192,0.45)'}
      />
      <line
        x1={x - (human ? 13 : 12)}
        y1={human ? 109 : 118}
        x2={x - (human ? 5 : 12)}
        y2={150}
        stroke={part.key === 'Femur' ? C.life : 'rgba(148,162,192,0.45)'}
        strokeWidth={part.key === 'Femur' ? 4.5 : 3.5}
      />
      <line
        x1={x + (human ? 13 : 12)}
        y1={human ? 109 : 118}
        x2={x + (human ? 5 : 12)}
        y2={150}
        stroke={part.key === 'Femur' ? C.life : 'rgba(148,162,192,0.45)'}
        strokeWidth={part.key === 'Femur' ? 4.5 : 3.5}
      />
      <circle
        cx={x - (human ? 5 : 12)}
        cy={152}
        r={3.5}
        fill={part.key === 'Knee' ? C.life : 'rgba(148,162,192,0.5)'}
      />
      <circle
        cx={x + (human ? 5 : 12)}
        cy={152}
        r={3.5}
        fill={part.key === 'Knee' ? C.life : 'rgba(148,162,192,0.5)'}
      />
      <line
        x1={x - (human ? 5 : 12)}
        y1={152}
        x2={x - (human ? 5 : 12)}
        y2={176}
        stroke="rgba(148,162,192,0.45)"
        strokeWidth={3}
      />
      <line
        x1={x + (human ? 5 : 12)}
        y1={152}
        x2={x + (human ? 5 : 12)}
        y2={176}
        stroke="rgba(148,162,192,0.45)"
        strokeWidth={3}
      />
      {human ? (
        <g fill={part.key === 'Foot' ? C.life : 'rgba(148,162,192,0.45)'}>
          <rect x={x - 13} y={176} width={18} height={5} rx={2} />
          <rect x={x - 3} y={176} width={18} height={5} rx={2} />
        </g>
      ) : (
        <g fill={part.key === 'Foot' ? C.life : 'rgba(148,162,192,0.45)'}>
          <rect x={x - 20} y={176} width={18} height={5} rx={2} />
          <rect x={x - 22} y={172} width={6} height={9} rx={3} />
          <rect x={x + 4} y={176} width={18} height={5} rx={2} />
          <rect x={x + 20} y={172} width={6} height={9} rx={3} />
        </g>
      )}
    </g>
  );

  return (
    <Stack>
      <Figure height={206}>
        <text x={104} y={14} textAnchor="middle" fontSize={9} fill={C.dim}>
          chimpanzee
        </text>
        <text x={276} y={14} textAnchor="middle" fontSize={9} fill={C.life}>
          human
        </text>
        {figure(104, false)}
        {figure(276, true)}
        <line
          x1={190}
          y1={22}
          x2={190}
          y2={190}
          stroke="rgba(148,162,192,0.2)"
          strokeDasharray="3 4"
        />
        <circle
          cx={104}
          cy={part.y}
          r={16}
          fill="none"
          stroke={C.life}
          strokeWidth={1.2}
          opacity={0.6}
        />
        <circle
          cx={276}
          cy={part.y}
          r={16}
          fill="none"
          stroke={C.life}
          strokeWidth={1.2}
          opacity={0.6}
        />
        <text x={190} y={200} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          schematic outlines, not scale drawings
        </text>
      </Figure>

      <ToggleRow label="Part" options={PARTS.map((p) => p.key)} value={pick} onChange={setPick} />

      <Note>
        <strong>{part.key}.</strong> Chimpanzee: {part.ape}. Human: {part.human}. {part.why}
      </Note>
    </Stack>
  );
}
