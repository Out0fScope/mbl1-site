'use client';

import { useState } from 'react';
import { ICategory } from 'src/lib/api/types';

interface SubCategoryPageProps {
  category: ICategory;
}

const SubCategoryPage = ({ category }: SubCategoryPageProps) => {
  console.log(category);

  const [subCategories, setSubCategories] = useState(
    category.sub_categories?.map((item) => ({
      ...item,
      active: false,
    }))
  );

  const toggleSubCategory = (index: number) => {
    setSubCategories((prev) =>
      prev?.map((item, i) => ({
        ...item,
        active: i === index,
      }))
    );
  };

  const cleanSubCategories = () => {
    setSubCategories((prev) =>
      prev?.map((item) => ({
        ...item,
        active: false,
      }))
    );
  };

  const projects = subCategories?.find((x) => x.active === true)
    ? subCategories?.filter((x) => x.active).flatMap((item) => item.projects || [])
    : subCategories?.flatMap((item) => item.projects || []);

  return (
    <section className="container mx-auto px-4 py-10">
      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h1>
        <p className="text-muted max-w-2xl">
          Подберите идеальное решение под ваш интерьер. Все проекты можно адаптировать под ваши
          размеры и пожелания.
        </p>
      </header>

      {/* SUBCATEGORIES */}
      <div className="mb-12">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-6">Категории</h2>
          <button
            className="cursor-pointer underline hover:text-primary"
            onClick={() => cleanSubCategories()}
          >
            Сбросить категории
          </button>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {subCategories?.map((sub, index) => {
            const count = sub.projects?.length ?? 0;

            return (
              <div
                key={index}
                className={`relative p-6 border transition-all duration-300 cursor-pointer
                  ${count === 0 ? 'opacity-40 pointer-events-none' : 'hover:shadow-lg hover:-translate-y-1'}
                  ${sub.active ? 'border-primary bg-primary-light text-card' : 'border-muted'}`}
                onClick={() => toggleSubCategory(index)}
              >
                <div className="font-semibold text-lg mb-2">{sub.title}</div>

                <div
                  className={`text-sm transition-all duration-300  ${sub.active ? 'text-card' : 'text-muted'}`}
                >
                  Проектов: {count}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        {/* COUNT */}
        <div className="text-sm text-muted">Найдено: {projects?.length}</div>

        {/* SORT */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">Сортировка:</span>

          <select
            className="border px-3 py-2 text-sm bg-white"
            onChange={(e) => {
              // пока просто лог
              console.log('sort:', e.target.value);
            }}
          >
            <option value="default">По умолчанию</option>
            <option value="old">Сначала старые</option>
            <option value="new">Сначала новые</option>
            <option value="cheap">Сначала дешевые</option>
            <option value="expensive">Сначала дорогие</option>
          </select>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-[250px_1fr] gap-10">
        {/* FILTERS */}
        <aside className="space-y-6">
          <h3 className="font-semibold text-lg">Фильтры</h3>

          {category.groups_tag?.map((group, index) => (
            <div key={index}>
              <p className="text-xl mb-2 underline">{group.tag_groups_id.title}</p>
              <div className="space-y-2">
                {group.tag_groups_id.tags.map((tag, index) => (
                  <label key={index} className="block">
                    <input type="checkbox" className="mr-2" />
                    {tag.title}
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* пример фильтра */}
          {/* <div>
            <p className="text-sm mb-2">Стиль</p>
            <div className="space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Современный
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Классический
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm mb-2">Цвет</p>
            <div className="space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Белый
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Тёмный
              </label>
            </div>
          </div> */}
        </aside>

        {/* PRODUCTS */}
        <div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects?.map((item, index) => (
              <div key={index} className="border overflow-hidden hover:shadow-lg transition">
                {/* IMAGE */}
                <div className="h-48 bg-gray-200" />

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>

                  {/* <div className="flex flex-wrap gap-2 text-xs text-muted">
                    {item.tags?.map((tag) => (
                      <span key={tag} className="px-2 py-1 border rounded">
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY */}
          {category.sub_categories?.length === 0 && (
            <div className="text-center py-20 text-muted">
              Ничего не найдено по выбранным фильтрам
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubCategoryPage;
