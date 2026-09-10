import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The Milky Way, reconstructed — and labelled as a reconstruction.
 *
 * There is no photograph of our Galaxy from outside, there never will be, and
 * every "image of the Milky Way" a reader has seen is either an artist's
 * impression or a picture of a different galaxy. This figure is a scale
 * diagram built from measured quantities, and it says which quantities are
 * measured and which are contested.
 *
 * Measured well: the Sun's distance from the centre (8.18 kpc, from the orbit
 * of S2), the disk scale length and height, the bar's length and angle, the
 * globular cluster distribution. Contested: the number, position and even the
 * reality of the spiral arms, which is the part everyone draws most confidently.
 */

const W = 380;
const H = 300;

/** kpc per viewBox unit for the face-on view. */
const FACE_CX = 96;
const FACE_CY = 96;
const FACE_SCALE = 4.6; // units per kpc
const R_SUN = 8.18; // kpc

const EDGE_CX = 268;
const EDGE_CY = 96;
const EDGE_SCALE = 4.6;

interface Arm {
  readonly name: string;
  /** Logarithmic spiral: r = a·e^(b·θ), starting angle. */
  readonly a: number;
  readonly b: number;
  readonly theta0: number;
  readonly span: number;
}

const ARMS: readonly Arm[] = [
  { name: 'Perseus', a: 3.6, b: 0.24, theta0: 0.4, span: 3.4 },
  { name: 'Scutum–Centaurus', a: 3.6, b: 0.24, theta0: 0.4 + Math.PI, span: 3.4 },
  { name: 'Sagittarius–Carina', a: 2.5, b: 0.26, theta0: 2.1, span: 3.2 },
  { name: 'Norma', a: 2.5, b: 0.26, theta0: 2.1 + Math.PI, span: 3.2 },
];

function armPath(arm: Arm): string {
  return Array.from({ length: 40 }, (_, i) => {
    const theta = arm.theta0 + (i / 39) * arm.span;
    const r = arm.a * Math.exp(arm.b * (theta - arm.theta0));
    const x = FACE_CX + Math.cos(theta) * r * FACE_SCALE;
    const y = FACE_CY + Math.sin(theta) * r * FACE_SCALE;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
}

/** Deterministic scatter, so the figure looks the same on every render. */
function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const GLOBULARS = Array.from({ length: 60 }, (_, i) => {
  const r = 2 + 28 * pseudoRandom(i + 1) ** 2;
  const theta = pseudoRandom(i + 40) * Math.PI * 2;
  const phi = Math.acos(2 * pseudoRandom(i + 90) - 1);
  return {
    faceX: FACE_CX + Math.cos(theta) * Math.sin(phi) * r * FACE_SCALE * 0.55,
    faceY: FACE_CY + Math.sin(theta) * Math.sin(phi) * r * FACE_SCALE * 0.55,
    edgeX: EDGE_CX + Math.cos(theta) * Math.sin(phi) * r * EDGE_SCALE * 0.55,
    edgeY: EDGE_CY + Math.cos(phi) * r * EDGE_SCALE * 0.55,
  };
});

type Layer = 'stars' | 'dark';

export default function MilkyWayStructure(_props: VisualizationProps): ReactNode {
  const [layer, setLayer] = useState<Layer>('stars');
  const showDark = layer === 'dark';

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={10} y={13} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          a scale reconstruction from measurements — not an image of anything
        </text>

        {/* --- Face-on --------------------------------------------------- */}
        <text x={FACE_CX} y={30} textAnchor="middle" fontSize={9} fill="rgba(226,233,246,0.9)">
          face-on
        </text>
        {showDark && (
          <circle
            cx={FACE_CX}
            cy={FACE_CY}
            r={88}
            fill="rgba(200,155,255,0.10)"
            stroke="rgba(200,155,255,0.45)"
            strokeDasharray="4 4"
          />
        )}
        <circle cx={FACE_CX} cy={FACE_CY} r={15 * FACE_SCALE} fill="rgba(143,184,255,0.10)" />
        {ARMS.map((arm) => (
          <path
            key={arm.name}
            d={armPath(arm)}
            fill="none"
            stroke="rgba(127,199,255,0.6)"
            strokeWidth={4}
            strokeLinecap="round"
          />
        ))}
        {/* The bar: 4.6 kpc half-length at 27° to the Sun–centre line. */}
        <g transform={`translate(${FACE_CX}, ${FACE_CY}) rotate(27)`}>
          <ellipse rx={4.6 * FACE_SCALE} ry={1.6 * FACE_SCALE} fill="rgba(255,210,127,0.55)" />
        </g>
        {GLOBULARS.map((g, i) => (
          <circle key={i} cx={g.faceX} cy={g.faceY} r={1.1} fill="rgba(226,233,246,0.5)" />
        ))}
        <circle cx={FACE_CX + R_SUN * FACE_SCALE} cy={FACE_CY} r={3.2} fill="#ffd27f" />
        <text x={FACE_CX + R_SUN * FACE_SCALE + 5} y={FACE_CY + 3} fontSize={8.5} fill="#ffd27f">
          Sun
        </text>
        <line
          x1={FACE_CX}
          x2={FACE_CX + R_SUN * FACE_SCALE}
          y1={FACE_CY}
          y2={FACE_CY}
          stroke="rgba(255,210,127,0.5)"
          strokeDasharray="2 2"
        />
        <text x={FACE_CX + 8} y={FACE_CY - 5} fontSize={8} fill="rgba(255,210,127,0.9)">
          8.18 kpc
        </text>

        {/* --- Edge-on --------------------------------------------------- */}
        <text x={EDGE_CX} y={30} textAnchor="middle" fontSize={9} fill="rgba(226,233,246,0.9)">
          edge-on
        </text>
        {showDark && (
          <circle
            cx={EDGE_CX}
            cy={EDGE_CY}
            r={88}
            fill="rgba(200,155,255,0.10)"
            stroke="rgba(200,155,255,0.45)"
            strokeDasharray="4 4"
          />
        )}
        {/* Thick disk. */}
        <ellipse
          cx={EDGE_CX}
          cy={EDGE_CY}
          rx={15 * EDGE_SCALE}
          ry={0.9 * EDGE_SCALE}
          fill="rgba(143,184,255,0.16)"
        />
        {/* Thin disk: scale height 300 pc. */}
        <ellipse
          cx={EDGE_CX}
          cy={EDGE_CY}
          rx={15 * EDGE_SCALE}
          ry={0.3 * EDGE_SCALE}
          fill="rgba(127,199,255,0.6)"
        />
        {/* Bulge. */}
        <ellipse
          cx={EDGE_CX}
          cy={EDGE_CY}
          rx={2.2 * EDGE_SCALE}
          ry={1.5 * EDGE_SCALE}
          fill="rgba(255,210,127,0.55)"
        />
        {GLOBULARS.map((g, i) => (
          <circle key={i} cx={g.edgeX} cy={g.edgeY} r={1.1} fill="rgba(226,233,246,0.5)" />
        ))}
        <circle cx={EDGE_CX + R_SUN * EDGE_SCALE} cy={EDGE_CY - 0.8} r={2.8} fill="#ffd27f" />

        {/* --- Labels, on their own rows so they cannot collide ---------- */}
        <text x={10} y={196} fontSize={9} fill="rgba(226,233,246,0.92)">
          <tspan fill="#ffd27f">bar</tspan>: 4.6 kpc half-length, 27° to our line of sight —{' '}
          <tspan fill="#4fe0c0">measured</tspan>
        </text>
        <text x={10} y={210} fontSize={9} fill="rgba(226,233,246,0.92)">
          <tspan fill="#7fc7ff">thin disk</tspan>: scale height ≈ 300 pc, scale length ≈ 2.6 kpc —{' '}
          <tspan fill="#4fe0c0">measured</tspan>
        </text>
        <text x={10} y={224} fontSize={9} fill="rgba(226,233,246,0.92)">
          Sun at 8.18 ± 0.03 kpc, from the orbit of the star S2 —{' '}
          <tspan fill="#4fe0c0">measured</tspan>
        </text>
        <text x={10} y={238} fontSize={9} fill="rgba(226,233,246,0.92)">
          globular clusters: ~150 known, distributed spherically —{' '}
          <tspan fill="#4fe0c0">measured</tspan>
        </text>
        <text x={10} y={252} fontSize={9} fill="rgba(226,233,246,0.92)">
          <tspan fill="#7fc7ff">spiral arms</tspan>: number and position —{' '}
          <tspan fill="#ff8f6e">contested</tspan>, one reconstruction of several
        </text>
        <text x={10} y={266} fontSize={9} fill="rgba(226,233,246,0.92)">
          <tspan fill="#c89bff">dark halo</tspan>: extends to ~200 kpc, ~10× the visible mass —{' '}
          <tspan fill="#ffd27f">inferred</tspan>
        </text>
        <text x={10} y={284} fontSize={8.5} fill="rgba(148,162,192,0.85)">
          Mapping our own Galaxy is hard precisely because we are inside it, behind its dust.
        </text>
      </svg>

      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={layer === 'stars'}
          onClick={() => setLayer('stars')}
        >
          Visible matter
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={layer === 'dark'}
          onClick={() => setLayer('dark')}
        >
          Add the dark halo
        </button>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        {showDark ? (
          <>
            The dashed sphere is the inferred dark-matter halo, drawn to its virial radius of
            roughly 200 kiloparsecs. Everything you would call “the Galaxy” — the disk, the arms,
            the bar, the bulge — fits inside its innermost few percent, and carries under a tenth of
            its mass. The halo is not observed directly; it is inferred from how fast things orbit.
          </>
        ) : (
          <>
            Everything drawn here is stars and gas. The Sun sits about 8.18 kiloparsecs from the
            centre, in a minor spur between two major arms, and completes one orbit every 230
            million years or so. Note which labels say <em>measured</em> and which says{' '}
            <em>contested</em>: the arms, which every illustration draws with total confidence, are
            the least secure part of the picture.
          </>
        )}
      </p>
    </div>
  );
}
