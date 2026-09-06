import { useEffect, useRef } from 'react';

/**
 * A frame loop that stops when it should.
 *
 * Every visualization uses this rather than calling `requestAnimationFrame`
 * directly, so that three rules hold everywhere at once: an off-screen figure
 * does not animate, a backgrounded tab does not animate, and a slow frame does
 * not produce a huge `delta` that makes a simulation explode.
 *
 * @param callback receives seconds since the previous frame, clamped.
 * @param active   false pauses the loop and releases the frame request.
 * @param targetFps throttles; the loop still runs on rAF but skips frames.
 */
export function useAnimationFrame(
  callback: (deltaSeconds: number, elapsedSeconds: number) => void,
  active: boolean,
  targetFps = 60,
): void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    let previous = performance.now();
    let elapsed = 0;
    let accumulator = 0;
    const minInterval = 1 / targetFps;

    const tick = (now: number): void => {
      frame = requestAnimationFrame(tick);

      // A tab restored after a minute must not deliver a 60-second delta.
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      accumulator += delta;

      if (accumulator < minInterval) return;
      elapsed += accumulator;
      callbackRef.current(accumulator, elapsed);
      accumulator = 0;
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, targetFps]);
}
