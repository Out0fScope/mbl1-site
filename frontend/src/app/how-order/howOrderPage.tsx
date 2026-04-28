'use client';

import OrderForm from '_components/OrderForm';
import useModal from '_hooks/useModal';
import { HowOrderSections, Pages } from '_types/navigation';
import Link from 'next/link';

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
    text: 'Обсудите ваши пожелания с дизайнером. Выберите материалы и фурнитуру. Определите размеры, форму и внутреннее наполнение.',
  },
  {
    title: 'Расчёт и согласование',
    text: 'Получите финальный расчет стоимости. Уточните все детали проекта и согласуйте сроки изготовления и доставки.',
  },
  {
    title: 'Изготовление мебели',
    text: 'Производство на собственном оборудовании с контролем качества на каждом этапе.',
  },
  {
    title: 'Доставка и монтаж',
    text: 'Доставка в назначенную дату. Профессиональная и аккуратная сборка. Проверка всех механизмов.',
  },
  {
    title: 'Наслаждение результатом',
    text: 'Вы получаете готовую мебель, полностью соответствующую вашим ожиданиям.',
  },
];

const HowOrderPage = () => {
  const { openModal, closeModal } = useModal();

  return (
    <section
      id={HowOrderSections.algorithm}
      className="mb-16 scroll-mt-64 px-4 sm:px-12 lg:px-16 xl:px-24"
    >
      {/* HEADER */}
      <header className="py-[1rem] md:py-[2rem]">
        <h1 className="text-4xl font-bold mb-4">Как заказать</h1>
        <p className="text-lg text-gray-600">
          Индивидуальная мебель под ваш интерьер — от идеи до установки
        </p>
      </header>

      {/* STEPS */}
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-primary"
          >
            {/* STEP NUMBER */}
            <div className="text-3xl font-bold text-primary mb-3">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

            {/* TEXT */}
            <p className="text-gray-600 leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Готовы начать?</h2>

        <p className="text-gray-600 mb-6">Свяжитесь с нами, и мы поможем реализовать ваш проект</p>

        <div className="flex justify-center gap-2">
          <Link
            href={Pages.contacts}
            className="w-full sm:w-auto text-center border text-black px-5 py-3 hover:bg-neutral-200 transition"
          >
            Связаться с нами
          </Link>

          <button
            className="w-full sm:w-auto border px-5 py-3 hover:bg-white/10 transition cursor-pointer"
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
