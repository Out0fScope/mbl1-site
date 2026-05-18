'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { IProject } from 'src/lib/api/types';

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

interface CardProps {
  item: IProject;
}

const Card = ({ item }: CardProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleOpen = () => {
    const params = new URLSearchParams(searchParams);

    params.set('project', item.article);

    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex h-full flex-col overflow-hidden shadow-lg">
      <div className="relative h-56 bg-black/30 sm:h-64">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${url}/assets/${item.images[0]?.directus_files_id.id})`,
          }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between bg-white p-4">
        <div>
          <h3 className="mb-2 text-base font-semibold text-black sm:text-lg">{item.article}</h3>

          <p className="line-clamp-2 text-sm text-gray-600">{item.description}</p>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={handleOpen}
            className="
              cursor-pointer
              border
              px-4
              py-2
              text-sm
              text-black
              transition-colors duration-200
              hover:bg-black hover:text-white
            "
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
