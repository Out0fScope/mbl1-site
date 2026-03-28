'use client';

import { ICategory } from 'src/lib/api/types';

interface IDropdownMenuProps {
  categories: ICategory[];
}

const DropdownMenu = ({ categories }: IDropdownMenuProps) => {
  return (
    <div
      className="
        flex gap-10
        px-8 py-8
        min-w-[800px]
        bg-background
        shadow-xl
      "
    >
      {categories.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 min-w-[12rem]">
          <p className="text-xl font-medium text-primary mb-2 hover:text-primary-hover cursor-pointer">
            {item.title}
          </p>
        </div>
      ))}
      {/* КУХНИ */}
      {/* <div className="flex flex-col gap-2 min-w-[12rem]">
        <p className="text-xl font-medium text-primary mb-2 hover:text-primary-hover cursor-pointer">
          Кухни
        </p>

        <a className="cursor-pointer hover:text-muted">Прямые кухни</a>
        <a className="cursor-pointer hover:text-muted">Угловые кухни</a>
        <a className="cursor-pointer hover:text-muted">Кухни с островом</a>
        <a className="cursor-pointer hover:text-muted">Мини-кухни</a>
      </div> */}

      {/* ШКАФЫ И ХРАНЕНИЕ */}
      {/* <div className="flex flex-col gap-2 min-w-[12rem]">
        <p className="text-xl font-medium text-primary mb-2 hover:text-primary-hover cursor-pointer">
          Шкафы и хранение
        </p>

        <a className="cursor-pointer hover:text-muted">Шкафы-купе</a>
        <a className="cursor-pointer hover:text-muted">Распашные шкафы</a>
        <a className="cursor-pointer hover:text-muted">Гардеробные</a>
        <a className="cursor-pointer hover:text-muted">Комоды и тумбы</a>
      </div> */}

      {/* КОМНАТЫ */}
      {/* <div className="flex flex-col gap-2 min-w-[12rem]">
        <p className="text-xl font-medium text-primary mb-2 hover:text-primary-hover cursor-pointer">
          Комнаты
        </p>

        <a className="cursor-pointer hover:text-muted">Детская мебель</a>
        <a className="cursor-pointer hover:text-muted">Спальни</a>
        <a className="cursor-pointer hover:text-muted">Гостиные</a>
        <a className="cursor-pointer hover:text-muted">Прихожие</a>
      </div> */}

      {/* ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ */}
      {/* <div className="flex flex-col gap-2 min-w-[12rem]">
        <p className="text-xl font-medium text-primary mb-2 hover:text-primary-hover cursor-pointer">
          Под заказ
        </p>

        <a className="cursor-pointer hover:text-muted">Встроенная мебель</a>
        <a className="cursor-pointer hover:text-muted">По дизайн-проекту</a>
      </div> */}
    </div>
  );
};

export default DropdownMenu;
