import type { ReactNode } from 'react';
import { EVIDENCE_LEVELS, EVIDENCE_LEVEL_META } from '@/content/schema/evidence';
import { VISUALIZATION_FIDELITIES, FIDELITY_META } from '@/content/schema/visualization';
import { EvidenceBadge } from '@/design-system/components/EvidenceBadge';
import { Panel } from '@/design-system/components/Panel';
import styles from './MethodPage.module.css';

/**
 * The platform's stated method.
 *
 * Rendered from the same constants the content system enforces, so this page
 * cannot describe a policy the code does not implement — if a level is added or
 * a definition reworded, this page changes with it.
 */
export default function MethodPage(): ReactNode {
  return (
    <div className="ds-container">
      <header className={styles.header}>
        <span className="ds-eyebrow">Method</span>
        <h1 className="ds-title">How this platform handles accuracy</h1>
        <p className="ds-lede">
          Science is not a single body of settled fact, and presenting it that way is its own kind
          of inaccuracy. Everything here is labelled with how firmly it is known — and the labels
          are enforced by the software, not by good intentions.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="ds-heading">Evidence levels</h2>
        <p className="ds-body">
          Every scientific statement carries exactly one of these. The label is attached to the
          statement in the content data, not added afterwards by an editor.
        </p>
        <ul className={styles.levels}>
          {EVIDENCE_LEVELS.map((level) => (
            <li key={level}>
              <Panel variant="quiet">
                <EvidenceBadge level={level} />
                <p className={styles.levelDefinition}>{EVIDENCE_LEVEL_META[level].definition}</p>
                <p className="ds-caption">
                  {EVIDENCE_LEVEL_META[level].minReferences > 0
                    ? `Requires at least ${EVIDENCE_LEVEL_META[level].minReferences} cited source.`
                    : 'Cannot be published without a note saying what would make it testable.'}
                </p>
              </Panel>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className="ds-heading">Figures and visualizations</h2>
        <p className="ds-body">
          A picture of a black hole is not a photograph of a black hole. Every figure states what
          kind of image it is, in a badge that cannot be omitted — the component that draws figures
          refuses to render one without it.
        </p>
        <ul className={styles.levels}>
          {VISUALIZATION_FIDELITIES.map((fidelity) => (
            <li key={fidelity}>
              <Panel variant="quiet">
                <p className="ds-subheading">{FIDELITY_META[fidelity].label}</p>
                <p className={styles.levelDefinition}>{FIDELITY_META[fidelity].definition}</p>
              </Panel>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className="ds-heading">Rules we hold ourselves to</h2>
        <ul className={styles.rules}>
          <li>No scientific claim is written without a source that supports it.</li>
          <li>
            Where scientists disagree, the disagreement is shown — not resolved for the reader.
          </li>
          <li>
            Numbers are stored with their uncertainties. A value quoted without one is flagged in
            review.
          </li>
          <li>
            Simplification is allowed; misrepresentation is not. Where a simple explanation is known
            to be incomplete, the page says so.
          </li>
          <li>
            Unbuilt sections are labelled as unbuilt. Nothing here is dressed up as finished when it
            is not.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className="ds-heading">Corrections</h2>
        <p className="ds-body">
          Content is reviewed against its sources, and each topic records when that last happened.
          If something here is wrong, it is a bug, and it is tracked like one.
        </p>
      </section>
    </div>
  );
}
