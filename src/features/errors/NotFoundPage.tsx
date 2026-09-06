import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage(): ReactNode {
  return (
    <div className="ds-container" style={{ paddingBlock: 'var(--space-8)' }}>
      <span className="ds-eyebrow">Nothing here</span>
      <h1 className="ds-title" style={{ marginBlock: 'var(--space-3) var(--space-4)' }}>
        This page does not exist.
      </h1>
      <p className="ds-body">
        The address may be mistyped, or it may point at a section that has not been built yet.
      </p>
      <p style={{ marginBlockStart: 'var(--space-5)' }}>
        <Link to="/">Back to the beginning</Link>
      </p>
    </div>
  );
}
