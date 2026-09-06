import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';

/**
 * Newton's Moon test, redone with modern measured values.
 *
 * The whole argument for universal gravitation in one comparison: take the
 * acceleration of a falling object at the Earth's surface, divide by the square
 * of the Moon's distance in Earth radii, and see whether you get the Moon's
 * actual orbital acceleration. You do, to about one percent.
 *
 * The arithmetic is done here rather than typed in as a result, and the ~1%
 * residual is labelled rather than rounded away — it is the Moon's own mass,
 * which the simple version of the calculation ignores.
 */

const G_SURFACE = 9.81; // m/s²
const MOON_DISTANCE_RADII = 384400 / 6371; // 60.34
const PREDICTED = G_SURFACE / MOON_DISTANCE_RADII ** 2;

// Observed centripetal acceleration: ω²r with the sidereal month.
const MOON_R = 3.844e8; // m
const MOON_PERIOD = 27.321661 * 86400; // s
const OBSERVED = ((2 * Math.PI) / MOON_PERIOD) ** 2 * MOON_R;

const W = 380;
const H = 286;

export default function MoonTest(_props: VisualizationProps): ReactNode {
  const ratio = MOON_DISTANCE_RADII ** 2;
  const disagreement = ((OBSERVED - PREDICTED) / PREDICTED) * 100;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMin meet"
      style={{ width: '100%', height: 'auto' }}
      role="presentation"
    >
      {/* ---- The scale bar: Earth to Moon ---------------------------------- */}
      <circle cx={40} cy={54} r={24} fill="#4a6fa5" />
      <circle cx={40} cy={54} r={24} fill="none" stroke="rgba(226,233,246,0.35)" />
      <circle cx={330} cy={54} r={8} fill="#c8ccd6" />

      <line x1={64} x2={322} y1={54} y2={54} stroke="rgba(148,162,192,0.4)" strokeDasharray="4 4" />
      <text
        x={193}
        y={44}
        textAnchor="middle"
        fontSize={10}
        fill="rgba(148,162,192,0.95)"
        fontFamily="ui-monospace, monospace"
      >
        60.34 Earth radii
      </text>
      <text
        x={40}
        y={92}
        textAnchor="middle"
        fontSize={10}
        fill="rgba(226,233,246,0.92)"
        fontFamily="system-ui, sans-serif"
      >
        Earth
      </text>
      <text
        x={330}
        y={92}
        textAnchor="middle"
        fontSize={10}
        fill="rgba(226,233,246,0.92)"
        fontFamily="system-ui, sans-serif"
      >
        Moon
      </text>

      {/* The apple, with its acceleration arrow. */}
      <circle cx={40} cy={22} r={4} fill="#ff8f6e" />
      <line x1={40} y1={26} x2={40} y2={36} stroke="#ff8f6e" strokeWidth={2} />
      <polygon points="40,40 36,33 44,33" fill="#ff8f6e" />

      {/* ---- Left: the apple ---------------------------------------------- */}
      <rect
        x={8}
        y={106}
        width={168}
        height={62}
        rx={6}
        fill="rgba(255,143,110,0.08)"
        stroke="rgba(255,143,110,0.35)"
      />
      <text
        x={18}
        y={124}
        fontSize={10}
        fill="rgba(226,233,246,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        An apple at the surface
      </text>
      <text
        x={18}
        y={146}
        fontSize={15}
        fontWeight={700}
        fill="#ff8f6e"
        fontFamily="ui-monospace, monospace"
      >
        9.81 m/s²
      </text>
      <text
        x={18}
        y={161}
        fontSize={9}
        fill="rgba(148,162,192,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        measured at 1 Earth radius
      </text>

      {/* ---- Right: the Moon ---------------------------------------------- */}
      <rect
        x={204}
        y={106}
        width={168}
        height={62}
        rx={6}
        fill="rgba(200,204,214,0.07)"
        stroke="rgba(200,204,214,0.3)"
      />
      <text
        x={214}
        y={124}
        fontSize={10}
        fill="rgba(226,233,246,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        The Moon, observed
      </text>
      <text
        x={214}
        y={146}
        fontSize={15}
        fontWeight={700}
        fill="#c8ccd6"
        fontFamily="ui-monospace, monospace"
      >
        {OBSERVED.toExponential(2).replace('e-3', ' × 10⁻³')} m/s²
      </text>
      <text
        x={214}
        y={161}
        fontSize={9}
        fill="rgba(148,162,192,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        from its orbit radius and period
      </text>

      {/* ---- The prediction ------------------------------------------------ */}
      <rect
        x={8}
        y={184}
        width={364}
        height={62}
        rx={6}
        fill="rgba(143,184,255,0.10)"
        stroke="rgba(143,184,255,0.45)"
      />
      <text
        x={18}
        y={202}
        fontSize={10}
        fill="rgba(226,233,246,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        If the same inverse-square law reaches that far:
      </text>
      <text
        x={18}
        y={226}
        fontSize={13}
        fontWeight={700}
        fill="#8fb8ff"
        fontFamily="ui-monospace, monospace"
      >
        9.81 ÷ 60.34² = 9.81 ÷ {ratio.toFixed(0)} ={' '}
        {PREDICTED.toExponential(2).replace('e-3', ' × 10⁻³')} m/s²
      </text>
      <text
        x={18}
        y={240}
        fontSize={9}
        fill="rgba(148,162,192,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        prediction from the apple alone — no astronomical input
      </text>

      <text
        x={W / 2}
        y={264}
        textAnchor="middle"
        fontSize={11}
        fontWeight={600}
        fill="#4fe0c0"
        fontFamily="system-ui, sans-serif"
      >
        Predicted and observed agree to {Math.abs(disagreement).toFixed(1)}%.
      </text>
      <text
        x={W / 2}
        y={278}
        textAnchor="middle"
        fontSize={9}
        fill="rgba(148,162,192,0.9)"
        fontFamily="system-ui, sans-serif"
      >
        The residual is mostly the Moon’s own mass: both bodies orbit their common centre.
      </text>
    </svg>
  );
}
