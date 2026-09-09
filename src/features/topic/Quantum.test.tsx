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
 * Phase 6 — Quantum Physics.
 *
 * Quantum mechanics is the part of physics with the largest gap between what it
 * says and what it is popularly reported to say, so the assertions here are
 * almost all about sentences a well-meaning simplification would delete first:
 *
 *  - measurement is a physical interaction, not an act of attention, and
 *    consciousness has no role in it;
 *  - a superposition is not a particle in two classical places at once;
 *  - the uncertainty relation is a property of states, not of clumsy apparatus;
 *  - entanglement cannot carry a signal;
 *  - the vacuum is not full of particles popping in and out;
 *  - the Standard Model is incomplete, and says so;
 *  - no quantum-gravity proposal has experimental support, string theory
 *    included;
 *  - physics has not shown that time is an illusion;
 *  - no interpretation has been experimentally established.
 *
 * Each is tested against the rendered page rather than against the content
 * module, because what matters is what a reader actually sees.
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

describe('the Quantum Physics section', () => {
  it('is published and lists its thirty-two topics in reading order', () => {
    const topics = getTopicsForSection(sectionId('quantum'));
    expect(getSectionBySlug('quantum')?.status).toBe('published');
    expect(topics).toHaveLength(32);
    expect(topics.map((topic) => topic.order)).toEqual(
      Array.from({ length: 32 }, (_, index) => index + 1),
    );
    expect(topics.every((topic) => topic.status === 'published')).toBe(true);

    renderAt('/quantum');
    expect(screen.getByRole('heading', { level: 1, name: 'Quantum Physics' })).toBeVisible();
    expect(screen.queryByText('Not built yet')).toBeNull();
    expect(screen.getByRole('link', { name: /Where classical physics ran out/ })).toHaveAttribute(
      'href',
      '/quantum/where-classical-physics-ran-out',
    );
  });

  it('keeps the section reachable and offers a way back out', () => {
    renderAt('/quantum');
    expect(screen.getByRole('button', { name: /Back to all sections/ })).toBeInTheDocument();
  });

  it('keeps its intended place in the homepage order, after Relativity', () => {
    // Homepage order is deliberately not phase order: Quantum is phase 6 and
    // reads eighth, after Einstein & Relativity and before Earth.
    renderAt('/');
    const hrefs = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
      .filter((href): href is string => href !== null);
    expect(hrefs).toContain('/quantum');
    expect(hrefs.indexOf('/relativity')).toBeLessThan(hrefs.indexOf('/quantum'));
    expect(hrefs.indexOf('/quantum')).toBeLessThan(hrefs.indexOf('/earth'));
  });

  it('leaves the creator credit exactly as it was', () => {
    renderAt('/');
    expect(screen.getAllByText(/Munna — The Übermensch/).length).toBeGreaterThan(0);
  });
});

describe('the foundations are told as a chain of forced moves', () => {
  it('says why the classical failures could not be patched', () => {
    renderAt('/quantum/where-classical-physics-ran-out');
    expect(screen.getByText('Why these could not be patched')).toBeVisible();
  });

  it('refuses the story that the ultraviolet catastrophe was an observed disaster', () => {
    renderAt('/quantum/blackbody-radiation');
    expect(
      screen.getByText('“The ultraviolet catastrophe was an observed disaster”'),
    ).toBeVisible();
  });

  it('records that Planck did not believe his own quantum at first', () => {
    renderAt('/quantum/plancks-quantum');
    expect(screen.getByText('An act of desperation')).toBeVisible();
  });

  it('does not let a photon become a tiny bullet of light', () => {
    renderAt('/quantum/photons-and-the-photoelectric-effect');
    expect(screen.getByText('A photon is not a tiny bullet of light')).toBeVisible();
  });

  it('withdraws the Bohr model after using it', () => {
    renderAt('/quantum/atomic-spectra-and-the-bohr-model');
    expect(screen.getByText('Why the Bohr model is taught and then withdrawn')).toBeVisible();
  });
});

describe('measurement is physical, and consciousness plays no part', () => {
  it('rejects the claim that the particle knows it is being watched', () => {
    renderAt('/quantum/the-double-slit-experiment');
    expect(screen.getByText('“The particle knows it is being watched”')).toBeVisible();
  });

  it('says no awareness and no observer are required', () => {
    renderAt('/quantum/the-double-slit-experiment');
    expect(
      screen.getAllByText(/no awareness, no decision, and no observer required/i).length,
    ).toBeGreaterThan(0);
  });

  it('marks where the established account stops', () => {
    renderAt('/quantum/what-measurement-means');
    expect(screen.getByText('Where the established part stops')).toBeVisible();
  });
});

describe('superposition and uncertainty are stated without the usual distortions', () => {
  it('does not let a quantum state become ignorance about a hidden value', () => {
    renderAt('/quantum/quantum-states-and-amplitudes');
    expect(screen.getByText('“The state just represents what we don’t know”')).toBeVisible();
  });

  it("keeps Schrödinger's cat as an objection rather than an illustration", () => {
    renderAt('/quantum/superposition');
    expect(
      screen.getByText('Schrödinger’s cat was an objection, not an illustration'),
    ).toBeVisible();
  });

  it('says the uncertainty relation is not about instruments disturbing things', () => {
    renderAt('/quantum/the-uncertainty-principle');
    expect(
      screen.getByText('“Measuring position kicks the particle, so you lose the momentum”'),
    ).toBeVisible();
    expect(screen.getAllByText(/property of the state itself/i).length).toBeGreaterThan(0);
  });
});

describe('entanglement is strong, and still cannot send anything', () => {
  it('rules out the faster-than-light reading directly', () => {
    renderAt('/quantum/entanglement');
    expect(
      screen.getByText('“Quantum teleportation sends things faster than light”'),
    ).toBeVisible();
  });

  it('says what Bell tests establish and what they do not', () => {
    renderAt('/quantum/bells-theorem-and-the-experiments');
    expect(screen.getByText('What Bell tests do and do not establish')).toBeVisible();
    expect(
      screen.getAllByText(/do not establish that anything travels faster than light/i).length,
    ).toBeGreaterThan(0);
  });
});

describe('tunnelling is connected to things that exist', () => {
  it('names alpha decay, stellar fusion and the tunnelling microscope', () => {
    renderAt('/quantum/quantum-tunnelling');
    expect(screen.getAllByText(/alpha/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/scanning tunnelling microscope/i).length).toBeGreaterThan(0);
  });
});

describe('fields, the Standard Model and the vacuum', () => {
  it('does not pretend the Standard Model is complete', () => {
    renderAt('/quantum/the-standard-model');
    expect(screen.getByText('Extremely successful, and definitely not complete')).toBeVisible();
  });

  it('refuses the popcorn picture of the vacuum', () => {
    renderAt('/quantum/the-quantum-vacuum');
    expect(
      screen.getByText('“Empty space is full of particles popping in and out of existence”'),
    ).toBeVisible();
  });
});

describe('quantum gravity and string theory keep their confidence low', () => {
  it('says no candidate theory of quantum gravity has experimental support', () => {
    renderAt('/quantum/quantum-theory-and-gravity');
    expect(
      screen.getByText('No candidate theory of quantum gravity has experimental support'),
    ).toBeVisible();
  });

  it('separates framework, motivation, prediction and evidence for string theory', () => {
    renderAt('/quantum/what-is-string-theory');
    expect(screen.getByText('Framework, motivation, prediction, evidence')).toBeVisible();
    expect(screen.getAllByText(/no experimental evidence whatsoever/i).length).toBeGreaterThan(0);
  });
});

describe('time is treated carefully in both directions', () => {
  it('does not let the entropy account settle more than it does', () => {
    renderAt('/quantum/what-is-time');
    expect(screen.getByText('What the entropy account does and does not settle')).toBeVisible();
  });

  it('keeps the five senses of the word apart rather than collapsing them', () => {
    renderAt('/quantum/does-time-really-exist');
    expect(screen.getAllByText(/Only the last one is genuinely unsettled/i).length).toBeGreaterThan(
      0,
    );
  });

  it('does not claim physics has proved time is an illusion', () => {
    renderAt('/quantum/does-time-really-exist');
    expect(screen.getByText('“Physics has proved time is an illusion”')).toBeVisible();
    expect(screen.getAllByText(/That is not an illusion/i).length).toBeGreaterThan(0);
  });
});

describe('the cosmological and interpretive frontier stays honest', () => {
  it('does not claim quantum mechanics explains the origin of the Universe', () => {
    renderAt('/quantum/quantum-physics-and-the-early-universe');
    expect(screen.getByText('This does not explain where the Universe came from')).toBeVisible();
  });

  it('does not declare any interpretation experimentally established', () => {
    renderAt('/quantum/interpretations-of-quantum-mechanics');
    expect(screen.getByText('No interpretation has been experimentally established')).toBeVisible();
  });

  it('sorts every major claim into four honesty tiers', () => {
    renderAt('/quantum/how-quantum-physics-sees-the-universe');
    expect(screen.getAllByText(/^KNOWN —/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^STRONGLY SUPPORTED —/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^ACTIVE RESEARCH —/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^SPECULATIVE OR UNRESOLVED —/).length).toBeGreaterThan(0);
  });

  it('names what quantum physics does not currently provide', () => {
    renderAt('/quantum/how-quantum-physics-sees-the-universe');
    expect(screen.getByText('What quantum physics does not currently provide')).toBeVisible();
  });
});

describe('every Phase 6 figure reaches the page through the frame', () => {
  it('renders each visualization with a fidelity label and a text alternative', () => {
    renderAt('/quantum/the-double-slit-experiment');
    const figures = screen.getAllByRole('img');
    expect(figures.length).toBeGreaterThan(0);
    for (const figure of figures) {
      expect(figure.getAttribute('aria-label')?.length ?? 0).toBeGreaterThan(40);
    }
  });
});

describe('every Quantum topic carries a summary and a comprehension check', () => {
  it('renders both headings on a topic from each part of the section', () => {
    for (const slug of [
      'blackbody-radiation',
      'the-double-slit-experiment',
      'the-uncertainty-principle',
      'entanglement',
      'the-quantum-vacuum',
      'what-is-time',
      'how-quantum-physics-sees-the-universe',
    ]) {
      const view = renderAt(`/quantum/${slug}`);
      expect(screen.getByRole('heading', { name: 'Topic summary' })).toBeVisible();
      expect(screen.getByRole('heading', { name: 'Check your understanding' })).toBeVisible();
      view.unmount();
    }
  });
});
