import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SECTIONS, getSectionBySlug } from '@/content/sections';
import { getTopicsForSection, publishedTopics } from '@/content/topics';
import { RECAPS } from '@/content/recaps';
import { VISUALIZATIONS } from '@/content/visualizations';
import { REFERENCES } from '@/content/references';
import { GLOSSARY } from '@/content/glossary';
import { getVisualization } from '@/visualization/registry';
import {
  RECAP_MAX_OPTIONS,
  RECAP_MAX_QUESTIONS,
  RECAP_MIN_OPTIONS,
  RECAP_MIN_QUESTIONS,
} from '@/content/schema/recap';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import SectionPage from '@/features/section/SectionPage';
import TopicPage from '@/features/topic/TopicPage';

/**
 * Phase 7 — Earth, and the Origin & Evolution of Life.
 *
 * Two things are being checked here that the generic library validator cannot.
 * The first is structural position: the user asked for Earth at #9 and Life at
 * #10 with nothing renumbered, and a test is the only thing that stops a later
 * edit quietly shifting them. The second is the honesty commitments specific to
 * this phase — that the origin of life is not presented as solved, that
 * evolution is never described as choosing, and that Gaia's three separate
 * claims are kept apart — because those are the parts a well-meaning later
 * rewrite is most likely to smooth over.
 */

const EARTH = getSectionBySlug('earth');
const LIFE = getSectionBySlug('life');

function renderSection(slug: string): void {
  render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={[`/${slug}`]}>
        <Routes>
          <Route path=":sectionSlug" element={<SectionPage />} />
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

function renderTopic(sectionSlug: string, topicSlug: string): void {
  render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={[`/${sectionSlug}/${topicSlug}`]}>
        <Routes>
          <Route path=":sectionSlug/:topicSlug" element={<TopicPage />} />
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

describe('Phase 7 section placement', () => {
  it('puts Earth at position 9 and Origin & Evolution of Life at position 10', () => {
    expect(EARTH?.order).toBe(9);
    expect(EARTH?.title).toBe('Earth');
    expect(LIFE?.order).toBe(10);
    expect(LIFE?.title).toBe('Origin & Evolution of Life');
  });

  it('assigns both sections to phase 7 and publishes them', () => {
    expect(EARTH?.phase).toBe(7);
    expect(EARTH?.status).toBe('published');
    expect(LIFE?.phase).toBe(7);
    expect(LIFE?.status).toBe('published');
  });

  it('leaves the later sections on the roadmap where the user placed them', () => {
    expect(getSectionBySlug('human-evolution')?.phase).toBe(8);
    expect(getSectionBySlug('dark-universe')?.phase).toBe(9);
    expect(getSectionBySlug('open-questions')?.phase).toBe(10);
    expect(getSectionBySlug('glossary')?.phase).toBe(11);
  });

  it('leaves homepage order untouched for every section', () => {
    // Section order is the reading order the homepage renders. Any change to it
    // is a change to the shape of the atlas, so it is pinned here in full.
    const byOrder = [...SECTIONS].sort((a, b) => a.order - b.order);
    expect(byOrder.map((section) => section.slug)).toEqual([
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
    expect(byOrder.map((section) => section.order)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    ]);
  });
});

describe('Phase 7 topic coverage', () => {
  const earthTopics = EARTH ? getTopicsForSection(EARTH.id) : [];
  const lifeTopics = LIFE ? getTopicsForSection(LIFE.id) : [];

  it('covers the sixteen Earth topics the brief specified', () => {
    expect(earthTopics).toHaveLength(16);
    expect(earthTopics.every((topic) => topic.status === 'published')).toBe(true);
  });

  it('covers every group of the Origin & Evolution of Life brief', () => {
    // Origin, early life, evolution, ecology, life as a planetary force,
    // complexity, philosophy, history and the bridge.
    expect(lifeTopics.length).toBeGreaterThanOrEqual(100);
    expect(lifeTopics.every((topic) => topic.status === 'published')).toBe(true);
  });

  it('numbers topics contiguously from one within each section', () => {
    for (const topics of [earthTopics, lifeTopics]) {
      expect(topics.map((topic) => topic.order)).toEqual(topics.map((_, index) => index + 1));
    }
  });

  it('gives every Phase 7 topic a unique slug', () => {
    const slugs = [...earthTopics, ...lifeTopics].map((topic) => topic.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('includes the specific topics the brief named for each group', () => {
    const ids = new Set([...earthTopics, ...lifeTopics].map((topic) => topic.id));
    for (const required of [
      // Earth
      'how-earth-was-born',
      'how-the-moon-formed',
      'plate-tectonics',
      'earths-magnetic-field',
      'snowball-earth',
      'earth-as-a-changing-system',
      // Origin of life
      'what-is-life',
      'rna-world',
      'could-metabolism-have-come-first',
      'protocells-and-membranes',
      'luca-the-last-universal-common-ancestor',
      'why-luca-was-not-the-first-life',
      // Early life
      'photosynthesis',
      'endosymbiosis',
      'the-cambrian-explosion',
      // Evolution
      'does-nature-choose',
      'evolution-is-not-a-ladder',
      'are-humans-the-goal-of-evolution',
      'convergent-evolution',
      'evolutionary-contingency-how-much-is-chance',
      // Ecology
      'keystone-species',
      'the-evolutionary-arms-race',
      'mass-extinctions',
      // Life changes the planet
      'gaia-hypothesis',
      'niche-construction',
      // Complexity
      'why-complex-life-is-not-automatically-better',
      // Philosophy
      'why-are-we-conscious',
      'does-life-have-an-objective-meaning',
      // History
      'the-end-cretaceous-extinction',
      // Bridge
      'from-life-to-a-species-capable-of-asking-questions',
    ]) {
      expect(ids, `missing topic ${required}`).toContain(required);
    }
  });

  it('stops short of building human evolution, which is Phase 8', () => {
    const humanEvolution = getSectionBySlug('human-evolution');
    expect(humanEvolution?.status).toBe('planned');
    expect(
      publishedTopics().filter((topic) => topic.sectionId === humanEvolution?.id),
    ).toHaveLength(0);
  });
});

describe('Phase 7 reading-depth and evidence discipline', () => {
  const topics = [
    ...(EARTH ? getTopicsForSection(EARTH.id) : []),
    ...(LIFE ? getTopicsForSection(LIFE.id) : []),
  ];

  it('writes a Quick summary for every topic and a Standard one for almost all', () => {
    for (const topic of topics) {
      expect(topic.summary.essential.length, topic.id).toBeGreaterThan(80);
      expect(topic.summary.detailed?.length ?? 0, topic.id).toBeGreaterThan(80);
    }
  });

  it('cites every claim and never asserts an unsupported speculation', () => {
    for (const topic of topics) {
      for (const block of topic.blocks) {
        if (block.kind !== 'claim') continue;
        if (block.evidence === 'speculation') {
          expect(block.speculationNote, `${topic.id}/${block.id}`).toBeTruthy();
        } else {
          expect(block.references.length, `${topic.id}/${block.id}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('marks the origin of life as unresolved rather than solved', () => {
    const chemistry = topics.find((topic) => topic.id === 'how-chemistry-could-become-biology');
    expect(chemistry).toBeDefined();
    const text = JSON.stringify(chemistry);
    expect(text).toMatch(/nobody has|not demonstrated|has not been|no demonstrated/i);
  });

  it('keeps at least one open question in each of the honesty-critical topics', () => {
    for (const id of [
      'rna-world',
      'why-did-life-begin',
      'is-there-a-direction-to-evolution',
      'why-are-we-conscious',
      'gaia-hypothesis',
      'niche-construction',
    ]) {
      const topic = topics.find((candidate) => candidate.id === id);
      expect(topic, `missing ${id}`).toBeDefined();
      const hasUncertainty =
        topic?.blocks.some(
          (block) =>
            block.kind === 'open-question' ||
            (block.kind === 'claim' &&
              (block.evidence === 'open-question' ||
                block.evidence === 'active-research' ||
                block.evidence === 'model')),
        ) ?? false;
      expect(hasUncertainty, `${id} states no uncertainty`).toBe(true);
    }
  });

  it('never says nature chooses, and says explicitly that it does not', () => {
    const topic = topics.find((candidate) => candidate.id === 'does-nature-choose');
    const text = JSON.stringify(topic);
    expect(text).toMatch(/no such agent|has no demonstrated|nothing at any point/i);
    // The section may quote the misconception, but must not assert it.
    expect(text).not.toMatch(/nature decides that|nature wants to|nature intends/i);
  });

  it('separates the three Gaia claims rather than blurring them', () => {
    const topic = topics.find((candidate) => candidate.id === 'gaia-hypothesis');
    const text = JSON.stringify(topic);
    expect(text).toMatch(
      /not a conscious living being|no scientific evidence|Earth has no nervous system/i,
    );
    expect(text).toMatch(/mechanism/i);
  });
});

describe('Phase 7 recaps', () => {
  const topics = [
    ...(EARTH ? getTopicsForSection(EARTH.id) : []),
    ...(LIFE ? getTopicsForSection(LIFE.id) : []),
  ];

  it('gives every topic a summary and a comprehension check', () => {
    for (const topic of topics) {
      const recap = RECAPS[topic.id];
      expect(recap, `no recap for ${topic.id}`).toBeDefined();
      expect(recap?.summary.essential.length ?? 0, topic.id).toBeGreaterThan(80);
      expect(recap?.questions.length ?? 0, topic.id).toBeGreaterThanOrEqual(RECAP_MIN_QUESTIONS);
      expect(recap?.questions.length ?? 0, topic.id).toBeLessThanOrEqual(RECAP_MAX_QUESTIONS);
    }
  });

  it('gives every question one correct option, real distractors and a reason', () => {
    for (const topic of topics) {
      const recap = RECAPS[topic.id];
      for (const question of recap?.questions ?? []) {
        const where = `${topic.id}/${question.id}`;
        expect(question.options.length, where).toBeGreaterThanOrEqual(RECAP_MIN_OPTIONS);
        expect(question.options.length, where).toBeLessThanOrEqual(RECAP_MAX_OPTIONS);
        expect(
          question.options.filter((option) => option.correct),
          where,
        ).toHaveLength(1);
        // A distractor that is obviously silly teaches nothing.
        for (const option of question.options) {
          expect(option.text.length, `${where}/${option.id}`).toBeGreaterThan(15);
        }
        expect(question.explanation.length, where).toBeGreaterThan(60);
      }
    }
  });

  it('writes each recap specifically for its topic rather than generically', () => {
    const summaries = topics.map((topic) => RECAPS[topic.id]?.summary.essential ?? '');
    expect(new Set(summaries).size).toBe(summaries.length);
  });
});

describe('Phase 7 visualizations', () => {
  const topics = [
    ...(EARTH ? getTopicsForSection(EARTH.id) : []),
    ...(LIFE ? getTopicsForSection(LIFE.id) : []),
  ];
  const usedIds = new Set(
    topics.flatMap((topic) =>
      topic.blocks
        .filter((block) => block.kind === 'visualization')
        .map((block) => block.visualizationId),
    ),
  );

  it('gives Phase 7 a substantial figure library', () => {
    expect(usedIds.size).toBeGreaterThanOrEqual(100);
  });

  it('registers a renderer and a spec for every figure the phase uses', () => {
    for (const id of usedIds) {
      expect(getVisualization(id), `no renderer for ${id}`).toBeDefined();
    }
  });

  it('declares a fidelity, a caption and a text alternative on every figure', () => {
    for (const id of usedIds) {
      const spec = VISUALIZATIONS.find((candidate) => candidate.id === id);
      expect(spec, `no spec for ${id}`).toBeDefined();
      expect(spec?.fidelity, id).toBeTruthy();
      // The caption has to say what is drawn and what has been distorted.
      expect(spec?.caption.length ?? 0, id).toBeGreaterThan(120);
      // The description is the screen-reader alternative and the fallback.
      expect(spec?.description.length ?? 0, id).toBeGreaterThan(200);
    }
  });

  it('never labels a conceptual diagram as data-driven', () => {
    for (const id of usedIds) {
      const spec = VISUALIZATIONS.find((candidate) => candidate.id === id);
      if (spec?.fidelity !== 'data-driven') continue;
      // A data-driven figure must cite where the data came from.
      expect(spec.references?.length ?? 0, `${id} claims data with no source`).toBeGreaterThan(0);
    }
  });

  it('says plainly in the caption when a figure is a reconstruction', () => {
    for (const id of usedIds) {
      const spec = VISUALIZATIONS.find((candidate) => candidate.id === id);
      if (spec?.fidelity !== 'reconstruction') continue;
      expect(spec.caption, id).toMatch(/reconstruct|not a simulation|inferred|unknown|uncertain/i);
    }
  });

  it('does not present an illustrative evolutionary tree as a complete record', () => {
    const tree = VISUALIZATIONS.find((spec) => spec.id === 'tree-of-life');
    expect(tree?.caption).toMatch(/simplification|approximate|network/i);
  });
});

describe('Phase 7 references and glossary', () => {
  it('adds a substantial set of new sources', () => {
    expect(REFERENCES.length).toBeGreaterThan(340);
  });

  it('gives every reference a resolvable identity unless it is a book', () => {
    for (const reference of REFERENCES) {
      if (reference.kind === 'book') continue;
      expect(reference.doi ?? reference.arxiv ?? reference.url, reference.id).toBeDefined();
    }
  });

  it('defines the Phase 7 vocabulary in the glossary', () => {
    const terms = new Set(GLOSSARY.map((term) => term.id));
    for (const required of [
      'abiogenesis',
      'ribozyme',
      'protocell',
      'luca',
      'endosymbiosis',
      'great-oxidation-event',
      'natural-selection',
      'ecological-niche',
      'keystone-species',
      'niche-construction',
      'plate-tectonics',
      'geodynamo',
      'silicate-weathering',
      'stromatolite',
    ]) {
      expect(terms, `missing glossary term ${required}`).toContain(required);
    }
  });
});

describe('Phase 7 pages render and behave', () => {
  it('lists every Earth topic on the section page, each with a working link', () => {
    renderSection('earth');
    expect(screen.getByRole('heading', { level: 1, name: 'Earth' })).toBeInTheDocument();
    // Match on href rather than accessible name: several titles are substrings
    // of other topics' subtitles, and hrefs are unique by construction.
    const hrefs = new Set(
      screen.getAllByRole('link').map((link) => link.getAttribute('href') ?? ''),
    );
    for (const topic of EARTH ? getTopicsForSection(EARTH.id) : []) {
      expect(hrefs, `no link to ${topic.slug}`).toContain(`/earth/${topic.slug}`);
    }
  });

  it('lists the Life topics on the section page', () => {
    renderSection('life');
    expect(
      screen.getByRole('heading', { level: 1, name: 'Origin & Evolution of Life' }),
    ).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    const topicLinks = links.filter((link) =>
      (link.getAttribute('href') ?? '').startsWith('/life/'),
    );
    expect(topicLinks.length).toBeGreaterThanOrEqual(100);
  });

  it('renders a topic with its heading, summary and recap', () => {
    renderTopic('life', 'natural-selection');
    expect(
      screen.getByRole('heading', { level: 1, name: /natural selection/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /check your understanding/i })).toBeInTheDocument();
  });

  it('switches reading depth without losing the topic', async () => {
    const user = userEvent.setup();
    renderTopic('earth', 'plate-tectonics');
    const deep = screen.getByRole('radio', { name: 'Deep' });
    await user.click(deep);
    expect(deep).toBeChecked();
    expect(screen.getByRole('heading', { level: 1, name: /plate tectonics/i })).toBeInTheDocument();
  });

  it('answers a recap question and explains the answer', async () => {
    const user = userEvent.setup();
    renderTopic('life', 'does-nature-choose');
    const question = RECAPS['does-nature-choose']?.questions[0];
    expect(question).toBeDefined();
    const group = screen.getByRole('group', { name: question?.prompt });
    const options = within(group).getAllByRole('button');
    expect(options.length).toBeGreaterThanOrEqual(RECAP_MIN_OPTIONS);
    const chosen = options[0];
    expect(chosen).toBeDefined();
    await user.click(chosen as HTMLElement);
    for (const option of options) {
      expect(option).toBeDisabled();
    }
    // The reason is shown only after answering.
    expect(screen.getByText(question?.explanation ?? '')).toBeVisible();
  });
});
