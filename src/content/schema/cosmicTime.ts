/**
 * Cosmic time.
 *
 * The timeline spans ~10^-43 s to ~10^18 s. No linear axis survives that, and
 * no single unit reads well across it, so time is stored once — in seconds
 * since the start of the expansion — and formatted for display.
 *
 * `logSeconds` (log10 of that value) is the coordinate the timeline actually
 * scrolls on. It is stored explicitly rather than derived at render time so the
 * timeline never computes a logarithm inside an animation frame.
 */

export interface CosmicTime {
  /** Seconds after the beginning of the expansion. */
  readonly seconds: number;
  /** log10(seconds). Precomputed; see `cosmicTime()`. */
  readonly logSeconds: number;
  /**
   * How well this moment is pinned down. Early-universe times come from theory
   * far more than from observation, and the timeline must say so.
   */
  readonly precision: 'measured' | 'modelled' | 'approximate';
  /** Optional human phrasing that beats any formatter, e.g. "the first second". */
  readonly display?: string;
}

export const SECONDS_PER_YEAR = 31_557_600; // Julian year, the IAU convention.

/**
 * Age of the Universe in years: 13.797 ± 0.023 Gyr, Planck 2018 base-ΛCDM.
 *
 * Everything dated "years ago" is converted through this constant, so a revised
 * measurement moves the whole timeline consistently instead of leaving some
 * events on an old value.
 */
export const UNIVERSE_AGE_YEARS = 13.797e9;
export const UNIVERSE_AGE_SECONDS = UNIVERSE_AGE_YEARS * SECONDS_PER_YEAR;

export function cosmicTime(
  seconds: number,
  precision: CosmicTime['precision'],
  display?: string,
): CosmicTime {
  const base: CosmicTime = {
    seconds,
    logSeconds: Math.log10(seconds),
    precision,
  };
  return display === undefined ? base : { ...base, display };
}

/** Convenience for events dated in years after the beginning. */
export function cosmicTimeFromYears(
  years: number,
  precision: CosmicTime['precision'],
  display?: string,
): CosmicTime {
  return cosmicTime(years * SECONDS_PER_YEAR, precision, display);
}

/**
 * Convenience for everything dated by looking backwards — which is nearly all
 * of geology, palaeontology and archaeology. Stores the same `seconds since the
 * beginning` as every other event, so one axis carries them all.
 */
export function cosmicTimeFromYearsAgo(
  years: number,
  precision: CosmicTime['precision'],
  display?: string,
): CosmicTime {
  return cosmicTime((UNIVERSE_AGE_YEARS - years) * SECONDS_PER_YEAR, precision, display);
}

/** Years before the present for a stored cosmic time. */
export function yearsBeforePresent(time: CosmicTime): number {
  return UNIVERSE_AGE_YEARS - time.seconds / SECONDS_PER_YEAR;
}

/**
 * "4.57 billion years ago", "12,000 years ago" — how a reader actually thinks
 * about anything after the first stars.
 */
export function formatYearsAgo(years: number): string {
  if (years <= 0) return 'today';
  if (years >= 1e9) return `${(years / 1e9).toPrecision(3)} billion years ago`;
  if (years >= 1e6) return `${(years / 1e6).toPrecision(3)} million years ago`;
  if (years >= 1e4) return `${Math.round(years / 1e3)},000 years ago`;
  if (years >= 1e3) return `${Math.round(years / 100) / 10} thousand years ago`;
  return `${Math.round(years)} years ago`;
}

/**
 * Formats a cosmic time using the largest unit that keeps the number readable.
 * Deliberately coarse: the timeline is a scale, not a stopwatch.
 */
export function formatCosmicTime(time: CosmicTime): string {
  if (time.display) return time.display;

  const s = time.seconds;
  if (s < 1e-12) return `${s.toExponential(0)} s`;
  if (s < 1e-9) return `${(s * 1e12).toPrecision(2)} ps`;
  if (s < 1e-6) return `${(s * 1e9).toPrecision(2)} ns`;
  if (s < 1e-3) return `${(s * 1e6).toPrecision(2)} µs`;
  if (s < 1) return `${(s * 1e3).toPrecision(2)} ms`;
  if (s < 60) return `${s.toPrecision(2)} s`;
  if (s < 3600) return `${(s / 60).toPrecision(2)} minutes`;
  if (s < 86_400) return `${(s / 3600).toPrecision(2)} hours`;

  const years = s / SECONDS_PER_YEAR;
  if (years < 1e3) return `${years.toPrecision(3)} years`;
  if (years < 1e6) return `${(years / 1e3).toPrecision(3)} thousand years`;
  if (years < 1e9) return `${(years / 1e6).toPrecision(3)} million years`;
  return `${(years / 1e9).toPrecision(3)} billion years`;
}

/** Years before the present, given the age of the Universe in years. */
export function yearsAgo(time: CosmicTime, universeAgeYears: number): number {
  return universeAgeYears - time.seconds / SECONDS_PER_YEAR;
}
