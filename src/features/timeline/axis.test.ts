import { describe, expect, it } from 'vitest';
import {
  MAX_KEY,
  MIN_KEY,
  axisPosition,
  compressionFactorAt,
  keyToSeconds,
  layoutPins,
  positionOf,
  positionToKey,
  timelineKey,
  trueScaleFraction,
} from './axis';
import { TIMELINE_EVENTS } from '@/content/timeline';
import { UNIVERSE_AGE_SECONDS } from '@/content/schema/cosmicTime';

describe('timelineKey', () => {
  it('is monotone increasing across the whole of cosmic time', () => {
    const samples = [
      1e-43,
      1e-36,
      1e-12,
      1,
      200,
      1.2e13,
      1e15,
      1e16,
      1e17,
      2e17,
      3e17,
      4e17,
      UNIVERSE_AGE_SECONDS * 0.999,
      UNIVERSE_AGE_SECONDS,
    ];
    const keys = samples.map(timelineKey);
    for (let i = 1; i < keys.length; i += 1) {
      expect(keys[i]!, `not monotone at sample ${i} (${samples[i]} s)`).toBeGreaterThan(
        keys[i - 1]!,
      );
    }
  });

  it('is continuous where it switches from elapsed time to look-back time', () => {
    const switchSeconds = UNIVERSE_AGE_SECONDS * 0.5;
    const just_before = timelineKey(switchSeconds * (1 - 1e-9));
    const just_after = timelineKey(switchSeconds * (1 + 1e-9));
    expect(Math.abs(just_after - just_before)).toBeLessThan(1e-6);
  });

  it('clamps rather than diverging at both extremes', () => {
    expect(timelineKey(0)).toBe(MIN_KEY);
    expect(timelineKey(-1)).toBe(MIN_KEY);
    expect(timelineKey(UNIVERSE_AGE_SECONDS)).toBeCloseTo(MAX_KEY, 6);
  });
});

describe('axisPosition', () => {
  it('spans the full 0–1 range', () => {
    expect(axisPosition(MIN_KEY)).toBe(0);
    expect(axisPosition(MAX_KEY)).toBe(1);
  });

  it('is monotone', () => {
    let previous = -1;
    for (let key = MIN_KEY; key <= MAX_KEY; key += 0.5) {
      const position = axisPosition(key);
      expect(position).toBeGreaterThanOrEqual(previous);
      previous = position;
    }
  });

  it('round-trips through positionToKey', () => {
    for (let key = MIN_KEY; key <= MAX_KEY; key += 1.7) {
      expect(positionToKey(axisPosition(key))).toBeCloseTo(key, 6);
    }
  });
});

describe('keyToSeconds', () => {
  it('inverts timelineKey', () => {
    const samples = [1e-40, 1e-20, 1, 1e10, 1.2e13, 1e16, 3e17, 4.3e17];
    for (const seconds of samples) {
      expect(keyToSeconds(timelineKey(seconds))).toBeCloseTo(seconds, -Math.log10(seconds) + 6);
    }
  });
});

describe('milestone placement', () => {
  it('places every milestone inside the axis', () => {
    for (const event of TIMELINE_EVENTS) {
      const position = positionOf(event.time);
      expect(position, event.slug).toBeGreaterThanOrEqual(0);
      expect(position, event.slug).toBeLessThanOrEqual(1);
    }
  });

  it('orders milestones on the axis the same way they are ordered in time', () => {
    const positions = TIMELINE_EVENTS.map((event) => positionOf(event.time));
    for (let i = 1; i < positions.length; i += 1) {
      expect(
        positions[i]!,
        `${TIMELINE_EVENTS[i]!.slug} is not after ${TIMELINE_EVENTS[i - 1]!.slug}`,
      ).toBeGreaterThanOrEqual(positions[i - 1]!);
    }
  });

  it('keeps every milestone strictly after the one before it', () => {
    const positions = TIMELINE_EVENTS.map((event) => positionOf(event.time));
    for (let i = 1; i < positions.length; i += 1) {
      expect(
        positions[i]!,
        `${TIMELINE_EVENTS[i]!.slug} collides with ${TIMELINE_EVENTS[i - 1]!.slug}`,
      ).toBeGreaterThan(positions[i - 1]!);
    }
  });
});

describe('layoutPins', () => {
  it('leaves well-separated pins exactly where they are', () => {
    expect(layoutPins([0.1, 0.4, 0.9], 0.01)).toEqual([0.1, 0.4, 0.9]);
  });

  it('separates near-simultaneous milestones enough to be tappable', () => {
    const positions = TIMELINE_EVENTS.map((event) => positionOf(event.time));
    const laid = layoutPins(positions, 0.012);
    for (let i = 1; i < laid.length; i += 1) {
      expect(
        laid[i]! - laid[i - 1]!,
        `${TIMELINE_EVENTS[i - 1]!.slug} → ${TIMELINE_EVENTS[i]!.slug}`,
      ).toBeGreaterThanOrEqual(0.012 - 1e-9);
    }
  });

  it('preserves order and stays inside the axis', () => {
    const laid = layoutPins(
      TIMELINE_EVENTS.map((event) => positionOf(event.time)),
      0.012,
    );
    for (let i = 1; i < laid.length; i += 1) {
      expect(laid[i]!).toBeGreaterThan(laid[i - 1]!);
    }
    expect(Math.min(...laid)).toBeGreaterThanOrEqual(0);
    expect(Math.max(...laid)).toBeLessThanOrEqual(1);
  });

  it('does not move any pin far from its true position', () => {
    const positions = TIMELINE_EVENTS.map((event) => positionOf(event.time));
    const laid = layoutPins(positions, 0.012);
    for (let i = 0; i < laid.length; i += 1) {
      // A displacement budget: enough to de-collide, not enough to mislead.
      expect(Math.abs(laid[i]! - positions[i]!), TIMELINE_EVENTS[i]!.slug).toBeLessThan(0.05);
    }
  });
});

describe('trueScaleFraction', () => {
  it('shows how brutally the axis compresses deep time', () => {
    // Half the readable axis is spent on the first fraction of a percent of
    // real elapsed time. This assertion is the honesty check: if it ever fails,
    // the compression note in the UI has stopped being true.
    expect(trueScaleFraction(0.5)).toBeLessThan(0.75);
    expect(trueScaleFraction(1)).toBeCloseTo(1, 5);
    expect(trueScaleFraction(0)).toBeCloseTo(0, 6);
  });

  it('is monotone', () => {
    let previous = -1;
    for (let p = 0; p <= 1; p += 0.02) {
      const fraction = trueScaleFraction(p);
      expect(fraction).toBeGreaterThanOrEqual(previous - 1e-12);
      previous = fraction;
    }
  });
});

describe('compressionFactorAt', () => {
  it('reports a large magnification near the present, where compression is worst', () => {
    expect(compressionFactorAt(0.97)).toBeGreaterThan(100);
  });
});
