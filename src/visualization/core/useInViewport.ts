import { useEffect, useState, type RefObject } from 'react';

/**
 * Whether an element is near enough to the viewport to be worth animating.
 *
 * `rootMargin` is generous by default so a figure is already running by the
 * time it scrolls into view, rather than visibly starting from frozen.
 */
export function useInViewport(ref: RefObject<Element | null>, rootMargin = '200px'): boolean {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (entry) setInViewport(entry.isIntersecting);
      },
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inViewport;
}

/** Whether the document is currently visible. Pauses everything on tab switch. */
export function useDocumentVisible(): boolean {
  const [visible, setVisible] = useState(
    () => typeof document === 'undefined' || document.visibilityState === 'visible',
  );

  useEffect(() => {
    const onChange = (): void => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onChange);
    return () => document.removeEventListener('visibilitychange', onChange);
  }, []);

  return visible;
}
