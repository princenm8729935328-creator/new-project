import { useCallback, useState, type ReactNode } from 'react';
import { resolveDepthText, type DepthLevel } from '@/content/schema/depth';
import { correctOption, type RecapQuestion, type TopicRecap } from '@/content/schema/recap';
import styles from './TopicRecap.module.css';

/**
 * Topic summary, then a comprehension check.
 *
 * One component for the whole platform: every topic in every section renders
 * through this, so the interaction is identical everywhere and a new topic gets
 * it for free by adding a recap entry to the content registry.
 *
 * The interaction rules are the ones that matter pedagogically:
 *
 *  - nothing about the answer is visible before the reader commits. The options
 *    are visually uniform, and no `aria` state hints at which is right.
 *  - once answered, the correct option is always marked, whether or not the
 *    reader found it — being told only "wrong" teaches nothing.
 *  - the explanation appears at the same moment, and explains the *principle*.
 *  - answering is final for that question, so a reader cannot click through the
 *    options until one turns green. Retrying is possible, but only by resetting
 *    the whole set, which is an explicit act.
 *
 * State lives here and nowhere else: nothing is persisted, because a score is
 * not the point and storing one would turn this into a test.
 */

type Answers = Readonly<Record<string, string>>;

function OptionRow({
  option,
  answered,
  chosenId,
  onChoose,
  index,
}: {
  option: RecapQuestion['options'][number];
  answered: boolean;
  chosenId: string | undefined;
  onChoose: (optionId: string) => void;
  index: number;
}): ReactNode {
  const isChosen = chosenId === option.id;
  const isCorrect = option.correct === true;

  // Before answering every row looks the same. This is the whole reason the
  // state is derived here rather than baked into the option data.
  const state = !answered ? 'idle' : isCorrect ? 'correct' : isChosen ? 'wrong' : 'muted';

  const marker = !answered
    ? String.fromCharCode(65 + index)
    : isCorrect
      ? '✓'
      : isChosen
        ? '✕'
        : String.fromCharCode(65 + index);

  return (
    <button
      type="button"
      className={styles.option}
      data-state={state}
      disabled={answered}
      aria-pressed={answered ? isChosen : undefined}
      onClick={() => onChoose(option.id)}
    >
      <span className={styles.marker} aria-hidden="true">
        {marker}
      </span>
      <span>
        {option.text}
        {answered && isCorrect && <span className="ds-visually-hidden"> — correct answer</span>}
        {answered && isChosen && !isCorrect && (
          <span className="ds-visually-hidden"> — your answer, incorrect</span>
        )}
      </span>
    </button>
  );
}

export function TopicRecapSection({
  recap,
  depth,
}: {
  recap: TopicRecap;
  depth: DepthLevel;
}): ReactNode {
  const [answers, setAnswers] = useState<Answers>({});

  const choose = useCallback((questionId: string, optionId: string) => {
    setAnswers((current) =>
      // Answering is one-way per question; a second click on an already
      // answered question does nothing.
      current[questionId] ? current : { ...current, [questionId]: optionId },
    );
  }, []);

  const answeredCount = Object.keys(answers).length;

  return (
    <section className={styles.recap} aria-labelledby="topic-summary-heading">
      <div className={styles.summary}>
        <h2 className="ds-heading" id="topic-summary-heading">
          Topic summary
        </h2>
        <p className={`ds-body ${styles.summaryBody}`}>{resolveDepthText(recap.summary, depth)}</p>
      </div>

      <div className={styles.check}>
        <h2 className="ds-heading">Check your understanding</h2>
        <p className={styles.intro}>
          {recap.questions.length} questions on this topic. Nothing is recorded, and the answer is
          revealed only after you choose.
        </p>

        <ol className={styles.questions}>
          {recap.questions.map((question, questionIndex) => {
            const chosenId = answers[question.id];
            const answered = chosenId !== undefined;
            const correct = correctOption(question);
            const gotItRight = answered && chosenId === correct?.id;

            return (
              <li key={question.id} className={styles.question}>
                <p className={styles.prompt}>
                  <span className={styles.index} aria-hidden="true">
                    {String(questionIndex + 1).padStart(2, '0')}
                  </span>
                  {question.prompt}
                </p>

                <div className={styles.options} role="group" aria-label={question.prompt}>
                  {question.options.map((option, optionIndex) => (
                    <OptionRow
                      key={option.id}
                      option={option}
                      answered={answered}
                      chosenId={chosenId}
                      index={optionIndex}
                      onChoose={(optionId) => choose(question.id, optionId)}
                    />
                  ))}
                </div>

                {answered && (
                  <div className={styles.why}>
                    <p className={styles.verdict} data-correct={String(gotItRight)}>
                      <span aria-hidden="true">{gotItRight ? '✓' : '✕'}</span>
                      <span>{gotItRight ? 'Correct' : 'Not quite'}</span>
                    </p>
                    <span className={styles.whyLabel}>Why?</span>
                    <p className={styles.whyBody}>{question.explanation}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {answeredCount > 0 && (
          <button type="button" className={styles.reset} onClick={() => setAnswers({})}>
            Clear answers
          </button>
        )}
      </div>
    </section>
  );
}
