/**
 * Device quality tiers.
 *
 * Every visualization is written against a tier rather than against a device.
 * The tier is resolved once, at startup, from cheap signals — no benchmark loop,
 * because a benchmark on a cold phone is itself a jank source.
 *
 * Renderers must treat the tier as a budget: particle counts, resolution scale,
 * and whether a physics step runs at all are all derived from it.
 * See PROJECT_PLAN.md § Performance strategy.
 */

export const QUALITY_TIERS = ['low', 'medium', 'high'] as const;
export type QualityTier = (typeof QUALITY_TIERS)[number];

export interface QualityBudget {
  readonly tier: QualityTier;
  /** Upper bound on particles/instances a background or scene may draw. */
  readonly maxParticles: number;
  /** Multiplier applied to devicePixelRatio when sizing a canvas. */
  readonly resolutionScale: number;
  /** Cap on the device pixel ratio itself; 3x on a phone is wasted fill rate. */
  readonly maxPixelRatio: number;
  /** Target frame rate. Renderers throttle to this rather than free-running. */
  readonly targetFps: number;
  /** Whether ambient, non-explanatory motion is allowed at all. */
  readonly ambientMotion: boolean;
}

export const QUALITY_BUDGETS: Readonly<Record<QualityTier, QualityBudget>> = {
  low: {
    tier: 'low',
    maxParticles: 150,
    resolutionScale: 0.75,
    maxPixelRatio: 1.5,
    targetFps: 30,
    ambientMotion: false,
  },
  medium: {
    tier: 'medium',
    maxParticles: 600,
    resolutionScale: 1,
    maxPixelRatio: 2,
    targetFps: 60,
    ambientMotion: true,
  },
  high: {
    tier: 'high',
    maxParticles: 2000,
    resolutionScale: 1,
    maxPixelRatio: 2,
    targetFps: 60,
    ambientMotion: true,
  },
};

interface DeviceSignals {
  readonly hardwareConcurrency?: number | undefined;
  /** Chrome-only; absent elsewhere, which is why it only ever downgrades. */
  readonly deviceMemory?: number | undefined;
  readonly prefersReducedMotion: boolean;
  readonly saveData: boolean;
  readonly coarsePointer: boolean;
}

export function readDeviceSignals(): DeviceSignals {
  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean };
  };
  return {
    hardwareConcurrency: nav.hardwareConcurrency,
    deviceMemory: nav.deviceMemory,
    prefersReducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
    saveData: nav.connection?.saveData === true,
    coarsePointer: matchMedia('(pointer: coarse)').matches,
  };
}

/**
 * Pure so it can be unit-tested against synthetic devices.
 *
 * Conservative on purpose: a mid-range phone should land on `medium` and stay
 * smooth, not land on `high` and drop frames. Readers can raise the tier by
 * hand in settings; nothing auto-upgrades mid-session.
 */
export function resolveQualityTier(signals: DeviceSignals): QualityTier {
  if (signals.prefersReducedMotion || signals.saveData) return 'low';

  const cores = signals.hardwareConcurrency ?? 4;
  const memory = signals.deviceMemory;

  if (memory !== undefined && memory <= 2) return 'low';
  if (cores <= 2) return 'low';

  if (memory !== undefined && memory <= 4) return 'medium';
  if (signals.coarsePointer && cores <= 6) return 'medium';
  if (cores <= 4) return 'medium';

  return 'high';
}

export function isQualityTier(value: unknown): value is QualityTier {
  return typeof value === 'string' && (QUALITY_TIERS as readonly string[]).includes(value);
}

/** True when `tier` meets or exceeds `minimum`. */
export function meetsQuality(tier: QualityTier, minimum: QualityTier): boolean {
  return QUALITY_TIERS.indexOf(tier) >= QUALITY_TIERS.indexOf(minimum);
}
