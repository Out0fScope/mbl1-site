'use client';

import ProjectModal from '_components/ProjectModal';
import useModal from '_hooks/useModal';
import { IProject } from 'src/lib/api/types';

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

interface CardProps {
  item: IProject;
}

const Card = ({ item }: CardProps) => {
  const { openModal, closeModal } = useModal();

  return (
    <div className="flex flex-col overflow-hidden shadow-lg h-full">
      {/* IMAGE AREA */}
      <div className="relative h-56 sm:h-64 bg-black/30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${url}/assets/${item.images[0]?.directus_files_id.id}?access_token=GbOjzxPfosOPItS_v28R-DYNyFR5kBN7)`,
          }}
        />
      </div>

      {/* BOTTOM SHELF */}
      <div className="flex flex-col justify-between flex-1 p-4 bg-white">
        {/* TITLE */}
        <div>
          <h3 className="font-semibold text-base sm:text-lg text-black mb-2">{item.title}</h3>

          <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
        </div>

        {/* ACTION */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => openModal(ProjectModal, { project: item, onClose: closeModal })}
            className="border px-4 py-2 text-sm text-black transition-colors duration-200 hover:bg-black hover:text-white cursor-pointer"
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
