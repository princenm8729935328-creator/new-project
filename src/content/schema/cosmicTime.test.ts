import { describe, expect, it } from 'vitest';
import { cosmicTime, cosmicTimeFromYears, formatCosmicTime } from './cosmicTime';

describe('cosmicTime', () => {
  it('precomputes the log coordinate the timeline scrolls on', () => {
    expect(cosmicTime(1000, 'modelled').logSeconds).toBeCloseTo(3);
  });

  it('converts years without losing the precision flag', () => {
    const time = cosmicTimeFromYears(1e9, 'measured');
    expect(time.seconds).toBeCloseTo(3.15576e16, -10);
    expect(time.precision).toBe('measured');
  });
});

describe('formatCosmicTime', () => {
  it('prefers an authored phrasing over any formatter', () => {
    expect(formatCosmicTime(cosmicTime(1, 'modelled', 'the first second'))).toBe(
      'the first second',
    );
  });

  it('picks a unit that keeps the number readable across the whole span', () => {
    expect(formatCosmicTime(cosmicTime(1e-6, 'modelled'))).toContain('µs');
    expect(formatCosmicTime(cosmicTime(120, 'modelled'))).toContain('minutes');
    expect(formatCosmicTime(cosmicTimeFromYears(380_000, 'measured'))).toContain('thousand years');
    expect(formatCosmicTime(cosmicTimeFromYears(9.2e9, 'measured'))).toContain('billion years');
  });
});
