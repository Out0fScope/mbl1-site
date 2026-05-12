'use client';

import { createContext, useEffect, useState } from 'react';
import { IMatchMediaContext, IMatchMediaProviderProps } from './types';

const MatchMediaContext = createContext<IMatchMediaContext | null>(null);

const MatchMediaProvider = ({ children }: IMatchMediaProviderProps) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');

    const update = () => setMatches(media.matches);

    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  const value: IMatchMediaContext = { isMobile: matches };

  return <MatchMediaContext.Provider value={value}>{children}</MatchMediaContext.Provider>;
};

export { MatchMediaContext, MatchMediaProvider };
