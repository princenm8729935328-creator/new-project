/**
 * The cosmic time axis.
 *
 * The hardest honest problem in this whole feature. The timeline spans about 60
 * orders of magnitude, and no single scale works across it:
 *
 *   - A LINEAR axis is the only truthful one, and it is useless: everything
 *     from the first stars to the present is a hairline, and all of human
 *     existence is thinner than a rendered pixel.
 *   - LOG of time-since-the-beginning spreads the first second beautifully and
 *     crushes the last four billion years into 0.3% of the axis.
 *   - LOG of look-back time does the exact opposite.
 *
 * So the axis is deliberately WARPED, and the interface says so out loud rather
 * than letting the reader assume a scale that is not there. Two mechanisms keep
 * that honest:
 *
 *   1. `TrueScaleBar` renders the same journey on a genuinely linear axis, so
 *      the compression is visible rather than hidden.
 *   2. Every milestone states its real date in words.
 *
 * The warp is built in two stages. `timelineKey` maps a cosmic time onto a
 * single monotone coordinate that is numerically well-behaved at both ends;
 * `axisPosition` then redistributes that coordinate across the 0–1 axis so each
 * era gets enough room to be readable.
 */
import {
  SECONDS_PER_YEAR,
  UNIVERSE_AGE_SECONDS,
  UNIVERSE_AGE_YEARS,
  type CosmicTime,
} from '@/content/schema/cosmicTime';

/**
 * Where the coordinate switches basis: about half the age of the Universe.
 * Before it, resolution comes from time since the beginning; after it, from
 * look-back time. Switching near the midpoint means neither end suffers the
 * catastrophic loss of resolution that either basis alone would cause.
 */
const SWITCH_SECONDS = UNIVERSE_AGE_SECONDS * 0.5;

/**
 * Floor on look-back time, in years. Without it the last few decades would
 * consume a quarter of the axis, since log(0) diverges. A thousand years is
 * about the resolution this timeline is built for.
 */
const LOOKBACK_FLOOR_YEARS = 1000;

const SWITCH_KEY = Math.log10(SWITCH_SECONDS);
const SWITCH_LOOKBACK_YEARS = UNIVERSE_AGE_YEARS - SWITCH_SECONDS / SECONDS_PER_YEAR;
const KEY_OFFSET = SWITCH_KEY + Math.log10(SWITCH_LOOKBACK_YEARS);

/** Largest key value, reached at the present day. */
export const MAX_KEY = KEY_OFFSET - Math.log10(LOOKBACK_FLOOR_YEARS);
/** Smallest key value the axis handles: the Planck time. */
export const MIN_KEY = -43;

/**
 * A monotone, continuous coordinate over the whole of cosmic time.
 *
 * Continuity at the switch is exact by construction: `KEY_OFFSET` is defined as
 * whatever makes the two branches agree there.
 */
export function timelineKey(seconds: number): number {
  if (seconds <= 0) return MIN_KEY;
  if (seconds < SWITCH_SECONDS) {
    return Math.max(MIN_KEY, Math.log10(seconds));
  }
  const lookbackYears = Math.max(
    LOOKBACK_FLOOR_YEARS,
    UNIVERSE_AGE_YEARS - seconds / SECONDS_PER_YEAR,
  );
  return Math.min(MAX_KEY, KEY_OFFSET - Math.log10(lookbackYears));
}

/**
 * Warp anchors: (key, axis position). Between anchors the mapping is linear, so
 * the whole function is a monotone piecewise-linear redistribution.
 *
 * The positions are an editorial choice about how much of the reader's screen
 * each stretch of history deserves — which is exactly the kind of choice that
 * has to be disclosed rather than disguised.
 */
const ANCHORS: ReadonlyArray<readonly [key: number, position: number]> = [
  [MIN_KEY, 0], // the Planck time
  [-34, 0.04], // inflation
  [-6, 0.09], // the particle era
  [2.3, 0.14], // nucleosynthesis
  [13.08, 0.2], // recombination
  [15.63, 0.26], // the first stars
  [16.1, 0.31], // the first galaxies
  [SWITCH_KEY, 0.37], // ~6.9 billion years in
  [17.52, 0.44], // the Solar System
  [17.61, 0.5], // earliest life
  [17.8, 0.56], // the Great Oxidation Event
  [18.18, 0.62], // complex life
  [18.45, 0.69], // the Cambrian
  [19.36, 0.76], // the K-Pg extinction
  [20.33, 0.83], // the hominin divergence
  [21.7, 0.9], // Homo sapiens
  [23.14, 0.96], // agriculture
  [MAX_KEY, 1], // now
];

/** Maps a key onto the 0–1 axis. Monotone, continuous, clamped at both ends. */
export function axisPosition(key: number): number {
  const first = ANCHORS[0];
  const last = ANCHORS[ANCHORS.length - 1];
  if (!first || !last) return 0;
  if (key <= first[0]) return first[1];
  if (key >= last[0]) return last[1];

  for (let i = 0; i < ANCHORS.length - 1; i += 1) {
    const a = ANCHORS[i];
    const b = ANCHORS[i + 1];
    if (!a || !b) break;
    if (key <= b[0]) {
      const span = b[0] - a[0];
      const t = span === 0 ? 0 : (key - a[0]) / span;
      return a[1] + t * (b[1] - a[1]);
    }
  }
  return last[1];
}

/** Inverse of `axisPosition`, used to turn a scroll offset back into a time. */
export function positionToKey(position: number): number {
  const first = ANCHORS[0];
  const last = ANCHORS[ANCHORS.length - 1];
  if (!first || !last) return MIN_KEY;
  if (position <= first[1]) return first[0];
  if (position >= last[1]) return last[0];

  for (let i = 0; i < ANCHORS.length - 1; i += 1) {
    const a = ANCHORS[i];
    const b = ANCHORS[i + 1];
    if (!a || !b) break;
    if (position <= b[1]) {
      const span = b[1] - a[1];
      const t = span === 0 ? 0 : (position - a[1]) / span;
      return a[0] + t * (b[0] - a[0]);
    }
  }
  return last[0];
}

/** Seconds since the beginning for a key. Inverts `timelineKey`. */
export function keyToSeconds(key: number): number {
  if (key < SWITCH_KEY) return 10 ** key;
  const lookbackYears = 10 ** (KEY_OFFSET - key);
  return (UNIVERSE_AGE_YEARS - lookbackYears) * SECONDS_PER_YEAR;
}

/** Axis position of a stored cosmic time. The function the whole UI runs on. */
export function positionOf(time: CosmicTime): number {
  return axisPosition(timelineKey(time.seconds));
}

/** Seconds since the beginning at an axis position. */
export function secondsAtPosition(position: number): number {
  return keyToSeconds(positionToKey(position));
}

/**
 * Fraction of the LINEAR 13.8-billion-year timeline that has elapsed at this
 * axis position. This is the honest number, and it is what `TrueScaleBar`
 * draws: at the Cambrian it is already 0.96, and the whole of human existence
 * is the final 0.002.
 */
export function trueScaleFraction(position: number): number {
  const seconds = secondsAtPosition(position);
  return Math.min(1, Math.max(0, seconds / UNIVERSE_AGE_SECONDS));
}

/**
 * Nudges pins apart so that genuinely near-simultaneous milestones stay
 * separately tappable.
 *
 * Some milestones really are almost coincident on any scale — the Solar System
 * and the Earth formed 28 million years apart, which is 0.2% of cosmic history.
 * Rather than distorting the axis to manufacture space, the pins are displaced
 * for display only. The displacement is bounded and small, the ordering is
 * preserved exactly, and every milestone states its real date in words, so
 * nothing about the actual chronology is misrepresented.
 *
 * @param positions true axis positions, ascending
 * @param minGap    smallest separation that stays tappable at the current width
 */
export function layoutPins(positions: readonly number[], minGap: number): number[] {
  const laid = [...positions];

  // Forward pass: push each pin far enough past its predecessor.
  for (let i = 1; i < laid.length; i += 1) {
    const previous = laid[i - 1]!;
    if (laid[i]! - previous < minGap) laid[i] = previous + minGap;
  }

  // Backward pass: if that pushed the last pins past the end of the axis, pull
  // the whole run back inside it.
  for (let i = laid.length - 1; i > 0; i -= 1) {
    if (laid[i]! > 1) laid[i] = 1 - (laid.length - 1 - i) * minGap;
    const next = laid[i]!;
    if (next - laid[i - 1]! < minGap) laid[i - 1] = next - minGap;
  }

  return laid.map((position) => Math.min(1, Math.max(0, position)));
}

/**
 * How much the axis is stretched here, relative to a linear scale — the
 * magnification factor quoted in the compression note. At the Planck epoch it
 * is astronomically large; near the present it is around 10⁵.
 */
export function compressionFactorAt(position: number): number {
  const delta = 0.005;
  const a = trueScaleFraction(Math.max(0, position - delta));
  const b = trueScaleFraction(Math.min(1, position + delta));
  const linearSpan = b - a;
  const axisSpan = Math.min(1, position + delta) - Math.max(0, position - delta);
  if (linearSpan <= 0) return Infinity;
  return axisSpan / linearSpan;
}
