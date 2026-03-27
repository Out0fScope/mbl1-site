enum Collection {
  Contacts = 'contacts',
}

interface ICollectionMap {
  [Collection.Contacts]: IContacts[];
}

interface IContacts {
  email: string;
  phone1: string;
  phone2: string;
}

interface IData {
  getData<K extends Collection>(key: K): Promise<ICollectionMap[K]>;
  postData<K extends Collection>(key: K, value: ICollectionMap[K]): Promise<void>;
}

export { Collection };
export type { ICollectionMap, IContacts, IData };
