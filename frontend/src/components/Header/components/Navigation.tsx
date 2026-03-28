import NavigationHelper from '_helpers/navigation-helper';
import { ICategory } from 'src/lib/api/types';
import NavItem from './NavItem';

interface NavigationProps {
  categories: ICategory[];
}

const Navigation = ({ categories }: NavigationProps) => {
  const pages = NavigationHelper.getPages().filter((page) => !page.hidden);
  return (
    <nav className="hidden lg:flex h-full items-center gap-[0.5rem]">
      {pages.map((item, index) => (
        <NavItem key={index} page={item} categories={categories} />
      ))}
    </nav>
  );
};

export default Navigation;
