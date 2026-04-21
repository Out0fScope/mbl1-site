import Api from '_api/index';
import { Collection } from '_api/types';
import Image from 'next/image';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';

const IMAGE_ALT = 'Главная Mbl1';

const reviews = [
  {
    name: 'Анна Смирнова',
    text: 'Очень довольна качеством. Диван выглядит даже лучше, чем на фото, и невероятно удобный.',
  },
  {
    name: 'Игорь Волков',
    text: 'Заказывали стол и стулья — всё пришло идеально. Видно внимание к деталям.',
  },
  {
    name: 'Мария Кузнецова',
    text: 'Минималистичный дизайн и отличные материалы. Интерьер сразу стал выглядеть дороже.',
  },
];
const Home = async () => {
  const categories = await Api.getData(Collection.Categories);

  return (
    <>
      <HeroSection />
      <GallerySection categories={categories} />

      <section id="about" className="bg-white py-20 px-6 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image src="/about.jpg" alt="О нас" fill className="object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm uppercase tracking-widest text-neutral-500">О нас</span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
              Мы создаём мебель, которая становится частью вашей жизни
            </h2>

            <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
              Мы объединяем современный дизайн и натуральные материалы, чтобы создавать мебель,
              которая не только выглядит стильно, но и служит годами.
            </p>

            <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
              Каждая деталь продумана: от текстуры дерева до удобства использования. Мы верим, что
              дом — это место, где начинается комфорт.
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
              <a
                href="#catalog"
                className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm md:text-base font-medium hover:bg-neutral-800 transition"
              >
                Перейти в каталог
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 px-6 md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-xl mb-12">
            <span className="text-sm uppercase tracking-widest text-neutral-500">Отзывы</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-neutral-900">
              Что говорят наши клиенты
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-md transition"
              >
                {/* Text */}
                <p className="text-neutral-700 leading-relaxed mb-6">“{review.text}”</p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center text-sm font-medium text-neutral-600">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{review.name}</p>
                    <p className="text-xs text-neutral-500">Покупатель</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
