enum Collection {
  Contacts = 'contacts',
  Categories = 'categories',
  Orders = 'orders',
  Reviews = 'reviews',
}

interface ICollectionMap {
  [Collection.Contacts]: IContacts[];
  [Collection.Categories]: ICategory[];
  [Collection.Orders]: IOrder[];
  [Collection.Reviews]: IReview[];
}

interface IContacts {
  email: string;
  phone1: string;
  phone2: string;
  address: string;
  pin: string;
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

interface IReview {
  image: { id: string };
}

interface IData {
  getData<K extends Collection>(key: K): Promise<ICollectionMap[K]>;
  postData<K extends Collection>(key: K, value: ICollectionMap[K]): Promise<void>;
  uploadFile(file: File): Promise<any | null>;
}

export { Collection };
export type { ICategory, ICollectionMap, IContacts, IData, IOrder, IProject, IReview };
