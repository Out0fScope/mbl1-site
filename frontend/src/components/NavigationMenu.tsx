'use client';

import { X } from 'lucide-react';

interface INavigationItem {
  href: string;
  label: string;
}

const NavigationMenu = ({
  navigationItems,
  onClose,
}: {
  navigationItems: INavigationItem[];
  onClose: () => void;
}) => {
  return (
    <div
      className="relative w-full max-w-md bg-background text-foreground p-8 shadow-xl mx-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 inline-flex items-center justify-center
                         hover:bg-foreground/10 transition"
        aria-label="Закрыть меню"
      >
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-xl font-semibold mb-6 text-primary">Навигация по сайту</h2>
      <nav className="flex flex-col gap-4 text-lg font-medium">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3 py-2 rounded-lg hover:bg-foreground/10 hover:text-primary transition"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavigationMenu;
