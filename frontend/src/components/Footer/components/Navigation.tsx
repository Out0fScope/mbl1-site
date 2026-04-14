'use client';

import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1rem] w-full">
      <div>
        <Link href="#" className="leading-4 hover:text-primary">
          <h3 className="text-lg font-semibold">Каталог</h3>
        </Link>
      </div>
      <div>
        <Link href="#" className="leading-4 hover:text-primary">
          <h3 className="text-lg font-semibold">Галерея</h3>
        </Link>
      </div>
      <div>
        <Link href="#" className="leading-4 hover:text-primary">
          <h3 className="text-lg font-semibold">О нас</h3>
        </Link>
      </div>
      <div>
        <Link href="#" className="leading-4 hover:text-primary">
          <h3 className="text-lg font-semibold">Контакты</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
