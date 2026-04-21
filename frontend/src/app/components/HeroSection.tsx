'use client';

import OrderForm from '_components/OrderForm';
import useModal from '_hooks/useModal';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const { openModal, closeModal } = useModal();

  return (
    <section className="relative h-180 w-full overflow-hidden rounded-t-xl">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/hero.png" alt="Мебельный интерьер" fill priority className="object-cover" />

        {/* затемнение (если нужно) */}
        <div className="absolute inset-0 bg-black/20" />

        {/* градиент внизу */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-12 md:px-28">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-white">
            Мебель, в которую хочется возвращаться
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Современный дизайн, натуральные материалы и комфорт на каждый день
          </p>

          <div className="flex gap-4">
            <Link
              href="#catalog"
              className="bg-white text-black px-6 py-3 text-sm md:text-base font-medium hover:bg-neutral-200 transition"
            >
              Галерея работ
            </Link>

            <button
              className="border border-white px-6 py-3 text-sm md:text-base font-medium hover:bg-white/10 transition cursor-pointer"
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
