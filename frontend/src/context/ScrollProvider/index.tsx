'use client';

import { useParams } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';
import { IScrollContext, IScrollProviderProps } from './types';

const ScrollContext = createContext<IScrollContext | null>(null);

const ScrollProvider = ({ children }: IScrollProviderProps) => {
  const params = useParams();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    scrollToHash();
  }, [params]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const value: IScrollContext = { scrollY };

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

export { ScrollContext, ScrollProvider };
