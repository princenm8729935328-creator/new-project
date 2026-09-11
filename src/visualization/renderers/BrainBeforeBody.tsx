import { type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * The order of events, drawn as two tracks against the same time axis.
 *
 * Almost every popular account of human origins implies that intelligence came
 * first and the body followed — the assumption Piltdown was manufactured to
 * confirm. The two-track layout makes the two-million-year gap unmissable.
 */

interface Point {
  readonly ma: number;
  readonly cc: number;
  readonly label?: string;
}

const BRAIN: readonly Point[] = [
  { ma: 4.2, cc: 400 },
  { ma: 3.2, cc: 420, label: 'Lucy' },
  { ma: 2.5, cc: 450 },
  { ma: 1.9, cc: 620 },
  { ma: 1.5, cc: 870 },
  { ma: 0.8, cc: 1000 },
  { ma: 0.3, cc: 1250 },
  { ma: 0, cc: 1350, label: 'us' },
];

export default function BrainBeforeBody(_props: VisualizationProps): ReactNode {
  const LEFT = 40;
  const RIGHT = 16;
  const W = 380 - LEFT - RIGHT;
  const toX = (ma: number): number => LEFT + W - (ma / 4.5) * W;
  const toY = (cc: number): number => 128 - ((cc - 350) / 1100) * 92;

  const line = BRAIN.map(
    (p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.ma).toFixed(1)},${toY(p.cc).toFixed(1)}`,
  ).join(' ');

  return (
    <Stack>
      <Figure height={200}>
        <text x={14} y={14} fontSize={8} fill={C.faint}>
          brain volume (cm³)
        </text>
        {[400, 800, 1200].map((cc) => (
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
        <path d={line} fill="none" stroke={C.deep} strokeWidth={2.2} />
        {BRAIN.filter((p) => p.label).map((p) => (
          <g key={p.label}>
            <circle cx={toX(p.ma)} cy={toY(p.cc)} r={4} fill={C.deep} />
            <text x={toX(p.ma)} y={toY(p.cc) - 8} textAnchor="middle" fontSize={7.5} fill={C.deep}>
              {p.label}
            </text>
          </g>
        ))}

        <rect
          x={toX(4.2)}
          y={146}
          width={toX(0) - toX(4.2)}
          height={13}
          rx={4}
          fill="rgba(79,224,192,0.3)"
        />
        <text x={toX(4.2) + 6} y={156} fontSize={8} fill={C.life}>
          habitual bipedal walking: established, and stays established
        </text>

        <rect
          x={toX(4.2)}
          y={toY(1200)}
          width={toX(2.0) - toX(4.2)}
          height={toY(350) - toY(1200)}
          fill="rgba(255,210,127,0.08)"
        />
        <text
          x={(toX(4.2) + toX(2.0)) / 2}
          y={toY(1200) + 12}
          textAnchor="middle"
          fontSize={8}
          fill={C.warm}
        >
          ~2 million years
        </text>
        <text
          x={(toX(4.2) + toX(2.0)) / 2}
          y={toY(1200) + 24}
          textAnchor="middle"
          fontSize={8}
          fill={C.warm}
        >
          upright, brain unchanged
        </text>

        {[4, 3, 2, 1, 0].map((t) => (
          <text key={t} x={toX(t)} y={176} textAnchor="middle" fontSize={7} fill={C.faint}>
            {t === 0 ? 'now' : `${t} Ma`}
          </text>
        ))}
        <text x={190} y={192} textAnchor="middle" fontSize={7.5} fill={C.faint}>
          a smoothed trend through scattered specimens, not a measured trajectory
        </text>
      </Figure>

      <Note>
        This ordering was the hardest thing for the field to accept, and the reason was a forgery.
        Piltdown Man, assembled in England in 1912 from a human braincase and an ape jaw, had
        convinced everybody that a large brain came first. When Raymond Dart described the Taung
        Child in 1925 — small brain, upright posture — it looked wrong, and it was dismissed for
        nearly thirty years. Piltdown was exposed in 1953, and the australopithecines could finally
        be read for what they are. Bipedalism is fully established by 4.2 million years ago and
        brains stay close to chimpanzee size for another two million. Whatever expanded the brain,
        it was not standing up, and it happened much later and for separate reasons.
      </Note>
    </Stack>
  );
}
