'use client';

import { RefObject, useEffect, useState } from 'react';

export const useActiveStep = (containerRef: RefObject<HTMLElement | null>) => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const sections = container.querySelectorAll<HTMLElement>('[data-step]');

      let current = 0;
      let progressHeight = 0;

      const containerTop = container.getBoundingClientRect().top + window.scrollY;

      sections.forEach((el, index) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.5) {
          current = index;

          const elementCenter = rect.top + window.scrollY + el.clientHeight / 2;

          // 👇 ВАЖНО: считаем относительно контейнера
          progressHeight = elementCenter - containerTop;
        }
      });

      setActive(current);

      // ограничиваем, чтобы не вылезало
      setProgress(Math.max(0, Math.min(progressHeight, container.offsetHeight)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return { active, progress };
};
