'use client';

import NavigationHelper from '_helpers/navigation-helper';
import NavItem from './NavItem';

const Navigation = () => {
  const pages = NavigationHelper.getPages().filter((page) => !page.hidden);
  return (
    <nav className="hidden lg:flex h-full items-center gap-[0.5rem]">
      {pages.map((item, index) => (
        <NavItem key={index} page={item} />
      ))}
    </nav>
  );
};

export default Navigation;
