import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { getTopicsForSection } from '@/content/topics';
import { sectionId } from '@/content/schema/section';
import { getSectionBySlug } from '@/content/sections';
import { getRecap } from '@/content/recaps';
import TopicPage from './TopicPage';
import SectionPage from '@/features/section/SectionPage';
import HomePage from '@/features/home/HomePage';

/**
 * Phase 5 — Stars & Galaxies.
 *
 * Phase numbers follow the canonical roadmap, not the order the sections were
 * built: Black Holes was implemented before this one because it depends on
 * general relativity, and that changed the order of work rather than the
 * numbering.
 *
 * The assertions below concentrate on the sentences that a well-meaning
 * simplification deletes first, because those are the ones that make the
 * difference between a science section and an astronomy poster:
 *
 *  - the Sun is not burning, and "burning" is not a loose synonym for fusing;
 *  - Population III stars are predicted and have never been observed;
 *  - the supernova explosion mechanism is not settled;
 *  - not every heavy element is made in an ordinary stellar core;
 *  - galaxy-formation simulations are models constrained by observations, not
 *    footage of the past;
 *  - spiral arms are not material structures;
 *  - ellipticals are not aged spirals;
 *  - galaxies pass through each other without stellar collisions;
 *  - Sgr A* is a measured mass in a volume, and a black hole by inference;
 *  - the JWST early-galaxy results are not a detection of the first stars;
 *  - "we are made of stardust" is an accessible phrase covering a precise and
 *    partly different history.
 *
 * Each is checked against the rendered page rather than the content module,
 * because what matters is what a reader actually sees.
 */

beforeEach(() => {
  localStorage.clear();
});

function renderAt(path: string) {
  return render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":sectionSlug" element={<SectionPage />} />
          <Route path=":sectionSlug/:topicSlug" element={<TopicPage />} />
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

const STARS = sectionId('stars-galaxies');

describe('the Stars & Galaxies section', () => {
  it('is published and lists its forty-five topics in reading order', () => {
    const topics = getTopicsForSection(STARS);
    expect(getSectionBySlug('stars-galaxies')?.status).toBe('published');
    expect(topics).toHaveLength(45);
    expect(topics.map((topic) => topic.order)).toEqual(
      Array.from({ length: 45 }, (_, index) => index + 1),
    );
    expect(topics.every((topic) => topic.status === 'published')).toBe(true);
  });

  it('keeps its canonical phase number and its homepage position', () => {
    const section = getSectionBySlug('stars-galaxies');
    // Phase 5 in the roadmap, third on the homepage. Black Holes was built
    // first but sits below it, and neither number moved to accommodate that.
    expect(section?.phase).toBe(5);
    expect(section?.order).toBe(3);
    expect(getSectionBySlug('quantum')?.phase).toBe(6);
  });

  it('renders as the third section on the homepage, between Universe and Black Holes', () => {
    renderAt('/');
    const hrefs = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
      .filter((href): href is string => href !== null);
    expect(hrefs).toContain('/stars-galaxies');
    expect(hrefs.indexOf('/universe')).toBeLessThan(hrefs.indexOf('/stars-galaxies'));
    expect(hrefs.indexOf('/stars-galaxies')).toBeLessThan(hrefs.indexOf('/black-holes'));
  });

  it('leaves the creator credit exactly as it was', () => {
    renderAt('/');
    expect(screen.getAllByText(/Munna — The Übermensch/).length).toBeGreaterThan(0);
  });

  it('shows the section page with every topic reachable by its own link', () => {
    renderAt('/stars-galaxies');
    expect(screen.getByRole('heading', { level: 1, name: 'Stars & Galaxies' })).toBeVisible();
    expect(screen.queryByText('Not built yet')).toBeNull();

    // Matching on title alone is ambiguous — several titles are substrings of
    // other topics' subtitles — so check the hrefs, which are unique by
    // construction, and check that each link carries its own title text.
    const links = screen.getAllByRole('link');
    for (const topic of getTopicsForSection(STARS)) {
      const matching = links.filter(
        (link) => link.getAttribute('href') === `/stars-galaxies/${topic.slug}`,
      );
      expect(matching, `no link to ${topic.slug}`).toHaveLength(1);
      expect(matching[0]!.textContent).toContain(topic.title);
    }
  });

  it('offers a way back out of the section', () => {
    renderAt('/stars-galaxies');
    expect(screen.getByRole('button', { name: /Back to all sections/ })).toBeInTheDocument();
  });

  it('gives every topic a recap with exactly one correct answer per question', () => {
    for (const topic of getTopicsForSection(STARS)) {
      const recap = getRecap(topic.id);
      expect(recap, `${topic.slug} has no recap`).toBeDefined();
      expect(recap!.questions.length).toBeGreaterThanOrEqual(2);
      for (const question of recap!.questions) {
        expect(question.options.length).toBeGreaterThanOrEqual(3);
        const correct = question.options.filter((option) => option.correct);
        expect(correct, `${topic.slug}: "${question.prompt}"`).toHaveLength(1);
        // The explanation names the principle rather than repeating the answer.
        expect(question.explanation.length).toBeGreaterThan(40);
      }
    }
  });

  it('renders the recap on a topic page without revealing the answer first', () => {
    renderAt('/stars-galaxies/what-is-a-star');
    expect(screen.getByRole('heading', { name: /Check your understanding/i })).toBeVisible();
    expect(screen.queryByText(/^Correct$/)).toBeNull();
    expect(screen.queryByRole('button', { name: /Why\?/ })).toBeNull();
  });
});

describe('the foundations refuse the usual shortcuts', () => {
  it('does not let the Sun be described as burning', () => {
    renderAt('/stars-galaxies/what-is-a-star');
    expect(screen.getByText('“The Sun is burning”')).toBeVisible();
  });

  it('records that Kelvin’s gravitational-contraction answer was defeated by the rocks', () => {
    renderAt('/stars-galaxies/why-gravity-makes-stars-hot');
    expect(screen.getByText('The argument Kelvin lost')).toBeVisible();
  });

  it('refuses the image of a star igniting like a match', () => {
    renderAt('/stars-galaxies/when-a-star-switches-on');
    expect(screen.getByText('“The star ignites, like a match”')).toBeVisible();
  });

  it('says the bright stars in the night sky are a biased sample', () => {
    renderAt('/stars-galaxies/mass-determines-a-stars-life');
    expect(screen.getByText('The night sky is a biased sample')).toBeVisible();
  });

  it('does not let stars slide along the main sequence as they age', () => {
    renderAt('/stars-galaxies/the-main-sequence');
    expect(screen.getByText('“Stars move along the main sequence as they age”')).toBeVisible();
  });
});

describe('stellar death is told without smoothing over what is unresolved', () => {
  it('says the supernova mechanism is still argued about, in the topic subtitle', () => {
    renderAt('/stars-galaxies/supernovae');
    expect(screen.getByText(/we still argue about how they work/i)).toBeVisible();
  });

  it('records that some massive stars vanish instead of exploding', () => {
    renderAt('/stars-galaxies/what-happens-after-a-massive-star-dies');
    expect(screen.getByText('Stars that disappear instead of exploding')).toBeVisible();
  });

  it('says we do not know what a neutron star is made of', () => {
    renderAt('/stars-galaxies/neutron-stars');
    expect(screen.getByText(/we do not know what it is made of/i)).toBeVisible();
  });

  it('keeps the Chandrasekhar limit as a first-principles result that was resisted', () => {
    renderAt('/stars-galaxies/white-dwarfs-and-the-chandrasekhar-limit');
    expect(screen.getByText('A limit nobody wanted to believe')).toBeVisible();
  });
});

describe('nucleosynthesis is attributed precisely rather than to “stars”', () => {
  it('refuses the claim that all the elements were made in stars', () => {
    renderAt('/stars-galaxies/making-the-elements');
    expect(screen.getByText('“All the elements were made in stars”')).toBeVisible();
  });

  it('names five different origins for the atoms in a body', () => {
    renderAt('/stars-galaxies/where-did-the-atoms-in-your-body-come-from');
    expect(screen.getByText(/Five different origins/i)).toBeVisible();
  });

  it('treats “we are made of stardust” as a phrase needing precision, not a conclusion', () => {
    renderAt('/stars-galaxies/where-did-the-atoms-in-your-body-come-from');
    expect(screen.getByText('Saying it precisely is better, not worse')).toBeVisible();
  });

  it('says the Universe is still overwhelmingly hydrogen', () => {
    renderAt('/stars-galaxies/how-the-universe-became-chemically-rich');
    expect(screen.getByText('The Universe is still mostly hydrogen')).toBeVisible();
  });
});

describe('galaxies are described without the standard distortions', () => {
  it('marks simulations as models rather than footage of the past', () => {
    renderAt('/stars-galaxies/how-galaxies-form');
    expect(screen.getByText('Simulations are models, not footage')).toBeVisible();
  });

  it('says spiral arms are a traffic jam rather than a structure', () => {
    renderAt('/stars-galaxies/spiral-galaxies');
    expect(screen.getByText(/a traffic jam, not a structure/i)).toBeVisible();
  });

  it('refuses the idea that ellipticals are aged spirals', () => {
    renderAt('/stars-galaxies/elliptical-galaxies');
    expect(
      screen.getByText('“Ellipticals are what spirals turn into when they get old”'),
    ).toBeVisible();
  });

  it('says galaxies pass through each other without stars colliding', () => {
    renderAt('/stars-galaxies/galaxy-mergers');
    expect(screen.getByText(/without a single star colliding/i)).toBeVisible();
  });

  it('separates the gas, which does collide, from the stars, which do not', () => {
    renderAt('/stars-galaxies/galaxy-mergers');
    expect(screen.getByText('The gas is another matter entirely')).toBeVisible();
  });

  it('says feedback in simulations is fitted rather than derived', () => {
    renderAt('/stars-galaxies/galactic-feedback');
    expect(screen.getByText('Feedback in simulations is fitted, not derived')).toBeVisible();
  });
});

describe('the Galactic Centre keeps observation and inference apart', () => {
  it('describes the measurement as watching stars orbit something almost invisible', () => {
    renderAt('/stars-galaxies/the-galactic-centre');
    expect(screen.getByText(/orbit something that emits almost nothing/i)).toBeVisible();
  });

  it('does not turn the black-hole–galaxy correlation into a mechanism', () => {
    renderAt('/stars-galaxies/supermassive-black-holes-and-galaxy-evolution');
    expect(screen.getByText('A correlation is not a mechanism')).toBeVisible();
  });
});

describe('the first stars and first galaxies are not overstated', () => {
  it('states plainly that no Population III star has been observed', () => {
    renderAt('/stars-galaxies/the-first-stars');
    expect(screen.getByText('No Population III star has been observed')).toBeVisible();
  });

  it('describes Population III as predicted in detail and never seen', () => {
    renderAt('/stars-galaxies/the-first-stars');
    expect(screen.getByText(/Predicted in detail, never seen/i)).toBeVisible();
  });

  it('keeps the JWST early-galaxy result as an ongoing argument', () => {
    renderAt('/stars-galaxies/the-first-galaxies');
    expect(screen.getByText(/the argument is ongoing/i)).toBeVisible();
  });

  it('says what would count as actually seeing the first stars', () => {
    renderAt('/stars-galaxies/can-we-see-the-first-stars');
    expect(screen.getByText(/here is what would count instead/i)).toBeVisible();
  });
});

describe('the observational chapters say how the numbers are actually obtained', () => {
  it('says abundances are inferred through a model rather than read off', () => {
    renderAt('/stars-galaxies/how-do-we-know-what-stars-are-made-of');
    expect(screen.getByText('Abundances are inferred, not read off')).toBeVisible();
  });

  it('says the rungs of the distance ladder are not independent', () => {
    renderAt('/stars-galaxies/measuring-stellar-distances');
    expect(screen.getByText('The rungs are not independent')).toBeVisible();
  });

  it('says most quoted stellar masses are estimates rather than measurements', () => {
    renderAt('/stars-galaxies/measuring-stellar-mass');
    expect(
      screen.getByText('Most quoted stellar masses are estimates, not measurements'),
    ).toBeVisible();
  });

  it('keeps cosmological redshift distinct from a Doppler shift', () => {
    renderAt('/stars-galaxies/how-do-we-know-galaxies-are-moving');
    expect(screen.getByText('Cosmological redshift is not a Doppler shift')).toBeVisible();
  });
});

describe('the frontier topics are honest about what is missing', () => {
  it('records that most of the section describes single stars, and most stars are not single', () => {
    renderAt('/stars-galaxies/what-we-still-dont-understand-about-stars');
    expect(
      screen.getByText(
        'Most of this section describes single stars, and most stars are not single',
      ),
    ).toBeVisible();
  });

  it('says what a good galaxy simulation actually demonstrates', () => {
    renderAt('/stars-galaxies/what-we-still-dont-understand-about-galaxies');
    expect(screen.getByText('What a good simulation actually demonstrates')).toBeVisible();
  });
});

describe('the figures are declared honestly in their specs', () => {
  it('gives every visualization used by the section a caption, sources and a text alternative', async () => {
    const { VISUALIZATIONS } = await import('@/content/visualizations');
    const { TOPICS } = await import('@/content/topics');

    const usedBy = (predicate: (sectionId: string) => boolean): Set<string> => {
      const ids = new Set<string>();
      for (const topic of TOPICS) {
        if (!predicate(topic.sectionId)) continue;
        for (const block of topic.blocks) {
          if (block.kind === 'visualization') ids.add(block.visualizationId);
        }
      }
      return ids;
    };

    const used = usedBy((section) => section === STARS);
    const elsewhere = usedBy((section) => section !== STARS);
    expect(used.size).toBeGreaterThanOrEqual(44);

    for (const id of used) {
      const spec = VISUALIZATIONS.find((entry) => entry.id === id);
      expect(spec, `no spec for ${id}`).toBeDefined();
      expect(spec!.caption.length).toBeGreaterThan(60);
      // The text alternative has to carry the figure's content, not name it.
      expect(spec!.description.length).toBeGreaterThan(120);
      expect(['data-driven', 'to-scale', 'reconstruction', 'schematic', 'artistic']).toContain(
        spec!.fidelity,
      );
      // Nothing in this section may claim to be a photograph of anything.
      expect(spec!.fidelity).not.toBe('artistic');

      // Sources are required of the figures this phase authored. Two figures
      // are reused from earlier phases, and their specs are left exactly as
      // their authors wrote them rather than edited to satisfy this test.
      if (!elsewhere.has(id)) {
        expect(spec!.references?.length ?? 0, `${id} cites no sources`).toBeGreaterThan(0);
      }
    }
  });
});
