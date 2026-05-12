'use client';

import OrderForm from '_components/OrderForm';
import { useActiveStep } from '_hooks/useActiveStep';
import useModal from '_hooks/useModal';
import { useScrollToTop } from '_hooks/useScrollToTop';
import { HowOrderSections, Pages } from '_types/navigation';
import Link from 'next/link';
import { useRef } from 'react';

const steps = [
  {
    title: 'Предварительная консультация',
    text: 'Свяжитесь с нами удобным способом: email, Instagram, телефон или оставьте заявку. Мы расскажем обо всех услугах и сделаем предварительный расчет стоимости.',
  },
  {
    title: 'Замер помещения',
    text: 'Согласуйте удобное время визита дизайнера. Выезд бесплатный. Специалист выполнит точные замеры помещения.',
  },
  {
    title: 'Создание проекта',
    text: 'Обсудите ваши пожелания с дизайнером. Выберите материалы и фурнитуру.',
  },
  {
    title: 'Расчёт и согласование',
    text: 'Получите финальный расчет и согласуйте сроки.',
  },
  {
    title: 'Изготовление мебели',
    text: 'Производство с контролем качества на каждом этапе.',
  },
  {
    title: 'Доставка и монтаж',
    text: 'Доставка и аккуратная сборка мебели.',
  },
];

const HowOrderPage = () => {
  const { openModal, closeModal } = useModal();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { active, progress } = useActiveStep(containerRef);
  useScrollToTop();

  return (
    <section
      id={HowOrderSections.algorithm}
      className="mb-24 scroll-mt-64 px-4 sm:px-12 lg:px-16 xl:px-24"
    >
      {/* HEADER */}
      <header className="py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Как заказать</h1>
        <p className="text-lg text-gray-600 max-w-xl">Понятный процесс от идеи до готовой мебели</p>
      </header>

      {/* TIMELINE */}
      <div ref={containerRef} className="relative">
        {/* BACKGROUND LINE */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

        {/* PROGRESS LINE */}
        <div
          className="hidden lg:block absolute left-1/2 top-0 w-px bg-primary transition-all duration-500 ease-out"
          style={{ height: progress }}
        />

        <div className="flex flex-col gap-10 lg:gap-20">
          {steps.map((step, i) => {
            const isPassed = i <= active;
            const isCurrent = i === active;

            return (
              <div
                key={i}
                data-step
                className={`relative flex flex-col items-center lg:flex-row lg:items-center min-h-40 ${
                  i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                }`}
              >
                {/* CARD */}
                <div
                  className={`relative max-sm:pt-16 max-w-md xl:max-w-xl w-full p-6 rounded-md border transition-all duration-300 ${
                    isCurrent
                      ? 'shadow-xl border-primary bg-white'
                      : isPassed
                        ? 'bg-white border-primary'
                        : 'bg-white/60'
                  }`}
                >
                  {/* MOBILE DOT (inside card) */}
                  <div className="flex lg:hidden mb-3 justify-end">
                    <div
                      className={`absolute right-3 top-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300 ${
                        isPassed
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-400 border-gray-300'
                      } ${isCurrent ? 'scale-110 shadow-lg' : ''}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>

                {/* DESKTOP DOT (UNCHANGED) */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300 ${
                      isPassed
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-400 border-gray-300'
                    } ${isCurrent ? 'scale-110 shadow-lg' : ''}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Готовы начать?</h2>

        <p className="text-gray-600 mb-6">Свяжитесь с нами — поможем реализовать ваш проект</p>

        <div className="flex justify-center gap-3 flex-wrap">
          <Link
            href={Pages.contacts}
            className="w-full sm:w-auto text-center border text-black px-5 py-3 hover:bg-neutral-200 transition"
          >
            Наши контакты
          </Link>

          <button
            className="px-6 py-3 bg-primary text-white hover:opacity-90 transition cursor-pointer"
            onClick={() => openModal(OrderForm, { onClose: closeModal })}
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowOrderPage;
