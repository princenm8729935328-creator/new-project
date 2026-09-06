import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';

/**
 * The hominin bush.
 *
 * This figure exists to make one argument visually, because prose keeps losing
 * it: human evolution is not a ladder. Each bar is a species' approximate known
 * temporal range, drawn on a shared time axis. What the reader sees immediately
 * is vertical overlap — many kinds of human alive at once — and lineages that
 * simply stop.
 *
 * Fidelity is `reconstruction`, deliberately. The date ranges come from
 * published fossil evidence and are reasonably firm; the branching topology
 * does NOT, and is contested for almost every node. So this figure draws the
 * ranges and does not draw ancestor–descendant lines between species. Anyone
 * who draws those lines confidently is showing an opinion as a fact.
 */

interface Taxon {
  name: string;
  /** Range in millions of years ago: [oldest, youngest]. */
  from: number;
  to: number;
  group: 'early' | 'australopith' | 'paranthropus' | 'homo' | 'sapiens';
  /** Marked where the species is known primarily or partly from DNA. */
  genetics?: boolean;
}

/**
 * Approximate ranges from the published record. Rounded deliberately: quoting
 * these to three decimal places would imply a precision the fossil record does
 * not have.
 */
const TAXA: readonly Taxon[] = [
  { name: 'Sahelanthropus tchadensis', from: 7.2, to: 6.8, group: 'early' },
  { name: 'Orrorin tugenensis', from: 6.2, to: 5.7, group: 'early' },
  { name: 'Ardipithecus ramidus', from: 4.5, to: 4.3, group: 'early' },
  { name: 'Australopithecus anamensis', from: 4.2, to: 3.8, group: 'australopith' },
  { name: 'Australopithecus afarensis', from: 3.9, to: 2.9, group: 'australopith' },
  { name: 'Australopithecus africanus', from: 3.3, to: 2.1, group: 'australopith' },
  { name: 'Australopithecus sediba', from: 2.0, to: 1.9, group: 'australopith' },
  { name: 'Paranthropus aethiopicus', from: 2.7, to: 2.3, group: 'paranthropus' },
  { name: 'Paranthropus boisei', from: 2.3, to: 1.3, group: 'paranthropus' },
  { name: 'Paranthropus robustus', from: 2.0, to: 1.2, group: 'paranthropus' },
  { name: 'Homo habilis', from: 2.4, to: 1.5, group: 'homo' },
  { name: 'Homo rudolfensis', from: 2.4, to: 1.8, group: 'homo' },
  { name: 'Homo erectus', from: 1.9, to: 0.11, group: 'homo' },
  { name: 'Homo antecessor', from: 1.2, to: 0.8, group: 'homo' },
  { name: 'Homo heidelbergensis', from: 0.7, to: 0.2, group: 'homo' },
  { name: 'Homo naledi', from: 0.335, to: 0.236, group: 'homo' },
  { name: 'Homo floresiensis', from: 0.1, to: 0.05, group: 'homo' },
  { name: 'Homo luzonensis', from: 0.067, to: 0.05, group: 'homo' },
  { name: 'Homo neanderthalensis', from: 0.43, to: 0.04, group: 'homo', genetics: true },
  { name: 'Denisovans', from: 0.3, to: 0.05, group: 'homo', genetics: true },
  { name: 'Homo sapiens', from: 0.315, to: 0, group: 'sapiens', genetics: true },
];

const GROUP_COLOUR: Record<Taxon['group'], string> = {
  early: '#8fb8ff',
  australopith: '#ffd76e',
  paranthropus: '#ff9a52',
  homo: '#58d6b4',
  sapiens: '#ff7f9e',
};

const GROUP_LABEL: Record<Taxon['group'], string> = {
  early: 'earliest possible hominins',
  australopith: 'Australopithecus',
  paranthropus: 'Paranthropus (robust forms)',
  homo: 'Homo',
  sapiens: 'us',
};

export default function HomininTree(_props: VisualizationProps): ReactNode {
  /*
   * Layout: the species name sits ABOVE its bar rather than beside it.
   *
   * A side-label column is the conventional Gantt layout, but it forces the
   * viewBox wide enough for the longest binomial, and on a 390px phone the
   * whole chart then scales down until the labels render at about 6px — or
   * clips them off the left edge entirely. Stacking the label over the bar
   * keeps the viewBox phone-width, so the type renders at its intended size
   * with no horizontal scrolling.
   */
  const rowHeight = 30;
  // Bottom padding carries the axis labels and the six-row legend.
  const pad = { top: 44, right: 12, bottom: 148, left: 12 };
  const w = 380;
  const h = pad.top + TAXA.length * rowHeight + pad.bottom;
  const plotW = w - pad.left - pad.right;

  const oldest = 7.5;
  // Square-root time axis: keeps the last million years legible without the
  // deception of a linear axis on which everything recent is one pixel wide.
  const x = (mya: number): number => pad.left + plotW * (1 - Math.sqrt(Math.max(0, mya) / oldest));

  const ticks = [7, 5, 3, 2, 1, 0.5, 0];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMin meet"
      style={{ width: '100%', height: 'auto' }}
      role="presentation"
    >
      {ticks.map((tick) => (
        <g key={tick}>
          <line
            x1={x(tick)}
            x2={x(tick)}
            y1={pad.top - 8}
            y2={h - pad.bottom + 4}
            stroke="rgba(148,162,192,0.14)"
            strokeWidth={1}
          />
          <text
            x={x(tick)}
            y={h - pad.bottom + 20}
            textAnchor="middle"
            fontSize={10.5}
            fill="rgba(148,162,192,0.85)"
            fontFamily="ui-monospace, monospace"
          >
            {tick === 0 ? 'now' : tick}
          </text>
        </g>
      ))}
      <text
        x={pad.left + plotW / 2}
        y={h - pad.bottom + 38}
        textAnchor="middle"
        fontSize={10.5}
        fill="rgba(148,162,192,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        millions of years ago (square-root scale)
      </text>

      {TAXA.map((taxon, index) => {
        const y = pad.top + index * rowHeight;
        const x1 = x(taxon.from);
        const x2 = x(taxon.to);
        const colour = GROUP_COLOUR[taxon.group];
        // Keep the caption on the canvas when a bar sits hard against an edge.
        const labelX = Math.min(Math.max(x1, pad.left), w - pad.right - 150);
        return (
          <g key={taxon.name}>
            <text
              x={labelX}
              y={y + 10}
              fontSize={11}
              fill="rgba(226,233,246,0.92)"
              fontFamily="system-ui, sans-serif"
              fontStyle={taxon.name === 'Denisovans' ? 'normal' : 'italic'}
            >
              {taxon.name}
            </text>
            <rect
              x={x1}
              y={y + 15}
              width={Math.max(3, x2 - x1)}
              height={8}
              rx={4}
              fill={colour}
              opacity={0.9}
            />
            {taxon.genetics && (
              <circle
                cx={x2 + 6}
                cy={y + 19}
                r={3.2}
                fill="none"
                stroke={colour}
                strokeWidth={1.4}
              />
            )}
          </g>
        );
      })}

      {/* The figure's central claim, stated on the figure itself. SVG text does
          not wrap, so it is set as two explicit lines. */}
      <text
        x={pad.left}
        y={14}
        fontSize={10.5}
        fill="rgba(226,233,246,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        Each bar is one species&apos; known time range.
      </text>
      <text
        x={pad.left}
        y={28}
        fontSize={10.5}
        fill="rgba(226,233,246,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        Bars that line up vertically were alive at the same time.
      </text>

      {/* One legend entry per row: three columns did not fit a phone. */}
      {Object.entries(GROUP_LABEL).map(([group, label], index) => (
        <g key={group} transform={`translate(${pad.left}, ${h - 92 + index * 14})`}>
          <rect
            width={16}
            height={7}
            rx={3.5}
            fill={GROUP_COLOUR[group as Taxon['group']]}
            opacity={0.85}
          />
          <text
            x={22}
            y={7}
            fontSize={10}
            fill="rgba(148,162,192,0.9)"
            fontFamily="system-ui, sans-serif"
          >
            {label}
          </text>
        </g>
      ))}
      <g transform={`translate(${pad.left}, ${h - 92 + 5 * 14})`}>
        <circle
          cx={7}
          cy={3.5}
          r={3.4}
          fill="none"
          stroke="rgba(148,162,192,0.9)"
          strokeWidth={1.4}
        />
        <text
          x={22}
          y={7}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          genome sequenced
        </text>
      </g>
    </svg>
  );
}
