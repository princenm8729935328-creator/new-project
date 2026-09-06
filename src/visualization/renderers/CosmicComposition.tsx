import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';

/**
 * The energy budget of the Universe, to scale.
 *
 * A proportional bar rather than a pie: comparing angles is harder than
 * comparing lengths, and the point of this figure is a comparison — how small
 * the slice we can actually see is against the two we cannot identify.
 *
 * Values are the Planck 2018 base-ΛCDM fit, quoted with their uncertainties.
 * Nothing here is estimated.
 */

interface Slice {
  label: string;
  percent: number;
  uncertainty: number;
  colour: string;
  note: string;
}

const SLICES: readonly Slice[] = [
  {
    label: 'Dark energy',
    percent: 68.9,
    uncertainty: 0.6,
    colour: '#a97bff',
    note: 'Cause unknown. Makes the expansion accelerate.',
  },
  {
    label: 'Dark matter',
    percent: 26.2,
    uncertainty: 0.5,
    colour: '#63a4ff',
    note: 'Inferred from gravity. Never detected as a particle.',
  },
  {
    label: 'Ordinary matter',
    percent: 4.9,
    uncertainty: 0.1,
    colour: '#4fe0c0',
    // Kept short: SVG text does not wrap, and the frame is 380 units wide.
    note: 'Every atom, star, planet and person.',
  },
];

export default function CosmicComposition(_props: VisualizationProps): ReactNode {
  const w = 380;
  const barY = 34;
  const barH = 40;
  const pad = 12;
  const barW = w - pad * 2;
  const rowH = 46;
  const h = barY + barH + 26 + SLICES.length * rowH + 8;

  let cursor = pad;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMin meet"
      style={{ width: '100%', height: 'auto' }}
      role="presentation"
    >
      <text
        x={pad}
        y={16}
        fontSize={11}
        fill="rgba(226,233,246,0.95)"
        fontFamily="system-ui, sans-serif"
      >
        Everything ever seen through a telescope is the smallest slice.
      </text>

      {SLICES.map((slice) => {
        const sliceW = (slice.percent / 100) * barW;
        const x = cursor;
        cursor += sliceW;
        return (
          <g key={slice.label}>
            <rect x={x} y={barY} width={sliceW} height={barH} fill={slice.colour} opacity={0.88} />
            {sliceW > 46 && (
              <text
                x={x + sliceW / 2}
                y={barY + barH / 2 + 4}
                textAnchor="middle"
                fontSize={12}
                fontWeight={600}
                fill="#04060d"
                fontFamily="ui-monospace, monospace"
              >
                {slice.percent}%
              </text>
            )}
          </g>
        );
      })}

      {/* The 4.9% slice is too narrow to label inside; call it out below. */}
      <line
        x1={pad + barW - (4.9 / 100) * barW}
        x2={pad + barW - (4.9 / 100) * barW}
        y1={barY + barH}
        y2={barY + barH + 10}
        stroke="#4fe0c0"
        strokeWidth={1}
      />
      <text
        x={pad + barW}
        y={barY + barH + 20}
        textAnchor="end"
        fontSize={10}
        fill="#4fe0c0"
        fontFamily="system-ui, sans-serif"
      >
        4.9% ordinary matter
      </text>

      {SLICES.map((slice, index) => {
        const y = barY + barH + 40 + index * rowH;
        return (
          <g key={slice.label}>
            <rect x={pad} y={y} width={10} height={10} rx={2} fill={slice.colour} />
            <text
              x={pad + 18}
              y={y + 9}
              fontSize={11.5}
              fontWeight={600}
              fill="rgba(226,233,246,0.95)"
              fontFamily="system-ui, sans-serif"
            >
              {slice.label}
            </text>
            <text
              x={w - pad}
              y={y + 9}
              textAnchor="end"
              fontSize={11}
              fill="rgba(148,162,192,0.95)"
              fontFamily="ui-monospace, monospace"
            >
              {slice.percent} ± {slice.uncertainty}%
            </text>
            <text
              x={pad + 18}
              y={y + 24}
              fontSize={10}
              fill="rgba(148,162,192,0.85)"
              fontFamily="system-ui, sans-serif"
            >
              {slice.note}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
