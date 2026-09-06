import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { getTopicsForSection } from '@/content/topics';
import { sectionId } from '@/content/schema/section';
import TopicPage from './TopicPage';
import SectionPage from '@/features/section/SectionPage';

function renderTopic(path: string) {
  return render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path=":sectionSlug" element={<SectionPage />} />
          <Route path=":sectionSlug/:topicSlug" element={<TopicPage />} />
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

describe('Universe & Cosmology section', () => {
  it('lists all seventeen topics in reading order', () => {
    renderTopic('/universe');
    const topics = getTopicsForSection(sectionId('universe'));
    expect(topics).toHaveLength(17);
    expect(topics.map((topic) => topic.order)).toEqual([...topics].map((_, index) => index + 1));
    expect(screen.getByRole('heading', { level: 1, name: 'Universe & Cosmology' })).toBeVisible();
  });

  it('no longer shows the "not built yet" notice', () => {
    renderTopic('/universe');
    expect(screen.queryByText('Not built yet')).toBeNull();
  });

  it('offers a back link out of the section', () => {
    renderTopic('/universe');
    expect(screen.getByRole('button', { name: /Back to all sections/ })).toBeInTheDocument();
  });
});

describe('a Universe topic', () => {
  it('renders its blocks with evidence badges and sources', () => {
    renderTopic('/universe/big-bang-model');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'What the Big Bang model actually says',
    );
    expect(screen.getAllByText('Scientific model').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Established').length).toBeGreaterThan(0);
    // Sources render as outbound links on the DOI.
    expect(
      screen.getAllByRole('link', { name: /Planck Collaboration \(2020\)/ }).length,
    ).toBeGreaterThan(0);
  });

  it('offers a back link to its section', () => {
    renderTopic('/universe/dark-matter');
    expect(
      screen.getByRole('button', { name: /Back to Universe & Cosmology/ }),
    ).toBeInTheDocument();
  });

  it('falls back to the not-found page for an unknown topic', () => {
    renderTopic('/universe/does-not-exist');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'This page does not exist.',
    );
  });
});

/**
 * These assert the scientific-accuracy requirements directly against the
 * rendered page, not against the source files — so a future edit that softens
 * one of them fails here.
 */
describe('scientific accuracy in the rendered pages', () => {
  it('says the Big Bang was not an explosion in space', () => {
    renderTopic('/universe/big-bang-model');
    expect(screen.getByText(/did not happen at a point in space/i)).toBeInTheDocument();
  });

  it('labels inflation as active research and states its prediction is undetected', () => {
    renderTopic('/universe/inflation');
    expect(screen.getAllByText('Active research').length).toBeGreaterThan(0);
    expect(screen.getByText(/has not been detected/i)).toBeInTheDocument();
    expect(screen.getByText(/Why this page says “proposal”, not “fact”/)).toBeInTheDocument();
  });

  it('says no dark-matter particle has been detected', () => {
    renderTopic('/universe/dark-matter');
    expect(screen.getByText(/No dark-matter particle has ever been detected/i)).toBeInTheDocument();
    expect(
      screen.getByText(/What “dark matter exists” does and does not mean/),
    ).toBeInTheDocument();
  });

  it('separates observed acceleration from unknown dark energy', () => {
    renderTopic('/universe/dark-energy');
    expect(screen.getByText(/Nobody knows what dark energy is/i)).toBeInTheDocument();
  });

  it('distinguishes the observable Universe from the whole Universe', () => {
    renderTopic('/universe/observable-universe');
    expect(screen.getByText(/may be infinite/i)).toBeInTheDocument();
    expect(screen.getByText(/“How big is the Universe\?”/)).toBeInTheDocument();
  });

  it('marks where established physics runs out', () => {
    renderTopic('/universe/earliest-universe');
    expect(screen.getByText(/no tested theory applies/i)).toBeInTheDocument();
    expect(screen.getAllByText('Open question').length).toBeGreaterThan(0);
  });

  it('labels the multiverse as speculation, not science', () => {
    renderTopic('/universe/open-questions');
    expect(screen.getAllByText('Speculation').length).toBeGreaterThan(0);
    expect(screen.getByText(/This is not established science/i)).toBeInTheDocument();
  });
});

describe('reading depth', () => {
  it('swaps the prose when the reader changes depth', async () => {
    const user = userEvent.setup();
    renderTopic('/universe/expansion');

    // "Quick" is the default; the detailed text should not be on screen.
    expect(screen.queryByText(/Hubble published the distance–velocity relation/)).toBeNull();

    await user.click(screen.getByRole('radio', { name: 'Standard' }));
    expect(screen.getByText(/Hubble published the distance–velocity relation/)).toBeInTheDocument();

    await user.click(screen.getByRole('radio', { name: 'Deep' }));
    expect(screen.getByText(/v = H₀ d for nearby galaxies/)).toBeInTheDocument();
  });
});

describe('back navigation', () => {
  it('returns to the previous page rather than a hard-coded route', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(
      [
        { path: ':sectionSlug', element: <SectionPage /> },
        { path: ':sectionSlug/:topicSlug', element: <TopicPage /> },
      ],
      { initialEntries: ['/universe', '/universe/dark-matter'], initialIndex: 1 },
    );

    render(
      <ReaderPreferencesProvider>
        <RouterProvider router={router} />
      </ReaderPreferencesProvider>,
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dark matter');

    await user.click(screen.getByRole('button', { name: /Back to Universe & Cosmology/ }));
    expect(router.state.location.pathname).toBe('/universe');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Universe & Cosmology');
  });

  it('falls back to the section when there is no history to go back to', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(
      [
        { path: ':sectionSlug', element: <SectionPage /> },
        { path: ':sectionSlug/:topicSlug', element: <TopicPage /> },
      ],
      { initialEntries: ['/universe/dark-matter'] },
    );

    render(
      <ReaderPreferencesProvider>
        <RouterProvider router={router} />
      </ReaderPreferencesProvider>,
    );

    await user.click(screen.getByRole('button', { name: /Back to Universe & Cosmology/ }));
    expect(router.state.location.pathname).toBe('/universe');
  });
});

describe('topic figures', () => {
  it('renders every figure through the frame, with its fidelity badge and caption', () => {
    renderTopic('/universe/dark-matter');
    const figure = screen.getByRole('figure', { hidden: true }) ?? null;
    // The frame renders a <figure> with a titled heading and a fidelity badge.
    expect(screen.getByRole('heading', { name: 'Why galaxies need dark matter' })).toBeVisible();
    expect(screen.getByText('Conceptual diagram')).toBeVisible();
    expect(figure).not.toBeUndefined();
    const stage = screen.getByRole('img', { name: /orbital speed against distance/i });
    expect(
      within(stage.parentElement!).getByText(/reproducing the qualitative result/),
    ).toBeVisible();
  });
});
