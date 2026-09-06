import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ReaderPreferencesProvider } from './providers/ReaderPreferencesProvider';
import { AppShell } from './layout/AppShell';
import { Route, Routes } from 'react-router-dom';
import HomePage from '@/features/home/HomePage';

/**
 * Shell smoke test. Mounts the real shell — atmosphere canvas, navigation
 * sheet, depth control — against the real content registry, so a broken
 * provider or a missing token file fails here rather than in a browser.
 */
function renderShell() {
  return render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

describe('AppShell', () => {
  it('renders the home page inside the shell', () => {
    renderShell();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'From the first moment to this one.',
    );
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument();
  });

  it('lists every section in the navigation sheet', async () => {
    const user = userEvent.setup();
    renderShell();

    await user.click(screen.getByRole('button', { name: 'Explore' }));
    const sheet = screen.getByRole('dialog', { name: 'Sections' });
    expect(sheet).toBeInTheDocument();

    // Scoped to the sheet: the home page lists the same sections behind it.
    const sheetScope = within(sheet);
    expect(sheetScope.getAllByRole('link')).toHaveLength(14);
    expect(sheetScope.getByRole('link', { name: /Cosmic Timeline/ })).toHaveAttribute(
      'href',
      '/cosmic-timeline',
    );
    // The Cosmic Timeline is built; the other thirteen say so plainly.
    expect(sheetScope.getAllByText(/Not built yet · Phase/)).toHaveLength(13);
    expect(
      within(sheetScope.getByRole('link', { name: /Cosmic Timeline/ })).queryByText(
        /Not built yet/,
      ),
    ).toBeNull();
  });

  it('lets the reader change reading depth', async () => {
    const user = userEvent.setup();
    renderShell();

    await user.click(screen.getByRole('button', { name: 'Explore' }));
    const technical = screen.getByRole('radio', { name: 'Technical' });
    expect(technical).not.toBeChecked();

    await user.click(technical);
    expect(technical).toBeChecked();
    expect(document.documentElement.dataset.depth).toBe('technical');
  });
});
