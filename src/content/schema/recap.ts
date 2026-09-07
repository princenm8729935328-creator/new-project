/**
 * Topic recap: the synthesis and the comprehension check that close a topic.
 *
 * Kept as its own schema, and stored in its own registry keyed by topic id
 * rather than as a field on `Topic`, for one deliberate reason: it lets every
 * topic written in Phases 1–4 gain a recap without a single line of its
 * existing content being touched. The topic files stay exactly as their authors
 * left them; the recap is a second, additive layer over the same ids.
 *
 * A recap is not a summary of the *page*. It is a synthesis of the *idea* —
 * what causes what, which relationships matter, what to carry away — written
 * fresh for each topic. Generic filler here would be worse than nothing,
 * because a reader who reads one and finds it hollow will skip the rest.
 *
 * The questions are comprehension checks, not trivia. Every distractor is a
 * plausible misunderstanding rather than a randomly wrong fact, and every
 * explanation names the principle rather than just repeating the answer.
 */
import type { DepthText } from './depth';

export interface AnswerOption {
  /** Stable within its question; used as the React key and the selection value. */
  readonly id: string;
  readonly text: string;
  /** Exactly one option per question carries this. */
  readonly correct?: boolean;
}

export interface RecapQuestion {
  readonly id: string;
  readonly prompt: string;
  readonly options: readonly AnswerOption[];
  /** Shown only after the reader has answered. Reinforces the concept. */
  readonly explanation: string;
}

export interface TopicRecap {
  /**
   * The synthesis, depth-aware like every other piece of prose here: a reader
   * on Quick gets the mental model in three sentences, a reader on Deep gets
   * the same model with the mechanism spelled out.
   */
  readonly summary: DepthText;
  /** Two to four questions, checked by the content validator. */
  readonly questions: readonly RecapQuestion[];
}

/**
 * Recaps keyed by topic id.
 *
 * Plain string keys rather than the branded `TopicId`: a recap table is authored
 * as an object literal, and the branded key type makes every literal key a type
 * error. Nothing is lost, because the content validator checks that every key
 * resolves to a real published topic and that every published topic has one —
 * which is a stronger guarantee than the type could give anyway.
 */
export type RecapsByTopic = Readonly<Record<string, TopicRecap | undefined>>;

/** The single correct option, or undefined when a question is malformed. */
export function correctOption(question: RecapQuestion): AnswerOption | undefined {
  return question.options.find((option) => option.correct === true);
}

export const RECAP_MIN_QUESTIONS = 2;
export const RECAP_MAX_QUESTIONS = 4;
export const RECAP_MIN_OPTIONS = 3;
export const RECAP_MAX_OPTIONS = 4;
