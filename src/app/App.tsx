import { Suspense, type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReaderPreferencesProvider } from './providers/ReaderPreferencesProvider';
import { AppRoutes } from './routes';
import { RouteFallback } from './layout/RouteFallback';
import { ErrorBoundary } from './ErrorBoundary';

export function App(): ReactNode {
  return (
    <ErrorBoundary>
      <ReaderPreferencesProvider>
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </ReaderPreferencesProvider>
    </ErrorBoundary>
  );
}
