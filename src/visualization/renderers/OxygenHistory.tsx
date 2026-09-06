import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';

/**
 * Atmospheric oxygen through Earth history.
 *
 * Drawn from the reconstruction in Lyons, Reinhard & Planavsky (2014), which
 * presents oxygen history as a band of possible values rather than a line —
 * because that is the actual state of the evidence. This figure keeps the band.
 * Anyone drawing a single confident curve here is adding precision that the
 * geochemistry does not support.
 *
 * SVG rather than canvas: it is a chart, it needs crisp text at any zoom, it
 * costs nothing to render, and it stays readable when the reader zooms the page.
 */

/** log10 of atmospheric O₂ as a fraction of the present level (PAL). */
interface Band {
  /** Billions of years ago. */
  ga: number;
  low: number;
  high: number;
}

// Digitised from the schematic reconstruction in Lyons et al. (2014), Figure 1.
// Values are deliberately coarse: the source itself spans orders of magnitude.
const BAND: readonly Band[] = [
  { ga: 4.0, low: -6.2, high: -5.2 },
  { ga: 3.0, low: -6.0, high: -5.0 },
  { ga: 2.5, low: -5.8, high: -4.6 },
  { ga: 2.45, low: -5.5, high: -3.0 },
  { ga: 2.3, low: -2.6, high: -1.1 },
  { ga: 2.0, low: -2.4, high: -1.0 },
  { ga: 1.6, low: -2.6, high: -1.2 },
  { ga: 1.0, low: -2.7, high: -1.2 },
  { ga: 0.8, low: -2.4, high: -1.0 },
  { ga: 0.635, low: -1.6, high: -0.5 },
  { ga: 0.5, low: -0.7, high: -0.1 },
  { ga: 0.35, low: -0.2, high: 0.25 },
  { ga: 0.2, low: -0.25, high: 0.1 },
  { ga: 0.0, low: -0.02, high: 0.02 },
];

const MARKERS: ReadonlyArray<{ ga: number; label: string }> = [
  { ga: 2.4, label: 'Great Oxidation Event' },
  { ga: 0.7, label: 'Neoproterozoic rise' },
  { ga: 0.539, label: 'Cambrian' },
];

export default function OxygenHistory(_props: VisualizationProps): ReactNode {
  // Phone-native geometry: at a 640-wide viewBox this chart scaled down to
  // about 55% on a 390px screen and the axis labels rendered at ~6px.
  const w = 380;
  const h = 300;
  const pad = { top: 40, right: 12, bottom: 46, left: 54 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;

  // Time runs left (4.0 Ga) to right (present).
  const x = (ga: number): number => pad.left + ((4.0 - ga) / 4.0) * plotW;
  // log10 PAL from -7 (bottom) to +0.5 (top).
  const y = (logPal: number): number => pad.top + ((0.5 - logPal) / 7.5) * plotH;

  const upper = BAND.map((point) => `${x(point.ga)},${y(point.high)}`).join(' ');
  const lower = [...BAND]
    .reverse()
    .map((point) => `${x(point.ga)},${y(point.low)}`)
    .join(' ');

  const gridValues = [0, -1, -2, -3, -4, -5, -6, -7];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMin meet"
      style={{ width: '100%', height: 'auto' }}
      role="presentation"
    >
      <defs>
        <linearGradient id="o2-band" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#58d6b4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#7fd66a" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {gridValues.map((value) => (
        <g key={value}>
          <line
            x1={pad.left}
            x2={w - pad.right}
            y1={y(value)}
            y2={y(value)}
            stroke="rgba(148,162,192,0.16)"
            strokeWidth={1}
          />
          <text
            x={pad.left - 8}
            y={y(value) + 4}
            textAnchor="end"
            fontSize={10}
            fill="rgba(148,162,192,0.85)"
            fontFamily="ui-monospace, monospace"
          >
            {value === 0 ? '1' : `10${superscript(value)}`}
          </text>
        </g>
      ))}

      <polygon points={`${upper} ${lower}`} fill="url(#o2-band)" />
      <polyline
        points={upper}
        fill="none"
        stroke="#7fd66a"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <polyline
        points={[...BAND].map((point) => `${x(point.ga)},${y(point.low)}`).join(' ')}
        fill="none"
        stroke="#58d6b4"
        strokeWidth={1.5}
        strokeDasharray="4 3"
        strokeLinejoin="round"
      />

      {MARKERS.map((marker, index) => (
        <g key={marker.label}>
          <line
            x1={x(marker.ga)}
            x2={x(marker.ga)}
            y1={pad.top}
            y2={h - pad.bottom}
            stroke="rgba(255,214,110,0.45)"
            strokeWidth={1}
            strokeDasharray="3 4"
          />
          <text
            x={x(marker.ga) + (x(marker.ga) > w * 0.5 ? -5 : 5)}
            y={pad.top + 10 + index * 14}
            textAnchor={x(marker.ga) > w * 0.5 ? 'end' : 'start'}
            fontSize={10}
            fill="rgba(255,214,110,0.95)"
            fontFamily="system-ui, sans-serif"
          >
            {marker.label}
          </text>
        </g>
      ))}

      {[4, 3, 2, 1, 0].map((ga) => (
        <text
          key={ga}
          x={x(ga)}
          y={h - pad.bottom + 18}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.85)"
          fontFamily="ui-monospace, monospace"
        >
          {ga === 0 ? 'now' : `${ga}`}
        </text>
      ))}
      <text
        x={pad.left + plotW / 2}
        y={h - 8}
        textAnchor="middle"
        fontSize={10}
        fill="rgba(148,162,192,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        billions of years ago
      </text>
      <text
        x={10}
        y={pad.top + plotH / 2}
        textAnchor="middle"
        fontSize={10}
        fill="rgba(148,162,192,0.9)"
        fontFamily="system-ui, sans-serif"
        transform={`rotate(-90 10 ${pad.top + plotH / 2})`}
      >
        O₂, fraction of present level
      </text>
      <text
        x={w - pad.right}
        y={14}
        textAnchor="end"
        fontSize={9.5}
        fill="rgba(148,162,192,0.75)"
        fontFamily="system-ui, sans-serif"
      >
        shaded band = range of published estimates
      </text>
    </svg>
  );
}

function superscript(value: number): string {
  const digits: Record<string, string> = {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '-': '⁻',
  };
  return String(value)
    .split('')
    .map((character) => digits[character] ?? character)
    .join('');
}
