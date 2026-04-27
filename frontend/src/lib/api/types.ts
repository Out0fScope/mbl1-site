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
  projects: IProject[];
}

interface IProject {
  title: string;
  description: string;
  images: { directus_files_id: { id: string } }[];
}

interface IOrder {
  name: string;
  phone: string;
  email: string;
  description: string;
  image: any | null;
  designer: boolean;
}

interface IData {
  getData<K extends Collection>(key: K): Promise<ICollectionMap[K]>;
  postData<K extends Collection>(key: K, value: ICollectionMap[K]): Promise<void>;
  uploadFile(file: File): Promise<any | null>;
}

export { Collection };
export type { ICategory, ICollectionMap, IContact, IData, IOrder, IProject };
