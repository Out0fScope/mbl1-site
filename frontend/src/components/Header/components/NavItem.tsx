'use client';

import { IPage } from '_types/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ICategory } from 'src/lib/api/types';
import DropdownMenu from './DropdownMenu';

interface NavItemProps {
  page: IPage;
  categories: ICategory[];
}

const NavItem = ({ page, categories }: NavItemProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div
      className="relative h-full flex items-center"
      onMouseLeave={() => page.isDropdown && setMenuOpen(false)}
    >
      <Link
        href={page.href}
        className={`btn-12 text-md font-medium z-10 ${
          pathname === page.href || (page.href !== '/' && pathname.startsWith(page.href + '/'))
            ? 'active'
            : ''
        }`}
        onMouseEnter={() => page.isDropdown && setMenuOpen(true)}
      >
        {page.label}
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
            >
              <DropdownMenu categories={categories} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavItem;
