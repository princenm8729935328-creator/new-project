import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { getSectionBySlug } from '@/content/sections';
import { getTopicsForLens } from '@/content/topics';
import { RECAPS } from '@/content/recaps';
import { getReference } from '@/content/references';
import { getGlossaryTerm } from '@/content/glossary';
import { getVisualization } from '@/visualization/registry';
import {
  correctOption,
  RECAP_MAX_OPTIONS,
  RECAP_MAX_QUESTIONS,
  RECAP_MIN_OPTIONS,
  RECAP_MIN_QUESTIONS,
} from '@/content/schema/recap';
import { LENS_META } from '@/content/schema/lens';
import type { Topic } from '@/content/schema/topic';
import TopicPage from './TopicPage';

/**
 * Tests for the Philosophical Lens.
 *
 * A test suite for philosophy content cannot check that the conclusions are
 * correct — there are no agreed conclusions, and a test asserting one would be
 * encoding an opinion as a requirement. What it can check is everything the
 * lens promised about *how* it would present the material:
 *
 *   · that the structure is intact and separate from the other lens,
 *   · that every attribution carries a citation,
 *   · that the corrections the brief named are actually present in the text,
 *   · and — most importantly — that the questions the brief said must stay
 *     open are not quietly closed in the narration.
 *
 * That last group is the reason this file exists. It is easy to write a topic
 * that presents a dispute fairly and then settles it in a concluding sentence,
 * and a reviewer reading fifty-six topics will not reliably catch it.
 */

const SECTION = getSectionBySlug('human-evolution');
const PHILOSOPHICAL: readonly Topic[] = SECTION
  ? getTopicsForLens(SECTION.id, 'philosophical')
  : [];

function renderTopic(slug: string) {
  return render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={[`/human-evolution/${slug}`]}>
        <Routes>
          <Route path=":sectionSlug/:topicSlug" element={<TopicPage />} />
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

const textOf = (topic: Topic): string => JSON.stringify(topic).toLowerCase();
const allText = PHILOSOPHICAL.map(textOf).join(' ');
const find = (slug: string): Topic | undefined => PHILOSOPHICAL.find((t) => t.slug === slug);

describe('the Philosophical Lens curriculum', () => {
  it('is substantial, contiguous and entirely philosophical', () => {
    expect(PHILOSOPHICAL.length).toBeGreaterThanOrEqual(50);
    expect(PHILOSOPHICAL.every((t) => t.lens === 'philosophical')).toBe(true);
    expect(PHILOSOPHICAL.every((t) => t.status === 'published')).toBe(true);
    // Its own contiguous range, starting where the scientific list cannot reach.
    const orders = PHILOSOPHICAL.map((t) => t.order);
    expect(orders[0]).toBe(101);
    expect(orders).toEqual(orders.map((_, i) => 101 + i));
  });

  it('has unique slugs and ids', () => {
    expect(new Set(PHILOSOPHICAL.map((t) => t.slug)).size).toBe(PHILOSOPHICAL.length);
    expect(new Set(PHILOSOPHICAL.map((t) => t.id)).size).toBe(PHILOSOPHICAL.length);
  });

  it('runs the twelve movements in the order the journey requires', () => {
    const slugs = PHILOSOPHICAL.map((t) => t.slug);
    const expectedOrder = [
      'does-the-world-look-the-way-it-is',
      'what-makes-you-the-same-person',
      'did-i-choose-who-i-became',
      'the-feeling-of-choosing',
      'where-does-wrong-come-from',
      'humes-gap',
      'am-i-a-good-person',
      'why-do-we-punish',
      'responsibility-without-self-creation',
      'the-thing-you-cannot-doubt',
      'why-am-i-this-person',
      'does-life-have-a-meaning',
      'how-should-a-human-being-live',
      'what-you-are-left-holding',
    ];
    const positions = expectedOrder.map((slug) => slugs.indexOf(slug));
    expect(positions.every((p) => p >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
    expect(slugs[slugs.length - 1]).toBe('what-you-are-left-holding');
  });

  it('marks the lens published now that it has content', () => {
    expect(LENS_META.philosophical.status).toBe('published');
    expect(LENS_META.philosophical.question).toBe('What does it mean to be human?');
  });
});

describe('citation discipline in the Philosophical Lens', () => {
  const blocks = PHILOSOPHICAL.flatMap((t) => t.blocks.map((b) => ({ topic: t.slug, block: b })));

  it('cites a text or a survey for every attribution', () => {
    for (const { topic, block } of blocks) {
      if (block.kind !== 'claim') continue;
      if (block.evidence === 'speculation') {
        expect(block.speculationNote, `${topic}/${block.id}`).toBeTruthy();
        continue;
      }
      expect(block.references.length, `${topic}/${block.id}`).toBeGreaterThan(0);
    }
  });

  it('resolves every reference, glossary term and figure it names', () => {
    for (const topic of PHILOSOPHICAL) {
      for (const id of topic.glossaryTerms ?? []) {
        expect(getGlossaryTerm(id), `${topic.slug} glossary ${id}`).toBeDefined();
      }
      for (const id of topic.furtherReading ?? []) {
        expect(getReference(id), `${topic.slug} reading ${id}`).toBeDefined();
      }
      for (const block of topic.blocks) {
        if (block.kind === 'visualization') {
          expect(
            getVisualization(block.visualizationId),
            `${topic.slug}/${block.id} figure`,
          ).toBeDefined();
        }
        const refs =
          block.kind === 'claim' || block.kind === 'open-question'
            ? block.references
            : block.kind === 'callout'
              ? (block.references ?? [])
              : [];
        for (const id of refs) {
          expect(getReference(id), `${topic.slug}/${block.id} ref ${id}`).toBeDefined();
        }
      }
    }
  });

  it('resolves every related topic and cross-link', () => {
    const ids = new Set(PHILOSOPHICAL.map((t) => t.id));
    const scientific = SECTION ? getTopicsForLens(SECTION.id, 'scientific') : [];
    const scientificIds = new Set(scientific.map((t) => t.id));
    for (const topic of PHILOSOPHICAL) {
      for (const id of topic.related ?? []) {
        expect(ids.has(id), `${topic.slug} related ${id}`).toBe(true);
      }
      for (const block of topic.blocks) {
        if (block.kind !== 'cross-link') continue;
        expect(
          ids.has(block.topicId) || scientificIds.has(block.topicId),
          `${topic.slug}/${block.id} cross-link ${block.topicId}`,
        ).toBe(true);
        expect(block.rationale.length).toBeGreaterThan(20);
      }
    }
  });

  it('labels every figure as a conceptual model rather than a measurement', () => {
    for (const topic of PHILOSOPHICAL) {
      for (const block of topic.blocks) {
        if (block.kind !== 'visualization') continue;
        const spec = getVisualization(block.visualizationId)?.spec;
        expect(spec?.fidelity, `${topic.slug}/${block.id}`).toBe('schematic');
        const caption = (block.caption ?? spec?.caption ?? '').toLowerCase();
        expect(
          /conceptual|not a measurement|not a data plot|not a survey|not a ranking/.test(caption),
          `${topic.slug}/${block.id} caption must say it is conceptual: ${caption}`,
        ).toBe(true);
      }
    }
  });
});

describe('the questions the lens promised to leave open', () => {
  // Each of these must be present as an open question somewhere in the lens,
  // and must not be answered by the narration.
  it('ends the free will movement without declaring a winner', () => {
    const basic = find('the-basic-argument');
    const text = textOf(basic as Topic);
    expect(text).toMatch(/not settled|unsettled|remains open|has not converged/);
    // Neither of the two confident claims the brief forbids.
    expect(allText).not.toMatch(/science has (dis)?proved that (we have )?no free will/);
    expect(allText).not.toMatch(/free will (obviously|certainly) exists/);
  });

  it('states directly that the Libet experiments do not settle the question', () => {
    const topic = find('what-the-brain-experiments-show');
    const text = textOf(topic as Topic);
    expect(text).toMatch(/does not show|do not show/);
    expect(text).toMatch(/accumulator|fluctuating|artefact/);
    // And does not overcorrect in the other direction.
    expect(text).toMatch(/leaves the underlying question|exactly where it was|opposite direction/);
  });

  it('leaves moral objectivity genuinely undecided', () => {
    const topic = find('is-morality-objective');
    const text = textOf(topic as Topic);
    expect(text).toMatch(/not settled|divided|no consensus|nothing like consensus/);
    expect(topic?.blocks.some((b) => b.kind === 'open-question')).toBe(true);
  });

  it('leaves consciousness undecided in both directions', () => {
    const topic = find('candidate-answers-on-consciousness');
    const text = textOf(topic as Topic);
    expect(text).toMatch(/nobody knows|experts disagree|disagreement is at the foundations/);
    expect(allText).not.toMatch(/consciousness (has been|is now) explained/);
  });

  it('leaves the self, meaning and responsibility as questions', () => {
    for (const slug of [
      'what-makes-you-the-same-person',
      'does-life-have-a-meaning',
      'responsibility-without-self-creation',
      'why-am-i-this-person',
    ]) {
      const topic = find(slug);
      expect(topic, slug).toBeDefined();
      expect(
        topic?.blocks.some((b) => b.kind === 'open-question'),
        `${slug} must carry an open question`,
      ).toBe(true);
    }
  });

  it('gives every topic a deeper question to leave the reader with', () => {
    const without = PHILOSOPHICAL.filter(
      (t) => !t.blocks.some((b) => b.kind === 'open-question'),
    ).map((t) => t.slug);
    expect(without).toEqual([]);
  });

  it('does not close the journey with a doctrine', () => {
    const closing = find('what-you-are-left-holding');
    const text = textOf(closing as Topic);
    expect(text).toMatch(/stayed open|left open|unresolved/);
    expect(text).not.toMatch(/the answer is|therefore you should live/);
    // The final topic must still end on a question rather than a conclusion.
    expect(closing?.blocks.some((b) => b.kind === 'open-question')).toBe(true);
  });
});

describe('corrections the brief required', () => {
  it('explains anattā without reducing it to nihilism', () => {
    const topic = find('anatta-non-self');
    const text = textOf(topic as Topic);
    expect(text).toMatch(/not that nothing exists|annihilationism/);
    expect(text).toMatch(/permanent|independent|controlling/);
    // The middle-path framing, not a denial of persons.
    expect(text).toMatch(/middle path|there are persons|persons, they act/);
  });

  it('does not reduce Nietzsche to slogans or to a doctrine of domination', () => {
    const topic = find('nietzsche-and-the-genealogy-of-morals');
    const text = textOf(topic as Topic);
    expect(text).toMatch(/not that cruelty is good|not saying/);
    expect(text).toMatch(/übermensch|ubermensch/);
    expect(text).toMatch(/antisemit|nationalis/);
    // The genetic fallacy is named rather than committed.
    expect(text).toMatch(/genetic fallacy/);
  });

  it('does not oversimplify the is–ought gap into "science cannot explain morality"', () => {
    const topic = find('humes-gap');
    const text = textOf(topic as Topic);
    expect(text).toMatch(
      /not "science cannot|not what hume said|matter enormously|facts do not matter/,
    );
    const science = find('science-and-morality');
    expect(textOf(science as Topic)).toMatch(
      /most remaining moral disputes are empirical|evidence settle/,
    );
  });

  it('does not conclude that environment determines everything', () => {
    const topic = find('influence-and-authorship');
    const text = textOf(topic as Topic);
    expect(text).toMatch(
      /does not conclude that environment determines everything|stronger than anything shown/,
    );
    expect(allText).not.toMatch(/therefore (the )?environment determines everything/);
  });

  it('keeps the existential thinkers distinct from one another', () => {
    const topic = find('meaning-you-make');
    const text = textOf(topic as Topic);
    expect(text).toMatch(/did not form a school|rejected the label|disagreed/);
    expect(text).toMatch(/kierkegaard/);
    expect(text).toMatch(/beauvoir/);
  });

  it('distinguishes what a philosopher argued from later interpretation', () => {
    // At least a few claims must be marked as contested readings rather than
    // as settled attributions, or the lens is flattening live scholarship.
    const levels = PHILOSOPHICAL.flatMap((t) =>
      t.blocks.filter((b) => b.kind === 'claim').map((b) => (b.kind === 'claim' ? b.evidence : '')),
    );
    expect(levels.filter((l) => l === 'established').length).toBeGreaterThan(10);
    expect(levels.filter((l) => l === 'active-research').length).toBeGreaterThan(5);
    expect(levels.filter((l) => l === 'open-question').length).toBeGreaterThan(3);
  });

  it('carries no quotations, since none were verified', () => {
    // The brief forbade fabricated quotations. The lens takes the strict route
    // and paraphrases throughout, so no quotation marks around attributed
    // speech should appear in any claim statement.
    for (const topic of PHILOSOPHICAL) {
      for (const block of topic.blocks) {
        if (block.kind !== 'claim') continue;
        expect(block.statement.essential, `${topic.slug}/${block.id}`).not.toMatch(/[“”]/);
      }
    }
  });
});

describe('recaps for the Philosophical Lens', () => {
  it('gives every topic a recap of the right shape', () => {
    for (const topic of PHILOSOPHICAL) {
      const recap = RECAPS[topic.id];
      expect(recap, `${topic.slug} has no recap`).toBeDefined();
      if (!recap) continue;
      expect(recap.questions.length, topic.slug).toBeGreaterThanOrEqual(RECAP_MIN_QUESTIONS);
      expect(recap.questions.length, topic.slug).toBeLessThanOrEqual(RECAP_MAX_QUESTIONS);
      for (const question of recap.questions) {
        expect(question.options.length, `${topic.slug}/${question.id}`).toBeGreaterThanOrEqual(
          RECAP_MIN_OPTIONS,
        );
        expect(question.options.length, `${topic.slug}/${question.id}`).toBeLessThanOrEqual(
          RECAP_MAX_OPTIONS,
        );
        expect(
          question.options.filter((o) => o.correct === true).length,
          `${topic.slug}/${question.id}`,
        ).toBe(1);
        expect(correctOption(question), `${topic.slug}/${question.id}`).toBeDefined();
        expect(question.explanation.length, `${topic.slug}/${question.id}`).toBeGreaterThan(40);
      }
    }
  });

  it('never asks the reader to pick a side in an open dispute', () => {
    // A comprehension check must test what an argument says, not which answer
    // is right. Correct options that assert a contested position would turn
    // the recap into an examination on the author's opinion.
    const forbidden =
      /^(we do not have free will|morality is objective|the self is an illusion|there is no meaning)/i;
    for (const topic of PHILOSOPHICAL) {
      const recap = RECAPS[topic.id];
      for (const question of recap?.questions ?? []) {
        const answer = correctOption(question);
        expect(answer?.text, `${topic.slug}/${question.id}`).not.toMatch(forbidden);
      }
    }
  });
});

describe('a philosophical topic in the browser', () => {
  it('renders the chapter shape, from question through objection to open question', async () => {
    renderTopic('the-basic-argument');
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(
      'The Basic Argument',
    );
    expect(screen.getAllByText(/Open question/i).length).toBeGreaterThan(0);
  });

  it('changes depth without losing the argument', async () => {
    const user = userEvent.setup();
    renderTopic('compatibilism');
    const deep = await screen.findByRole('radio', { name: 'Deep' });
    await user.click(deep);
    expect(deep).toBeChecked();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The freedom worth wanting',
    );
  });

  it('offers the recap as a group of answerable questions', async () => {
    renderTopic('moral-luck');
    const recap = RECAPS[find('moral-luck')?.id ?? ''];
    const first = recap?.questions[0];
    expect(first).toBeDefined();
    if (!first) return;
    const group = await screen.findByRole('group', { name: first.prompt });
    expect(within(group).getAllByRole('button').length).toBe(first.options.length);
  });
});
