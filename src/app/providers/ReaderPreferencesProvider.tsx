import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { DEFAULT_DEPTH, isDepthLevel, type DepthLevel } from '@/content/schema/depth';
import {
  isQualityTier,
  readDeviceSignals,
  resolveQualityTier,
  type QualityTier,
} from '@/visualization/core/quality';
import {
  READER_PREFERENCES_STORAGE_KEY,
  ReaderPreferencesContext,
  type ReaderPreferencesValue,
} from './readerPreferencesContext';

interface StoredPreferences {
  depth?: string;
  quality?: string | 'auto';
  reducedMotion?: boolean | 'system';
}

function readStored(): StoredPreferences {
  try {
    const raw = localStorage.getItem(READER_PREFERENCES_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredPreferences) : {};
  } catch {
    // Private mode, blocked storage, corrupted value — preferences are a
    // convenience, never a prerequisite for the page rendering.
    return {};
  }
}

function writeStored(preferences: StoredPreferences): void {
  try {
    localStorage.setItem(READER_PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    /* ignore */
  }
}

export function ReaderPreferencesProvider({ children }: { children: ReactNode }): ReactNode {
  const stored = useMemo(readStored, []);

  const [depth, setDepthState] = useState<DepthLevel>(() =>
    isDepthLevel(stored.depth) ? stored.depth : DEFAULT_DEPTH,
  );
  const [qualityChoice, setQualityChoice] = useState<QualityTier | 'auto'>(() =>
    isQualityTier(stored.quality) ? stored.quality : 'auto',
  );
  const [motionChoice, setMotionChoice] = useState<boolean | 'system'>(
    () => stored.reducedMotion ?? 'system',
  );
  const [systemReducedMotion, setSystemReducedMotion] = useState(
    () => matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  // The OS setting can change while the page is open; honour it live.
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event: MediaQueryListEvent): void => setSystemReducedMotion(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const autoQuality = useMemo<QualityTier>(() => resolveQualityTier(readDeviceSignals()), []);
  const reducedMotion = motionChoice === 'system' ? systemReducedMotion : motionChoice;
  const quality = qualityChoice === 'auto' ? autoQuality : qualityChoice;

  const setDepth = useCallback((next: DepthLevel) => {
    setDepthState(next);
  }, []);

  const setQuality = useCallback((next: QualityTier | 'auto') => {
    setQualityChoice(next);
  }, []);

  const setReducedMotion = useCallback((next: boolean | 'system') => {
    setMotionChoice(next);
  }, []);

  useEffect(() => {
    writeStored({ depth, quality: qualityChoice, reducedMotion: motionChoice });
  }, [depth, qualityChoice, motionChoice]);

  // Exposed to CSS so ambient motion can be switched off in stylesheets rather
  // than in every component.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.quality = quality;
    root.dataset.motion = reducedMotion ? 'reduced' : 'full';
    root.dataset.depth = depth;
  }, [quality, reducedMotion, depth]);

  const value = useMemo<ReaderPreferencesValue>(
    () => ({
      depth,
      quality,
      reducedMotion,
      qualityOverridden: qualityChoice !== 'auto',
      setDepth,
      setQuality,
      setReducedMotion,
    }),
    [depth, quality, reducedMotion, qualityChoice, setDepth, setQuality, setReducedMotion],
  );

  return (
    <ReaderPreferencesContext.Provider value={value}>{children}</ReaderPreferencesContext.Provider>
  );
}
