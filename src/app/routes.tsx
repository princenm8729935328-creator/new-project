import { lazy, type ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppShell } from './layout/AppShell';

/**
 * Route table.
 *
 * Sections are *not* enumerated here — `/:sectionSlug` resolves against the
 * section registry in the content layer. Adding a section therefore adds a
 * route for free, which is the whole point of describing sections as data.
 *
 * Every page below the shell is lazily loaded so the first paint ships the
 * shell and nothing else.
 */
const HomePage = lazy(() => import('@/features/home/HomePage'));
const SectionPage = lazy(() => import('@/features/section/SectionPage'));
const TopicPage = lazy(() => import('@/features/topic/TopicPage'));
const MethodPage = lazy(() => import('@/features/method/MethodPage'));
const NotFoundPage = lazy(() => import('@/features/errors/NotFoundPage'));

export function AppRoutes(): ReactNode {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="method" element={<MethodPage />} />
        <Route path=":sectionSlug" element={<SectionPage />} />
        <Route path=":sectionSlug/:topicSlug" element={<TopicPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
