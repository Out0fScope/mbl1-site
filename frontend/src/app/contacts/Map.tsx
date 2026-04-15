'use client';

import { useEffect, useRef, useState } from 'react';

const Map = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // один раз загрузили — больше не следим
        }
      },
      {
        rootMargin: '200px', // начнём подгружать чуть заранее
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full max-lg:min-h-[24rem]
                  overflow-hidden
                  shadow-lg bg-muted border"
    >
      {!isVisible ? (
        <div className="absolute inset-0 text-sm text-muted-foreground">Загрузка карты…</div>
      ) : (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad8dfce2ecabdf278a1a2a7f737ed97f4c361df2992b4c284c049934bf6334a2a&amp;source=constructor"
          title="Карта расположения Мебель 1"
          width="100%"
          height="100%"
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default Map;
