'use client';

import ProjectModal from '_components/ProjectModal';
import useModal from '_hooks/useModal';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { ICategory } from 'src/lib/api/types';
import Card from './components/Card';

interface CategoryPageProps {
  category: ICategory;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { openModal, closeModal } = useModal();

  const article = searchParams.get('project');
  const activeProject = category.projects.find((p) => p.article === article);

  useEffect(() => {
    if (!activeProject) {
      closeModal();

      return;
    }

    openModal(ProjectModal, {
      project: activeProject,
      onClose: () => {
        const params = new URLSearchParams(searchParams);

        params.delete('project');

        router.push(`?${params.toString()}`, {
          scroll: false,
        });
      },
    });
  }, [activeProject]);

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
            Пока что в этой категории пусто
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
