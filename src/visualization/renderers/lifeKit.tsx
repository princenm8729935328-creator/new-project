import { useState, type ReactNode } from 'react';
import styles from './controls.module.css';

/**
 * Shared drawing primitives for the Phase 7 figures — Earth, and the origin and
 * evolution of life.
 *
 * These two sections need a great many diagrams, and most of them are one of a
 * small number of shapes: a labelled bar comparison, a stepped sequence, a
 * timeline, a line plotted against time, or a small network. Writing each from
 * scratch would produce a hundred subtly inconsistent axes and a hundred
 * chances to get a label overlapping a data point.
 *
 * So the shapes live here once, sized for the 380-unit viewBox the rest of the
 * platform uses, and each figure supplies the thing that is actually specific
 * to it: its data, its labels and the sentence underneath saying what the
 * reader is looking at.
 */

export const VW = 380;

/** The palette used across Phase 7, kept consistent so colour means something. */
export const C = {
  rock: '#c58f6a',
  water: '#6fb3ff',
  air: '#8fb8ff',
  life: '#4fe0c0',
  warm: '#ffd27f',
  hot: '#ff8f6e',
  deep: '#c9a8ff',
  dim: 'rgba(148,162,192,0.82)',
  faint: 'rgba(148,162,192,0.5)',
  grid: 'rgba(148,162,192,0.14)',
  panel: 'rgba(148,162,192,0.07)',
} as const;

interface FigureProps {
  readonly height: number;
  readonly children: ReactNode;
}

/** An SVG that fills the frame width and sets its own height from the viewBox. */
export function Figure({ height, children }: FigureProps): ReactNode {
  return (
    <svg
      viewBox={`0 0 ${VW} ${height}`}
      preserveAspectRatio="xMidYMin meet"
      style={{ width: '100%', height: 'auto' }}
      role="presentation"
    >
      {children}
    </svg>
  );
}

/** The sentence under a figure. Always present: a diagram without one is a decoration. */
export function Note({ children }: { readonly children: ReactNode }): ReactNode {
  return (
    <p className={styles.epochDetail} aria-live="polite">
      {children}
    </p>
  );
}

export function Stack({ children }: { readonly children: ReactNode }): ReactNode {
  return <div className={styles.chartStack}>{children}</div>;
}

/* ------------------------------------------------------------------ bars -- */

export interface Bar {
  readonly label: string;
  readonly value: number;
  readonly display?: string;
  readonly colour?: string;
  readonly note?: string;
}

interface BarRowsProps {
  readonly bars: readonly Bar[];
  readonly axisLabel: string;
  /** Log scale is the only honest option when the values span decades. */
  readonly log?: boolean;
  readonly selected?: number;
  readonly onSelect?: (index: number) => void;
}

/**
 * Labelled horizontal bars. Labels sit above their bar rather than beside it,
 * which is what makes long names survive a 390px screen without truncation.
 */
export function BarRows({
  bars,
  axisLabel,
  log = false,
  selected,
  onSelect,
}: BarRowsProps): ReactNode {
  const ROW = 30;
  const TOP = 16;
  const LEFT = 6;
  const RIGHT = 8;
  const width = VW - LEFT - RIGHT;
  const height = TOP + bars.length * ROW + 8;

  const values = bars.map((b) => b.value);
  const max = Math.max(...values);
  const min = Math.min(...values.filter((v) => v > 0));
  const frac = (v: number): number => {
    if (!log) return max > 0 ? Math.max(v / max, 0) : 0;
    if (v <= 0) return 0;
    const lo = Math.log10(min) - 0.6;
    return (Math.log10(v) - lo) / (Math.log10(max) - lo);
  };

  return (
    <Figure height={height}>
      <text x={LEFT} y={9} fontSize={9} fill={C.dim}>
        {axisLabel}
      </text>
      {bars.map((bar, index) => {
        const y = TOP + index * ROW;
        const w = Math.max(frac(bar.value) * width, 1.5);
        const isSel = selected === index;
        return (
          <g
            key={bar.label}
            onClick={onSelect ? () => onSelect(index) : undefined}
            style={onSelect ? { cursor: 'pointer' } : undefined}
          >
            <rect x={LEFT} y={y} width={width} height={ROW - 6} fill={C.panel} rx={2} />
            <rect
              x={LEFT}
              y={y}
              width={w}
              height={ROW - 6}
              fill={bar.colour ?? C.life}
              opacity={isSel ? 0.95 : 0.6}
              rx={2}
            />
            {isSel ? (
              <rect
                x={LEFT}
                y={y}
                width={width}
                height={ROW - 6}
                fill="none"
                stroke={bar.colour ?? C.life}
                strokeWidth={1.2}
                rx={2}
              />
            ) : null}
            <text x={LEFT + 6} y={y + 11} fontSize={9.5} fill="rgba(233,238,247,0.95)">
              {bar.label}
            </text>
            <text
              x={LEFT + 6}
              y={y + 21}
              fontSize={8.5}
              fill={C.dim}
              fontFamily="ui-monospace, monospace"
            >
              {bar.display ?? bar.value.toLocaleString()}
              {bar.note ? `  ·  ${bar.note}` : ''}
            </text>
          </g>
        );
      })}
    </Figure>
  );
}

/* --------------------------------------------------------------- stepper -- */

export interface Stage {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  readonly draw: ReactNode;
}

interface StepperProps {
  readonly stages: readonly Stage[];
  readonly height: number;
  readonly label?: string;
}

/**
 * A sequence the reader steps through. Used wherever the point is an order of
 * events — accretion, an impact, a merger, a recovery — because an animation
 * that runs on its own gives no way to stop on the step you did not follow.
 */
export function Stepper({ stages, height, label = 'Step' }: StepperProps): ReactNode {
  const [index, setIndex] = useState(0);
  const stage = stages[Math.min(index, stages.length - 1)];
  if (!stage) return null;

  return (
    <Stack>
      <Figure height={height}>
        <text x={6} y={11} fontSize={9.5} fill={C.dim}>
          {label} {index + 1} of {stages.length} — {stage.title}
        </text>
        {stage.draw}
      </Figure>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          ← Back
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setIndex((i) => Math.min(stages.length - 1, i + 1))}
          disabled={index === stages.length - 1}
        >
          Next →
        </button>
      </div>

      <Note>
        <strong>{stage.title}.</strong> {stage.detail}
      </Note>
    </Stack>
  );
}

/* -------------------------------------------------------------- timeline -- */

export interface TimelineEvent {
  /** Millions of years before present. */
  readonly ma: number;
  readonly label: string;
  readonly colour?: string;
  readonly detail: string;
}

interface TimelineProps {
  readonly events: readonly TimelineEvent[];
  readonly fromMa: number;
  readonly toMa: number;
  readonly caption: string;
}

/**
 * A deep-time bar with events marked on it. Linear, deliberately: the point of
 * most of these figures is how much of the record is microbial, and a log axis
 * hides exactly that.
 */
export function Timeline({ events, fromMa, toMa, caption }: TimelineProps): ReactNode {
  const [pick, setPick] = useState(0);
  const LEFT = 14;
  const RIGHT = 14;
  const width = VW - LEFT - RIGHT;
  const BAR_Y = 40;
  const BAR_H = 20;
  const x = (ma: number): number => LEFT + ((fromMa - ma) / (fromMa - toMa)) * width;
  const active = events[Math.min(pick, events.length - 1)];

  const ticks: number[] = [];
  const step = fromMa > 2000 ? 1000 : fromMa > 600 ? 200 : 100;
  for (let t = Math.floor(fromMa / step) * step; t >= toMa; t -= step) ticks.push(t);

  return (
    <Stack>
      <Figure height={148}>
        <text x={LEFT} y={12} fontSize={9} fill={C.dim}>
          {caption}
        </text>

        <rect x={LEFT} y={BAR_Y} width={width} height={BAR_H} fill={C.panel} rx={3} />
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={x(t)}
              x2={x(t)}
              y1={BAR_Y}
              y2={BAR_Y + BAR_H + 4}
              stroke={C.grid}
              strokeWidth={1}
            />
            <text
              x={x(t)}
              y={BAR_Y + BAR_H + 14}
              textAnchor="middle"
              fontSize={8}
              fill={C.faint}
              fontFamily="ui-monospace, monospace"
            >
              {t >= 1000 ? `${(t / 1000).toFixed(1)} Ga` : `${t} Ma`}
            </text>
          </g>
        ))}

        {events.map((event, i) => {
          const cx = x(event.ma);
          const isActive = i === pick;
          return (
            <g key={event.label} onClick={() => setPick(i)} style={{ cursor: 'pointer' }}>
              <rect x={cx - 9} y={BAR_Y - 12} width={18} height={BAR_H + 24} fill="transparent" />
              <line
                x1={cx}
                x2={cx}
                y1={BAR_Y - 8}
                y2={BAR_Y + BAR_H}
                stroke={event.colour ?? C.life}
                strokeWidth={isActive ? 2.2 : 1.2}
                opacity={isActive ? 1 : 0.55}
              />
              <circle
                cx={cx}
                cy={BAR_Y - 10}
                r={isActive ? 4 : 2.6}
                fill={event.colour ?? C.life}
                opacity={isActive ? 1 : 0.6}
              />
            </g>
          );
        })}

        {active ? (
          <g>
            <rect x={LEFT} y={BAR_Y + 34} width={width} height={40} fill={C.panel} rx={3} />
            <text x={LEFT + 8} y={BAR_Y + 48} fontSize={10} fill={active.colour ?? C.life}>
              {active.label}
            </text>
            <text
              x={LEFT + 8}
              y={BAR_Y + 62}
              fontSize={8.5}
              fill={C.dim}
              fontFamily="ui-monospace, monospace"
            >
              {active.ma >= 1000
                ? `${(active.ma / 1000).toFixed(2)} billion`
                : `${active.ma} million`}{' '}
              years ago
            </text>
          </g>
        ) : null}
      </Figure>

      <Note>{active ? active.detail : caption}</Note>
    </Stack>
  );
}

/* ------------------------------------------------------------ line chart -- */

export interface Series {
  readonly label: string;
  readonly colour: string;
  /** Points in plot coordinates, x increasing. */
  readonly points: readonly (readonly [number, number])[];
  readonly dashed?: boolean;
}

interface LineChartProps {
  readonly series: readonly Series[];
  readonly xLabel: string;
  readonly yLabel: string;
  readonly xTicks: readonly (readonly [number, string])[];
  readonly yTicks: readonly (readonly [number, string])[];
  readonly xRange: readonly [number, number];
  readonly yRange: readonly [number, number];
  readonly bands?: readonly {
    readonly from: number;
    readonly to: number;
    readonly fill: string;
    readonly label?: string;
  }[];
  readonly height?: number;
}

/** A plain two-axis line plot, used wherever a quantity is tracked against time. */
export function LineChart({
  series,
  xLabel,
  yLabel,
  xTicks,
  yTicks,
  xRange,
  yRange,
  bands = [],
  height = 214,
}: LineChartProps): ReactNode {
  const LEFT = 40;
  const RIGHT = 12;
  const TOP = 24;
  const BOTTOM = 40;
  const pw = VW - LEFT - RIGHT;
  const ph = height - TOP - BOTTOM;
  const px = (v: number): number => LEFT + ((v - xRange[0]) / (xRange[1] - xRange[0])) * pw;
  const py = (v: number): number => TOP + ph - ((v - yRange[0]) / (yRange[1] - yRange[0])) * ph;

  return (
    <Figure height={height}>
      <text x={3} y={11} fontSize={9} fill={C.dim}>
        {yLabel}
      </text>

      {bands.map((band) => (
        <rect
          key={`${band.from}-${band.to}`}
          x={px(band.from)}
          y={TOP}
          width={Math.max(px(band.to) - px(band.from), 1)}
          height={ph}
          fill={band.fill}
        />
      ))}

      {yTicks.map(([v, text]) => (
        <g key={`y${v}`}>
          <line x1={LEFT} x2={LEFT + pw} y1={py(v)} y2={py(v)} stroke={C.grid} />
          <text
            x={LEFT - 5}
            y={py(v) + 3}
            textAnchor="end"
            fontSize={8}
            fill={C.faint}
            fontFamily="ui-monospace, monospace"
          >
            {text}
          </text>
        </g>
      ))}
      {xTicks.map(([v, text]) => (
        <g key={`x${v}`}>
          <line x1={px(v)} x2={px(v)} y1={TOP} y2={TOP + ph} stroke={C.grid} />
          <text
            x={px(v)}
            y={TOP + ph + 13}
            textAnchor="middle"
            fontSize={8}
            fill={C.faint}
            fontFamily="ui-monospace, monospace"
          >
            {text}
          </text>
        </g>
      ))}
      <text x={LEFT + pw / 2} y={height - 6} textAnchor="middle" fontSize={9} fill={C.dim}>
        {xLabel}
      </text>

      {series.map((s) => (
        <path
          key={s.label}
          d={s.points
            .map((p, i) => `${i === 0 ? 'M' : 'L'}${px(p[0]).toFixed(2)},${py(p[1]).toFixed(2)}`)
            .join(' ')}
          fill="none"
          stroke={s.colour}
          strokeWidth={1.9}
          strokeDasharray={s.dashed ? '4 3' : undefined}
        />
      ))}

      {series.map((s, i) => (
        <g key={`k${s.label}`}>
          <line
            x1={LEFT + 6}
            x2={LEFT + 20}
            y1={TOP + 10 + i * 12}
            y2={TOP + 10 + i * 12}
            stroke={s.colour}
            strokeWidth={2}
            strokeDasharray={s.dashed ? '4 3' : undefined}
          />
          <text x={LEFT + 24} y={TOP + 13 + i * 12} fontSize={8.5} fill={s.colour}>
            {s.label}
          </text>
        </g>
      ))}
    </Figure>
  );
}

/* ----------------------------------------------------------------- toggle -- */

interface ToggleRowProps {
  readonly options: readonly string[];
  readonly value: number;
  readonly onChange: (index: number) => void;
  readonly label: string;
}

export function ToggleRow({ options, value, onChange, label }: ToggleRowProps): ReactNode {
  return (
    <div className={styles.toggles} role="group" aria-label={label}>
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          className={styles.toggle}
          aria-pressed={value === index}
          onClick={() => onChange(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- slider -- */

interface SliderProps {
  readonly name: string;
  readonly hiddenLabel: string;
  readonly min: number;
  readonly max: number;
  readonly step: number;
  readonly value: number;
  readonly onChange: (value: number) => void;
  readonly display: string;
}

export function Slider({
  name,
  hiddenLabel,
  min,
  max,
  step,
  value,
  onChange,
  display,
}: SliderProps): ReactNode {
  return (
    <div className={styles.controlRow}>
      <span className={styles.controlName}>{name}</span>
      <label className={styles.sliderLabel}>
        <span className="ds-visually-hidden">{hiddenLabel}</span>
        <input
          className={styles.slider}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
        />
      </label>
      <output className={styles.value}>{display}</output>
    </div>
  );
}

export function ControlRows({ children }: { readonly children: ReactNode }): ReactNode {
  return <div className={styles.controlRows}>{children}</div>;
}

/* --------------------------------------------------------------- network -- */

export interface Node {
  readonly id: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly colour?: string;
  readonly r?: number;
}

export interface Edge {
  readonly from: string;
  readonly to: string;
  readonly kind?: 'eats' | 'helps' | 'harms' | 'plain';
}

interface NetworkProps {
  readonly nodes: readonly Node[];
  readonly edges: readonly Edge[];
  readonly height: number;
  readonly removed?: string | null;
  readonly onPick?: (id: string) => void;
  readonly faded?: readonly string[];
}

const EDGE_COLOUR: Record<string, string> = {
  eats: 'rgba(255,143,110,0.55)',
  helps: 'rgba(79,224,192,0.6)',
  harms: 'rgba(201,168,255,0.55)',
  plain: 'rgba(148,162,192,0.4)',
};

/** A small labelled graph — food webs, symbioses, interaction networks. */
export function Network({
  nodes,
  edges,
  height,
  removed = null,
  onPick,
  faded = [],
}: NetworkProps): ReactNode {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const isOut = (id: string): boolean => id === removed || faded.includes(id);

  return (
    <Figure height={height}>
      {edges.map((edge) => {
        const a = byId.get(edge.from);
        const b = byId.get(edge.to);
        if (!a || !b) return null;
        const dim = isOut(edge.from) || isOut(edge.to);
        return (
          <line
            key={`${edge.from}-${edge.to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={EDGE_COLOUR[edge.kind ?? 'plain']}
            strokeWidth={1.4}
            opacity={dim ? 0.15 : 1}
          />
        );
      })}
      {nodes.map((node) => {
        const dim = isOut(node.id);
        return (
          <g
            key={node.id}
            onClick={onPick ? () => onPick(node.id) : undefined}
            style={onPick ? { cursor: 'pointer' } : undefined}
          >
            <circle cx={node.x} cy={node.y} r={(node.r ?? 13) + 8} fill="transparent" />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r ?? 13}
              fill={node.colour ?? C.life}
              opacity={dim ? 0.15 : 0.85}
            />
            <text
              x={node.x}
              y={node.y + (node.r ?? 13) + 11}
              textAnchor="middle"
              fontSize={8.5}
              fill={dim ? C.faint : 'rgba(233,238,247,0.95)'}
              opacity={dim ? 0.5 : 1}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </Figure>
  );
}
