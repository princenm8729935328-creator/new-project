import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The Hertzsprung–Russell diagram: the most important scatter plot ever drawn.
 *
 * Its whole content is that stars do not fill the plane. Plot enough of them
 * and they collapse onto a narrow diagonal band, with two small islands
 * elsewhere. That structure is not a selection effect and it is not an
 * accident: it is the visible consequence of a star's properties being fixed
 * almost entirely by its mass.
 *
 * The scatter is generated from the empirical spectral-type sequence weighted
 * by the stellar initial mass function, so the shape of the populated regions
 * is real while the individual points are not a catalogue.
 */

/** Main-sequence anchor points: temperature (K), luminosity (L☉), radius (R☉). */
const MAIN_SEQUENCE: readonly [number, number][] = [
  [42000, 200000],
  [30000, 54000],
  [20000, 16000],
  [15000, 5700],
  [11000, 800],
  [9500, 60],
  [8100, 15],
  [7200, 5.4],
  [6400, 2.0],
  [5900, 1.3],
  [5772, 1.0],
  [5300, 0.44],
  [4600, 0.15],
  [3900, 0.055],
  [3400, 0.012],
  [3000, 0.0035],
  [2700, 0.0008],
];

interface Marked {
  readonly name: string;
  readonly temp: number;
  readonly lum: number;
  readonly note: string;
}

const MARKED: readonly Marked[] = [
  {
    name: 'Sun',
    temp: 5772,
    lum: 1,
    note: 'G2 main sequence, 1 solar radius, halfway through its hydrogen.',
  },
  {
    name: 'Sirius A',
    temp: 9940,
    lum: 25.4,
    note: 'A1 main sequence, 2.06 solar masses. Bright because it is massive, not because it is close.',
  },
  {
    name: 'Proxima',
    temp: 3042,
    lum: 0.0017,
    note: 'M5.5 red dwarf, the nearest star to the Sun — and far too faint to see without a telescope.',
  },
  {
    name: 'Betelgeuse',
    temp: 3600,
    lum: 126000,
    note: 'A red supergiant: cool but enormous. Its luminosity comes entirely from its surface area.',
  },
  {
    name: 'Sirius B',
    temp: 25000,
    lum: 0.056,
    note: 'A white dwarf: hotter than Sirius A but ten thousand times fainter, because it is the size of the Earth.',
  },
];

function seeded(i: number): number {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Sample the main sequence with a Salpeter-like weighting: low-mass stars are
 * far more numerous, which is why the lower right of the diagram is crowded.
 */
interface Plotted {
  readonly temp: number;
  readonly lum: number;
  readonly kind: 'ms' | 'giant' | 'wd';
}

const SCATTER: readonly Plotted[] = Array.from({ length: 900 }, (_, i): Plotted => {
  const u = seeded(i * 3);
  // Bias heavily toward the cool end, as the mass function does.
  const t = u ** 2.6;
  const idx = t * (MAIN_SEQUENCE.length - 1);
  const lo = MAIN_SEQUENCE[Math.floor(idx)]!;
  const hi = MAIN_SEQUENCE[Math.min(MAIN_SEQUENCE.length - 1, Math.floor(idx) + 1)]!;
  const f = idx - Math.floor(idx);
  const temp = lo[0] * (1 - f) + hi[0] * f;
  const lum = 10 ** (Math.log10(lo[1]) * (1 - f) + Math.log10(hi[1]) * f);
  const jitterT = 1 + (seeded(i * 3 + 1) - 0.5) * 0.06;
  const jitterL = 10 ** ((seeded(i * 3 + 2) - 0.5) * 0.34);
  return { temp: temp * jitterT, lum: lum * jitterL, kind: 'ms' as const };
})
  .concat(
    // Giant branch: cool and very luminous.
    Array.from({ length: 140 }, (_, i): Plotted => {
      const f = seeded(i * 7 + 5000);
      return {
        temp: 3400 + f * 1900,
        lum: 10 ** (1.4 + seeded(i * 7 + 5001) * 2.2),
        kind: 'giant' as const,
      };
    }),
  )
  .concat(
    // White dwarf sequence: hot and very faint.
    Array.from({ length: 90 }, (_, i): Plotted => {
      const f = seeded(i * 11 + 9000);
      const temp = 5000 + f * 25000;
      return {
        temp,
        lum: 10 ** (-4.3 + Math.log10(temp / 5000) * 2.6 + (seeded(i * 11 + 9001) - 0.5) * 0.5),
        kind: 'wd' as const,
      };
    }),
  );

const KIND_COLOUR = {
  ms: 'rgba(226,233,246,0.72)',
  giant: 'rgba(255,143,110,0.85)',
  wd: 'rgba(143,184,255,0.85)',
};

const LOG_T_HI = Math.log10(50000);
const LOG_T_LO = Math.log10(2400);
const LOG_L_MIN = -5;
const LOG_L_MAX = 6;

export default function HrDiagram({ quality, width, height }: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
  const [showRadii, setShowRadii] = useState(false);
  const [pick, setPick] = useState(0);

  const marked = MARKED[pick] ?? MARKED[0]!;

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

    const left = 42 * dpr;
    const right = 12 * dpr;
    const top = 16 * dpr;
    const bottom = 34 * dpr;
    const plotW = w - left - right;
    const plotH = h - top - bottom;

    const px = (temp: number): number =>
      left + ((LOG_T_HI - Math.log10(temp)) / (LOG_T_HI - LOG_T_LO)) * plotW;
    const py = (lum: number): number =>
      top + plotH - ((Math.log10(lum) - LOG_L_MIN) / (LOG_L_MAX - LOG_L_MIN)) * plotH;

    // Grid.
    context.strokeStyle = 'rgba(148,162,192,0.12)';
    context.lineWidth = 1 * dpr;
    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.textAlign = 'right';
    context.textBaseline = 'middle';
    for (let exp = -4; exp <= 6; exp += 2) {
      const y = py(10 ** exp);
      context.beginPath();
      context.moveTo(left, y);
      context.lineTo(left + plotW, y);
      context.stroke();
      context.fillText(`1e${exp}`, left - 5 * dpr, y);
    }
    context.textAlign = 'center';
    context.textBaseline = 'top';
    for (const tick of [40000, 20000, 10000, 5000, 3000]) {
      const x = px(tick);
      context.beginPath();
      context.moveTo(x, top);
      context.lineTo(x, top + plotH);
      context.stroke();
      context.fillText(tick >= 10000 ? `${tick / 1000}k` : `${tick}`, x, top + plotH + 5 * dpr);
    }

    // Lines of constant radius, if asked for. L = 4πR²σT⁴.
    if (showRadii) {
      context.strokeStyle = 'rgba(79,224,192,0.4)';
      context.setLineDash([4 * dpr, 4 * dpr]);
      context.font = `${9 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(79,224,192,0.9)';
      context.textAlign = 'left';
      for (const rSolar of [0.01, 1, 100]) {
        context.beginPath();
        let first = true;
        for (let i = 0; i <= 40; i += 1) {
          const logT = LOG_T_HI - (i / 40) * (LOG_T_HI - LOG_T_LO);
          const temp = 10 ** logT;
          const lum = rSolar ** 2 * (temp / 5772) ** 4;
          const x = px(temp);
          const y = py(lum);
          if (first) {
            context.moveTo(x, y);
            first = false;
          } else context.lineTo(x, y);
        }
        context.stroke();
        const labelT = 4200;
        context.fillText(
          rSolar === 1 ? '1 R☉' : rSolar < 1 ? '0.01 R☉' : '100 R☉',
          px(labelT) + 4 * dpr,
          py(rSolar ** 2 * (labelT / 5772) ** 4) - 12 * dpr,
        );
      }
      context.setLineDash([]);
    }

    // The stars.
    for (const star of SCATTER) {
      context.fillStyle = KIND_COLOUR[star.kind];
      context.beginPath();
      context.arc(px(star.temp), py(star.lum), 1.3 * dpr, 0, Math.PI * 2);
      context.fill();
    }

    // Region labels.
    context.font = `${10 * dpr}px system-ui, sans-serif`;
    context.textAlign = 'center';
    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.fillText('main sequence', px(24000), py(30));
    context.fillStyle = 'rgba(255,143,110,0.95)';
    context.fillText('giants', px(4300), py(3e4));
    context.fillStyle = 'rgba(143,184,255,0.95)';
    context.fillText('white dwarfs', px(16000), py(1e-4));

    // Named markers.
    for (const entry of MARKED) {
      const x = px(entry.temp);
      const y = py(entry.lum);
      const isPick = entry.name === marked.name;
      context.fillStyle = isPick ? '#4fe0c0' : '#ffd27f';
      context.beginPath();
      context.arc(x, y, (isPick ? 5 : 3.2) * dpr, 0, Math.PI * 2);
      context.fill();
      if (isPick) {
        context.strokeStyle = '#4fe0c0';
        context.lineWidth = 1.4 * dpr;
        context.beginPath();
        context.arc(x, y, 10 * dpr, 0, Math.PI * 2);
        context.stroke();
      }
      context.fillStyle = isPick ? '#4fe0c0' : 'rgba(255,210,127,0.9)';
      context.font = `${9.5 * dpr}px system-ui, sans-serif`;
      context.textAlign = x > w * 0.7 ? 'right' : 'left';
      // The selected star wears a ring; its label has to clear the ring, not sit
      // inside it.
      context.fillText(
        entry.name,
        x + (x > w * 0.7 ? -1 : 1) * (isPick ? 13 : 8) * dpr,
        y - (isPick ? 14 : 10) * dpr,
      );
    }

    context.textAlign = 'center';
    context.fillStyle = 'rgba(148,162,192,0.9)';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillText('surface temperature, K — hotter to the left', left + plotW / 2, h - 15 * dpr);
    context.save();
    context.translate(11 * dpr, top + plotH / 2);
    context.rotate(-Math.PI / 2);
    context.fillText('luminosity ÷ Sun', 0, 0);
    context.restore();
  }, [width, height, dpr, showRadii, marked]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showRadii}
          onClick={() => setShowRadii((v) => !v)}
        >
          Lines of constant radius
        </button>
        {MARKED.map((entry, index) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={index === pick}
            onClick={() => setPick(index)}
          >
            {entry.name}
          </button>
        ))}
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        <strong>{marked.name}</strong>: {Math.round(marked.temp).toLocaleString()} K,{' '}
        {marked.lum >= 1 ? marked.lum.toLocaleString() : marked.lum.toPrecision(2)}× the Sun’s
        luminosity, radius {Math.sqrt(marked.lum / (marked.temp / 5772) ** 4).toPrecision(3)} R☉.{' '}
        {marked.note}{' '}
        {showRadii
          ? 'The dashed lines are constant radius. A star far above the 1 R☉ line at low temperature must be enormous — that is the entire reason a red giant is bright.'
          : 'Turn on the constant-radius lines to see why a cool star can outshine a hot one.'}
      </p>
    </div>
  );
}
