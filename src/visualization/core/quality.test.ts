import { describe, expect, it } from 'vitest';
import { meetsQuality, resolveQualityTier } from './quality';

const base = {
  prefersReducedMotion: false,
  saveData: false,
  coarsePointer: false,
};

describe('resolveQualityTier', () => {
  it('drops to low when the reader has asked for reduced motion', () => {
    expect(
      resolveQualityTier({ ...base, prefersReducedMotion: true, hardwareConcurrency: 16 }),
    ).toBe('low');
  });

  it('respects Save-Data', () => {
    expect(resolveQualityTier({ ...base, saveData: true, hardwareConcurrency: 16 })).toBe('low');
  });

  it('treats a low-memory or low-core device as low', () => {
    expect(resolveQualityTier({ ...base, deviceMemory: 2, hardwareConcurrency: 8 })).toBe('low');
    expect(resolveQualityTier({ ...base, hardwareConcurrency: 2 })).toBe('low');
  });

  it('puts a mid-range phone on medium rather than high', () => {
    expect(
      resolveQualityTier({ ...base, coarsePointer: true, hardwareConcurrency: 6, deviceMemory: 8 }),
    ).toBe('medium');
  });

  it('reaches high only on a capable pointer device', () => {
    expect(resolveQualityTier({ ...base, hardwareConcurrency: 12, deviceMemory: 16 })).toBe('high');
  });

  it('defaults to medium when the browser reports nothing', () => {
    expect(resolveQualityTier(base)).toBe('medium');
  });
});

describe('meetsQuality', () => {
  it('orders the tiers', () => {
    expect(meetsQuality('high', 'medium')).toBe(true);
    expect(meetsQuality('medium', 'medium')).toBe(true);
    expect(meetsQuality('low', 'medium')).toBe(false);
  });
});
