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
const TimelinePage = lazy(() => import('@/features/timeline/TimelinePage'));

export function AppRoutes(): ReactNode {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="method" element={<MethodPage />} />
        {/*
          The Cosmic Timeline is the one section with a bespoke experience
          rather than a topic list, so it takes an explicit route ahead of the
          generic `:sectionSlug` one. Its milestone slug is a route param, which
          is what makes a milestone shareable.
        */}
        <Route path="cosmic-timeline" element={<TimelinePage />} />
        <Route path="cosmic-timeline/:eventSlug" element={<TimelinePage />} />
        <Route path=":sectionSlug" element={<SectionPage />} />
        <Route path=":sectionSlug/:topicSlug" element={<TopicPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
