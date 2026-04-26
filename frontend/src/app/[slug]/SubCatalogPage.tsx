'use client';

import { ICategory } from 'src/lib/api/types';

interface SubCategoryPageProps {
  category: ICategory;
}

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

const SubCategoryPage = ({ category }: SubCategoryPageProps) => {
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

      {/* CONTENT */}
      <div className="grid lg:grid-cols-[250px_1fr] gap-10">
        {/* PRODUCTS */}
        <div>
          {/* <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects?.map((item, index) => (
              <div key={index} className="border overflow-hidden hover:shadow-lg transition">
                {item.image !== null ? (
                  <div
                    className="h-48 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${url}/assets/${item.image.id}?access_token=GbOjzxPfosOPItS_v28R-DYNyFR5kBN7)`,
                    }}
                  />
                ) : (
                  <div className="h-48 bg-gray-200" />
                )}

                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div> */}

          {/* {category.sub_categories?.length === 0 && (
            <div className="text-center py-20 text-muted">
              Ничего не найдено по выбранным фильтрам
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default SubCategoryPage;
