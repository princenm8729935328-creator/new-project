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
 * Phase 3 — Gravity & Newton.
 *
 * The accuracy assertions here run against the rendered page rather than the
 * source, so a later edit that softens one of the commitments — that Newtonian
 * gravity is a model rather than the truth, that tides come from a difference
 * rather than a pull, that escape velocity is a launch speed rather than a
 * cruising speed, that the third-law pair does not cancel — fails the build.
 */

// Reading depth is a persisted reader preference, so a test that changes it
// would otherwise leak into every test after it in this file.
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

describe('the Gravity section', () => {
  it('is published and lists its ten topics in reading order', () => {
    const topics = getTopicsForSection(sectionId('gravity'));
    expect(getSectionBySlug('gravity')?.status).toBe('published');
    expect(topics).toHaveLength(10);
    expect(topics.map((topic) => topic.order)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    renderAt('/gravity');
    expect(screen.getByRole('heading', { level: 1, name: 'Gravity' })).toBeVisible();
    expect(screen.queryByText('Not built yet')).toBeNull();
    expect(screen.getByRole('link', { name: /The law of universal gravitation/ })).toHaveAttribute(
      'href',
      '/gravity/universal-law',
    );
  });

  it('offers a back link out of the section', () => {
    renderAt('/gravity');
    expect(screen.getByRole('button', { name: /Back to all sections/ })).toBeInTheDocument();
  });
});

describe("the Newton's Laws section", () => {
  it('is published and lists its five topics', () => {
    const topics = getTopicsForSection(sectionId('newton'));
    expect(getSectionBySlug('newton')?.status).toBe('published');
    expect(topics).toHaveLength(5);
    expect(topics.map((topic) => topic.slug)).toEqual([
      'forces-and-motion',
      'first-law',
      'second-law',
      'third-law',
      'newtons-achievement',
    ]);

    renderAt('/newton');
    expect(screen.getByRole('heading', { level: 1, name: "Newton's Laws" })).toBeVisible();
    expect(screen.queryByText('Not built yet')).toBeNull();
  });
});

describe('the equation is explained, not merely displayed', () => {
  it('unpacks every symbol of F = G m₁ m₂ / r²', () => {
    renderAt('/gravity/universal-law');
    expect(screen.getByText(/F — the force/)).toBeInTheDocument();
    expect(screen.getByText(/m₁ and m₂ — the two masses/)).toBeInTheDocument();
    expect(screen.getByText(/r — the distance between the two centres/)).toBeInTheDocument();
    expect(screen.getByText(/G — the gravitational constant/)).toBeInTheDocument();
  });

  it('explains why the distance is squared, and what changes when it doubles', () => {
    renderAt('/gravity/universal-law');
    expect(screen.getByText(/Why squared\? Because influence spreads over a sphere/)).toBeVisible();
    expect(screen.getByText(/Double the distance → force drops to one quarter/)).toBeVisible();
  });

  it('says the law is a model, and where it stops', () => {
    renderAt('/gravity/universal-law');
    expect(screen.getByText('This equation is a model, not the last word')).toBeVisible();
  });
});

describe('scientific accuracy in the rendered Phase 3 pages', () => {
  it('states that everything falls at the same rate, and why', () => {
    renderAt('/gravity/free-fall');
    expect(
      screen.getByText(/A heavier object is pulled harder — and is exactly that much harder/),
    ).toBeVisible();
    expect(screen.getByText(/hit the surface together/)).toBeVisible();
  });

  it('corrects the “no gravity in space” misconception with a number', () => {
    renderAt('/gravity/what-gravity-is');
    expect(screen.getByText('“There is no gravity in space”')).toBeVisible();
    expect(screen.getByText(/still about 89% as strong/)).toBeVisible();
  });

  it('defines escape velocity as a launch speed, not a cruising speed', () => {
    renderAt('/gravity/escape-velocity');
    expect(screen.getByText('What escape velocity actually means')).toBeVisible();
    expect(
      screen.getByText(/It is not "the speed you must keep moving at to escape"/),
    ).toBeVisible();
  });

  it('explains tides as a difference in pull, not simply the Moon pulling the ocean', () => {
    renderAt('/gravity/tides');
    expect(
      screen.getByText(/The Moon pulls the near side of the Earth harder than the centre/),
    ).toBeVisible();
    expect(screen.getByText('Real coastlines do not obey the simple picture')).toBeVisible();
  });

  it('distinguishes gravitational from inertial mass and cites the test', () => {
    renderAt('/gravity/mass-and-weight');
    expect(screen.getByText(/Mass does two completely different jobs/)).toBeVisible();
    expect(screen.getAllByRole('link', { name: /Touboul, P\. et al\./ }).length).toBeGreaterThan(0);
  });

  it('refuses to say Newton was simply wrong', () => {
    renderAt('/gravity/limits-of-newtonian-gravity');
    expect(screen.getByText('Newton’s laws are not simply “wrong”')).toBeVisible();
    expect(screen.getByText(/extremely successful approximation within its domain/)).toBeVisible();
  });

  it('names the specific failures of Newtonian gravity', () => {
    renderAt('/gravity/limits-of-newtonian-gravity');
    expect(screen.getByText(/The first crack was Mercury/)).toBeVisible();
    expect(screen.getByText(/Light bends when it passes a massive body/)).toBeVisible();
    expect(screen.getByText(/Clocks run slower deeper in a gravitational field/)).toBeVisible();
    expect(screen.getByText('The correction in your pocket')).toBeVisible();
  });

  it('points at relativity without pretending to have explained it', () => {
    renderAt('/gravity/limits-of-newtonian-gravity');
    expect(screen.getByText('What comes next')).toBeVisible();
    expect(screen.getByText(/has not been written yet/)).toBeVisible();
  });

  it('does not let the third law collapse into “the forces cancel”', () => {
    renderAt('/newton/third-law');
    expect(screen.getByText(/The two forces in a pair never act on the same object/)).toBeVisible();
    expect(
      screen.getByText('“If the forces are equal and opposite, nothing can ever move”'),
    ).toBeVisible();
  });

  it('explains that objects appear to stop because of friction', () => {
    renderAt('/newton/first-law');
    expect(
      screen.getByText(/Things appear to stop on their own because of friction/),
    ).toBeVisible();
  });

  it('gives the second law as two proportionalities with worked numbers', async () => {
    const user = userEvent.setup();
    renderAt('/newton/second-law');
    expect(screen.getByText(/Two proportional relationships/)).toBeVisible();
    await user.click(screen.getByRole('radio', { name: 'Standard' }));
    expect(screen.getByText(/a 1000 kg car with 4000 N of driving force/)).toBeVisible();
  });

  it('does not present the apple story as more than it is', () => {
    renderAt('/newton/newtons-achievement');
    expect(screen.getByText('The apple, carefully')).toBeVisible();
    expect(screen.getByText(/No account has it striking him on the head/)).toBeVisible();
  });
});

describe('Phase 3 figures', () => {
  const cases: readonly [string, string, string][] = [
    ['/gravity/universal-law', 'Why distance is squared', 'Conceptual diagram'],
    ['/gravity/free-fall', 'Do heavy things fall faster?', 'Conceptual diagram'],
    ['/gravity/mass-and-weight', 'What you would weigh elsewhere', 'Data-driven'],
    ['/gravity/orbits', 'Orbit lab: velocity, mass, distance', 'Conceptual diagram'],
    ['/gravity/escape-velocity', 'Escape velocity, and what changes it', 'Data-driven'],
    ['/gravity/tides', 'Why there are two tides, not one', 'Conceptual diagram'],
    ['/newton/first-law', 'What stops a moving object', 'Conceptual diagram'],
    ['/newton/second-law', 'Force, mass and acceleration', 'Conceptual diagram'],
    ['/newton/third-law', 'The other half of every force', 'Conceptual diagram'],
    ['/newton/newtons-achievement', 'Newton’s Moon test', 'Data-driven'],
  ];

  it.each(cases)('renders %s through the frame with a fidelity label', (path, title, fidelity) => {
    renderAt(path);
    expect(screen.getByRole('heading', { name: title })).toBeVisible();
    expect(screen.getAllByText(fidelity).length).toBeGreaterThan(0);
  });

  it('gives every figure a text alternative and a caption on the frame', () => {
    renderAt('/gravity/tides');
    const stage = screen.getByRole('img', { name: /animated diagram of the Earth/i });
    expect(within(stage.parentElement!).getByText(/bulge height is exaggerated/)).toBeVisible();
  });

  it('states the orbit lab’s model assumptions rather than implying a full simulation', () => {
    renderAt('/gravity/orbits');
    expect(screen.getByText('What the orbit lab is not')).toBeVisible();
    const stage = screen.getByRole('img', { name: /interactive orbital sandbox/i });
    expect(
      within(stage.parentElement!).getByText(/A two-body sketch, and deliberately not more/),
    ).toBeVisible();
  });

  it('marks the gravity lab’s preset provenance', () => {
    renderAt('/gravity/universal-law');
    const stage = screen.getByRole('img', {
      name: /two bodies separated by an adjustable distance/i,
    });
    expect(
      within(stage.parentElement!).getByText(/presets marked “illustrative” are everyday objects/),
    ).toBeVisible();
  });
});

describe('Phase 3 reading depth', () => {
  it('swaps prose between Quick, Standard and Deep', async () => {
    const user = userEvent.setup();
    renderAt('/gravity/escape-velocity');

    expect(screen.queryByText(/Why a threshold exists at all/)).toBeNull();
    await user.click(screen.getByRole('radio', { name: 'Standard' }));
    expect(screen.getByText(/Why a threshold exists at all/)).toBeVisible();

    await user.click(screen.getByRole('radio', { name: 'Deep' }));
    expect(
      screen.getByText(/The gravitational potential energy of mass m at radius r/),
    ).toBeVisible();
  });
});

describe('Phase 3 navigation', () => {
  it('goes back from a topic to its section using real history', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(
      [
        { path: ':sectionSlug', element: <SectionPage /> },
        { path: ':sectionSlug/:topicSlug', element: <TopicPage /> },
      ],
      { initialEntries: ['/gravity', '/gravity/tides'], initialIndex: 1 },
    );

    render(
      <ReaderPreferencesProvider>
        <RouterProvider router={router} />
      </ReaderPreferencesProvider>,
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tides');

    await user.click(screen.getByRole('button', { name: /Back to Gravity/ }));
    expect(router.state.location.pathname).toBe('/gravity');
  });

  it('goes back from a section to the home page using real history', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(
      [
        { path: '/', element: <HomePage /> },
        { path: ':sectionSlug', element: <SectionPage /> },
      ],
      { initialEntries: ['/', '/newton'], initialIndex: 1 },
    );

    render(
      <ReaderPreferencesProvider>
        <RouterProvider router={router} />
      </ReaderPreferencesProvider>,
    );

    await user.click(screen.getByRole('button', { name: /Back to all sections/ }));
    expect(router.state.location.pathname).toBe('/');
  });

  it('falls back to the section when a deep link has no history behind it', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(
      [
        { path: ':sectionSlug', element: <SectionPage /> },
        { path: ':sectionSlug/:topicSlug', element: <TopicPage /> },
      ],
      { initialEntries: ['/newton/third-law'] },
    );

    render(
      <ReaderPreferencesProvider>
        <RouterProvider router={router} />
      </ReaderPreferencesProvider>,
    );

    await user.click(screen.getByRole('button', { name: /Back to Newton's Laws/ }));
    expect(router.state.location.pathname).toBe('/newton');
  });

  it('resolves every Phase 3 deep link', () => {
    for (const slug of ['gravity', 'newton']) {
      for (const topic of getTopicsForSection(sectionId(slug))) {
        const view = renderAt(`/${slug}/${topic.slug}`);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(topic.title);
        view.unmount();
      }
    }
  });
});
