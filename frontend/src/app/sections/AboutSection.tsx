import { Pages } from '_types/navigation';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-32 px-4 sm:px-12 lg:px-16 xl:px-24">
      <div className="min-h-screen mx-auto grid w-full grid-cols-1 md:grid-cols-2 gap-12 justify-between items-center">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image src="/team.jpg" alt="О нас" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="h-full flex justify-between flex-col">
          <h2 className="text-lg uppercase tracking-widest text-foreground">О нас</h2>

          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
            Мы создаём мебель, которая становится частью вашей жизни
          </h2>

          <p className="text-neutral-600 text-lg leading-relaxed">
            Мы объединяем современный дизайн и натуральные материалы, чтобы создавать мебель,
            которая не только выглядит стильно, но и служит годами.
          </p>

          <p className="text-neutral-600 text-lg leading-relaxed">
            Каждая деталь продумана: от текстуры дерева до удобства использования. Мы верим, что дом
            — это место, где начинается комфорт.
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-2xl font-semibold text-neutral-900">10+</p>
              <p className="text-sm text-neutral-500">лет опыта</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-neutral-900">5k+</p>
              <p className="text-sm text-neutral-500">довольных клиентов</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-neutral-900">100%</p>
              <p className="text-sm text-neutral-500">натуральные материалы</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-neutral-900">24/7</p>
              <p className="text-sm text-neutral-500">поддержка</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href={Pages.contacts}
              className="w-full sm:w-auto text-center border text-black px-5 py-3 hover:bg-neutral-200 transition"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
