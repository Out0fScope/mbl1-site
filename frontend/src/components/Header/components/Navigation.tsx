import NavigationHelper from '_helpers/navigation-helper';
import { Pages } from '_types/navigation';
import { ICategory } from 'src/lib/api/types';
import NavItem from './NavItem';

interface NavigationProps {
  categories: ICategory[];
}

const Navigation = ({ categories }: NavigationProps) => {
  const pages = NavigationHelper.getPages().filter((page) => !page.hidden);
  const homeSections = NavigationHelper.getSections(Pages.home).map((section) => {
    return {
      link: Pages.home + '#' + section.id,
      name: section.label,
      hidden: false,
      isDropdown: false,
    };
  });

  const links = Array.from({ length: Math.max(pages.length, homeSections.length) }, (_, i) => [
    homeSections[i],
    pages[i],
  ])
    .flat()
    .filter(Boolean);

  return (
    <nav className="hidden md:flex items-center max-xl:text-sm lg:gap-2">
      {links.map((item, index) => (
        <NavItem key={index} page={item} />
      ))}
    </nav>
  );
};

export default Navigation;
