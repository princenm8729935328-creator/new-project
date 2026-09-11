import { useState, type ReactNode } from 'react';
import { C, Figure, Note, Stack, VW } from './lifeKit';
import styles from './controls.module.css';

/**
 * Shared shapes for the Philosophical Lens figures.
 *
 * These diagrams are doing something different from the scientific ones. There
 * is no quantity to plot: what a philosophical figure has to show is the
 * *structure* of an argument — which claim depends on which, where two
 * positions actually differ, what an objection attaches to. Drawing that badly
 * is worse than not drawing it, because a diagram implies a precision the
 * subject does not have.
 *
 * So the shapes here are deliberately few and deliberately plain, and they all
 * obey one rule learned the hard way in the previous phase: **the SVG carries
 * only short labels; every sentence goes in the note underneath.** SVG text
 * does not wrap, and a caption that overflows a 380-unit viewBox on a phone is
 * a defect no amount of good content makes up for. Keeping the prose in HTML
 * also means a screen reader gets it as prose rather than as a run of
 * disconnected text nodes.
 *
 * Every figure built from these is a conceptual model. None of them plots data,
 * and each one's caption says so.
 */

const PANEL_STROKE = 'rgba(148,162,192,0.28)';

/** Greedy word wrap for SVG labels, sized for the platform's sans stack. */
function wrapLines(text: string, width: number, fontSize: number): readonly string[] {
  const perChar = fontSize * 0.55;
  const max = Math.max(6, Math.floor(width / perChar));
  const lines: string[] = [];
  let current = '';
  for (const word of text.split(' ')) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= max) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

interface WrappedProps {
  readonly x: number;
  readonly y: number;
  readonly lines: readonly string[];
  readonly fontSize: number;
  readonly fill: string;
  readonly anchor?: 'start' | 'middle' | 'end';
}

function Wrapped({ x, y, lines, fontSize, fill, anchor = 'start' }: WrappedProps): ReactNode {
  return (
    <text x={x} y={y} fontSize={fontSize} fill={fill} textAnchor={anchor}>
      {lines.map((line, i) => (
        <tspan key={line} x={x} dy={i === 0 ? 0 : fontSize * 1.25}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

/**
 * The heading above a figure, wrapped.
 *
 * Every one of these figures carries a line saying what it is and that it is a
 * conceptual model, and those lines are long by design. An unwrapped SVG text
 * node runs straight off the side of a 380-unit viewBox, which is how the
 * previous phase shipped its worst defects. Wrapping here means a component can
 * never be given a heading that overflows, however long an author writes it.
 */
function headerLines(label: string): readonly string[] {
  return wrapLines(label, VW - 16, 9);
}

function Header({ lines }: { readonly lines: readonly string[] }): ReactNode {
  return <Wrapped x={8} y={11} lines={lines} fontSize={9} fill={C.dim} />;
}

/** How far the body must move down to clear a multi-line heading. */
const headerShift = (lines: readonly string[]): number => (lines.length - 1) * 11;

/* ----------------------------------------------------------------- panels */

export interface Item {
  readonly id: string;
  /** Short: it is drawn inside a box, not read as prose. */
  readonly label: string;
  /** The sentence or two shown under the figure when this item is selected. */
  readonly detail: string;
  readonly colour?: string;
  /** An even shorter tag drawn on the right of the box, e.g. "objection". */
  readonly tag?: string;
}

interface RowLayout {
  readonly item: Item;
  readonly y: number;
  readonly h: number;
  readonly lines: readonly string[];
  readonly indent: number;
}

function layout(
  items: readonly Item[],
  top: number,
  gap: number,
  fontSize: number,
  indentStep: number,
): { readonly rows: readonly RowLayout[]; readonly height: number } {
  const rows: RowLayout[] = [];
  let y = top;
  items.forEach((item, index) => {
    const indent = index * indentStep;
    const boxWidth = VW - 16 - indent;
    const lines = wrapLines(item.label, boxWidth - (item.tag ? 78 : 20), fontSize);
    const h = 12 + lines.length * fontSize * 1.25;
    rows.push({ item, y, h, lines, indent });
    y += h + gap;
  });
  return { rows, height: y - gap + 8 };
}

interface ListProps {
  readonly items: readonly Item[];
  readonly label: string;
  /** Numbered boxes joined by arrows, for a sequence of steps in an argument. */
  readonly flow?: boolean;
  /** Each box steps further right, for a regress. */
  readonly indentStep?: number;
  /** Text under the last box, e.g. "…and so on, without end." */
  readonly trailer?: string;
}

/**
 * A column of selectable boxes. The workhorse: positions in a dispute, steps in
 * an argument, objections to a claim, conditions on a concept.
 */
export function Panels({
  items,
  label,
  flow = false,
  indentStep = 0,
  trailer,
}: ListProps): ReactNode {
  const [pick, setPick] = useState(0);
  const gap = flow ? 16 : 7;
  const head = headerLines(label);
  const { rows, height } = layout(items, 22 + headerShift(head), gap, 9.5, indentStep);
  const active = items[Math.min(pick, items.length - 1)];
  const trailerY = height - 2;

  return (
    <Stack>
      <Figure height={height + (trailer ? 16 : 0)}>
        <Header lines={head} />
        {rows.map((row, index) => {
          const selected = index === Math.min(pick, items.length - 1);
          const colour = row.item.colour ?? C.deep;
          const x = 8 + row.indent;
          const w = VW - 16 - row.indent;
          return (
            <g
              key={row.item.id}
              onClick={() => setPick(index)}
              style={{ cursor: 'pointer' }}
              role="presentation"
            >
              <rect
                x={x}
                y={row.y}
                width={w}
                height={row.h}
                rx={3}
                fill={selected ? 'rgba(201,168,255,0.14)' : C.panel}
                stroke={selected ? colour : PANEL_STROKE}
                strokeWidth={selected ? 1.3 : 0.8}
              />
              {flow ? (
                <text x={x + 9} y={row.y + 13} fontSize={9} fill={colour}>
                  {index + 1}
                </text>
              ) : (
                <circle cx={x + 10} cy={row.y + 10} r={3.2} fill={colour} opacity={0.9} />
              )}
              <Wrapped
                x={x + (flow ? 22 : 20)}
                y={row.y + 13}
                lines={row.lines}
                fontSize={9.5}
                fill={selected ? 'rgba(233,238,247,0.97)' : C.dim}
              />
              {row.item.tag ? (
                <text x={x + w - 8} y={row.y + 13} fontSize={7.5} fill={C.faint} textAnchor="end">
                  {row.item.tag}
                </text>
              ) : null}
              {flow && index < rows.length - 1 ? (
                <g>
                  <line
                    x1={x + 24}
                    y1={row.y + row.h}
                    x2={x + 24}
                    y2={row.y + row.h + gap - 4}
                    stroke={PANEL_STROKE}
                    strokeWidth={1.2}
                  />
                  <path
                    d={`M${x + 20},${row.y + row.h + gap - 7} L${x + 24},${row.y + row.h + gap - 1} L${x + 28},${row.y + row.h + gap - 7} Z`}
                    fill={PANEL_STROKE}
                  />
                </g>
              ) : null}
            </g>
          );
        })}
        {trailer ? (
          <text
            x={8 + rows.length * indentStep + 20}
            y={trailerY + 8}
            fontSize={8.5}
            fill={C.faint}
          >
            {trailer}
          </text>
        ) : null}
      </Figure>

      {active ? (
        <Note>
          <strong>{active.label}.</strong> {active.detail}
        </Note>
      ) : null}
    </Stack>
  );
}

/* -------------------------------------------------------------- spectrum */

export interface Mark {
  readonly id: string;
  /** Position along the line, 0 at the left end, 1 at the right. */
  readonly at: number;
  readonly label: string;
  readonly detail: string;
  readonly colour?: string;
}

interface SpectrumProps {
  readonly marks: readonly Mark[];
  readonly leftEnd: string;
  readonly rightEnd: string;
  readonly label: string;
}

/** A one-dimensional range with positions on it: excess and deficiency, degrees of a claim. */
export function Spectrum({ marks, leftEnd, rightEnd, label }: SpectrumProps): ReactNode {
  const [pick, setPick] = useState(Math.floor(marks.length / 2));
  const head = headerLines(label);
  const LEFT = 20;
  const W = VW - 40;
  const LINE_Y = 54 + headerShift(head);
  const active = marks[Math.min(pick, marks.length - 1)];
  const x = (at: number): number => LEFT + at * W;

  return (
    <Stack>
      <Figure height={104 + headerShift(head)}>
        <Header lines={head} />
        <text x={LEFT} y={LINE_Y - 24} fontSize={8.5} fill={C.faint}>
          {leftEnd}
        </text>
        <text x={LEFT + W} y={LINE_Y - 24} fontSize={8.5} fill={C.faint} textAnchor="end">
          {rightEnd}
        </text>
        <line
          x1={LEFT}
          y1={LINE_Y}
          x2={LEFT + W}
          y2={LINE_Y}
          stroke="rgba(148,162,192,0.35)"
          strokeWidth={2}
        />
        {marks.map((mark, index) => {
          const selected = index === Math.min(pick, marks.length - 1);
          const colour = mark.colour ?? C.deep;
          const above = index % 2 === 0;
          const labelY = above ? LINE_Y - 12 : LINE_Y + 22;
          const cx = x(mark.at);
          const anchor = mark.at < 0.12 ? 'start' : mark.at > 0.88 ? 'end' : 'middle';
          const room =
            anchor === 'start'
              ? VW - 6 - cx
              : anchor === 'end'
                ? cx - 6
                : 2 * Math.min(cx - 6, VW - 6 - cx);
          const lines = wrapLines(mark.label, Math.min(104, room), 8);
          return (
            <g key={mark.id} onClick={() => setPick(index)} style={{ cursor: 'pointer' }}>
              <circle cx={x(mark.at)} cy={LINE_Y} r={14} fill="transparent" />
              <circle
                cx={x(mark.at)}
                cy={LINE_Y}
                r={selected ? 6 : 3.6}
                fill={colour}
                opacity={selected ? 1 : 0.6}
              />
              <Wrapped
                x={cx}
                y={above ? labelY - (lines.length - 1) * 10 : labelY}
                lines={lines}
                fontSize={8}
                fill={selected ? colour : C.faint}
                anchor={anchor}
              />
            </g>
          );
        })}
      </Figure>

      {active ? (
        <Note>
          <strong>{active.label}.</strong> {active.detail}
        </Note>
      ) : null}
    </Stack>
  );
}

/* ------------------------------------------------------------ two axes */

export interface MapPoint {
  readonly id: string;
  readonly label: string;
  readonly detail: string;
  /** 0–1 across each axis. */
  readonly x: number;
  readonly y: number;
  readonly colour?: string;
}

interface MapProps {
  readonly points: readonly MapPoint[];
  readonly xLow: string;
  readonly xHigh: string;
  readonly yLow: string;
  readonly yHigh: string;
  readonly label: string;
}

/**
 * Positions plotted against two questions.
 *
 * The plot carries numbers rather than names, with a numbered key underneath:
 * names long enough to be meaningful collide as soon as two positions sit near
 * each other, and a legend never does.
 */
export function PositionMap({ points, xLow, xHigh, yLow, yHigh, label }: MapProps): ReactNode {
  const [pick, setPick] = useState(0);
  const head = headerLines(label);
  const LEFT = 26;
  const RIGHT = 14;
  const TOP = 30 + headerShift(head);
  const PLOT_H = 150;
  const pw = VW - LEFT - RIGHT;
  const keyTop = TOP + PLOT_H + 40;
  const height = keyTop + points.length * 13 + 4;
  const active = points[Math.min(pick, points.length - 1)];
  const px = (v: number): number => LEFT + v * pw;
  const py = (v: number): number => TOP + PLOT_H - v * PLOT_H;

  return (
    <Stack>
      <Figure height={height}>
        <Header lines={head} />
        <text x={LEFT} y={TOP - 8} fontSize={8} fill={C.faint}>
          {yHigh}
        </text>
        <text x={LEFT} y={TOP + PLOT_H + 14} fontSize={8} fill={C.faint}>
          {yLow}
        </text>
        <text x={LEFT} y={TOP + PLOT_H + 25} fontSize={8} fill={C.faint}>
          {xLow}
        </text>
        <text x={LEFT + pw} y={TOP + PLOT_H + 25} fontSize={8} fill={C.faint} textAnchor="end">
          {xHigh}
        </text>

        <rect x={LEFT} y={TOP} width={pw} height={PLOT_H} fill={C.panel} rx={3} />
        <line
          x1={LEFT + pw / 2}
          y1={TOP}
          x2={LEFT + pw / 2}
          y2={TOP + PLOT_H}
          stroke={C.grid}
          strokeWidth={1}
        />
        <line
          x1={LEFT}
          y1={TOP + PLOT_H / 2}
          x2={LEFT + pw}
          y2={TOP + PLOT_H / 2}
          stroke={C.grid}
          strokeWidth={1}
        />

        {points.map((point, index) => {
          const selected = index === Math.min(pick, points.length - 1);
          const colour = point.colour ?? C.deep;
          return (
            <g key={point.id} onClick={() => setPick(index)} style={{ cursor: 'pointer' }}>
              <circle cx={px(point.x)} cy={py(point.y)} r={14} fill="transparent" />
              <circle
                cx={px(point.x)}
                cy={py(point.y)}
                r={selected ? 10 : 7.5}
                fill={colour}
                opacity={selected ? 0.95 : 0.45}
              />
              <text
                x={px(point.x)}
                y={py(point.y) + 3.2}
                fontSize={8.5}
                textAnchor="middle"
                fill="#10141f"
              >
                {index + 1}
              </text>
            </g>
          );
        })}

        {points.map((point, index) => {
          const selected = index === Math.min(pick, points.length - 1);
          const colour = point.colour ?? C.deep;
          return (
            <g key={`key-${point.id}`} onClick={() => setPick(index)} style={{ cursor: 'pointer' }}>
              <text x={10} y={keyTop + index * 13} fontSize={8.5} fill={colour}>
                {index + 1}
              </text>
              <text
                x={22}
                y={keyTop + index * 13}
                fontSize={8.5}
                fill={selected ? 'rgba(233,238,247,0.97)' : C.dim}
              >
                {point.label}
              </text>
            </g>
          );
        })}
      </Figure>

      {active ? (
        <Note>
          <strong>{active.label}.</strong> {active.detail}
        </Note>
      ) : null}
    </Stack>
  );
}

/* --------------------------------------------------------------- compare */

export interface CompareRow {
  readonly id: string;
  readonly left: string;
  readonly right: string;
  readonly detail: string;
}

interface CompareProps {
  readonly rows: readonly CompareRow[];
  readonly leftTitle: string;
  readonly rightTitle: string;
  readonly label: string;
  /** Draws a visible break between the columns, for a gap in an argument. */
  readonly gap?: boolean;
}

/** Two columns set against each other, one selectable row at a time. */
export function Compare({
  rows,
  leftTitle,
  rightTitle,
  label,
  gap = false,
}: CompareProps): ReactNode {
  const [pick, setPick] = useState(0);
  const head = headerLines(label);
  const COL = 172;
  const LX = 8;
  const RX = VW - 8 - COL;
  const TOP = 36 + headerShift(head);
  const laid = rows.map((row) => ({
    row,
    left: wrapLines(row.left, COL - 16, 9),
    right: wrapLines(row.right, COL - 16, 9),
  }));
  let y = TOP;
  const placed = laid.map((entry) => {
    const h = 12 + Math.max(entry.left.length, entry.right.length) * 11.5;
    const at = y;
    y += h + 7;
    return { ...entry, y: at, h };
  });
  const height = y + 4;
  const active = rows[Math.min(pick, rows.length - 1)];

  return (
    <Stack>
      <Figure height={height}>
        <Header lines={head} />
        <text x={LX + COL / 2} y={TOP - 8} fontSize={9} fill={C.warm} textAnchor="middle">
          {leftTitle}
        </text>
        <text x={RX + COL / 2} y={TOP - 8} fontSize={9} fill={C.life} textAnchor="middle">
          {rightTitle}
        </text>
        {gap ? (
          <line
            x1={VW / 2}
            y1={TOP - 4}
            x2={VW / 2}
            y2={height - 6}
            stroke="rgba(148,162,192,0.35)"
            strokeWidth={1}
            strokeDasharray="3 4"
          />
        ) : null}
        {placed.map((entry, index) => {
          const selected = index === Math.min(pick, rows.length - 1);
          return (
            <g key={entry.row.id} onClick={() => setPick(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={LX}
                y={entry.y}
                width={COL}
                height={entry.h}
                rx={3}
                fill={selected ? 'rgba(255,210,127,0.12)' : C.panel}
                stroke={selected ? C.warm : PANEL_STROKE}
                strokeWidth={selected ? 1.2 : 0.8}
              />
              <rect
                x={RX}
                y={entry.y}
                width={COL}
                height={entry.h}
                rx={3}
                fill={selected ? 'rgba(79,224,192,0.12)' : C.panel}
                stroke={selected ? C.life : PANEL_STROKE}
                strokeWidth={selected ? 1.2 : 0.8}
              />
              <Wrapped
                x={LX + 8}
                y={entry.y + 13}
                lines={entry.left}
                fontSize={9}
                fill={selected ? 'rgba(233,238,247,0.97)' : C.dim}
              />
              <Wrapped
                x={RX + 8}
                y={entry.y + 13}
                lines={entry.right}
                fontSize={9}
                fill={selected ? 'rgba(233,238,247,0.97)' : C.dim}
              />
            </g>
          );
        })}
      </Figure>

      {active ? <Note>{active.detail}</Note> : null}
    </Stack>
  );
}

/* ---------------------------------------------------------------- toggle */

interface SwitchProps {
  readonly options: readonly string[];
  readonly value: number;
  readonly onChange: (index: number) => void;
  readonly label: string;
}

/** A local copy of the toggle row, so philosophy figures need no Phase 7 import. */
export function Switch({ options, value, onChange, label }: SwitchProps): ReactNode {
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

export { C, Figure, Note, Stack, VW };
