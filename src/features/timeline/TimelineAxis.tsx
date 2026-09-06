import { useCallback, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { orderedEras } from '@/content/timeline';
import type { EraDomain, TimelineEvent } from '@/content/schema/timeline';
import { QUALITY_BUDGETS, type QualityTier } from '@/visualization/core/quality';
import { useElementSize } from '@/visualization/core/useElementSize';
import { layoutPins, positionOf } from './axis';
import styles from './TimelineAxis.module.css';

/**
 * The travelling axis.
 *
 * A horizontal river of cosmic time drawn on canvas, with the reader's position
 * fixed at the centre and time flowing past it. Drawing on canvas rather than in
 * the DOM matters here: 37 pins plus era bands plus a particle field re-laid-out
 * on every frame of a drag would thrash layout on a phone.
 *
 * Interaction is unified: touch drag, mouse drag, wheel and keyboard all resolve
 * to the same `onScrub`/`onSelect` calls, so there is no second code path to
 * keep in sync.
 */

interface Props {
  position: number;
  events: readonly TimelineEvent[];
  selectedIndex: number;
  quality: QualityTier;
  reducedMotion: boolean;
  onScrub(position: number): void;
  onSelect(index: number): void;
}

/** Visual identity per domain. Cosmic, planetary, biological and human eras
 *  read differently at a glance — that is the point of the field. */
const DOMAIN_STYLE: Record<EraDomain, { band: string; line: string; label: string }> = {
  cosmic: { band: 'rgba(143,184,255,0.10)', line: 'rgba(143,184,255,0.55)', label: '#8fb8ff' },
  stellar: { band: 'rgba(255,214,110,0.10)', line: 'rgba(255,214,110,0.55)', label: '#ffd76e' },
  planetary: { band: 'rgba(95,201,240,0.10)', line: 'rgba(95,201,240,0.55)', label: '#5fc9f0' },
  biological: { band: 'rgba(127,214,106,0.10)', line: 'rgba(127,214,106,0.55)', label: '#7fd66a' },
  human: { band: 'rgba(255,154,82,0.12)', line: 'rgba(255,154,82,0.6)', label: '#ff9a52' },
};

/** How much of the axis is visible across the full width of the viewport. */
const VIEWPORT_SPAN = 0.34;

export function TimelineAxis({
  position,
  events,
  selectedIndex,
  quality,
  reducedMotion,
  onScrub,
  onSelect,
}: Props): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const size = useElementSize(containerRef);
  const budget = QUALITY_BUDGETS[quality];

  const eras = useMemo(() => orderedEras(), []);
  const truePositions = useMemo(() => events.map((event) => positionOf(event.time)), [events]);

  // De-collided pin positions. `minGap` is in axis units and derived from the
  // viewport span so pins stay ~26 device pixels apart whatever the width.
  const pinPositions = useMemo(() => {
    const minGap = size.width > 0 ? (26 / size.width) * VIEWPORT_SPAN : 0.01;
    return layoutPins(truePositions, minGap);
  }, [truePositions, size.width]);

  // ---- Drag handling -----------------------------------------------------
  // Refs rather than state: a drag must not re-render on every pointer move.
  const drag = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startPosition: 0,
    moved: false,
  });

  const positionFromDelta = useCallback(
    (deltaPx: number, from: number): number => {
      if (size.width === 0) return from;
      return from - (deltaPx / size.width) * VIEWPORT_SPAN;
    },
    [size.width],
  );

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      drag.current = {
        active: true,
        pointerId: event.pointerId,
        startX: event.clientX,
        startPosition: position,
        moved: false,
      };
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [position],
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const state = drag.current;
      if (!state.active || state.pointerId !== event.pointerId) return;
      const delta = event.clientX - state.startX;
      // A few pixels of slop so a tap is not read as a one-pixel drag.
      if (Math.abs(delta) > 4) state.moved = true;
      if (state.moved) onScrub(positionFromDelta(delta, state.startPosition));
    },
    [onScrub, positionFromDelta],
  );

  const onPointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const state = drag.current;
      if (!state.active || state.pointerId !== event.pointerId) return;
      state.active = false;
      event.currentTarget.releasePointerCapture?.(event.pointerId);

      if (!state.moved) {
        // A tap: select the nearest pin to where the finger landed.
        const rect = event.currentTarget.getBoundingClientRect();
        const offset = (event.clientX - rect.left) / rect.width - 0.5;
        const tapped = position + offset * VIEWPORT_SPAN;
        let best = 0;
        let bestDistance = Infinity;
        for (let i = 0; i < pinPositions.length; i += 1) {
          const distance = Math.abs(pinPositions[i]! - tapped);
          if (distance < bestDistance) {
            bestDistance = distance;
            best = i;
          }
        }
        onSelect(best);
      } else {
        // Released a drag: settle onto the nearest milestone.
        let best = 0;
        let bestDistance = Infinity;
        for (let i = 0; i < pinPositions.length; i += 1) {
          const distance = Math.abs(pinPositions[i]! - position);
          if (distance < bestDistance) {
            bestDistance = distance;
            best = i;
          }
        }
        onSelect(best);
      }
    },
    [position, pinPositions, onSelect],
  );

  // Trackpad and wheel: horizontal intent wins, vertical falls through to the
  // page so the axis never hijacks normal scrolling.
  const onWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      onScrub(positionFromDelta(-event.deltaX, position));
    },
    [onScrub, position, positionFromDelta],
  );

  // ---- Painting ----------------------------------------------------------
  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || size.width === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
    const w = Math.round(size.width * dpr);
    const h = Math.round(size.height * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    context.clearRect(0, 0, w, h);

    /** Axis position → x in device pixels. */
    const toX = (p: number): number => w / 2 + ((p - position) / VIEWPORT_SPAN) * w;
    const axisY = h * 0.58;

    // ---- Era bands -------------------------------------------------------
    const eraLabels: Array<{ text: string; x: number; width: number; colour: string }> = [];
    for (const era of eras) {
      const from = toX(positionOf(era.from));
      const to = toX(positionOf(era.to));
      if (to < -40 || from > w + 40) continue;
      const style = DOMAIN_STYLE[era.domain];

      context.fillStyle = style.band;
      context.fillRect(from, 0, Math.max(1, to - from), h);

      context.strokeStyle = 'rgba(148,162,192,0.18)';
      context.lineWidth = dpr;
      context.beginPath();
      context.moveTo(from, 0);
      context.lineTo(from, h);
      context.stroke();

      // Era titles are collected first and drawn afterwards, so that narrow
      // bands can be skipped when their labels would collide. Drawing them
      // inline produced an unreadable pile-up wherever several short eras were
      // on screen at once.
      context.font = `600 ${10.5 * dpr}px system-ui, sans-serif`;
      const title = era.title.toUpperCase();
      const width = context.measureText(title).width;
      const labelX = Math.max(from + 10 * dpr, Math.min(to - width - 10 * dpr, w * 0.05));
      if (to - from > width + 24 * dpr) {
        eraLabels.push({ text: title, x: labelX, width, colour: style.label });
      }
    }

    // Greedy placement: first come, first served, later ones dropped if they
    // would overlap. Eras are already in chronological order.
    context.font = `600 ${10.5 * dpr}px system-ui, sans-serif`;
    context.textBaseline = 'top';
    const placedEraLabels: Array<[number, number]> = [];
    for (const label of eraLabels) {
      const left = label.x;
      const right = label.x + label.width;
      if (placedEraLabels.some(([l, r]) => right + 12 * dpr > l && left - 12 * dpr < r)) continue;
      placedEraLabels.push([left, right]);
      context.fillStyle = label.colour;
      context.globalAlpha = 0.85;
      context.fillText(label.text, label.x, 10 * dpr);
      context.globalAlpha = 1;
    }

    // ---- The axis line ---------------------------------------------------
    const gradient = context.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, 'rgba(148,162,192,0.15)');
    gradient.addColorStop(0.5, 'rgba(226,233,246,0.5)');
    gradient.addColorStop(1, 'rgba(148,162,192,0.15)');
    context.strokeStyle = gradient;
    context.lineWidth = 1.5 * dpr;
    context.beginPath();
    context.moveTo(0, axisY);
    context.lineTo(w, axisY);
    context.stroke();

    // ---- Milestone pins --------------------------------------------------
    const pinLabels: Array<{
      index: number;
      title: string;
      x: number;
      y: number;
      selected: boolean;
      prominence: number;
    }> = [];

    for (let i = 0; i < events.length; i += 1) {
      const event = events[i]!;
      const x = toX(pinPositions[i]!);
      if (x < -70 * dpr || x > w + 70 * dpr) continue;

      const era = eras.find((candidate) => candidate.id === event.eraId);
      const style = DOMAIN_STYLE[era?.domain ?? 'cosmic'];
      const selected = i === selectedIndex;
      const stemHeight = (14 + event.prominence * 26) * dpr;
      const radius = (selected ? 6 : 2.6 + event.prominence * 2) * dpr;

      context.strokeStyle = style.line;
      context.globalAlpha = selected ? 1 : 0.45 + event.prominence * 0.3;
      context.lineWidth = (selected ? 2 : 1) * dpr;
      context.beginPath();
      context.moveTo(x, axisY);
      context.lineTo(x, axisY - stemHeight);
      context.stroke();

      if (selected) {
        const halo = context.createRadialGradient(
          x,
          axisY - stemHeight,
          0,
          x,
          axisY - stemHeight,
          radius * 5,
        );
        halo.addColorStop(0, `${style.label}66`);
        halo.addColorStop(1, 'rgba(0,0,0,0)');
        context.fillStyle = halo;
        context.beginPath();
        context.arc(x, axisY - stemHeight, radius * 5, 0, Math.PI * 2);
        context.fill();
      }

      context.beginPath();
      context.arc(x, axisY - stemHeight, radius, 0, Math.PI * 2);
      context.fillStyle = selected ? '#ffffff' : style.label;
      context.fill();
      context.globalAlpha = 1;

      // Labels are collected, not drawn: see the collision pass below.
      pinLabels.push({
        index: i,
        title: event.title,
        x,
        y: axisY - stemHeight - radius - 7 * dpr,
        selected,
        prominence: event.prominence,
      });
    }

    // ---- Milestone labels, placed without collisions ----------------------
    // Thinning by prominence alone is not enough: near the present, milestones
    // are packed tightly and their captions pile on top of one another. So
    // labels are placed greedily in priority order — the selected one first,
    // then the most prominent — and any that would overlap is simply dropped.
    // The result is that the axis stays readable at every zoom and position.
    context.textAlign = 'center';
    context.textBaseline = 'bottom';
    const placedLabels: Array<[number, number]> = [];
    const byPriority = [...pinLabels].sort((a, b) => {
      if (a.selected !== b.selected) return a.selected ? -1 : 1;
      return b.prominence - a.prominence;
    });

    for (const label of byPriority) {
      // Only the selected milestone is worth a long caption; the rest are cues.
      if (!label.selected && label.prominence < 0.7) continue;

      context.font = `${label.selected ? '600 ' : ''}${11 * dpr}px system-ui, sans-serif`;
      const text = label.title.length > 24 ? `${label.title.slice(0, 23).trimEnd()}…` : label.title;
      const width = context.measureText(text).width;
      if (label.x + width / 2 < 0 || label.x - width / 2 > w) continue;

      // Clamp FIRST, then test for collisions. Testing the unclamped position
      // and drawing the clamped one let a caption pushed away from the edge
      // slide straight into its neighbour.
      const drawX = Math.max(width / 2 + 6 * dpr, Math.min(w - width / 2 - 6 * dpr, label.x));
      const left = drawX - width / 2;
      const right = drawX + width / 2;

      const gap = 10 * dpr;
      if (placedLabels.some(([l, r]) => right + gap > l && left - gap < r)) continue;
      placedLabels.push([left, right]);

      context.fillStyle = label.selected ? '#f2f5fc' : 'rgba(226,233,246,0.55)';
      context.fillText(text, drawX, label.y);
    }
    context.textAlign = 'start';

    // ---- The playhead ----------------------------------------------------
    context.strokeStyle = 'rgba(255,255,255,0.85)';
    context.lineWidth = 1.5 * dpr;
    context.beginPath();
    context.moveTo(w / 2, h * 0.18);
    context.lineTo(w / 2, h * 0.9);
    context.stroke();

    context.beginPath();
    context.moveTo(w / 2 - 5 * dpr, h * 0.9);
    context.lineTo(w / 2 + 5 * dpr, h * 0.9);
    context.lineTo(w / 2, h * 0.9 - 6 * dpr);
    context.closePath();
    context.fillStyle = 'rgba(255,255,255,0.9)';
    context.fill();
  }, [
    size.width,
    size.height,
    position,
    events,
    pinPositions,
    selectedIndex,
    eras,
    budget.maxPixelRatio,
  ]);

  useEffect(() => {
    paint();
  }, [paint]);

  const selected = events[selectedIndex];

  return (
    <div
      ref={containerRef}
      className={styles.axis}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onWheel={onWheel}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          onSelect(Math.max(0, selectedIndex - 1));
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          onSelect(Math.min(events.length - 1, selectedIndex + 1));
        } else if (event.key === 'Home') {
          event.preventDefault();
          onSelect(0);
        } else if (event.key === 'End') {
          event.preventDefault();
          onSelect(events.length - 1);
        }
      }}
      role="slider"
      tabIndex={0}
      aria-label="Cosmic timeline. Drag or use the arrow keys to travel through time."
      aria-valuemin={0}
      aria-valuemax={events.length - 1}
      aria-valuenow={selectedIndex}
      aria-valuetext={selected ? `${selected.title}, ${selected.whenLabel}` : undefined}
      data-reduced-motion={reducedMotion}
    >
      <canvas ref={canvasRef} className={styles.canvas} />
      <p className={styles.hint} aria-hidden="true">
        Drag to travel
      </p>
    </div>
  );
}
