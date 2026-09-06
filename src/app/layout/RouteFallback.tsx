import type { ReactNode } from 'react';

/**
 * Shown while a route chunk loads.
 *
 * Deliberately quiet — no spinner. On a fast connection the chunk arrives
 * before a spinner would finish its first rotation, and a flashed spinner reads
 * as jank. On a slow one, the text explains itself.
 */
export function RouteFallback(): ReactNode {
  return (
    <div className="ds-container" style={{ paddingBlock: 'var(--space-9)' }} aria-busy="true">
      <p className="ds-caption">Loading…</p>
    </div>
  );
}
