import { ReactNode } from 'react';

interface IMatchMediaContext {
  isMobile: boolean;
}

interface IMatchMediaProviderProps {
  children: ReactNode;
}

export type { IMatchMediaContext, IMatchMediaProviderProps };
