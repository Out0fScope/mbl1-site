'use client';

import { ICategory } from 'src/lib/api/types';
import Card from './components/Card';

interface CategoryPageProps {
  category: ICategory;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  return (
    <section className="mb-16 scroll-mt-64 px-4 sm:px-12 lg:px-16 xl:px-24">
      {/* HEADER */}
      <header className="py-4 md:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{category.title}</h1>

        <p className="text-muted max-w-2xl text-sm sm:text-base leading-relaxed">
          Подберите идеальное решение под ваш интерьер. Все проекты можно адаптировать под ваши
          размеры и пожелания.
        </p>
      </header>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 py-4 md:py-8">
        {category.projects?.map((item, index) => (
          <div
            key={index}
            className="border overflow-hidden hover:shadow-lg transition flex flex-col"
          >
            {/* IMAGE */}
            {item.images.length !== null ? (
              <Card item={item} />
            ) : (
              <div className="h-40 sm:h-48 bg-gray-200" />
            )}
          </div>
        ))}

        {/* EMPTY STATE */}
        {category.projects?.length === 0 && (
          <div className="col-span-full text-center py-16 sm:py-20 text-muted text-sm sm:text-base">
            Ничего не найдено по выбранным фильтрам
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
