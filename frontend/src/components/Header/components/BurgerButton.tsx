'use client';

import { IContacts } from '_api/types';
import NavigationMenu from '_components/NavigationMenu';
import NavigationHelper from '_helpers/navigation-helper';
import useModal from '_hooks/useModal';
import { Menu } from 'lucide-react';

interface Props {
  contacts: IContacts;
}

const BurgerButton = ({ contacts }: Props) => {
  const { openModal, closeModal } = useModal();
  const pages = NavigationHelper.getPages().filter((page) => !page.hidden);

  const navigationItems = pages.map((page) => {
    return { href: page.link, label: page.name };
  });

  return (
    <button
      onClick={() =>
        openModal(NavigationMenu, {
          navigationItems: navigationItems,
          contacts: contacts,
          onClose: closeModal,
        })
      }
      aria-label="Открыть меню навигации"
      className="md:hidden text-foreground"
    >
      <Menu className="w-12 h-12" />
    </button>
  );
};

export default BurgerButton;
