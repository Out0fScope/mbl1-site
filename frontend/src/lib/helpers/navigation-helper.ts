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
        link: pageData.link,
        name: pageData.name,
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

  getSections(page) {
    const sections = Nav[page].sections;

    if (!sections) {
      throw new Error(`Page "${page}" has no sections`);
    }

    // Convert object to array with id + label
    return Object.entries(sections).map(([id, data]) => ({
      id,
      label: data.label,
    }));
  },
};

export default Navigation;
