/**
 * The whole content set, assembled.
 *
 * One import point for anything that needs to see everything at once:
 * validation, search indexing, the knowledge graph, and export tooling. Pages
 * should import the narrower modules instead — pulling the library into a route
 * chunk would defeat code splitting.
 */
import type { ContentLibrary } from './schema/validate';
import { SECTIONS } from './sections';
import { TOPICS } from './topics';
import { REFERENCES } from './references';
import { GLOSSARY } from './glossary';
import { VISUALIZATIONS } from './visualizations';
import { TIMELINE_ERAS, TIMELINE_EVENTS } from './timeline';

export const LIBRARY: ContentLibrary = {
  sections: SECTIONS,
  topics: TOPICS,
  references: REFERENCES,
  glossary: GLOSSARY,
  visualizations: VISUALIZATIONS,
  timelineEvents: TIMELINE_EVENTS,
  timelineEras: TIMELINE_ERAS,
};
