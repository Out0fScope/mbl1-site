import { HomeSections, Pages } from '_types/navigation';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id={HomeSections.about} className="mb-16 scroll-mt-32 px-4 sm:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-start lg:items-center">
        {/* IMAGE (desktop only) */}
        <div className="relative w-full h-[280px] sm:h-[400px] lg:h-full min-h-[480px] hidden md:block">
          <Image src="/team.jpg" alt="О нас" fill className="object-cover" />
        </div>
        {/* CONTENT */}
        <div className="flex flex-col gap-6 md:gap-8 order-1 lg:order-none">
          <h2 className="text-sm md:text-lg uppercase tracking-widest text-foreground">О нас</h2>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
            Мы создаём мебель, которая становится частью вашей жизни
          </h2>

          {/* IMAGE (mobile placed after h2) */}
          <div className="relative w-full h-[280px] sm:h-[400px] md:hidden">
            <Image src="/team.jpg" alt="О нас" fill className="object-cover" />
          </div>

          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            Мы объединяем современный дизайн и натуральные материалы, чтобы создавать мебель,
            которая не только выглядит стильно, но и служит годами.
          </p>

          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            Каждая деталь продумана: от текстуры дерева до удобства использования. Мы верим, что дом
            — это место, где начинается комфорт.
          </p>

          {/* FEATURES */}
          <div className="mt-4 grid grid-cols-2 gap-4 md:gap-6">
            <div>
              <p className="text-xl md:text-2xl font-semibold text-neutral-900">10+</p>
              <p className="text-xs md:text-sm text-neutral-500">лет опыта</p>
            </div>

            <div>
              <p className="text-xl md:text-2xl font-semibold text-neutral-900">5k+</p>
              <p className="text-xs md:text-sm text-neutral-500">довольных клиентов</p>
            </div>

            <div>
              <p className="text-xl md:text-2xl font-semibold text-neutral-900">100%</p>
              <p className="text-xs md:text-sm text-neutral-500">натуральные материалы</p>
            </div>

            <div>
              <p className="text-xl md:text-2xl font-semibold text-neutral-900">24/7</p>
              <p className="text-xs md:text-sm text-neutral-500">поддержка</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-start pt-2">
            <Link
              href={Pages.contacts}
              className="group relative inline-block px-4 py-2 text-center
                         border border-primary text-primary hover:text-white
                         overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Связаться с нами</span>
              <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
