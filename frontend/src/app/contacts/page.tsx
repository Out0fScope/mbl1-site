import Api from '_Api';
import { Collection } from 'src/lib/api/types';
import ContactsPage from './ContactsPage';

const Contacts = async () => {
  const contacts = (await Api.getData(Collection.Contacts))[0];

  return <ContactsPage contacts={contacts} />;
};

export default Contacts;
