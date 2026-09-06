import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';

interface Node {
  /** Normalised 0–1 coordinates of the final collapsed position. */
  tx: number;
  ty: number;
  /** Starting position — the nearly uniform early Universe. */
  sx: number;
  sy: number;
  mass: number;
  /** Fraction of the sequence at which this node lights up as a galaxy. */
  ignitesAt: number;
}

/** Deterministic pseudo-random, so the same web is drawn on every mount. */
function seeded(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/**
 * Gravity turning a nearly smooth Universe into a web.
 *
 * A conceptual diagram of structure formation: matter starts almost uniformly
 * spread, tiny density differences grow, and material drains along filaments
 * into knots that ignite as galaxies. The pattern is generated, not simulated —
 * it is built to look like the output of cosmological simulations, not to be
 * one, and the caption says exactly that.
 */
export default function StructureFormation({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const nodeCount = quality === 'low' ? 26 : quality === 'medium' ? 44 : 64;
  const dustCount = Math.round(Math.min(budget.maxParticles, 700) * 0.5);

  // Built once per quality tier: a set of knots plus the filaments joining
  // each knot to its nearest neighbours.
  const { nodes, links, dust } = useMemo(() => {
    const random = seeded(20240917);
    const built: Node[] = [];
    for (let i = 0; i < nodeCount; i += 1) {
      const tx = random();
      const ty = random();
      built.push({
        tx,
        ty,
        // Start close to a uniform grid: the early Universe was smooth to
        // one part in 100,000.
        sx: (i % 8) / 8 + 0.0625 + (random() - 0.5) * 0.04,
        sy: Math.floor(i / 8) / Math.ceil(nodeCount / 8) + 0.06 + (random() - 0.5) * 0.04,
        mass: 0.35 + random() * 0.65,
        ignitesAt: 0.42 + random() * 0.4,
      });
    }

    const edges: Array<[number, number]> = [];
    for (let i = 0; i < built.length; i += 1) {
      const a = built[i]!;
      const distances = built
        .map((b, j) => ({ j, d: (b.tx - a.tx) ** 2 + (b.ty - a.ty) ** 2 }))
        .filter((entry) => entry.j !== i)
        .sort((p, q) => p.d - q.d)
        .slice(0, 2);
      for (const { j } of distances) {
        if (!edges.some(([x, y]) => (x === i && y === j) || (x === j && y === i))) {
          edges.push([i, j]);
        }
      }
    }

    const motes = Array.from({ length: dustCount }, () => {
      // Each mote drifts towards a randomly chosen knot, which is what makes
      // the filaments appear to drain into the nodes.
      const target = Math.floor(random() * built.length);
      return { x: random(), y: random(), target, jitter: random() };
    });

    return { nodes: built, links: edges, dust: motes };
  }, [nodeCount, dustCount]);

  const render = (elapsed: number): void => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0) return;

    const w = canvas.width;
    const h = canvas.height;
    // 18-second sequence from smooth to fully collapsed, then holds.
    const raw = reducedMotion ? 1 : Math.min(1, (elapsed % 22) / 18);
    // Ease so collapse accelerates, as gravitational growth does.
    const t = raw * raw * (3 - 2 * raw);

    context.clearRect(0, 0, w, h);

    const px = (n: number): number => n * w;
    const py = (n: number): number => n * h;
    const pos = (node: Node): [number, number] => [
      px(node.sx + (node.tx - node.sx) * t),
      py(node.sy + (node.ty - node.sy) * t),
    ];

    // Filaments, fading in as structure forms.
    context.lineWidth = dpr;
    for (const [i, j] of links) {
      const a = nodes[i];
      const b = nodes[j];
      if (!a || !b) continue;
      const [ax, ay] = pos(a);
      const [bx, by] = pos(b);
      context.beginPath();
      context.moveTo(ax, ay);
      context.lineTo(bx, by);
      context.strokeStyle = `rgba(120, 150, 220, ${0.05 + 0.22 * t})`;
      context.stroke();
    }

    // Diffuse matter draining along the filaments.
    for (const mote of dust) {
      const node = nodes[mote.target];
      if (!node) continue;
      const [nx, ny] = pos(node);
      const pull = t * (0.55 + mote.jitter * 0.4);
      const x = px(mote.x) + (nx - px(mote.x)) * pull;
      const y = py(mote.y) + (ny - py(mote.y)) * pull;
      context.beginPath();
      context.arc(x, y, 0.8 * dpr, 0, Math.PI * 2);
      context.fillStyle = `rgba(160, 185, 235, ${0.12 + 0.2 * (1 - t)})`;
      context.fill();
    }

    // Knots. They ignite — become galaxies — at staggered times.
    for (const node of nodes) {
      const [x, y] = pos(node);
      const lit = Math.min(1, Math.max(0, (t - node.ignitesAt) / 0.2));
      const radius = (1.4 + node.mass * 2.6 * t) * dpr;

      if (lit > 0) {
        const halo = context.createRadialGradient(x, y, 0, x, y, radius * 6);
        halo.addColorStop(0, `rgba(255, 226, 170, ${0.4 * lit})`);
        halo.addColorStop(1, 'rgba(255, 200, 120, 0)');
        context.fillStyle = halo;
        context.beginPath();
        context.arc(x, y, radius * 6, 0, Math.PI * 2);
        context.fill();
      }

      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle =
        lit > 0 ? `rgba(255, 240, 210, ${0.55 + 0.45 * lit})` : 'rgba(150, 175, 225, 0.5)';
      context.fill();
    }

    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(220, 228, 242, 0.85)';
    context.textBaseline = 'top';
    context.fillText(
      t < 0.35
        ? 'Nearly uniform — the Dark Ages'
        : t < 0.7
          ? 'Gravity draws matter into filaments'
          : 'Knots ignite: the first stars and galaxies',
      12 * dpr,
      12 * dpr,
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) return;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    render(reducedMotion ? 18 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, dpr, reducedMotion, quality]);

  useAnimationFrame(
    (_delta, elapsed) => render(elapsed),
    active && !reducedMotion,
    budget.targetFps,
  );

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
}
