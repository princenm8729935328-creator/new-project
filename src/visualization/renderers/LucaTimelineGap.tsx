import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Figure, Note, Stack } from './lifeKit';

/**
 * The gap between the first life and the last common ancestor.
 *
 * The confusion this corrects is a genuine one, and a diagram fixes it faster
 * than a paragraph: LUCA is the most recent ancestor of everything that
 * survived, not the first organism. Everything to the left of it is real life
 * that left no descendants — and left no trace either.
 */

export default function LucaTimelineGap(_props: VisualizationProps): ReactNode {
  const LEFT = 20;
  const W = 340;
  const Y = 96;
  const ORIGIN = 0.1;
  const LUCA = 0.46;
  const x = (f: number): number => LEFT + f * W;

  return (
    <Stack>
      <Figure height={188}>
        <rect x={LEFT} y={Y - 8} width={W} height={16} rx={3} fill={C.panel} />
        <rect
          x={x(ORIGIN)}
          y={Y - 8}
          width={x(LUCA) - x(ORIGIN)}
          height={16}
          rx={3}
          fill="rgba(255,143,110,0.28)"
        />
        <rect
          x={x(LUCA)}
          y={Y - 8}
          width={LEFT + W - x(LUCA)}
          height={16}
          rx={3}
          fill="rgba(79,224,192,0.3)"
        />

        <line
          x1={x(ORIGIN)}
          y1={Y - 30}
          x2={x(ORIGIN)}
          y2={Y + 26}
          stroke={C.warm}
          strokeWidth={1.6}
        />
        <text x={x(ORIGIN)} y={Y - 36} textAnchor="middle" fontSize={9} fill={C.warm}>
          life begins
        </text>
        <line x1={x(LUCA)} y1={Y - 30} x2={x(LUCA)} y2={Y + 26} stroke={C.life} strokeWidth={1.6} />
        <text x={x(LUCA)} y={Y - 36} textAnchor="middle" fontSize={9} fill={C.life}>
          LUCA
        </text>
        <text x={LEFT + W} y={Y - 36} textAnchor="end" fontSize={9} fill={C.dim}>
          today
        </text>

        {/* Lineages that died out, between the origin and LUCA. */}
        {[0.16, 0.24, 0.3, 0.38].map((s, i) => (
          <path
            key={s}
            d={`M${x(s)},${Y + 8} L${x(s + 0.05 + i * 0.01)},${Y + 30 + i * 7}`}
            stroke="rgba(255,143,110,0.6)"
            strokeWidth={1.3}
          />
        ))}
        <text x={x(0.27)} y={Y + 64} textAnchor="middle" fontSize={8.5} fill={C.hot}>
          other lineages — real life, no survivors, no fossils
        </text>

        {/* Descendants of LUCA. */}
        <path
          d={`M${x(LUCA)},${Y} L${x(0.72)},${Y - 62} L${x(0.96)},${Y - 66}`}
          fill="none"
          stroke={C.life}
          strokeWidth={1.3}
        />
        <path
          d={`M${x(LUCA)},${Y} L${x(0.7)},${Y + 4} L${x(0.96)},${Y - 24}`}
          fill="none"
          stroke={C.life}
          strokeWidth={1.3}
        />
        <path
          d={`M${x(0.72)},${Y - 62} L${x(0.96)},${Y - 92}`}
          fill="none"
          stroke={C.life}
          strokeWidth={1.3}
        />
        <text x={x(0.98)} y={Y - 88} textAnchor="end" fontSize={8} fill={C.life}>
          Eukarya
        </text>
        <text x={x(0.98)} y={Y - 62} textAnchor="end" fontSize={8} fill={C.life}>
          Archaea
        </text>
        <text x={x(0.98)} y={Y - 20} textAnchor="end" fontSize={8} fill={C.life}>
          Bacteria
        </text>

        <text x={190} y={180} textAnchor="middle" fontSize={8.5} fill={C.dim}>
          LUCA is the most recent common ancestor of survivors, not the first organism
        </text>
      </Figure>

      <Note>
        Genetics can reconstruct LUCA because every living thing carries evidence of it. It cannot
        reach anything before LUCA, because the only record of those organisms would have been their
        descendants, and they have none. The width of the orange interval is unknown — it could be
        tens of millions of years or hundreds — and current estimates place LUCA itself somewhere
        around 4.2 to 3.9 billion years ago, with real uncertainty. This diagram is schematic in its
        proportions.
      </Note>
    </Stack>
  );
}
