'use client';

import { useEffect, useRef } from 'react';

export function useWakeLock() {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLockRef.current = await navigator.wakeLock.request('screen');
          console.log('Wake Lock aktywny - ekran nie będzie się wygaszał');
        } else {
          console.warn('Wake Lock API nie jest wspierane w tej przeglądarce');
        }
      } catch (err) {
        console.error('Błąd podczas aktywacji Wake Lock:', err);
      }
    };

    requestWakeLock();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && wakeLockRef.current?.released) {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      wakeLockRef.current?.release().then(() => {
        console.log('Wake Lock zwolniony');
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return wakeLockRef;
}

