'use client';

import { IReview } from '_api/types';
import { HomeSections } from '_types/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

interface Props {
  reviews: IReview[];
}

const ReviewsSection = ({ reviews }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);

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
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* RIGHT */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          centeredSlides
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!overflow-hidden"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`relative h-[320px] md:h-[420px] lg:h-[460px] overflow-hidden border bg-white shadow-sm transition-all duration-500
                    ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-50'}
                  `}
                >
                  <Image
                    src={`${url}/assets/${item.image?.id}`}
                    alt={`Отзыв ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
