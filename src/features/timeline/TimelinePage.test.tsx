import { describe, expect, it } from 'vitest';
import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { TIMELINE_EVENTS } from '@/content/timeline';
import TimelinePage from './TimelinePage';

/**
 * Travel between milestones is a deliberate 0.5–1.6 second animation, so
 * assertions about where the reader ends up need longer than waitFor's
 * one-second default.
 */
const TRAVEL_TIMEOUT = 4000;

function renderTimeline(path = '/cosmic-timeline') {
  return render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="cosmic-timeline" element={<TimelinePage />} />
          <Route path="cosmic-timeline/:eventSlug" element={<TimelinePage />} />
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

describe('CosmicOpening', () => {
  it('opens with the framing statement about the hot, dense state', () => {
    renderTimeline();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /billion years ago, everything we can observe was in an extremely hot, dense state/i,
    );
  });

  it('corrects the "explosion in space" misconception before the journey starts', () => {
    renderTimeline();
    expect(screen.getByText(/not an explosion in empty space/i)).toBeInTheDocument();
  });

  it('offers both a start and a skip', () => {
    renderTimeline();
    expect(screen.getByRole('button', { name: /Begin at the beginning/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Skip to the present/ })).toBeInTheDocument();
  });
});

describe('travelling the timeline', () => {
  it('starts at the first milestone and advances', async () => {
    const user = userEvent.setup();
    renderTimeline();
    await user.click(screen.getByRole('button', { name: /Begin at the beginning/ }));

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(TIMELINE_EVENTS[0]!.title);

    // Travel is animated, so the assertion waits for it to settle.
    await user.click(screen.getByRole('button', { name: /Later/ }));
    await waitFor(
      () =>
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
          TIMELINE_EVENTS[1]!.title,
        ),
      { timeout: TRAVEL_TIMEOUT },
    );

    await user.click(screen.getByRole('button', { name: /Earlier/ }));
    await waitFor(
      () =>
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
          TIMELINE_EVENTS[0]!.title,
        ),
      { timeout: TRAVEL_TIMEOUT },
    );
  });

  it('disables Earlier at the beginning and Later at the present', async () => {
    const user = userEvent.setup();
    renderTimeline();
    await user.click(screen.getByRole('button', { name: /Begin at the beginning/ }));
    expect(screen.getByRole('button', { name: /Earlier/ })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: /Jump to present/ }));
    await waitFor(() => expect(screen.getByRole('button', { name: /Later/ })).toBeDisabled(), {
      timeout: TRAVEL_TIMEOUT,
    });
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      TIMELINE_EVENTS[TIMELINE_EVENTS.length - 1]!.title,
    );
  });

  it('deep-links straight to a milestone, skipping the opening', () => {
    renderTimeline('/cosmic-timeline/kpg-extinction');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'An asteroid ends the Cretaceous',
    );
    expect(screen.queryByRole('button', { name: /Begin at the beginning/ })).toBeNull();
  });

  /**
   * Regression test. The URL-sync effect used to overwrite an incoming URL
   * change before the journey had moved, so opening a shared milestone link
   * from an already-open timeline bounced the reader straight back.
   */
  it('follows the URL when it changes underneath an open timeline', async () => {
    const router = createMemoryRouter(
      [
        { path: 'cosmic-timeline', element: <TimelinePage /> },
        { path: 'cosmic-timeline/:eventSlug', element: <TimelinePage /> },
      ],
      { initialEntries: ['/cosmic-timeline/dark-ages'] },
    );

    render(
      <ReaderPreferencesProvider>
        <RouterProvider router={router} />
      </ReaderPreferencesProvider>,
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('The Dark Ages');

    await act(async () => {
      await router.navigate('/cosmic-timeline/hominin-bush');
    });

    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
        'Many human species at once',
      ),
    );
    expect(router.state.location.pathname).toBe('/cosmic-timeline/hominin-bush');
  });

  it('exposes the axis as a keyboard-operable slider', async () => {
    const user = userEvent.setup();
    renderTimeline('/cosmic-timeline/hot-dense-beginning');
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '0');

    slider.focus();
    await user.keyboard('{ArrowRight}');
    await waitFor(() => expect(slider).toHaveAttribute('aria-valuenow', '1'), {
      timeout: TRAVEL_TIMEOUT,
    });
  });
});

describe('milestone content', () => {
  it('shows the four narrative sections and the evidence level', () => {
    renderTimeline('/cosmic-timeline/inflation');
    expect(screen.getByRole('heading', { name: 'What happened' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Why it matters' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'How we know' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /What we're still unsure about/ }),
    ).toBeInTheDocument();
    expect(screen.getByText('Active research')).toBeInTheDocument();
  });

  it('labels inflation as a model rather than as established fact', () => {
    renderTimeline('/cosmic-timeline/inflation');
    expect(screen.getByText(/has not been detected/i)).toBeInTheDocument();
    expect(screen.queryByText('Established')).toBeNull();
  });

  it('cites sources for every milestone it renders', () => {
    renderTimeline('/cosmic-timeline/recombination');
    const sources = screen.getByRole('heading', { name: 'Sources' }).parentElement;
    expect(sources).not.toBeNull();
    expect(within(sources!).getAllByRole('link').length).toBeGreaterThan(0);
  });

  it('presents human evolution as branching rather than as a ladder', () => {
    renderTimeline('/cosmic-timeline/hominin-bush');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Many human species at once',
    );
    expect(screen.getByText(/Evolution branches; it does not climb/i)).toBeInTheDocument();
  });
});

describe('scale honesty', () => {
  it('shows the true linear scale alongside the warped axis', () => {
    renderTimeline('/cosmic-timeline/agriculture');
    expect(screen.getByText('True linear scale')).toBeInTheDocument();
    expect(screen.getByText(/% of cosmic time/)).toBeInTheDocument();
  });

  it('explains the compression when asked', async () => {
    const user = userEvent.setup();
    renderTimeline('/cosmic-timeline/agriculture');
    await user.click(screen.getByRole('button', { name: /Why is the timeline above not linear/ }));
    expect(screen.getByText(/a linear timeline is unreadable/i)).toBeInTheDocument();
    // The sentence is split across an <em>, so match a contiguous fragment.
    expect(screen.getByText(/the visual distance between two milestones/i)).toBeInTheDocument();
  });
});
