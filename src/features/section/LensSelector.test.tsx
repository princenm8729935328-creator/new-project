import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { SECTIONS } from '@/content/sections';
import { TOPICS } from '@/content/topics';
import { LENS_IDS, LENS_META } from '@/content/schema/lens';
import SectionPage from './SectionPage';

function renderAt(path: string) {
  return render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path=":sectionSlug" element={<SectionPage />} />
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

/**
 * The two-lens structure, before either lens has any content.
 *
 * These assert the structure and the honesty contract: the choice exists, it
 * defaults to the scientific lens, switching it does not fabricate content, and
 * no other section has acquired a selector.
 */
describe('the Human Evolution lens selector', () => {
  it('offers exactly the two lenses, each stating its question', () => {
    renderAt('/human-evolution');
    const group = screen.getByRole('group', { name: 'Lens' });
    const options = within(group).getAllByRole('radio');

    expect(options).toHaveLength(2);
    expect(
      within(group).getByRole('radio', { name: /Scientific Lens.*How did we become human\?/s }),
    ).toBeInTheDocument();
    expect(
      within(group).getByRole('radio', {
        name: /Philosophical Lens.*What does it mean to be human\?/s,
      }),
    ).toBeInTheDocument();
  });

  it('selects the Scientific Lens by default', () => {
    renderAt('/human-evolution');
    expect(screen.getByRole('radio', { name: /Scientific Lens/ })).toBeChecked();
    expect(screen.getByRole('radio', { name: /Philosophical Lens/ })).not.toBeChecked();
    expect(
      screen.getByRole('heading', { level: 2, name: 'How did we become human?' }),
    ).toBeInTheDocument();
  });

  it('switches the panel when the reader picks the other lens', async () => {
    const user = userEvent.setup();
    renderAt('/human-evolution');

    await user.click(screen.getByRole('radio', { name: /Philosophical Lens/ }));

    expect(screen.getByRole('radio', { name: /Philosophical Lens/ })).toBeChecked();
    expect(
      screen.getByRole('heading', { level: 2, name: 'What does it mean to be human?' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { level: 2, name: 'How did we become human?' }),
    ).not.toBeInTheDocument();
  });

  it('is reachable and operable by keyboard alone', async () => {
    const user = userEvent.setup();
    renderAt('/human-evolution');
    const scientific = screen.getByRole('radio', { name: /Scientific Lens/ });
    const philosophical = screen.getByRole('radio', { name: /Philosophical Lens/ });

    scientific.focus();
    expect(scientific).toHaveFocus();

    // A native radio group moves selection with the arrow keys, which is what
    // using real radios buys and what a custom tab widget would have to
    // reimplement.
    await user.keyboard('{ArrowRight}');
    expect(philosophical).toBeChecked();
    expect(philosophical).toHaveFocus();

    await user.keyboard('{ArrowLeft}');
    expect(scientific).toBeChecked();
  });

  it('gives each lens its own reading list, with no overlap', async () => {
    const user = userEvent.setup();
    renderAt('/human-evolution');

    // Both lenses are now written, so neither shows the unbuilt notice.
    expect(screen.queryByText('Not built yet')).not.toBeInTheDocument();
    const scientificTitles = within(screen.getByRole('list'))
      .getAllByRole('listitem')
      .map((item) => item.textContent);
    expect(scientificTitles.length).toBeGreaterThan(50);

    await user.click(screen.getByRole('radio', { name: /Philosophical Lens/ }));
    expect(screen.queryByText('Not built yet')).not.toBeInTheDocument();
    const philosophicalTitles = within(screen.getByRole('list'))
      .getAllByRole('listitem')
      .map((item) => item.textContent);
    expect(philosophicalTitles.length).toBeGreaterThan(50);

    // The whole point of the two-lens structure: switching lenses swaps the
    // curriculum entirely rather than filtering one list.
    for (const title of philosophicalTitles) {
      expect(scientificTitles).not.toContain(title);
    }
  });

  it('leaves every other section without a lens selector', () => {
    for (const slug of ['gravity', 'earth', 'life', 'quantum', 'dark-universe']) {
      const view = renderAt(`/${slug}`);
      expect(screen.queryByRole('group', { name: 'Lens' })).not.toBeInTheDocument();
      view.unmount();
    }
  });
});

describe('the lens content model', () => {
  it('declares both lenses on Human Evolution and on no other section', () => {
    const lensed = SECTIONS.filter((section) => section.lenses && section.lenses.length > 0);
    expect(lensed.map((section) => section.slug)).toEqual(['human-evolution']);
    expect(lensed[0]?.lenses).toEqual(['scientific', 'philosophical']);
  });

  it('keeps the two lenses distinct in what they claim to answer', () => {
    expect(LENS_IDS).toEqual(['scientific', 'philosophical']);
    expect(LENS_META.scientific.question).toBe('How did we become human?');
    expect(LENS_META.philosophical.question).toBe('What does it mean to be human?');
    expect(LENS_META.scientific.question).not.toBe(LENS_META.philosophical.question);
  });

  it('carries both curricula, each numbered in its own range', () => {
    // The lenses are independent by construction: each list is contiguous
    // within its own range, so neither renumbers when the other grows.
    const lensed = TOPICS.filter((topic) => topic.lens !== undefined);
    const scientific = lensed.filter((topic) => topic.lens === 'scientific');
    const philosophical = lensed.filter((topic) => topic.lens === 'philosophical');

    expect(scientific.length).toBeGreaterThan(50);
    expect(philosophical.length).toBeGreaterThan(50);
    expect(scientific.length + philosophical.length).toBe(lensed.length);

    // Every topic in a lensed section declares which lens it belongs to.
    const humanEvolution = SECTIONS.find((section) => section.slug === 'human-evolution');
    const inSection = TOPICS.filter((topic) => topic.sectionId === humanEvolution?.id);
    expect(inSection.every((topic) => topic.lens !== undefined)).toBe(true);

    const orders = (list: typeof lensed): number[] =>
      list.map((t) => t.order).sort((a, b) => a - b);
    expect(Math.max(...orders(scientific))).toBeLessThan(Math.min(...orders(philosophical)));
  });

  it('marks both lenses published now that each has content', () => {
    expect(LENS_META.scientific.status).toBe('published');
    expect(LENS_META.philosophical.status).toBe('published');
  });
});
