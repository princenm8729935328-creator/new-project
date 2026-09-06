import { useContext } from 'react';
import { ReaderPreferencesContext, type ReaderPreferencesValue } from './readerPreferencesContext';

export function useReaderPreferences(): ReaderPreferencesValue {
  const value = useContext(ReaderPreferencesContext);
  if (!value) {
    throw new Error('useReaderPreferences must be used inside <ReaderPreferencesProvider>');
  }
  return value;
}
