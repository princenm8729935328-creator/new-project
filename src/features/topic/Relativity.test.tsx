import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { getTopicsForSection } from '@/content/topics';
import { sectionId } from '@/content/schema/section';
import { getSectionBySlug } from '@/content/sections';
import TopicPage from './TopicPage';
import SectionPage from '@/features/section/SectionPage';
import HomePage from '@/features/home/HomePage';

/**
 * Phase 4 — Einstein & Relativity.
 *
 * As in the earlier phases, the accuracy assertions run against the rendered
 * page rather than the source. The commitments locked in here are the ones a
 * later edit would be most tempted to soften: that relativistic effects are
 * physical rather than perceptual, that both observers in a simultaneity
 * dispute are right, that the rubber sheet is a bad analogy, that a singularity
 * is a failure of the theory rather than an object, and that the black-hole
 * page stops at foundations.
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

describe('the Einstein & Relativity section', () => {
  it('is published and lists its seventeen topics in reading order', () => {
    const topics = getTopicsForSection(sectionId('relativity'));
    expect(getSectionBySlug('relativity')?.status).toBe('published');
    expect(topics).toHaveLength(17);
    expect(topics.map((topic) => topic.order)).toEqual(
      Array.from({ length: 17 }, (_, index) => index + 1),
    );

    renderAt('/relativity');
    expect(screen.getByRole('heading', { level: 1, name: 'Einstein & Relativity' })).toBeVisible();
    expect(screen.queryByText('Not built yet')).toBeNull();
  });

  it('puts special relativity before general relativity', () => {
    const slugs = getTopicsForSection(sectionId('relativity')).map((topic) => topic.slug);
    expect(slugs.indexOf('spacetime')).toBeLessThan(slugs.indexOf('curved-spacetime'));
    expect(slugs.indexOf('special-relativity')).toBeLessThan(
      slugs.indexOf('equivalence-principle'),
    );
  });

  it('offers a back link out of the section', () => {
    renderAt('/relativity');
    expect(screen.getByRole('button', { name: /Back to all sections/ })).toBeInTheDocument();
  });
});

describe('special relativity, as rendered', () => {
  it('states the problem Newtonian mechanics could not solve', () => {
    renderAt('/relativity/speed-of-light');
    expect(
      screen.getByText(
        /Maxwell’s equations for electricity and magnetism predict a speed for light/,
      ),
    ).toBeVisible();
    expect(
      screen.getByText(/The experiment was done, carefully, in 1887 — and found nothing/),
    ).toBeVisible();
  });

  it('refuses to call relativistic effects illusions', () => {
    renderAt('/relativity/special-relativity');
    expect(screen.getByText('These are not optical illusions')).toBeVisible();
    expect(
      screen.getByText(/The muons reaching the ground really do reach the ground/),
    ).toBeVisible();
  });

  it('says both observers in a simultaneity dispute are right, and protects causality', () => {
    renderAt('/relativity/simultaneity');
    expect(screen.getByText(/Both observers are right/)).toBeVisible();
    expect(screen.getByText('Cause and effect are still safe')).toBeVisible();
  });

  it('backs time dilation with measurements rather than assertion', () => {
    renderAt('/relativity/time-dilation');
    expect(screen.getByText(/Cosmic-ray muons prove it/)).toBeVisible();
    expect(screen.getByText(/caesium clocks were flown around the world/)).toBeVisible();
    expect(screen.getByText('The twin puzzle, and why it is not a paradox')).toBeVisible();
  });

  it('shows the two frames agreeing about the muon', () => {
    renderAt('/relativity/length-contraction');
    expect(screen.getByText(/The muon that reaches the ground is the proof/)).toBeVisible();
    expect(screen.getByText('“So who is really shorter?”')).toBeVisible();
  });

  it('says what E = mc² does not claim', () => {
    renderAt('/relativity/mass-energy');
    expect(
      screen.getByText(/The equation does not say mass can easily be turned into energy/),
    ).toBeVisible();
    expect(screen.getByText('Mass does not increase with speed')).toBeVisible();
  });

  it('presents spacetime as one geometry with an invariant interval', () => {
    renderAt('/relativity/spacetime');
    expect(screen.getByText(/Space and time are not two separate arenas/)).toBeVisible();
    expect(screen.getAllByText('Light cone').length).toBeGreaterThan(0);
  });
});

describe('general relativity, as rendered', () => {
  it('grounds the equivalence principle in universal free fall and states its limit', () => {
    renderAt('/relativity/equivalence-principle');
    expect(
      screen.getByText(/The principle works only because everything falls at the same rate/),
    ).toBeVisible();
    expect(screen.getByText('Only true locally — and the exception is the point')).toBeVisible();
  });

  it('says what is wrong with the rubber sheet, and that time is what curves', () => {
    renderAt('/relativity/curved-spacetime');
    expect(screen.getByText('The trouble with the rubber sheet')).toBeVisible();
    expect(
      screen.getByText(/For everyday gravity, the curvature that matters is in time, not space/),
    ).toBeVisible();
    expect(screen.getByText('Newton is still in there')).toBeVisible();
  });

  it('describes free fall as force-free geodesic motion', () => {
    renderAt('/relativity/geodesics');
    expect(screen.getByText(/a freely falling object has no force on it at all/)).toBeVisible();
    expect(screen.getByText('The straightest path is the one with the most time')).toBeVisible();
  });

  it('ties gravitational time dilation to a measurement and to GPS', () => {
    renderAt('/relativity/gravitational-time-dilation');
    expect(screen.getByText(/It has been measured many times/)).toBeVisible();
    expect(screen.getByText(/Satellite navigation depends on getting this right/)).toBeVisible();
  });

  it('gives lensing its factor of two and its modern use', () => {
    renderAt('/relativity/gravitational-lensing');
    expect(
      screen.getByText(/Two expeditions photographed the star field around the Sun/),
    ).toBeVisible();
    expect(screen.getByText('A poor lens, as lenses go')).toBeVisible();
  });

  it('presents Mercury as a prediction with no free parameter', () => {
    renderAt('/relativity/mercury-perihelion');
    expect(screen.getByText(/In November 1915, Einstein calculated the orbit/)).toBeVisible();
    expect(screen.getByText('Why this counted as evidence')).toBeVisible();
  });
});

describe('the relativistic foundations for black holes', () => {
  it('treats the singularity as a breakdown of the theory, not an object', () => {
    renderAt('/relativity/black-hole-foundations');
    expect(screen.getByText('The singularity is not a described object')).toBeVisible();
    expect(
      screen.getByText(/it is the theory reporting that it has stopped working/),
    ).toBeVisible();
  });

  it('says explicitly that the full Black Holes section is not being built here', () => {
    renderAt('/relativity/black-hole-foundations');
    expect(screen.getByText('This page stops here on purpose')).toBeVisible();
    expect(screen.getByText(/which has not been written yet/)).toBeVisible();
  });

  it('leaves the Black Holes section marked as unbuilt', () => {
    expect(getSectionBySlug('black-holes')?.status).toBe('planned');
    renderAt('/black-holes');
    expect(screen.getByText('Not built yet')).toBeInTheDocument();
  });
});

describe('gravitational waves and the experimental record', () => {
  it('gives both the indirect and the direct detection', () => {
    renderAt('/relativity/gravitational-waves');
    expect(screen.getByText(/They were confirmed indirectly first/)).toBeVisible();
    expect(screen.getByText(/The first direct detection was on 14 September 2015/)).toBeVisible();
  });

  it('explains why a passing theory is still tested', () => {
    renderAt('/relativity/testing-relativity');
    expect(screen.getByText('Why keep testing something that keeps passing?')).toBeVisible();
    expect(screen.getAllByText('Active research').length).toBeGreaterThan(0);
  });

  it('lists what general relativity adds, and still recommends Newton', () => {
    renderAt('/relativity/what-general-relativity-explains');
    expect(
      screen.getByText(
        /general relativity predicts things Newtonian gravity has no way to express/,
      ),
    ).toBeVisible();
    expect(screen.getByText('And Newton is still what you should use')).toBeVisible();
    expect(screen.getAllByText('Open question').length).toBeGreaterThan(0);
  });
});

describe('Phase 4 figures', () => {
  const cases: readonly [string, string, string][] = [
    ['/relativity/special-relativity', 'How fast is fast enough to matter?', 'Data-driven'],
    ['/relativity/simultaneity', 'Two lightning strikes, two answers', 'Conceptual diagram'],
    ['/relativity/time-dilation', 'The light clock', 'Conceptual diagram'],
    [
      '/relativity/length-contraction',
      'A shorter journey, or a longer life?',
      'Conceptual diagram',
    ],
    ['/relativity/mass-energy', 'What a kilogram is worth', 'Data-driven'],
    ['/relativity/spacetime', 'The spacetime diagram, and what a boost does to it', 'Data-driven'],
    ['/relativity/equivalence-principle', 'The lift you cannot see out of', 'Conceptual diagram'],
    ['/relativity/curved-spacetime', 'Mass changes the geometry', 'Conceptual diagram'],
    ['/relativity/geodesics', 'Straight lines that meet', 'Conceptual diagram'],
    ['/relativity/gravitational-time-dilation', 'Where clocks run slow', 'Data-driven'],
    ['/relativity/gravitational-lensing', 'Light takes the bent path', 'Conceptual diagram'],
    [
      '/relativity/mercury-perihelion',
      'Newton’s orbit and Einstein’s, side by side',
      'Data-driven',
    ],
    [
      '/relativity/gravitational-waves',
      'What a passing gravitational wave does',
      'Conceptual diagram',
    ],
    ['/relativity/black-hole-foundations', 'How small would it have to be?', 'Data-driven'],
  ];

  it.each(cases)('renders %s through the frame with a fidelity label', (path, title, fidelity) => {
    renderAt(path);
    expect(screen.getByRole('heading', { name: title })).toBeVisible();
    expect(screen.getAllByText(fidelity).length).toBeGreaterThan(0);
  });

  it('warns on the curvature figure itself that the rubber sheet is an analogy', () => {
    renderAt('/relativity/curved-spacetime');
    const stage = screen.getByRole('img', { name: /grid representing spacetime/i });
    expect(
      within(stage.parentElement!).getByText(/nothing here is rolling downhill/),
    ).toBeVisible();
  });

  it('says the gravitational-wave chirp is computed, not LIGO data', () => {
    renderAt('/relativity/gravitational-waves');
    const stage = screen.getByRole('img', { name: /ring of free-floating test masses/i });
    expect(within(stage.parentElement!).getByText(/not plotted from LIGO data/)).toBeVisible();
  });
});

describe('Phase 4 reading depth', () => {
  it('swaps prose between Quick, Standard and Deep', async () => {
    const user = userEvent.setup();
    renderAt('/relativity/time-dilation');

    expect(screen.queryByText(/The argument is complete as it stands/)).toBeNull();
    await user.click(screen.getByRole('radio', { name: 'Standard' }));
    expect(screen.getByText(/The argument is complete as it stands/)).toBeVisible();

    await user.click(screen.getByRole('radio', { name: 'Deep' }));
    expect(screen.getByText(/the effective lifetime in the Earth frame/)).toBeVisible();
  });
});

describe('Phase 4 navigation', () => {
  it('goes back from a topic to its section using real history', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(
      [
        { path: ':sectionSlug', element: <SectionPage /> },
        { path: ':sectionSlug/:topicSlug', element: <TopicPage /> },
      ],
      { initialEntries: ['/relativity', '/relativity/spacetime'], initialIndex: 1 },
    );

    render(
      <ReaderPreferencesProvider>
        <RouterProvider router={router} />
      </ReaderPreferencesProvider>,
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Spacetime');

    await user.click(screen.getByRole('button', { name: /Back to Einstein & Relativity/ }));
    expect(router.state.location.pathname).toBe('/relativity');
  });

  it('falls back to the section when a deep link has no history behind it', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(
      [
        { path: ':sectionSlug', element: <SectionPage /> },
        { path: ':sectionSlug/:topicSlug', element: <TopicPage /> },
      ],
      { initialEntries: ['/relativity/gravitational-waves'] },
    );

    render(
      <ReaderPreferencesProvider>
        <RouterProvider router={router} />
      </ReaderPreferencesProvider>,
    );

    await user.click(screen.getByRole('button', { name: /Back to Einstein & Relativity/ }));
    expect(router.state.location.pathname).toBe('/relativity');
  });

  it('resolves every Phase 4 deep link', () => {
    for (const topic of getTopicsForSection(sectionId('relativity'))) {
      const view = renderAt(`/relativity/${topic.slug}`);
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(topic.title);
      view.unmount();
    }
  });
});

describe('Phase 1–3 are untouched', () => {
  it('still publishes the four earlier sections', () => {
    for (const slug of ['cosmic-timeline', 'universe', 'gravity', 'newton']) {
      expect(getSectionBySlug(slug)?.status).toBe('published');
    }
    expect(getTopicsForSection(sectionId('universe'))).toHaveLength(17);
    expect(getTopicsForSection(sectionId('gravity'))).toHaveLength(10);
    expect(getTopicsForSection(sectionId('newton'))).toHaveLength(5);
  });

  it('still cross-links Phase 3 from Phase 4 and back', () => {
    renderAt('/relativity/mercury-perihelion');
    // The topic appears twice: once as an inline cross-link and once in the
    // related list at the foot of the page. Both must point into Phase 3.
    const links = screen.getAllByRole('link', { name: /The limits of Newtonian gravity/ });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute('href', '/gravity/limits-of-newtonian-gravity');
    }
  });
});
