import { ReactNode } from 'react';

interface IScrollContext {
  scrollY: number;
  isUpDirection: boolean;
  width: number;
}

interface IScrollProviderProps {
  children: ReactNode;
}

export type { IScrollContext, IScrollProviderProps };
