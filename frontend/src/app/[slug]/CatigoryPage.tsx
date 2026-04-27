'use client';

import { ICategory } from 'src/lib/api/types';
import Card from './components/Card';

interface CategoryPageProps {
  category: ICategory;
}

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

const CategoryPage = ({ category }: CategoryPageProps) => {
  console.log(category);

  return (
    <section className="cursor-default scroll-mt-64">
      {/* HEADER */}
      <header className="py-[1rem] md:py-[2rem]">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h1>
        <p className="text-muted max-w-2xl">
          Подберите идеальное решение под ваш интерьер. Все проекты можно адаптировать под ваши
          размеры и пожелания.
        </p>
      </header>

      {/* PRODUCTS */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 py-4 md:py-8">
        {category.projects?.map((item, index) => (
          <div key={index} className="border overflow-hidden hover:shadow-lg transition">
            {item.images.length !== null ? (
              <Card item={item} />
            ) : (
              <div className="h-48 bg-gray-200" />
            )}

            <div className="p-4">
              <h3 className="font-semibold mb-2">{item.title}</h3>
            </div>
          </div>
        ))}

        {category.projects?.length === 0 && (
          <div className="text-center py-20 text-muted">
            Ничего не найдено по выбранным фильтрам
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
