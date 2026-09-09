import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
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
 * These assert the honesty contract, not the styling: a section with no content
 * must say it has no content.
 */
describe('SectionPage', () => {
  it('renders a section from the registry', () => {
    renderAt('/gravity');
    expect(screen.getByRole('heading', { level: 1, name: 'Gravity' })).toBeInTheDocument();
  });

  it('states plainly that an unbuilt section is unbuilt', () => {
    // Quantum Physics filled this role until Phase 6 built it; Earth is the
    // next section still on the roadmap.
    renderAt('/earth');
    expect(screen.getByText('Not built yet')).toBeInTheDocument();
    expect(screen.getByText(/Scheduled for Phase 7/)).toBeInTheDocument();
  });

  it('falls back to the not-found page for an unknown slug', () => {
    renderAt('/wormholes-to-narnia');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'This page does not exist.',
    );
  });
});
