import { useEffect, useRef, type ReactNode } from 'react';
import { useReaderPreferences } from '@/app/providers/useReaderPreferences';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import { useDocumentVisible } from '@/visualization/core/useInViewport';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  /** Radians per second of the brightness oscillation. */
  twinkleRate: number;
  phase: number;
}

/**
 * Ambient background.
 *
 * DECORATIVE. This is atmosphere, not data: the star positions are random and
 * the twinkling is a visual effect, not stellar variability. It is deliberately
 * kept out of the visualization registry so it can never be mistaken for — or
 * cited as — a scientific figure, and it is marked `aria-hidden` by its
 * container in `AppShell`.
 *
 * Its real job in the architecture is to prove the performance contract:
 * canvas sized to a capped pixel ratio, particle count from the quality budget,
 * frame loop gated on tab visibility, and no work at all under reduced motion.
 */
export function StarfieldBackground(): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  const { quality, reducedMotion } = useReaderPreferences();
  const documentVisible = useDocumentVisible();
  const budget = QUALITY_BUDGETS[quality];

  // Half the ambient budget: this is background texture, and the rest of the
  // allowance belongs to whatever explanatory figure is on screen.
  const starCount = Math.round(budget.maxParticles * 0.5);

  // Size the backing store, then lay out stars for the new dimensions.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = (): void => {
      const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr * budget.resolutionScale);
      canvas.height = Math.round(height * dpr * budget.resolutionScale);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      sizeRef.current = { width: canvas.width, height: canvas.height, dpr };

      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Weighted towards small: a sky of equal-sized dots reads as noise.
        radius: (0.4 + Math.random() ** 3 * 1.6) * dpr,
        // Kept low: body copy sits over this, and a bright field costs
        // legibility for atmosphere that should be felt, not read.
        baseAlpha: 0.14 + Math.random() * 0.38,
        twinkleRate: 0.15 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener('resize', resize);
    // Orientation change on iOS fires before the new viewport size settles.
    window.addEventListener('orientationchange', resize);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('orientationchange', resize);
    };
  }, [starCount, budget.maxPixelRatio, budget.resolutionScale]);

  const draw = (elapsed: number, animate: boolean): void => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !context) return;

    const { width, height } = sizeRef.current;
    context.clearRect(0, 0, width, height);

    for (const star of starsRef.current) {
      const twinkle = animate ? 0.85 + 0.15 * Math.sin(elapsed * star.twinkleRate + star.phase) : 1;
      context.globalAlpha = star.baseAlpha * twinkle;
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fillStyle = '#f2f5fc';
      context.fill();
    }
    context.globalAlpha = 1;
  };

  const animating = budget.ambientMotion && !reducedMotion && documentVisible;

  useAnimationFrame(
    (_delta, elapsed) => draw(elapsed, true),
    animating,
    // Ambient motion never needs 60fps; halving it halves its power cost.
    Math.min(budget.targetFps, 30),
  );

  // A single static paint when motion is off, so the sky is still there.
  useEffect(() => {
    // `draw` reads only refs, so re-running it on these inputs is sufficient.
    if (!animating) draw(0, false);
  }, [animating, starCount, quality]);

  return <canvas ref={canvasRef} />;
}
