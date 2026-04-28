'use client';

import useScroll from '_hooks/useScroll';
import { IPage } from '_types/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ICategory } from 'src/lib/api/types';

interface NavItemProps {
  page: IPage;
  categories: ICategory[];
}

const NavItem = ({ page, categories }: NavItemProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const isCompact = scrollY > 100;

  const pathname = usePathname();

  return (
    <div
      className="relative flex items-center"
      onMouseLeave={() => page.isDropdown && setMenuOpen(false)}
    >
      <Link
        href={page.link}
        className={`btn-12 ${isCompact ? 'py-2!' : ''} text-md font-medium z-10 ${
          pathname === page.link || (page.link !== '/' && pathname.startsWith(page.link + '/'))
            ? 'active'
            : ''
        }`}
        onMouseEnter={() => page.isDropdown && setMenuOpen(true)}
      >
        {page.name}
      </Link>
      {page.isDropdown && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-full left-1/2 -translate-x-1/3 pt-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavItem;
