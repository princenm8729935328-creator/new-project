import { useMemo, useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The expansion history, actually integrated.
 *
 * This curve is not drawn by eye. It comes from numerically integrating the
 * first Friedmann equation with the Planck 2018 parameters, which is what makes
 * the figure `data-driven` rather than schematic: the inflection where
 * deceleration turns into acceleration falls where the physics puts it, not
 * where a designer thought it looked good.
 *
 *   (ȧ/a)² = H₀² [ Ω_m a⁻³ + Ω_Λ ]
 *   ⇒ da/dt = H₀ √(Ω_m/a + Ω_Λ a²)
 *
 * Radiation is omitted: it is negligible after the first ~50,000 years and
 * would be invisible at this scale. The comparison curve sets Ω_Λ = 0 and
 * renormalises Ω_m to 1, which is the honest "no dark energy" counterfactual —
 * a flat matter-only universe.
 */

const H0_KM_S_MPC = 67.4;
const OMEGA_M = 0.315;
const OMEGA_LAMBDA = 0.685;

/** H₀ expressed per billion years, so t comes out in Gyr directly. */
const H0_PER_GYR = (H0_KM_S_MPC / 3.0857e19) * 3.1557e16;

interface Point {
  t: number;
  a: number;
}

/** Integrates da/dt forward with RK4 from a tiny initial scale factor. */
function integrate(omegaM: number, omegaLambda: number, tMax: number): Point[] {
  const da = 0.0004;
  const dadt = (a: number): number => H0_PER_GYR * Math.sqrt(omegaM / a + omegaLambda * a * a);

  const points: Point[] = [{ t: 0, a: 0 }];
  let t = 0;
  for (let a = da; a <= 2.2; a += da) {
    // Step in `a` rather than `t`: dt/da is finite and smooth everywhere here,
    // whereas da/dt diverges as a → 0.
    const dtda = (x: number): number => 1 / dadt(x);
    const previous = a - da;
    // Simpson's rule across the step — plenty for a curve read at this size.
    t += (da / 6) * (dtda(previous) + 4 * dtda(previous + da / 2) + dtda(a));
    if (t > tMax) break;
    points.push({ t, a });
  }
  return points;
}

export default function ExpansionHistory(_props: VisualizationProps): ReactNode {
  const [showComparison, setShowComparison] = useState(true);

  const { real, matterOnly, ageNow, matterOnlyAge, inflection } = useMemo(() => {
    const tMax = 22;
    const withLambda = integrate(OMEGA_M, OMEGA_LAMBDA, tMax);
    const withoutLambda = integrate(1, 0, tMax);

    // Present day: where a = 1 on the real curve.
    const now = withLambda.find((point) => point.a >= 1);
    // And where a matter-only universe with the same present-day expansion
    // rate would reach a = 1 — which is the whole point of the comparison.
    const matterNow = withoutLambda.find((point) => point.a >= 1);

    // Acceleration begins where ä = 0, i.e. Ω_m a⁻³ = 2Ω_Λ.
    const aInflection = (OMEGA_M / (2 * OMEGA_LAMBDA)) ** (1 / 3);
    const inflectionPoint = withLambda.find((point) => point.a >= aInflection);

    return {
      real: withLambda,
      matterOnly: withoutLambda,
      ageNow: now?.t ?? 13.8,
      matterOnlyAge: matterNow?.t ?? 9.7,
      inflection: inflectionPoint ?? null,
    };
  }, []);

  const w = 380;
  const h = 260;
  const pad = { top: 26, right: 14, bottom: 44, left: 40 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;

  const tMaxAxis = 22;
  const aMaxAxis = 2.0;
  const x = (t: number): number => pad.left + (t / tMaxAxis) * plotW;
  const y = (a: number): number => pad.top + plotH - (a / aMaxAxis) * plotH;

  const path = (points: Point[]): string =>
    points
      .filter((_, index) => index % 3 === 0)
      .map(
        (point, index) =>
          `${index === 0 ? 'M' : 'L'}${x(point.t).toFixed(1)},${y(point.a).toFixed(1)}`,
      )
      .join(' ');

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[0, 0.5, 1, 1.5, 2].map((a) => (
          <g key={a}>
            <line
              x1={pad.left}
              x2={w - pad.right}
              y1={y(a)}
              y2={y(a)}
              stroke="rgba(148,162,192,0.14)"
              strokeWidth={1}
            />
            <text
              x={pad.left - 6}
              y={y(a) + 3.5}
              textAnchor="end"
              fontSize={10}
              fill="rgba(148,162,192,0.85)"
              fontFamily="ui-monospace, monospace"
            >
              {a.toFixed(1)}
            </text>
          </g>
        ))}

        {/* Present day */}
        <line
          x1={x(ageNow)}
          x2={x(ageNow)}
          y1={pad.top}
          y2={pad.top + plotH}
          stroke="rgba(255,255,255,0.5)"
          strokeWidth={1}
          strokeDasharray="3 3"
        />
        <text
          x={x(ageNow) + 4}
          y={pad.top + 10}
          fontSize={10}
          fill="rgba(226,233,246,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          now
        </text>

        {showComparison && (
          <>
            <path
              d={path(matterOnly)}
              fill="none"
              stroke="rgba(148,162,192,0.65)"
              strokeWidth={1.6}
              strokeDasharray="5 4"
            />
            {/*
              The historically decisive point: with the same expansion rate we
              measure today but no dark energy, the Universe reaches its present
              size in only ~9.7 billion years — younger than its oldest stars.
            */}
            <circle cx={x(matterOnlyAge)} cy={y(1)} r={3.5} fill="rgba(148,162,192,0.9)" />
            <text
              x={x(matterOnlyAge) - 5}
              y={y(1) - 8}
              textAnchor="end"
              fontSize={9.5}
              fill="rgba(148,162,192,0.95)"
              fontFamily="system-ui, sans-serif"
            >
              without it, only {matterOnlyAge.toFixed(1)} Gyr old
            </text>
          </>
        )}

        <path d={path(real)} fill="none" stroke="#ff8fb0" strokeWidth={2.4} />

        {inflection && (
          <>
            <circle cx={x(inflection.t)} cy={y(inflection.a)} r={4} fill="#ffd76e" />
            <text
              x={x(inflection.t) - 6}
              y={y(inflection.a) - 8}
              textAnchor="end"
              fontSize={10}
              fill="#ffd76e"
              fontFamily="system-ui, sans-serif"
            >
              acceleration begins
            </text>
          </>
        )}

        {[0, 5, 10, 15, 20].map((t) => (
          <text
            key={t}
            x={x(t)}
            y={h - pad.bottom + 16}
            textAnchor="middle"
            fontSize={10}
            fill="rgba(148,162,192,0.85)"
            fontFamily="ui-monospace, monospace"
          >
            {t}
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
          billions of years since the beginning
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
          relative size
        </text>

        <g transform={`translate(${pad.left + 6}, ${pad.top + 2})`}>
          <line x1={0} x2={16} y1={4} y2={4} stroke="#ff8fb0" strokeWidth={2.4} />
          <text
            x={22}
            y={7.5}
            fontSize={10}
            fill="rgba(226,233,246,0.9)"
            fontFamily="system-ui, sans-serif"
          >
            with dark energy
          </text>
          {showComparison && (
            <>
              <line
                x1={0}
                x2={16}
                y1={18}
                y2={18}
                stroke="rgba(148,162,192,0.65)"
                strokeWidth={1.6}
                strokeDasharray="5 4"
              />
              <text
                x={22}
                y={21.5}
                fontSize={10}
                fill="rgba(148,162,192,0.9)"
                fontFamily="system-ui, sans-serif"
              >
                matter only
              </text>
            </>
          )}
        </g>
      </svg>

      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showComparison}
          onClick={() => setShowComparison((on) => !on)}
        >
          Compare with no dark energy
        </button>
      </div>
    </div>
  );
}
