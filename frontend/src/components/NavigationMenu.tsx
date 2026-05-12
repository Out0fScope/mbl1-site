'use client';

import { IContacts } from '_api/types';
import useModal from '_hooks/useModal';
import { X } from 'lucide-react';
import Contacts from './Header/components/Contacts';
import Info from './Header/components/Info';

interface INavigationItem {
  href: string;
  label: string;
}

const NavigationMenu = ({
  navigationItems,
  contacts,
  onClose,
}: {
  navigationItems: INavigationItem[];
  contacts: IContacts;
  onClose: () => void;
}) => {
  const { openModal, closeModal } = useModal();

  return (
    <div
      className="relative w-full max-w-md bg-background text-foreground p-8 shadow-xl mx-4 flex flex-col gap-8"
      onClick={(e) => e.stopPropagation()}
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 inline-flex items-center justify-center
                   hover:bg-foreground/10 transition"
        aria-label="Закрыть меню"
      >
        <X className="w-6 h-6" />
      </button>

      {/* TITLE */}
      <h2 className="text-xl font-semibold text-primary">Навигация по сайту</h2>

      {/* NAV */}
      <nav className="flex flex-col gap-3 text-lg font-medium">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="px-3 py-2 rounded-lg hover:bg-foreground/10 hover:text-primary transition"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* 👇 INFO BLOCK */}
      <div className="border-t pt-6">
        <Info contacts={contacts} isCompact={false} forceVisible={true} />
      </div>

      {/* 👇 CONTACTS BLOCK */}
      <div className="border-t pt-6">
        <Contacts contacts={contacts} isCompact={false} forceVisible={true} />
      </div>
    </div>
  );
};

export default NavigationMenu;
