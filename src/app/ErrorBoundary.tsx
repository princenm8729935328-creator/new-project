import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Last line of defence.
 *
 * A visualization that throws — a WebGL context lost on a phone under memory
 * pressure, say — must not take the whole platform down with it. Phase 1 adds a
 * second boundary per visualization frame; this one catches everything else.
 */
export class ErrorBoundary extends Component<Props, State> {
  override state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    // No telemetry service is wired up; this is deliberate until there is a
    // privacy decision to point at. Until then the console is the record.
    console.error('Unhandled error', error, info.componentStack);
  }

  override render(): ReactNode {
    if (!this.state.error) return this.props.children;

    return (
      <div className="ds-container" style={{ paddingBlock: 'var(--space-9)' }}>
        <h1 className="ds-title">Something broke.</h1>
        <p className="ds-body" style={{ marginBlockStart: 'var(--space-4)' }}>
          An error stopped this page from rendering. Reloading usually clears it. If it keeps
          happening, the details are in the browser console.
        </p>
        <p className="ds-caption ds-mono" style={{ marginBlockStart: 'var(--space-4)' }}>
          {this.state.error.message}
        </p>
      </div>
    );
  }
}
