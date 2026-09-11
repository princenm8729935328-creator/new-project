import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { getSectionBySlug, SECTIONS } from '@/content/sections';
import { getTopicsForLens, TOPICS } from '@/content/topics';
import { RECAPS } from '@/content/recaps';
import { REFERENCES, getReference } from '@/content/references';
import { GLOSSARY, getGlossaryTerm } from '@/content/glossary';
import { VISUALIZATIONS } from '@/content/visualizations';
import { getVisualization } from '@/visualization/registry';
import { correctOption } from '@/content/schema/recap';
import type { Topic } from '@/content/schema/topic';
import TopicPage from './TopicPage';

const SECTION = getSectionBySlug('human-evolution');
const SCIENTIFIC: readonly Topic[] = SECTION ? getTopicsForLens(SECTION.id, 'scientific') : [];

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

describe('Phase 8 placement', () => {
  it('keeps Human Evolution at homepage position 11, in Phase 8', () => {
    expect(SECTION?.order).toBe(11);
    expect(SECTION?.phase).toBe(8);
    expect(SECTION?.status).toBe('published');
  });

  it('leaves the later sections on the roadmap untouched', () => {
    expect(getSectionBySlug('dark-universe')?.phase).toBe(9);
    expect(getSectionBySlug('dark-universe')?.status).toBe('planned');
    expect(getSectionBySlug('open-questions')?.phase).toBe(10);
    expect(getSectionBySlug('glossary')?.phase).toBe(11);
  });

  it('preserves the homepage order exactly', () => {
    expect([...SECTIONS].sort((a, b) => a.order - b.order).map((s) => s.slug)).toEqual([
      'cosmic-timeline',
      'universe',
      'stars-galaxies',
      'black-holes',
      'gravity',
      'newton',
      'relativity',
      'quantum',
      'earth',
      'life',
      'human-evolution',
      'dark-universe',
      'open-questions',
      'glossary',
    ]);
  });
});

describe('the Scientific Lens curriculum', () => {
  it('is substantial, contiguous and entirely scientific', () => {
    expect(SCIENTIFIC.length).toBeGreaterThanOrEqual(60);
    expect(SCIENTIFIC.map((t) => t.order)).toEqual(SCIENTIFIC.map((_, i) => i + 1));
    expect(SCIENTIFIC.every((t) => t.lens === 'scientific')).toBe(true);
    expect(SCIENTIFIC.every((t) => t.status === 'published')).toBe(true);
  });

  it('has unique slugs and ids', () => {
    expect(new Set(SCIENTIFIC.map((t) => t.slug)).size).toBe(SCIENTIFIC.length);
    expect(new Set(SCIENTIFIC.map((t) => t.id)).size).toBe(SCIENTIFIC.length);
  });

  it('runs the nine movements in order, from what we are to the synthesis', () => {
    const slugs = SCIENTIFIC.map((t) => t.slug);
    const expectedOrder = [
      'what-is-a-human',
      'standing-up',
      'how-a-fossil-becomes-evidence',
      'the-cost-of-a-brain',
      'the-first-stone-tools',
      'where-homo-sapiens-came-from',
      'pigment-ornament-and-inference',
      'why-farming-began',
      'did-human-evolution-stop',
      'how-a-primate-became-homo-sapiens',
    ];
    const positions = expectedOrder.map((slug) => slugs.indexOf(slug));
    expect(positions.every((p) => p >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
    // The synthesis is genuinely last.
    expect(slugs[slugs.length - 1]).toBe('how-a-primate-became-homo-sapiens');
  });

  it('leaves no philosophical content anywhere in the registry', () => {
    expect(TOPICS.filter((t) => t.lens === 'philosophical')).toEqual([]);
  });
});

describe('scientific honesty in the Scientific Lens', () => {
  const blocks = SCIENTIFIC.flatMap((t) => t.blocks.map((b) => ({ topic: t.slug, block: b })));

  it('cites a source for every claim that is not flagged speculation', () => {
    for (const { topic, block } of blocks) {
      if (block.kind !== 'claim') continue;
      if (block.evidence === 'speculation') {
        expect(block.speculationNote, `${topic}/${block.id}`).toBeTruthy();
        continue;
      }
      expect(block.references.length, `${topic}/${block.id}`).toBeGreaterThan(0);
    }
  });

  it('resolves every reference and glossary term it cites', () => {
    for (const topic of SCIENTIFIC) {
      for (const id of topic.glossaryTerms ?? []) {
        expect(getGlossaryTerm(id), `${topic.slug} glossary ${id}`).toBeDefined();
      }
      for (const id of topic.furtherReading ?? []) {
        expect(getReference(id), `${topic.slug} reading ${id}`).toBeDefined();
      }
      for (const block of topic.blocks) {
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

  it('marks the genuinely unresolved questions as unresolved', () => {
    const openQuestions = SCIENTIFIC.filter((t) =>
      t.blocks.some((b) => b.kind === 'open-question'),
    ).map((t) => t.slug);
    for (const slug of [
      'why-walk-on-two-legs',
      'why-did-brains-get-bigger',
      'language',
      'why-only-one-human-species-remains',
      'what-comes-next',
    ]) {
      expect(openQuestions, `${slug} should carry an open question`).toContain(slug);
    }
  });

  it('never presents brain-size drivers or the origin of language as settled', () => {
    for (const slug of ['why-did-brains-get-bigger', 'language']) {
      const topic = SCIENTIFIC.find((t) => t.slug === slug);
      const claims = topic?.blocks.filter((b) => b.kind === 'claim') ?? [];
      // Nothing in these topics may assert a cause as established.
      for (const claim of claims) {
        if (claim.kind !== 'claim') continue;
        expect(
          /drove|caused|because it evolved for/i.test(claim.statement.essential),
          `${slug}/${claim.id}`,
        ).toBe(false);
      }
    }
  });

  it('states plainly that we did not evolve from living chimpanzees', () => {
    const topic = SCIENTIFIC.find((t) => t.slug === 'why-we-did-not-evolve-from-chimpanzees');
    const text = JSON.stringify(topic).toLowerCase();
    expect(text).toContain('cousin');
    expect(text).toMatch(/share an ancestor|shared grandparent/);
    expect(text).toContain('a living species cannot be the ancestor of another living species');
  });

  it('refuses a single percentage as a measure of human–chimpanzee difference', () => {
    const topic = SCIENTIFIC.find((t) => t.slug === 'how-similar-are-human-and-chimpanzee-genomes');
    const text = JSON.stringify(topic);
    expect(text).toContain('98.8');
    // The nuance has to be present, not just the famous number.
    expect(text).toMatch(/insertions|indel/i);
  });

  it('keeps the closing synthesis free of purpose and of the other lens', () => {
    const last = SCIENTIFIC[SCIENTIFIC.length - 1];
    const text = JSON.stringify(last).toLowerCase();
    expect(text).toContain('not evidence that it was heading for us');
    // The meaning question belongs entirely to the Philosophical Lens.
    expect(text).toContain('belong to the other lens');
  });
});

describe('Phase 8 figures', () => {
  const used = new Set<string>();
  for (const topic of SCIENTIFIC) {
    for (const block of topic.blocks) {
      if (block.kind === 'visualization') used.add(block.visualizationId);
    }
  }

  it('uses a substantial number of figures', () => {
    expect(used.size).toBeGreaterThanOrEqual(60);
  });

  it('registers and specifies every figure it uses', () => {
    const specced = new Map(VISUALIZATIONS.map((v) => [v.id as string, v]));
    for (const id of used) {
      expect(specced.get(id), `no spec for ${id}`).toBeDefined();
      expect(getVisualization(id as never), `not registered: ${id}`).toBeDefined();
    }
  });

  it('gives every figure a caption and a text alternative', () => {
    for (const id of used) {
      const spec = VISUALIZATIONS.find((v) => (v.id as string) === id);
      expect(spec?.caption.length, `${id} caption`).toBeGreaterThan(120);
      expect(spec?.description.length, `${id} description`).toBeGreaterThan(200);
    }
  });

  it('cites sources for every figure claiming to be data-driven', () => {
    for (const id of used) {
      const spec = VISUALIZATIONS.find((v) => (v.id as string) === id);
      if (spec?.fidelity !== 'data-driven') continue;
      expect(spec.references?.length, `${id} needs sources`).toBeGreaterThan(0);
    }
  });

  it('does not present the hominin tree as resolved', () => {
    const spec = VISUALIZATIONS.find((v) => (v.id as string) === 'tree-uncertainty');
    expect(spec?.fidelity).toBe('schematic');
    expect(`${spec?.caption} ${spec?.description}`).toMatch(/hypothes|disagree|dispute/i);
  });
});

describe('Phase 8 recaps', () => {
  it('gives every Scientific Lens topic a recap', () => {
    for (const topic of SCIENTIFIC) {
      expect(RECAPS[topic.id], `no recap for ${topic.slug}`).toBeDefined();
    }
  });

  it('asks two to four conceptual questions with exactly one correct answer', () => {
    for (const topic of SCIENTIFIC) {
      const recap = RECAPS[topic.id];
      if (!recap) continue;
      expect(recap.questions.length, topic.slug).toBeGreaterThanOrEqual(2);
      expect(recap.questions.length, topic.slug).toBeLessThanOrEqual(4);
      for (const question of recap.questions) {
        expect(question.options.length, `${topic.slug}/${question.id}`).toBeGreaterThanOrEqual(3);
        expect(question.options.length, `${topic.slug}/${question.id}`).toBeLessThanOrEqual(4);
        expect(
          question.options.filter((o) => o.correct === true),
          `${topic.slug}/${question.id}`,
        ).toHaveLength(1);
        expect(correctOption(question), `${topic.slug}/${question.id}`).toBeDefined();
      }
    }
  });

  it('writes real distractors and explanations that teach', () => {
    for (const topic of SCIENTIFIC) {
      const recap = RECAPS[topic.id];
      if (!recap) continue;
      for (const question of recap.questions) {
        for (const option of question.options) {
          expect(option.text.length, `${topic.slug}/${question.id}/${option.id}`).toBeGreaterThan(
            14,
          );
        }
        expect(question.explanation.length, `${topic.slug}/${question.id}`).toBeGreaterThan(80);
      }
    }
  });

  it('writes a distinct summary for every topic', () => {
    const summaries = SCIENTIFIC.map((t) => RECAPS[t.id]?.summary.essential ?? '');
    expect(new Set(summaries).size).toBe(summaries.length);
  });
});

describe('Phase 8 sources and glossary', () => {
  it('adds substantial new reference material', () => {
    expect(REFERENCES.length).toBeGreaterThan(450);
  });

  it('defines the terms the section introduces', () => {
    const ids = new Set(GLOSSARY.map((t) => t.id as string));
    for (const term of [
      'hominin',
      'bipedalism',
      'mosaic-evolution',
      'taphonomy',
      'encephalization',
      'introgression',
      'ancient-dna',
      'cumulative-culture',
      'gene-culture-coevolution',
      'population-structure',
    ]) {
      expect(ids, `missing glossary term ${term}`).toContain(term);
    }
  });
});

describe('a Scientific Lens topic in the browser', () => {
  it('renders its heading, prose, figure and recap', () => {
    renderTopic('standing-up');
    expect(screen.getByRole('heading', { level: 1, name: /Standing up/ })).toBeInTheDocument();
    expect(screen.getByRole('figure')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Check your understanding/i })).toBeInTheDocument();
  });

  it('changes the prose when the reader switches reading depth', async () => {
    const user = userEvent.setup();
    renderTopic('the-cost-of-a-brain');
    const before = document.body.textContent?.length ?? 0;

    await user.click(screen.getByRole('radio', { name: 'Deep' }));
    expect(screen.getByRole('radio', { name: 'Deep' })).toBeChecked();
    expect(document.body.textContent?.length ?? 0).not.toBe(before);
  });

  it('hides recap answers until the reader has answered', async () => {
    const user = userEvent.setup();
    renderTopic('why-we-did-not-evolve-from-chimpanzees');
    const topic = SCIENTIFIC.find((t) => t.slug === 'why-we-did-not-evolve-from-chimpanzees');
    const question = topic ? RECAPS[topic.id]?.questions[0] : undefined;
    expect(question).toBeDefined();
    if (!question) return;

    expect(screen.queryByText(question.explanation)).not.toBeInTheDocument();
    const group = screen.getByRole('group', { name: question.prompt });
    const [first] = within(group).getAllByRole('button');
    expect(first).toBeDefined();
    if (!first) return;
    await user.click(first);
    expect(first).toBeDisabled();
  });
});
