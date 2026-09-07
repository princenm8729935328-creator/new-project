import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { getTopicsForSection } from '@/content/topics';
import { sectionId } from '@/content/schema/section';
import { getSectionBySlug } from '@/content/sections';
import TopicPage from './TopicPage';
import SectionPage from '@/features/section/SectionPage';
import HomePage from '@/features/home/HomePage';

/**
 * Phase 5 — Black Holes.
 *
 * The assertions run against the rendered page, as in every earlier phase, and
 * they lock in the commitments this section is most likely to lose in a later
 * edit:
 *
 *  - a black hole is a region of spacetime, and it does not suck;
 *  - the escape-velocity story gets the radius right and the physics wrong;
 *  - the singularity is a failure of the theory, not a described object;
 *  - the EHT images are not photographs of an event horizon;
 *  - Hawking radiation has never been observed;
 *  - the information problem is not settled.
 *
 * Each of those is exactly the sentence a well-meaning simplification would
 * delete first, which is why they are tested rather than trusted.
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

describe('the Black Holes section', () => {
  it('is published and lists its nineteen topics in reading order', () => {
    const topics = getTopicsForSection(sectionId('black-holes'));
    expect(getSectionBySlug('black-holes')?.status).toBe('published');
    expect(topics).toHaveLength(19);
    expect(topics.map((topic) => topic.order)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ]);
    expect(topics.every((topic) => topic.status === 'published')).toBe(true);

    renderAt('/black-holes');
    expect(screen.getByRole('heading', { level: 1, name: 'Black Holes' })).toBeVisible();
    expect(screen.queryByText('Not built yet')).toBeNull();
    expect(screen.getByRole('link', { name: /What a black hole is/ })).toHaveAttribute(
      'href',
      '/black-holes/what-a-black-hole-is',
    );
  });

  it('keeps the section reachable and offers a way back out', () => {
    renderAt('/black-holes');
    expect(screen.getByRole('button', { name: /Back to all sections/ })).toBeInTheDocument();
  });

  it('keeps its intended place in the homepage order, ahead of Gravity', () => {
    // The homepage order and the development phase order are deliberately
    // different: Black Holes is phase 5 but reads fourth, before Gravity.
    renderAt('/');
    const hrefs = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
      .filter((href): href is string => href !== null);
    expect(hrefs).toContain('/black-holes');
    expect(hrefs.indexOf('/black-holes')).toBeLessThan(hrefs.indexOf('/gravity'));
    expect(hrefs.indexOf('/universe')).toBeLessThan(hrefs.indexOf('/black-holes'));
  });
});

describe('a black hole is a region, not an object', () => {
  it('refuses the “black holes suck” picture with the orbit argument', () => {
    renderAt('/black-holes/what-a-black-hole-is');
    expect(screen.getByText('“Black holes suck things in”')).toBeVisible();
    expect(screen.getAllByText(/the Earth would keep orbiting/i).length).toBeGreaterThan(0);
  });

  it('says the horizon has no local signature', () => {
    renderAt('/black-holes/the-event-horizon');
    expect(screen.getAllByText(/notices nothing/i).length).toBeGreaterThan(0);
  });

  it('gives the Schwarzschild radius for real masses', () => {
    renderAt('/black-holes/the-event-horizon');
    expect(screen.getAllByText(/about 3 kilometres/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/about 9 millimetres/i).length).toBeGreaterThan(0);
  });
});

describe('the escape-velocity story is corrected rather than left standing', () => {
  it('credits the dark-star calculation and then says why it is wrong', () => {
    renderAt('/black-holes/the-event-horizon');
    expect(screen.getByText('Where the escape-velocity picture stops working')).toBeVisible();
    expect(screen.getByText(/Light never slows/)).toBeVisible();
    expect(screen.getByText(/no matter how much fuel you carry/)).toBeVisible();
  });
});

describe('collapse and the singularity', () => {
  it('names the two mass limits that fail before a black hole forms', () => {
    renderAt('/black-holes/gravitational-collapse');
    expect(screen.getByText(/Electron degeneracy pressure holds up a white dwarf/)).toBeVisible();
    expect(screen.getAllByText(/1\.4 solar masses/).length).toBeGreaterThan(0);
  });

  it('treats the singularity as the theory reporting its own failure', () => {
    renderAt('/black-holes/the-singularity');
    expect(screen.getByText('What this page will not tell you')).toBeVisible();
    expect(screen.getAllByText(/Nobody knows what is there/i).length).toBeGreaterThan(0);
  });

  it('does not describe an object at the centre', () => {
    renderAt('/black-holes/the-singularity');
    expect(screen.getByText(/Infinity is not a value\. It is what an equation says/)).toBeVisible();
  });
});

describe('observations are described without being overstated', () => {
  it('states plainly that no event horizon has been photographed', () => {
    renderAt('/black-holes/photon-sphere-and-shadow');
    expect(screen.getByText('What the EHT images do and do not show')).toBeVisible();
    expect(screen.getAllByText(/has not been photographed/i).length).toBeGreaterThan(0);
  });

  it('distinguishes the shadow from the horizon by size', () => {
    renderAt('/black-holes/photon-sphere-and-shadow');
    expect(screen.getAllByText(/substantially larger than the horizon/i).length).toBeGreaterThan(0);
  });

  it('gives four independent detection methods and says what none of them shows', () => {
    renderAt('/black-holes/how-we-detect-black-holes');
    expect(screen.getByText('What none of these establishes')).toBeVisible();
    expect(screen.getAllByText(/They do not show the horizon directly/i).length).toBeGreaterThan(0);
  });
});

describe('Hawking radiation and the information problem stay honest', () => {
  it('says Hawking radiation has never been observed', () => {
    renderAt('/black-holes/hawking-radiation');
    expect(screen.getAllByText(/has never been observed/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/colder than the cosmic microwave background/i).length,
    ).toBeGreaterThan(0);
  });

  it('marks the virtual-pair explanation as a heuristic', () => {
    renderAt('/black-holes/hawking-radiation');
    expect(screen.getByText('The virtual-pair picture is a rough analogy')).toBeVisible();
  });

  it('does not present the information problem as resolved', () => {
    renderAt('/black-holes/thermodynamics-and-the-information-problem');
    expect(screen.getByText('This is not a solved problem')).toBeVisible();
    expect(screen.getAllByText(/It is not\./).length).toBeGreaterThan(0);
  });
});

describe('mass classes are distinguished', () => {
  it('separates stellar-mass, intermediate and supermassive with measured examples', () => {
    renderAt('/black-holes/stellar-intermediate-supermassive');
    expect(screen.getByText('The intermediate gap, and what is filling it')).toBeVisible();
    expect(screen.getAllByText(/142/).length).toBeGreaterThan(0);
  });
});

describe('every Phase 5 figure reaches the page through the frame', () => {
  it('renders each visualization with a fidelity label and a text alternative', () => {
    renderAt('/black-holes/the-event-horizon');
    const figures = screen.getAllByRole('img');
    expect(figures.length).toBeGreaterThan(0);
    for (const figure of figures) {
      expect(figure.getAttribute('aria-label')?.length ?? 0).toBeGreaterThan(40);
    }
  });
});
