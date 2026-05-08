'use client';

import { IReview } from '_api/types';
import { HomeSections } from '_types/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

interface Props {
  reviews: IReview[];
}

const ReviewsSection = ({ reviews }: Props) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;

    const child = el.children[index] as HTMLElement;
    if (!child) return;

    child.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll, { passive: true });

    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const prev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const next = () => {
    if (activeIndex < reviews.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <section
      id={HomeSections.reviews}
      className="mb-16 scroll-mt-32 px-4 sm:px-12 lg:px-16 xl:px-24"
    >
      {/* HEADER */}
      <header className="py-2 md:py-4">
        <h2 className="text-lg uppercase tracking-widest text-foreground">Отзывы</h2>
      </header>

      <div className="relative">
        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* TRACK */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {reviews.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => scrollToIndex(index)}
                className="min-w-full sm:min-w-[70%] md:min-w-[40%] lg:min-w-[25%] snap-center"
              >
                <div
                  className={`relative w-full aspect-[4/5] border bg-white shadow-sm transition-all duration-500
                    ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-60'}
                  `}
                >
                  <Image
                    src={`${url}/assets/${item.image?.id}`}
                    alt={`Отзыв ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-5">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                activeIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
