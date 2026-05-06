import Api from '_Api';
import { BreadcrumbsProvider } from '_context/BreadcrumbsProvider';
import { Collection } from 'src/lib/api/types';
import ContactsPage from './ContactsPage';

const Contacts = async () => {
  const categories = await Api.getData(Collection.Categories);
  const contacts = (await Api.getData(Collection.Contacts))[0];

  return (
    <BreadcrumbsProvider categories={categories}>
      <ContactsPage contacts={contacts} />
    </BreadcrumbsProvider>
  );
};

export default Contacts;
