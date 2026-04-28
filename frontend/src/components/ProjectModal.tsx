'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { IProject } from 'src/lib/api/types';

interface Props {
  project: IProject;
  onClose: () => void;
}

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

const ProjectModal = ({ project, onClose }: Props) => {
  const [active, setActive] = useState(0);
  const images = project.images || [];

  return (
    <div
      className="relative w-full max-w-6xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row"
      onClick={(e) => e.stopPropagation()}
    >
      {/* ❌ КНОПКА ЗАКРЫТИЯ */}
      <button
        onClick={onClose}
        className="
          absolute top-4 right-4 z-20
          p-2 rounded-full
          bg-black/50 text-white
          backdrop-blur
          hover:bg-black/70 hover:scale-110
          transition-all duration-200 cursor-pointer
        "
      >
        <X size={20} />
      </button>

      {/* LEFT — IMAGE */}
      <div className="relative flex items-center justify-center">
        {images.length > 0 && (
          <img
            src={`${url}/assets/${images[active]?.directus_files_id.id}`}
            className="w-full h-full max-h-[70vh] object-contain"
          />
        )}

        {/* arrows */}
        {active > 0 && (
          <button
            onClick={() => setActive((p) => p - 1)}
            className="
      absolute left-4 z-20
      p-3 rounded-full
      bg-black/50 text-white
      backdrop-blur
      hover:bg-black/70 hover:scale-110
      transition-all duration-200 cursor-pointer
    "
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {active < images.length - 1 && (
          <button
            onClick={() => setActive((p) => p + 1)}
            className="
      absolute right-4 z-20
      p-3 rounded-full
      bg-black/50 text-white
      backdrop-blur
      hover:bg-black/70 hover:scale-110
      transition-all duration-200 cursor-pointer
    "
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>

      {/* RIGHT — INFO */}
      <div className="md:w-1/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>

        {/* thumbnails */}
        <div className="flex gap-2 mt-6 overflow-x-auto">
          {images.map((img, i) => (
            <img
              key={i}
              src={`${url}/assets/${img.directus_files_id.id}`}
              onClick={() => setActive(i)}
              className={`
                h-14 cursor-pointer rounded-md border transition
                ${i === active ? 'opacity-100 border-black' : 'opacity-50'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
