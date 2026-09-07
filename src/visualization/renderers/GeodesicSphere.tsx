import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Two straight lines that meet, on the one curved surface everyone knows.
 *
 * Meridians are great circles, so a traveller walking due north never turns —
 * and the separation between two such travellers falls exactly as cos φ, which
 * is what the readout reports. Neither walker is pushed sideways; the geometry
 * closes the gap. That is the whole idea of a geodesic, and it is why general
 * relativity can describe gravity without a force.
 *
 * The sphere is a two-dimensional stand-in for a four-dimensional geometry, and
 * the flat-map comparison is drawn alongside so the contrast is visible rather
 * than asserted.
 */

const R_EARTH_KM = 6371;
const TILT = 0.42; // radians, so the pole is visible

interface Sim {
  /** Latitude of both walkers, in radians, 0 → π/2. */
  latitude: number;
}

export default function GeodesicSphere({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>({ latitude: 0 });
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Starting separation along the equator, in degrees of longitude. */
  const [separationDeg, setSeparationDeg] = useState(30);
  const [generation, setGeneration] = useState(0);

  const startGapKm = ((separationDeg * Math.PI) / 180) * R_EARTH_KM;

  const reset = useCallback(() => {
    sim.current = { latitude: 0 };
    setGeneration((value) => value + 1);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0 || height === 0) return;

    const cssWidth = canvas.clientWidth || width;
    const cssHeight = canvas.clientHeight || height;
    const w = Math.round(cssWidth * dpr);
    const h = Math.round(cssHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    context.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h * 0.5;
    const radius = Math.min(w * 0.34, h * 0.38);
    const latitude = sim.current.latitude;
    const halfSpan = ((separationDeg / 2) * Math.PI) / 180;

    /** Orthographic projection with a tilt so the north pole is in view. */
    const project = (lat: number, lon: number): [number, number, number] => {
      const x = Math.cos(lat) * Math.sin(lon);
      const y0 = Math.sin(lat);
      const z0 = Math.cos(lat) * Math.cos(lon);
      const y = y0 * Math.cos(TILT) - z0 * Math.sin(TILT);
      const z = y0 * Math.sin(TILT) + z0 * Math.cos(TILT);
      return [cx + x * radius, cy - y * radius, z];
    };

    // ---- Globe -------------------------------------------------------------
    const glow = context.createRadialGradient(cx, cy, radius * 0.4, cx, cy, radius * 1.15);
    glow.addColorStop(0, 'rgba(74,111,165,0.42)');
    glow.addColorStop(1, 'rgba(74,111,165,0.08)');
    context.fillStyle = glow;
    context.beginPath();
    context.arc(cx, cy, radius, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = 'rgba(148,162,192,0.5)';
    context.lineWidth = 1.4 * dpr;
    context.beginPath();
    context.arc(cx, cy, radius, 0, Math.PI * 2);
    context.stroke();

    // Graticule: parallels and meridians, drawn only where facing us.
    const strokeArc = (
      points: [number, number, number][],
      colour: string,
      lineWidth: number,
    ): void => {
      context.strokeStyle = colour;
      context.lineWidth = lineWidth;
      let drawing = false;
      context.beginPath();
      for (const [px, py, pz] of points) {
        if (pz <= 0) {
          drawing = false;
          continue;
        }
        if (!drawing) {
          context.moveTo(px, py);
          drawing = true;
        } else {
          context.lineTo(px, py);
        }
      }
      context.stroke();
    };

    for (const lat of [-0.6, -0.3, 0, 0.3, 0.6, 0.9, 1.2]) {
      const points: [number, number, number][] = [];
      for (let i = 0; i <= 72; i += 1) {
        points.push(project(lat, (i / 72) * Math.PI * 2 - Math.PI));
      }
      strokeArc(points, lat === 0 ? 'rgba(226,233,246,0.4)' : 'rgba(148,162,192,0.16)', 1 * dpr);
    }
    for (let m = 0; m < 12; m += 1) {
      const lon = (m / 12) * Math.PI * 2 - Math.PI;
      const points: [number, number, number][] = [];
      for (let i = 0; i <= 48; i += 1) {
        points.push(project((i / 48) * Math.PI - Math.PI / 2, lon));
      }
      strokeArc(points, 'rgba(148,162,192,0.14)', 1 * dpr);
    }

    // ---- The two straight paths -------------------------------------------
    const colours = ['#66e0d4', '#ffd76e'];
    [-halfSpan, halfSpan].forEach((lon, index) => {
      const points: [number, number, number][] = [];
      for (let i = 0; i <= 60; i += 1) {
        points.push(project((i / 60) * latitude, lon));
      }
      strokeArc(points, colours[index]!, 2.4 * dpr);

      const [px, py, pz] = project(latitude, lon);
      if (pz > 0) {
        context.fillStyle = colours[index]!;
        context.beginPath();
        context.arc(px, py, 5 * dpr, 0, Math.PI * 2);
        context.fill();
      }
    });

    // The closing gap, drawn as a chord between the walkers.
    const [ax, ay, az] = project(latitude, -halfSpan);
    const [bx, by, bz] = project(latitude, halfSpan);
    if (az > 0 && bz > 0) {
      context.strokeStyle = 'rgba(255,143,110,0.85)';
      context.lineWidth = 1.6 * dpr;
      context.setLineDash([4 * dpr, 3 * dpr]);
      context.beginPath();
      context.moveTo(ax, ay);
      context.lineTo(bx, by);
      context.stroke();
      context.setLineDash([]);
    }

    // ---- Readouts -----------------------------------------------------------
    const gapKm = startGapKm * Math.cos(latitude);
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#66e0d4';
    context.fillText('Both walk due north. Neither ever turns.', 10 * dpr, 10 * dpr);
    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `latitude ${((latitude * 180) / Math.PI).toFixed(0)}°  ·  gap ${gapKm.toFixed(0)} km`,
      10 * dpr,
      28 * dpr,
    );

    context.textBaseline = 'bottom';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(255,143,110,0.9)';
    context.fillText(
      latitude > 1.5
        ? 'They have met. Nothing pulled them together.'
        : 'The gap falls as cos(latitude).',
      10 * dpr,
      h - 22 * dpr,
    );
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText('a 2-D stand-in for a 4-D geometry', 10 * dpr, h - 8 * dpr);
  }, [width, height, dpr, separationDeg, startGapKm]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      state.latitude += delta * 0.28;
      if (state.latitude > Math.PI / 2 + 0.5) state.latitude = 0;
      if (state.latitude > Math.PI / 2) state.latitude = Math.PI / 2;
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, generation, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Start apart</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Starting separation, degrees of longitude</span>
            <input
              className={styles.slider}
              type="range"
              min={5}
              max={90}
              step={1}
              value={separationDeg}
              onChange={(event) => {
                setSeparationDeg(Number(event.target.value));
                reset();
              }}
            />
          </label>
          <output className={styles.value}>{startGapKm.toFixed(0)} km</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={reset}>
          Set off again
        </button>
      </div>
    </div>
  );
}
