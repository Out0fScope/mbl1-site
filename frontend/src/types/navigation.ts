enum Pages {
  home = '/',
  catalog = 'catalog',
  gallery = 'gallery',
  about = 'about',
  contacts = 'contacts',
}

interface IPage {
  href: string;
  label: string;
  hidden?: boolean;
  isDropdown?: boolean;
}

const Nav = {
  [Pages.home]: {
    name: 'Главная',
    link: '/',
    hidden: true,
  },
  [Pages.catalog]: {
    name: 'Каталог',
    link: '/catalog',
    isDropdown: true,
  },
  [Pages.gallery]: {
    name: 'Галерея',
    link: '/gallery',
  },
  [Pages.about]: {
    name: 'О нас',
    link: '/about',
  },
  [Pages.contacts]: {
    name: 'Контакты',
    link: '/contacts',
  },
} as const;

type NavigationMap = typeof Nav;

interface INavigation {
  getPages(): IPage[];
  getLink<K extends Pages>(page: K): NavigationMap[K]['link'];
  getName<K extends Pages>(page: K): NavigationMap[K]['name'];
}

export { Nav, Pages };
export type { INavigation, IPage };
