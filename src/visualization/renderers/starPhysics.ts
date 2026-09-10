/**
 * Shared stellar arithmetic for the Stars & Galaxies figures.
 *
 * Several figures in this section need the same two relationships — how bright
 * a star of a given mass is, and how long it therefore lives — and they must
 * agree with each other. A reader who reads the lifetime off one chart and the
 * luminosity off another would notice immediately if the two were computed
 * from different fits, so they are computed here once.
 *
 * These are the standard broken-power-law approximations to the main-sequence
 * mass–luminosity relation, not a stellar structure integration. They are
 * accurate to roughly a factor of two across the range, which is enough for
 * figures whose point is that the scaling is steep.
 */

/** Main-sequence luminosity in solar units, for a mass in solar units. */
export function luminosityOf(mass: number): number {
  if (mass < 0.43) return 0.23 * mass ** 2.3;
  if (mass < 2) return mass ** 4;
  if (mass < 55) return 1.4 * mass ** 3.5;
  return 32000 * mass;
}

/**
 * Main-sequence lifetime in years.
 *
 * The Sun's roughly ten-billion-year hydrogen-burning lifetime is the anchor;
 * every other star is scaled from it by fuel available over fuel burn rate,
 * which is mass over luminosity.
 */
export function lifetimeOf(mass: number): number {
  return 1e10 * (mass / luminosityOf(mass));
}

/** Age of the Universe, years — the line most stars have never crossed. */
export const UNIVERSE_AGE_YR = 13.8e9;

/** Formats a number of years the way a reader can actually take in. */
export function formatYears(years: number): string {
  if (years >= 1e12) return `${(years / 1e12).toPrecision(3)} trillion yr`;
  if (years >= 1e9) return `${(years / 1e9).toPrecision(3)} billion yr`;
  if (years >= 1e6) return `${(years / 1e6).toPrecision(3)} million yr`;
  return `${Math.round(years).toLocaleString()} yr`;
}
