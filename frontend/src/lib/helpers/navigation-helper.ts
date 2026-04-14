import { INavigation, Nav, Pages } from '_types/navigation';

const Navigation: INavigation = {
  getPages() {
    return Object.keys(Nav).map((page) => {
      const key = page as Pages;
      const pageData = Nav[key] as {
        link: string;
        name: string;
        hidden?: boolean;
        isDropdown?: boolean;
      };

      return {
        href: pageData.link,
        label: pageData.name,
        hidden: pageData.hidden ?? false,
        isDropdown: pageData.isDropdown ?? false,
      };
    });
  },

  getLink(page) {
    return Nav[page].link;
  },

  getName(page) {
    return Nav[page].name;
  },
};

export default Navigation;
