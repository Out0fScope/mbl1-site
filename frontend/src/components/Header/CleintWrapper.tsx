'use client';

import useScroll from '_hooks/useScroll';
import { ICategory, IContact } from 'src/lib/api/types';
import BurgerButton from './components/BurgerButton';
import Contacts from './components/Contacts';
import Info from './components/Info';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

interface HeaderProps {
  contacts: IContact;
  categories: ICategory[];
}

const CleintHeader = ({ contacts, categories }: HeaderProps) => {
  const { scrollY } = useScroll();

  const opacity = Math.min(scrollY / 120, 1);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className={'max-w-8xl mx-auto shadow-xl'}>
        <div className="flex flex-col items-end justify-between">
          <div className="h-full w-full flex justify-between border-b border-muted/20 px-16">
            <Info contacts={contacts} />
            <Logo />
            <Contacts contacts={contacts} />
          </div>
          <div className="h-full w-full flex justify-center">
            <Navigation categories={categories} />
          </div>
        </div>
        <BurgerButton />
      </div>
    </header>
  );
};

export default CleintHeader;
