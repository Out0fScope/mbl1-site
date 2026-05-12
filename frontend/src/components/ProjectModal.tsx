'use client';

import useModal from '_hooks/useModal';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { IProject } from 'src/lib/api/types';
import OrderForm from './OrderForm';

interface Props {
  project: IProject;
  onClose: () => void;
}

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

const ProjectModal = ({ project, onClose }: Props) => {
  const [active, setActive] = useState(0);
  const images = project.images || [];
  const { openModal, closeModal } = useModal();

  const prev = () => {
    setActive((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setActive((prev) => Math.min(prev + 1, images.length - 1));
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        relative
        w-full
        max-w-7xl
        overflow-hidden
        bg-white
        shadow-2xl

        flex
        flex-col
        lg:flex-row

        max-h-[95vh]
      "
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="
          absolute right-4 top-4 z-30
          rounded-full
          bg-black/50
          p-2
          text-white
          backdrop-blur
          transition-all duration-200
          hover:scale-110 hover:bg-black/70
        "
      >
        <X size={20} />
      </button>

      {/* LEFT */}
      <div
        className="
          relative
          flex
          min-h-[320px]
          flex-3
          items-center
          justify-center
          bg-neutral-100

          h-[45vh]
          sm:h-[55vh]
          lg:h-auto
        "
      >
        {images.length > 0 &&
          (images[active]?.directus_files_id.type.includes('image') ? (
            <img
              src={`${url}/assets/${images[active]?.directus_files_id.id}`}
              alt={project.title}
              className="
              h-full
              w-full
              object-contain
              select-none
            "
            />
          ) : (
            <video
              src={`${url}/assets/${images[active]?.directus_files_id.id}`}
              controls
              muted
              playsInline
              autoPlay
              preload="metadata"
              className="
    h-full
    w-full
    object-contain
    select-none
    bg-black
  "
            />
          ))}

        {/* LEFT ARROW */}
        {active > 0 && (
          <button
            onClick={prev}
            className="
              absolute left-3 top-1/2 z-20
              -translate-y-1/2

              rounded-full
              bg-black/50
              p-3
              text-white
              backdrop-blur

              transition-all duration-200
              hover:scale-110 hover:bg-black/70
            "
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* RIGHT ARROW */}
        {active < images.length - 1 && (
          <button
            onClick={next}
            className="
              absolute right-3 top-1/2 z-20
              -translate-y-1/2

              rounded-full
              bg-black/50
              p-3
              text-white
              backdrop-blur

              transition-all duration-200
              hover:scale-110 hover:bg-black/70
            "
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>

      {/* RIGHT */}
      <div
        className="
          flex
          flex-2
          w-full
          flex-col
          justify-between

          p-5
          sm:p-6
          lg:w-[380px]
          lg:min-w-[380px]

          overflow-y-auto
        "
      >
        {/* CONTENT */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold leading-tight">{project.title}</h2>

          <p
            className="
              text-sm
              leading-relaxed
              text-neutral-600
              whitespace-pre-line
            "
          >
            {project.description}
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-8">
          {/* THUMBS */}
          {images.length > 1 && (
            <div
              className="
                mb-5
                flex
                gap-2
                overflow-x-auto
                pb-1
                no-scrollbar
              "
            >
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`
                    relative
                    h-16
                    min-w-[64px]
                    overflow-hidden
                    rounded-md
                    border
                    transition-all duration-200

                    ${
                      i === active
                        ? 'border-black opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-80'
                    }
                  `}
                >
                  <img
                    src={`${url}/assets/${img.directus_files_id.id}`}
                    alt={`preview-${i}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() =>
              openModal(OrderForm, {
                title: project.title,
                onClose: closeModal,
              })
            }
            className="
              w-full
              border
              px-5
              py-3
              text-center
              text-black
              transition
              hover:bg-neutral-200
            "
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
