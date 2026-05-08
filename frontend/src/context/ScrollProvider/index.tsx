'use client';

import { useParams } from 'next/navigation';
import { createContext, useEffect, useRef, useState } from 'react';
import { IScrollContext, IScrollProviderProps } from './types';

const ScrollContext = createContext<IScrollContext | null>(null);

const ScrollProvider = ({ children }: IScrollProviderProps) => {
  const params = useParams();
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(0);
  const [isUpDirection, setIsUpDirection] = useState<boolean>(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({
          block: 'start',
        });
      }
    };

    scrollToHash();
  }, [params]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);

      if (currentScrollY > lastScrollY.current + 5) {
        setIsUpDirection(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsUpDirection(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value: IScrollContext = { scrollY, isUpDirection, width };

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

export { ScrollContext, ScrollProvider };
