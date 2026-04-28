'use client';

import NavigationMenu from '_components/NavigationMenu';
import NavigationHelper from '_helpers/navigation-helper';
import useModal from '_hooks/useModal';
import { Menu } from 'lucide-react';

const BurgerButton = () => {
  const { openModal, closeModal } = useModal();
  const pages = NavigationHelper.getPages().filter((page) => !page.hidden);

  const navigationItems = pages.map((page) => {
    return { href: page.link, label: page.name };
  });

  return (
    <button
      onClick={() =>
        openModal(NavigationMenu, { navigationItems: navigationItems, onClose: closeModal })
      }
      aria-label="Открыть меню навигации"
      className="md:hidden text-foreground"
    >
      <Menu className="w-12 h-12" />
    </button>
  );
};

export default BurgerButton;
