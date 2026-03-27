import { ReactNode } from 'react';

interface IScrollContext {
  scrollY: number;
}

interface IScrollProviderProps {
  children: ReactNode;
}

export type { IScrollContext, IScrollProviderProps };
