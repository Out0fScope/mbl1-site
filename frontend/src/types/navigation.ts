enum Pages {
  home = '/',
  installmentCredit = 'installmentCredit',
  contacts = 'contacts',
  howOrder = 'howOrder',
}

interface IPage {
  href: string;
  label: string;
  hidden?: boolean;
  isDropdown?: boolean;
}

enum HomeSections {
  gallery = 'gallery',
  about = 'about',
  reviews = 'reviews',
}

const HomeSectionsNav = {
  [HomeSections.gallery]: { label: 'Галерея' },
  [HomeSections.about]: { label: 'О нас' },
  [HomeSections.reviews]: { label: 'Отзывы' },
} as const;

const Nav = {
  [Pages.home]: {
    name: 'Главная',
    link: '/',
    hidden: true,
    sections: HomeSectionsNav,
  },
  [Pages.installmentCredit]: {
    name: 'Рассрочка и кредит',
    link: '/installment-credit',
  },
  [Pages.contacts]: {
    name: 'Контакты',
    link: '/contacts',
  },
  [Pages.howOrder]: {
    name: 'Как заказать',
    link: '/how-order',
  },
} as const;

interface ISectionItem {
  id: string;
  label: string;
}

type NavigationMap = typeof Nav;

type PageWithSections = {
  [K in Pages]: NavigationMap[K] extends { sections: any } ? K : never;
}[Pages];

interface INavigation {
  getPages(): IPage[];
  getLink<K extends Pages>(page: K): NavigationMap[K]['link'];
  getName<K extends Pages>(page: K): NavigationMap[K]['name'];
  getSections<K extends PageWithSections>(page: K): ISectionItem[];
}

export { HomeSections, Nav, Pages };
export type { INavigation, IPage };
