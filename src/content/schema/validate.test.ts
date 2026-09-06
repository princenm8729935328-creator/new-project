import { describe, expect, it } from 'vitest';
import { validateBlock } from './validate';
import { referenceId } from './reference';
import type { ClaimBlock, OpenQuestionBlock, QuantityBlock } from './blocks';

const source = referenceId('planck-2018-vi');

describe('validateBlock', () => {
  it('rejects an established claim with no source', () => {
    const block: ClaimBlock = {
      id: 'c1',
      kind: 'claim',
      statement: { essential: 'The Universe is expanding.' },
      evidence: 'established',
      references: [],
    };
    expect(validateBlock(block, 'test')).toHaveLength(1);
  });

  it('accepts an established claim with a source', () => {
    const block: ClaimBlock = {
      id: 'c2',
      kind: 'claim',
      statement: { essential: 'The Universe is expanding.' },
      evidence: 'established',
      references: [source],
    };
    expect(validateBlock(block, 'test')).toEqual([]);
  });

  it('requires speculation to say what would test it', () => {
    const withoutNote: ClaimBlock = {
      id: 'c3',
      kind: 'claim',
      statement: { essential: 'Our Universe may be one of many.' },
      evidence: 'speculation',
      references: [],
    };
    expect(validateBlock(withoutNote, 'test')).toHaveLength(1);

    const withNote: ClaimBlock = {
      ...withoutNote,
      speculationNote: 'No observation currently distinguishes this from a single universe.',
    };
    expect(validateBlock(withNote, 'test')).toEqual([]);
  });

  it('requires an open question to cite the work that leaves it open', () => {
    const block: OpenQuestionBlock = {
      id: 'q1',
      kind: 'open-question',
      question: 'What is dark matter made of?',
      whyItMatters: { essential: 'It is most of the matter in the Universe.' },
      whatWouldSettleIt: { essential: 'A direct detection, reproduced independently.' },
      references: [],
    };
    expect(validateBlock(block, 'test')).toHaveLength(1);
  });

  it('warns when a measured value carries no uncertainty', () => {
    const block: QuantityBlock = {
      id: 'v1',
      kind: 'quantity',
      quantities: [
        {
          id: 'age',
          label: 'Age of the Universe',
          value: 13.797,
          unit: 'Gyr',
          references: [source],
        },
      ],
    };
    const issues = validateBlock(block, 'test');
    expect(issues).toHaveLength(1);
    expect(issues[0]?.severity).toBe('warning');
  });

  it('accepts a value with an uncertainty and a source', () => {
    const block: QuantityBlock = {
      id: 'v2',
      kind: 'quantity',
      quantities: [
        {
          id: 'age',
          label: 'Age of the Universe',
          value: 13.797,
          unit: 'Gyr',
          uncertainty: { plusMinus: 0.023 },
          references: [source],
        },
      ],
    };
    expect(validateBlock(block, 'test')).toEqual([]);
  });
});
