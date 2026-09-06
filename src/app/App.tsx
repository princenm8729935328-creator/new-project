import { Suspense, type ReactNode } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ReaderPreferencesProvider } from './providers/ReaderPreferencesProvider';
import { AppRoutes } from './routes';
import { RouteFallback } from './layout/RouteFallback';
import { ErrorBoundary } from './ErrorBoundary';

/**
 * History routing needs a host that serves index.html as an SPA fallback.
 * Single-file builds (the self-contained HTML published as an artifact) have no
 * server at all, so they are built with `VITE_ROUTER=hash` and route in the
 * fragment instead. Nothing else in the app is aware of the difference.
 */
const Router = import.meta.env['VITE_ROUTER'] === 'hash' ? HashRouter : BrowserRouter;

export function App(): ReactNode {
  return (
    <ErrorBoundary>
      <ReaderPreferencesProvider>
        <Router>
          <Suspense fallback={<RouteFallback />}>
            <AppRoutes />
          </Suspense>
        </Router>
      </ReaderPreferencesProvider>
    </ErrorBoundary>
  );
}
