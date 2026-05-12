'use client';

import OrderForm from '_components/OrderForm';
import useModal from '_hooks/useModal';
import { HomeSections, Pages } from '_types/navigation';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const { openModal, closeModal } = useModal();

  return (
    <section
      id={Pages.home}
      className="flex max-xl:justify-center relative h-screen w-full overflow-hidden mb-16 scroll-mt-32 text-foreground"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/hero.png" alt="Мебельный интерьер" fill priority className="object-cover" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-md:mt-20 md:items-center px-4 sm:px-6 md:px-16 lg:px-32 pt-10 lg:pt-16">
        <div className="w-full max-w-2xl px-4 sm:px-6 md:px-8 py-4 md:py-6 bg-amber-50/30 backdrop-blur-sm">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 md:mb-6">
            Мебель на заказ в Минске
          </h1>

          {/* List */}
          <ul className="space-y-1 md:space-y-2 mb-6 md:mb-8 pl-5">
            {[
              'Более 10 лет на мебельном рынке',
              'Рассрочка 0% до 6 месяцев за счет собственных средств',
              'Выезд дизайнера + доставка бесплатно',
              'Беспроцентная рассрочка и кридитование',
              'Скидки до 10%',
            ].map((text, i) => (
              <li
                key={i}
                className="font-medium text-sm sm:text-base md:text-xl text-foreground list-disc marker:text-primary marker:text-lg md:marker:text-2xl"
              >
                {text}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href={`#${HomeSections.gallery}`}
              className="w-full sm:w-auto text-center bg-white text-black px-5 py-3 hover:bg-neutral-200 transition"
            >
              Галерея работ
            </Link>

            <button
              className="w-full sm:w-auto border border-white px-5 py-3 hover:bg-white/10 transition cursor-pointer"
              onClick={() => openModal(OrderForm, { onClose: closeModal })}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
