import { describe, expect, it } from 'vitest';
import { resolveDepthText } from './depth';

describe('resolveDepthText', () => {
  const text = {
    essential: 'Gravity pulls things together.',
    technical: 'Curvature couples to the stress-energy tensor.',
  };

  it('returns the exact level when it exists', () => {
    expect(resolveDepthText(text, 'essential')).toBe(text.essential);
    expect(resolveDepthText(text, 'technical')).toBe(text.technical);
  });

  it('falls back to the nearest shallower level rather than rendering nothing', () => {
    expect(resolveDepthText(text, 'detailed')).toBe(text.essential);
  });
});
