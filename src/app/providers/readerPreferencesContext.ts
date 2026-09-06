import { createContext } from 'react';
import type { DepthLevel } from '@/content/schema/depth';
import type { QualityTier } from '@/visualization/core/quality';

/**
 * Reader preferences that cut across the whole platform.
 *
 * Depth and motion are reader-facing choices; quality is resolved from the
 * device but stays overridable, because a reader who wants the full scene on a
 * modest phone should be allowed to ask for it.
 */
export interface ReaderPreferences {
  readonly depth: DepthLevel;
  readonly quality: QualityTier;
  /** True when the OS asks for reduced motion, or the reader has turned it on. */
  readonly reducedMotion: boolean;
  /** False when the tier came from the device rather than from the reader. */
  readonly qualityOverridden: boolean;
}

export interface ReaderPreferencesValue extends ReaderPreferences {
  setDepth(depth: DepthLevel): void;
  setQuality(quality: QualityTier | 'auto'): void;
  setReducedMotion(reduced: boolean | 'system'): void;
}

export const ReaderPreferencesContext = createContext<ReaderPreferencesValue | null>(null);

export const READER_PREFERENCES_STORAGE_KEY = 'cosmos-atlas:reader-preferences:v1';
