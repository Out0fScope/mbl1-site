const DropdownMenu = () => {
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
      {/* КУХНИ */}
      <div className="flex flex-col gap-2 min-w-[12rem]">
        <p className="text-lg font-medium text-primary mb-2">Кухни</p>

        <a className="cursor-pointer hover:text-muted">Прямые кухни</a>
        <a className="hover:text-accent">Угловые кухни</a>
        <a className="hover:text-accent">Кухни с островом</a>
        <a className="hover:text-accent">Мини-кухни</a>
      </div>

      {/* ШКАФЫ И ХРАНЕНИЕ */}
      <div className="flex flex-col gap-2 min-w-[12rem]">
        <p className="text-lg font-medium text-primary mb-2">Шкафы и хранение</p>

        <a className="hover:text-accent">Шкафы-купе</a>
        <a className="hover:text-accent">Распашные шкафы</a>
        <a className="hover:text-accent">Гардеробные</a>
        <a className="hover:text-accent">Комоды и тумбы</a>
      </div>

      {/* КОМНАТЫ */}
      <div className="flex flex-col gap-2 min-w-[12rem]">
        <p className="text-lg font-medium text-primary mb-2">Комнаты</p>

        <a className="hover:text-accent">Детская мебель</a>
        <a className="hover:text-accent">Спальни</a>
        <a className="hover:text-accent">Гостиные</a>
        <a className="hover:text-accent">Прихожие</a>
      </div>

      {/* ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ */}
      <div className="flex flex-col gap-2 min-w-[12rem]">
        <p className="text-lg font-medium text-primary mb-2">Под заказ</p>

        <a className="hover:text-accent">Встроенная мебель</a>
        <a className="hover:text-accent">По дизайн-проекту</a>
      </div>
    </div>
  );
};

export default DropdownMenu;
