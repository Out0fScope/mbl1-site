enum Collection {
  Contacts = 'contacts',
  Categories = 'categories',
  Orders = 'orders',
}

interface ICollectionMap {
  [Collection.Contacts]: IContact[];
  [Collection.Categories]: ICategory[];
  [Collection.Orders]: IOrder[];
}

interface IContact {
  email: string;
  phone1: string;
  phone2: string;
  address: string;
}

interface ICategory {
  title: string;
  description: string;
  image: { id: string };
  sub_categories: ISubCategory[] | null;
  groups_tag: GroupsTag[] | null;
}

interface ISubCategory {
  title: string;
  projects: IProject[];
  active: boolean;
}

interface IProject {
  date_created: number;
  description: string;
  image: { id: string };
  price: string;
  title: string;
}

interface IOrder {
  name: string;
  phone: string;
  email: string;
  description: string;
}

interface GroupsTag {
  tag_groups_id: {
    title: string;
    tags: ITag[];
  };
}

interface ITag {
  title: string;
}

interface IData {
  getData<K extends Collection>(key: K): Promise<ICollectionMap[K]>;
  postData<K extends Collection>(key: K, value: ICollectionMap[K]): Promise<void>;
}

export { Collection };
export type { ICategory, ICollectionMap, IContact, IData, IOrder, IProject, ISubCategory };
