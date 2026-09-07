/**
 * Content integrity checks.
 *
 * These are the scientific-accuracy rules from PROJECT_PLAN.md expressed as
 * code. `validateLibrary` runs over the whole content set in the test suite, so
 * an uncited claim or a dangling cross-link fails CI rather than shipping.
 *
 * Deliberately dependency-free: the content layer must remain importable from a
 * plain Node script (linting, export, review tooling) with no bundler.
 */
import type { ContentBlock } from './blocks';
import { blockReferences } from './blocks';
import { EVIDENCE_LEVEL_META, isEvidenceLevel } from './evidence';
import type { GlossaryTerm } from './glossary';
import {
  correctOption,
  RECAP_MAX_OPTIONS,
  RECAP_MAX_QUESTIONS,
  RECAP_MIN_OPTIONS,
  RECAP_MIN_QUESTIONS,
  type RecapsByTopic,
} from './recap';
import type { Reference, ReferenceId } from './reference';
import type { Section, SectionId } from './section';
import type { TimelineEra, TimelineEvent } from './timeline';
import type { Topic, TopicId } from './topic';
import type { VisualizationSpec, VisualizationId } from './visualization';

export interface ValidationIssue {
  /** Where the problem is, e.g. `topic:big-bang / block:claim-3`. */
  readonly path: string;
  readonly message: string;
  readonly severity: 'error' | 'warning';
}

export interface ContentLibrary {
  readonly sections: readonly Section[];
  readonly topics: readonly Topic[];
  readonly references: readonly Reference[];
  readonly glossary: readonly GlossaryTerm[];
  readonly visualizations: readonly VisualizationSpec[];
  readonly timelineEvents: readonly TimelineEvent[];
  readonly timelineEras?: readonly TimelineEra[];
  /** Keyed by topic id; every published topic must have one. */
  readonly recaps?: RecapsByTopic;
}

function error(path: string, message: string): ValidationIssue {
  return { path, message, severity: 'error' };
}

function warning(path: string, message: string): ValidationIssue {
  return { path, message, severity: 'warning' };
}

function duplicates<T>(values: readonly T[]): T[] {
  const seen = new Set<T>();
  const dupes = new Set<T>();
  for (const value of values) {
    if (seen.has(value)) dupes.add(value);
    seen.add(value);
  }
  return [...dupes];
}

/** Rules that apply to a single block, independent of the rest of the library. */
export function validateBlock(block: ContentBlock, path: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  switch (block.kind) {
    case 'claim': {
      if (!isEvidenceLevel(block.evidence)) {
        issues.push(error(path, `unknown evidence level "${String(block.evidence)}"`));
        break;
      }
      const required = EVIDENCE_LEVEL_META[block.evidence].minReferences;
      if (block.references.length < required) {
        issues.push(
          error(
            path,
            `a "${block.evidence}" claim needs at least ${required} reference(s), found ${block.references.length}`,
          ),
        );
      }
      if (block.evidence === 'speculation' && !block.speculationNote) {
        issues.push(
          error(path, 'a speculation claim must carry a speculationNote saying what would test it'),
        );
      }
      break;
    }
    case 'open-question': {
      if (block.references.length === 0) {
        issues.push(
          error(path, 'an open question must cite the work that establishes it is still open'),
        );
      }
      break;
    }
    case 'quantity': {
      block.quantities.forEach((quantity, index) => {
        if (quantity.references.length === 0) {
          issues.push(
            error(`${path}/quantity:${quantity.id || index}`, 'a value must cite a source'),
          );
        }
        if (!quantity.uncertainty) {
          issues.push(
            warning(
              `${path}/quantity:${quantity.id || index}`,
              'no uncertainty given; state one, or mark it as approximate',
            ),
          );
        }
      });
      break;
    }
    case 'prose':
    case 'visualization':
    case 'callout':
    case 'definition':
    case 'cross-link':
      break;
  }

  return issues;
}

/** Cross-cutting rules: every id a topic points at must actually exist. */
export function validateLibrary(library: ContentLibrary): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  const sectionIds = new Set<SectionId>(library.sections.map((section) => section.id));
  const topicIds = new Set<TopicId>(library.topics.map((topic) => topic.id));
  const referenceIds = new Set<ReferenceId>(library.references.map((reference) => reference.id));
  const glossaryIds = new Set(library.glossary.map((term) => term.id));
  const visualizationIds = new Set<VisualizationId>(
    library.visualizations.map((visualization) => visualization.id),
  );

  for (const dupe of duplicates(library.sections.map((section) => section.slug))) {
    issues.push(error(`section:${dupe}`, 'duplicate section slug'));
  }
  for (const dupe of duplicates(
    library.topics.map((topic) => `${topic.sectionId}/${topic.slug}`),
  )) {
    issues.push(error(`topic:${dupe}`, 'duplicate topic slug within its section'));
  }
  for (const dupe of duplicates(library.references.map((reference) => reference.id))) {
    issues.push(error(`reference:${dupe}`, 'duplicate reference id'));
  }

  for (const section of library.sections) {
    const path = `section:${section.slug}`;
    if (section.phase < 0) issues.push(error(path, 'phase must be >= 0'));
    if (section.status === 'published' && section.overview.trim() === '') {
      issues.push(error(path, 'a published section needs an overview'));
    }
  }

  for (const topic of library.topics) {
    const path = `topic:${topic.slug}`;

    if (!sectionIds.has(topic.sectionId)) {
      issues.push(error(path, `belongs to unknown section "${topic.sectionId}"`));
    }
    for (const related of topic.related ?? []) {
      if (!topicIds.has(related))
        issues.push(error(path, `related topic "${related}" does not exist`));
    }
    for (const term of topic.glossaryTerms ?? []) {
      if (!glossaryIds.has(term))
        issues.push(error(path, `glossary term "${term}" does not exist`));
    }

    topic.blocks.forEach((block, index) => {
      const blockPath = `${path}/block:${block.id || index}`;
      issues.push(...validateBlock(block, blockPath));

      for (const reference of blockReferences(block)) {
        if (!referenceIds.has(reference)) {
          issues.push(error(blockPath, `cites unknown reference "${reference}"`));
        }
      }
      if (block.kind === 'visualization' && !visualizationIds.has(block.visualizationId)) {
        issues.push(error(blockPath, `unknown visualization "${block.visualizationId}"`));
      }
      if (block.kind === 'definition' && !glossaryIds.has(block.termId)) {
        issues.push(error(blockPath, `unknown glossary term "${block.termId}"`));
      }
      if (block.kind === 'cross-link' && !topicIds.has(block.topicId)) {
        issues.push(error(blockPath, `unknown topic "${block.topicId}"`));
      }
    });

    if (topic.status === 'published' && topic.blocks.length === 0) {
      issues.push(error(path, 'a published topic cannot be empty'));
    }

    // Every published topic closes with a synthesis and a comprehension check.
    // This is checked here rather than left to editorial discipline because a
    // topic that quietly ships without one is invisible until a reader reaches
    // the bottom of the page and finds nothing.
    if (library.recaps && topic.status === 'published') {
      const recap = library.recaps[topic.id];
      if (!recap) {
        issues.push(error(path, 'a published topic needs a recap (summary + questions)'));
      } else {
        if (recap.summary.essential.trim() === '') {
          issues.push(error(`${path}/recap`, 'the recap summary is empty'));
        }
        if (
          recap.questions.length < RECAP_MIN_QUESTIONS ||
          recap.questions.length > RECAP_MAX_QUESTIONS
        ) {
          issues.push(
            error(
              `${path}/recap`,
              `expected ${RECAP_MIN_QUESTIONS}–${RECAP_MAX_QUESTIONS} questions, found ${recap.questions.length}`,
            ),
          );
        }
        for (const dupe of duplicates(recap.questions.map((question) => question.id))) {
          issues.push(error(`${path}/recap`, `duplicate question id "${dupe}"`));
        }
        recap.questions.forEach((question, index) => {
          const questionPath = `${path}/recap/question:${question.id || index}`;
          if (question.prompt.trim() === '') {
            issues.push(error(questionPath, 'a question needs a prompt'));
          }
          if (question.explanation.trim() === '') {
            issues.push(error(questionPath, 'a question needs a “why” explanation'));
          }
          if (
            question.options.length < RECAP_MIN_OPTIONS ||
            question.options.length > RECAP_MAX_OPTIONS
          ) {
            issues.push(
              error(
                questionPath,
                `expected ${RECAP_MIN_OPTIONS}–${RECAP_MAX_OPTIONS} options, found ${question.options.length}`,
              ),
            );
          }
          const correct = question.options.filter((option) => option.correct === true);
          if (correct.length !== 1) {
            issues.push(
              error(questionPath, `expected exactly one correct option, found ${correct.length}`),
            );
          }
          if (!correctOption(question)) {
            issues.push(error(questionPath, 'no option is marked correct'));
          }
          for (const dupe of duplicates(question.options.map((option) => option.id))) {
            issues.push(error(questionPath, `duplicate option id "${dupe}"`));
          }
          for (const option of question.options) {
            if (option.text.trim() === '') {
              issues.push(error(questionPath, `option "${option.id}" has no text`));
            }
          }
        });
      }
    }
  }

  // A recap pointing at a topic that does not exist is dead content.
  for (const key of Object.keys(library.recaps ?? {})) {
    if (!topicIds.has(key as TopicId)) {
      issues.push(error(`recap:${key}`, 'recap for a topic that does not exist'));
    }
  }

  for (const visualization of library.visualizations) {
    const path = `visualization:${visualization.id}`;
    if (visualization.caption.trim() === '') {
      issues.push(error(path, 'every visualization needs a caption'));
    }
    if (visualization.description.trim() === '') {
      issues.push(error(path, 'every visualization needs a text description for screen readers'));
    }
    if (visualization.fidelity === 'data-driven' && (visualization.references?.length ?? 0) === 0) {
      issues.push(error(path, 'a data-driven visualization must cite its data'));
    }
    for (const reference of visualization.references ?? []) {
      if (!referenceIds.has(reference)) {
        issues.push(error(path, `cites unknown reference "${reference}"`));
      }
    }
  }

  const eraIds = new Set(library.timelineEras?.map((era) => era.id) ?? []);
  const eventIds = new Set(library.timelineEvents.map((event) => event.id));

  for (const dupe of duplicates(library.timelineEvents.map((event) => event.slug))) {
    issues.push(error(`timeline:${dupe}`, 'duplicate timeline event slug'));
  }

  for (const event of library.timelineEvents) {
    const path = `timeline:${event.slug}`;
    if (event.topicId && !topicIds.has(event.topicId)) {
      issues.push(error(path, `points at unknown topic "${event.topicId}"`));
    }
    if (event.prominence < 0 || event.prominence > 1) {
      issues.push(error(path, 'prominence must be between 0 and 1'));
    }
    if (event.references.length === 0) {
      issues.push(error(path, 'a timeline event must cite a source'));
    }
    for (const reference of event.references) {
      if (!referenceIds.has(reference)) {
        issues.push(error(path, `cites unknown reference "${reference}"`));
      }
    }
    if (library.timelineEras && !eraIds.has(event.eraId)) {
      issues.push(error(path, `belongs to unknown era "${event.eraId}"`));
    }
    if (event.sectionId && !sectionIds.has(event.sectionId)) {
      issues.push(error(path, `points at unknown section "${event.sectionId}"`));
    }
    if (event.visualizationId && !visualizationIds.has(event.visualizationId)) {
      issues.push(error(path, `unknown visualization "${event.visualizationId}"`));
    }
    for (const term of event.glossaryTerms ?? []) {
      if (!glossaryIds.has(term)) issues.push(error(path, `unknown glossary term "${term}"`));
    }
    for (const related of event.relatedEvents ?? []) {
      if (!eventIds.has(related)) issues.push(error(path, `unknown related event "${related}"`));
    }

    // The narrative contract: a milestone that cannot say why it matters or how
    // we know is not ready to be read.
    if (event.whatHappened.essential.trim() === '') {
      issues.push(error(path, 'whatHappened is required'));
    }
    if (event.whyItMatters.essential.trim() === '') {
      issues.push(error(path, 'whyItMatters is required'));
    }
    if (event.evidenceBasis.essential.trim() === '') {
      issues.push(error(path, 'evidenceBasis is required'));
    }
    if (event.whenLabel.trim() === '') {
      issues.push(error(path, 'whenLabel is required'));
    }
    // Anything not "established" is, by definition, still being argued about.
    if (event.evidence !== 'established' && !event.uncertainty) {
      issues.push(
        error(path, `a "${event.evidence}" milestone must state what is uncertain about it`),
      );
    }
  }

  for (const era of library.timelineEras ?? []) {
    const path = `era:${era.id}`;
    if (era.to.seconds <= era.from.seconds) {
      issues.push(error(path, 'an era must end after it begins'));
    }
  }

  for (const term of library.glossary) {
    const path = `glossary:${term.id}`;
    if (term.short.trim() === '')
      issues.push(error(path, 'a term needs a one-sentence definition'));
    for (const topic of term.relatedTopics ?? []) {
      if (!topicIds.has(topic)) issues.push(error(path, `related topic "${topic}" does not exist`));
    }
  }

  return issues;
}

export function errorsOnly(issues: readonly ValidationIssue[]): ValidationIssue[] {
  return issues.filter((issue) => issue.severity === 'error');
}

export function formatIssues(issues: readonly ValidationIssue[]): string {
  return issues.map((issue) => `[${issue.severity}] ${issue.path}: ${issue.message}`).join('\n');
}
