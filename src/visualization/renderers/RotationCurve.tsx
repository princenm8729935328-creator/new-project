import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The observation that made dark matter unavoidable.
 *
 * Two curves, computed rather than sketched. The visible-matter prediction is
 * Newtonian circular velocity for an exponential disc, which falls off outside
 * the light; the observed curve is flat. The gap between them is the whole
 * argument, and the halo toggle shows what has to be added to close it.
 *
 * Fidelity is `schematic` on purpose. The shapes and their relationship are
 * right, and that relationship is the scientific content — but the axis values
 * are typical of a large spiral rather than measurements of one named galaxy,
 * so calling it data-driven would overstate it.
 */

const R_MAX = 30; // kpc
const V_FLAT = 220; // km/s — typical of a large spiral

/** Newtonian circular speed from the visible disc alone (arbitrary scaling). */
function visibleCurve(r: number): number {
  // Rises roughly linearly inside the disc scale length, then falls as 1/√r.
  const scaleLength = 3.5;
  const enclosed = 1 - Math.exp(-r / scaleLength) * (1 + r / scaleLength);
  return r === 0 ? 0 : V_FLAT * 1.02 * Math.sqrt(enclosed / r) * Math.sqrt(scaleLength * 1.9);
}

/** A flat observed curve, rising quickly then holding. */
function observedCurve(r: number): number {
  return V_FLAT * Math.sqrt(1 - Math.exp(-r / 1.9));
}

/** The halo contribution required to make the two agree, added in quadrature. */
function haloCurve(r: number): number {
  const observed = observedCurve(r);
  const visible = visibleCurve(r);
  const squared = observed * observed - visible * visible;
  return squared > 0 ? Math.sqrt(squared) : 0;
}

export default function RotationCurve(_props: VisualizationProps): ReactNode {
  const [showHalo, setShowHalo] = useState(false);

  const w = 380;
  const h = 250;
  const pad = { top: 24, right: 14, bottom: 44, left: 42 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;
  const vMax = 300;

  const x = (r: number): number => pad.left + (r / R_MAX) * plotW;
  const y = (v: number): number => pad.top + plotH - (v / vMax) * plotH;

  const path = (fn: (r: number) => number): string => {
    const points: string[] = [];
    for (let r = 0.15; r <= R_MAX; r += 0.4) {
      points.push(`${points.length === 0 ? 'M' : 'L'}${x(r).toFixed(1)},${y(fn(r)).toFixed(1)}`);
    }
    return points.join(' ');
  };

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[0, 100, 200, 300].map((v) => (
          <g key={v}>
            <line
              x1={pad.left}
              x2={w - pad.right}
              y1={y(v)}
              y2={y(v)}
              stroke="rgba(148,162,192,0.14)"
              strokeWidth={1}
            />
            <text
              x={pad.left - 6}
              y={y(v) + 3.5}
              textAnchor="end"
              fontSize={10}
              fill="rgba(148,162,192,0.85)"
              fontFamily="ui-monospace, monospace"
            >
              {v}
            </text>
          </g>
        ))}

        {/* Rough extent of the visible starlight. */}
        <rect
          x={pad.left}
          y={pad.top}
          width={x(13) - pad.left}
          height={plotH}
          fill="rgba(255,214,110,0.06)"
        />
        <text
          x={x(6.5)}
          y={pad.top + plotH - 8}
          textAnchor="middle"
          fontSize={9.5}
          fill="rgba(255,214,110,0.75)"
          fontFamily="system-ui, sans-serif"
        >
          visible starlight
        </text>

        {showHalo && (
          <path
            d={path(haloCurve)}
            fill="none"
            stroke="#a97bff"
            strokeWidth={1.8}
            strokeDasharray="4 3"
          />
        )}
        <path
          d={path(visibleCurve)}
          fill="none"
          stroke="#ffd76e"
          strokeWidth={1.8}
          strokeDasharray="6 4"
        />
        <path d={path(observedCurve)} fill="none" stroke="#4fe0c0" strokeWidth={2.6} />

        {[0, 10, 20, 30].map((r) => (
          <text
            key={r}
            x={x(r)}
            y={h - pad.bottom + 16}
            textAnchor="middle"
            fontSize={10}
            fill="rgba(148,162,192,0.85)"
            fontFamily="ui-monospace, monospace"
          >
            {r}
          </text>
        ))}
        <text
          x={pad.left + plotW / 2}
          y={h - 16}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          distance from centre (thousands of light-years ×3.26)
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
          orbital speed (km/s)
        </text>

        <g transform={`translate(${pad.left + 8}, ${pad.top + 2})`}>
          <line x1={0} x2={16} y1={4} y2={4} stroke="#4fe0c0" strokeWidth={2.6} />
          <text
            x={22}
            y={7.5}
            fontSize={10}
            fill="rgba(226,233,246,0.9)"
            fontFamily="system-ui, sans-serif"
          >
            observed
          </text>
          <line
            x1={0}
            x2={16}
            y1={18}
            y2={18}
            stroke="#ffd76e"
            strokeWidth={1.8}
            strokeDasharray="6 4"
          />
          <text
            x={22}
            y={21.5}
            fontSize={10}
            fill="rgba(148,162,192,0.9)"
            fontFamily="system-ui, sans-serif"
          >
            predicted from visible matter
          </text>
          {showHalo && (
            <>
              <line
                x1={0}
                x2={16}
                y1={32}
                y2={32}
                stroke="#a97bff"
                strokeWidth={1.8}
                strokeDasharray="4 3"
              />
              <text
                x={22}
                y={35.5}
                fontSize={10}
                fill="rgba(169,123,255,0.95)"
                fontFamily="system-ui, sans-serif"
              >
                halo needed to explain the gap
              </text>
            </>
          )}
        </g>
      </svg>

      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showHalo}
          onClick={() => setShowHalo((on) => !on)}
        >
          Show the missing mass
        </button>
      </div>
    </div>
  );
}
