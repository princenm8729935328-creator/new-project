import { useEffect, useState, type RefObject } from 'react';

export interface Size {
  readonly width: number;
  readonly height: number;
}

/**
 * Observed content-box size of an element.
 *
 * Canvas renderers need real pixel dimensions, and on a phone those change on
 * every orientation change and on every URL-bar collapse. Reading them from a
 * ResizeObserver rather than from `window` keeps a figure correct inside a
 * scrolling panel too.
 */
export function useElementSize(ref: RefObject<Element | null>): Size {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const box = entry.contentRect;
      setSize((previous) =>
        previous.width === box.width && previous.height === box.height
          ? previous
          : { width: box.width, height: box.height },
      );
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}
