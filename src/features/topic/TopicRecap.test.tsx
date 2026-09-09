import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ReaderPreferencesProvider } from '@/app/providers/ReaderPreferencesProvider';
import { publishedTopics } from '@/content/topics';
import { getSectionById } from '@/content/sections';
import { RECAPS, getRecap } from '@/content/recaps';
import { correctOption } from '@/content/schema/recap';
import TopicPage from './TopicPage';

/**
 * The global recap system.
 *
 * Two kinds of assertion here, and both matter. The coverage tests check that
 * every published topic in every phase has a summary and a comprehension check
 * and that no two topics share one — a generic recap pasted everywhere would
 * pass a naive "does it exist" test and fail this one. The interaction tests
 * check the rules that make it teaching rather than quizzing: nothing about the
 * answer is visible before the reader commits, the correct option is marked
 * whether or not they found it, and the explanation appears at the same moment.
 */

beforeEach(() => {
  localStorage.clear();
});

function renderAt(path: string) {
  return render(
    <ReaderPreferencesProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path=":sectionSlug/:topicSlug" element={<TopicPage />} />
        </Routes>
      </MemoryRouter>
    </ReaderPreferencesProvider>,
  );
}

describe('recap coverage across every phase', () => {
  it('gives every published topic a summary and a comprehension check', () => {
    const missing = publishedTopics()
      .filter((topic) => getRecap(topic.id) === undefined)
      .map((topic) => topic.id);
    expect(missing).toEqual([]);
  });

  it('covers all six content phases', () => {
    const phases = new Set(
      publishedTopics().map((topic) => getSectionById(topic.sectionId)?.phase),
    );
    // Phase 1 is the timeline, which has no topics; the topic sections span 2–6.
    expect([...phases].sort()).toEqual([2, 3, 4, 5, 6]);
  });

  it('writes a distinct summary for every topic rather than one generic one', () => {
    const summaries = Object.values(RECAPS).map((recap) => recap?.summary.essential);
    expect(new Set(summaries).size).toBe(summaries.length);
  });

  it('asks between two and four questions per topic, each with one correct answer', () => {
    for (const [id, recap] of Object.entries(RECAPS)) {
      if (!recap) continue;
      expect(recap.questions.length, `${id} question count`).toBeGreaterThanOrEqual(2);
      expect(recap.questions.length, `${id} question count`).toBeLessThanOrEqual(4);
      for (const question of recap.questions) {
        const correct = question.options.filter((option) => option.correct === true);
        expect(correct.length, `${id}/${question.id} correct answers`).toBe(1);
        expect(question.options.length, `${id}/${question.id} options`).toBeGreaterThanOrEqual(3);
        expect(question.options.length, `${id}/${question.id} options`).toBeLessThanOrEqual(4);
        expect(question.explanation.length, `${id}/${question.id} explanation`).toBeGreaterThan(40);
      }
    }
  });

  it('gives every question a distinct prompt within its topic', () => {
    for (const [id, recap] of Object.entries(RECAPS)) {
      if (!recap) continue;
      const prompts = recap.questions.map((question) => question.prompt);
      expect(new Set(prompts).size, `${id} prompts`).toBe(prompts.length);
    }
  });
});

describe('the recap renders on topics from every phase', () => {
  it.each([
    ['/universe/dark-matter', 'Universe & Cosmology'],
    ['/gravity/tides', 'Gravity'],
    ['/newton/third-law', "Newton's Laws"],
    ['/relativity/time-dilation', 'Relativity'],
    ['/black-holes/the-event-horizon', 'Black Holes'],
  ])('shows a summary and a check on %s', (path) => {
    renderAt(path);
    expect(screen.getByRole('heading', { name: 'Topic summary' })).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Check your understanding' })).toBeVisible();
  });
});

describe('the answer is not revealed before the reader answers', () => {
  it('shows no verdict, no explanation and no marking until an option is chosen', () => {
    renderAt('/black-holes/hawking-radiation');
    expect(screen.queryByText('Why?')).toBeNull();
    expect(screen.queryByText('Correct')).toBeNull();
    expect(screen.queryByText('Not quite')).toBeNull();

    const recap = getRecap(publishedTopics().find((t) => t.slug === 'hawking-radiation')!.id)!;
    const first = recap.questions[0]!;
    const group = screen.getByRole('group', { name: first.prompt });
    for (const button of within(group).getAllByRole('button')) {
      // No aria-pressed and no state class before answering: every option looks
      // and reads identically, so nothing leaks the answer.
      expect(button).not.toHaveAttribute('aria-pressed');
      expect(button.getAttribute('data-state')).toBe('idle');
      expect(button).toBeEnabled();
    }
  });
});

describe('answering reveals the outcome and the reason', () => {
  it('marks a correct choice and explains why', async () => {
    const user = userEvent.setup();
    renderAt('/black-holes/hawking-radiation');

    const topic = publishedTopics().find((t) => t.slug === 'hawking-radiation')!;
    const question = getRecap(topic.id)!.questions[0]!;
    const right = correctOption(question)!;

    const group = screen.getByRole('group', { name: question.prompt });
    await user.click(within(group).getByRole('button', { name: new RegExp(escape(right.text)) }));

    expect(screen.getByText('Correct')).toBeVisible();
    expect(screen.getAllByText('Why?').length).toBe(1);
    expect(screen.getByText(question.explanation)).toBeVisible();
  });

  it('marks a wrong choice, still shows the right one, and explains', async () => {
    const user = userEvent.setup();
    renderAt('/black-holes/hawking-radiation');

    const topic = publishedTopics().find((t) => t.slug === 'hawking-radiation')!;
    const question = getRecap(topic.id)!.questions[0]!;
    const wrong = question.options.find((option) => option.correct !== true)!;
    const right = correctOption(question)!;

    const group = screen.getByRole('group', { name: question.prompt });
    await user.click(within(group).getByRole('button', { name: new RegExp(escape(wrong.text)) }));

    expect(screen.getByText('Not quite')).toBeVisible();
    expect(screen.getByText(question.explanation)).toBeVisible();

    const chosen = within(group).getByRole('button', { name: new RegExp(escape(wrong.text)) });
    const answer = within(group).getByRole('button', { name: new RegExp(escape(right.text)) });
    expect(chosen.getAttribute('data-state')).toBe('wrong');
    // Being told only "wrong" teaches nothing, so the correct option is always
    // marked afterwards, whether or not the reader found it.
    expect(answer.getAttribute('data-state')).toBe('correct');
  });

  it('makes answering final for that question until the reader clears', async () => {
    const user = userEvent.setup();
    renderAt('/black-holes/hawking-radiation');

    const topic = publishedTopics().find((t) => t.slug === 'hawking-radiation')!;
    const question = getRecap(topic.id)!.questions[0]!;
    const wrong = question.options.find((option) => option.correct !== true)!;

    const group = screen.getByRole('group', { name: question.prompt });
    await user.click(within(group).getByRole('button', { name: new RegExp(escape(wrong.text)) }));
    expect(screen.getByText('Not quite')).toBeVisible();

    for (const button of within(group).getAllByRole('button')) {
      expect(button).toBeDisabled();
    }

    await user.click(screen.getByRole('button', { name: 'Clear answers' }));
    expect(screen.queryByText('Not quite')).toBeNull();
    expect(screen.queryByText('Why?')).toBeNull();
  });

  it('reveals only the answered question, leaving the others untouched', async () => {
    const user = userEvent.setup();
    renderAt('/black-holes/hawking-radiation');

    const topic = publishedTopics().find((t) => t.slug === 'hawking-radiation')!;
    const questions = getRecap(topic.id)!.questions;
    expect(questions.length).toBeGreaterThan(1);

    const first = questions[0]!;
    const second = questions[1]!;
    const firstGroup = screen.getByRole('group', { name: first.prompt });
    await user.click(
      within(firstGroup).getByRole('button', {
        name: new RegExp(escape(correctOption(first)!.text)),
      }),
    );

    const secondGroup = screen.getByRole('group', { name: second.prompt });
    for (const button of within(secondGroup).getAllByRole('button')) {
      expect(button.getAttribute('data-state')).toBe('idle');
      expect(button).toBeEnabled();
    }
    expect(screen.queryByText(second.explanation)).toBeNull();
  });
});

/** Escape a string for use inside a RegExp built from option text. */
function escape(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
