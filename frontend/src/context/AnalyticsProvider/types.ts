import { ReactNode } from 'react';

type ConsentState = 'accepted' | 'rejected' | null;

interface IAnalyticsContext {
  consent: ConsentState;
  setConsent: (value: ConsentState) => void;
}

interface IAnalyticsProviderProps {
  children: ReactNode;
}

export type { IAnalyticsContext, IAnalyticsProviderProps, ConsentState };
