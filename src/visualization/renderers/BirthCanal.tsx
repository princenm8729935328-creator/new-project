import { type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Stepper, type Stage } from './lifeKit';

/**
 * Why a human infant has to turn on the way out.
 *
 * A cross-section at each stage, with the head outline rotating between them.
 * The mechanism is geometric and a stepper is the right control: the reader can
 * stop on the quarter-turn rather than watching it happen.
 */

function canal(widest: 'transverse' | 'oblique' | 'sagittal', headAngle: number): ReactNode {
  const rx = widest === 'transverse' ? 62 : widest === 'oblique' ? 54 : 44;
  const ry = widest === 'transverse' ? 44 : widest === 'oblique' ? 52 : 60;
  return (
    <g>
      <ellipse
        cx={190}
        cy={92}
        rx={rx + 16}
        ry={ry + 16}
        fill="none"
        stroke="rgba(148,162,192,0.4)"
        strokeWidth={9}
      />
      <ellipse
        cx={190}
        cy={92}
        rx={rx}
        ry={ry}
        fill="rgba(148,162,192,0.08)"
        stroke="rgba(148,162,192,0.5)"
        strokeDasharray="4 3"
      />
      <g transform={`rotate(${headAngle} 190 92)`}>
        <ellipse
          cx={190}
          cy={92}
          rx={30}
          ry={40}
          fill="rgba(79,224,192,0.3)"
          stroke={C.life}
          strokeWidth={1.6}
        />
      </g>
      <text x={190} y={168} textAnchor="middle" fontSize={8} fill={C.faint}>
        cross-section through the pelvis, looking down
      </text>
    </g>
  );
}

const STAGES: readonly Stage[] = [
  {
    id: 'inlet',
    title: 'Entering: the widest way across is side to side',
    detail:
      'The top of the human birth canal is wider transversely than front to back, because the pelvis was reshaped for walking. The infant head, which is longer than it is wide, has to enter turned sideways to present its narrowest dimension to the narrowest direction.',
    draw: canal('transverse', 90),
  },
  {
    id: 'mid',
    title: 'Mid-canal: the cross-section changes shape',
    detail:
      'Partway through, the shape of the passage rotates. What was the widest direction narrows and a different direction opens. This is the point at which the head must turn, and it is unique to humans among primates.',
    draw: canal('oblique', 45),
  },
  {
    id: 'outlet',
    title: 'Emerging: the widest way across is front to back',
    detail:
      'At the exit the long axis has rotated by about ninety degrees. The head, having turned to match, emerges facing the mother’s back. This is why human birth is usually attended: the infant comes out facing away, so the mother cannot easily reach down and guide it as a chimpanzee can.',
    draw: canal('sagittal', 0),
  },
];

export default function BirthCanal(_props: VisualizationProps): ReactNode {
  return <Stepper stages={STAGES} height={186} label="Stage" />;
}
