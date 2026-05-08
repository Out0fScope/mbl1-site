'use client';

import useScroll from '_hooks/useScroll';
import { motion } from 'framer-motion';
import { ICategory, IContacts } from 'src/lib/api/types';

import BurgerButton from './components/BurgerButton';
import Contacts from './components/Contacts';
import Info from './components/Info';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

interface HeaderProps {
  contacts: IContacts;
  categories: ICategory[];
}

const HeaderComponent = ({ contacts, categories }: HeaderProps) => {
  const { scrollY, isUpDirection, width } = useScroll();

  const isCompact = (scrollY > 200 && !isUpDirection) || width < 768;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="max-w-8xl mx-auto shadow-md">
        <div className="flex flex-col">
          {/* TOP BAR */}
          <motion.div
            animate={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="w-full flex justify-between border-b border-muted/20 px-4 md:px-8 lg:px-16"
          >
            <Info contacts={contacts} isCompact={isCompact} />

            <Logo isCompact={isCompact} />

            <BurgerButton />

            <Contacts contacts={contacts} isCompact={isCompact} />
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            animate={{
              height: isCompact ? 0 : 56,
              opacity: isCompact ? 0 : 1,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
            className="w-full overflow-hidden flex justify-center"
          >
            <Navigation categories={categories} />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
