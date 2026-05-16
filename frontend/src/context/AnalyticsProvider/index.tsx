'use client';

import { createContext, useEffect, useState } from 'react';
import { ConsentState, IAnalyticsContext } from './types';

const COOKIE_KEY = 'cookie_consent';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const AnalyticsContext = createContext<IAnalyticsContext | null>(null);

const loadGA = () => {
  if (!GA_ID) return;
  if (window.gtag) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;

  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_ID);
  };
};

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsentState] = useState<ConsentState>(null);

  // init from storage
  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY) as ConsentState;

    if (saved) {
      setConsentState(saved);

      if (saved === 'accepted') {
        loadGA();
      }
    }
  }, []);

  // listen runtime changes
  useEffect(() => {
    const handler = (e: any) => {
      const value = e.detail as ConsentState;

      localStorage.setItem(COOKIE_KEY, value || '');
      setConsentState(value);

      if (value === 'accepted') {
        loadGA();
      }
    };

    window.addEventListener('cookie-consent', handler);

    return () => window.removeEventListener('cookie-consent', handler);
  }, []);

  return (
    <AnalyticsContext.Provider
      value={{
        consent,
        setConsent: (v) => {
          const event = new CustomEvent('cookie-consent', {
            detail: v,
          });
          window.dispatchEvent(event);
        },
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};
