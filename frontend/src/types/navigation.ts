enum Pages {
  home = '/',
  gallery = 'gallery',
  installmentCredit = 'installmentCredit',
  about = 'about',
  contacts = 'contacts',
  reviews = 'reviews',
  howOrder = 'howOrder',
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
  [Pages.gallery]: {
    name: 'Галерея',
    link: '/gallery',
  },
  [Pages.installmentCredit]: {
    name: 'Рассрочка и кредит',
    link: '/installment-credit',
  },
  [Pages.about]: {
    name: 'О нас',
    link: '/about',
  },
  [Pages.contacts]: {
    name: 'Контакты',
    link: '/contacts',
  },
  [Pages.reviews]: {
    name: 'Отзывы',
    link: '/reviews',
  },
  [Pages.howOrder]: {
    name: 'Как заказать',
    link: '/how-order',
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
