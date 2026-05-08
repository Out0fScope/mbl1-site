import Api from '_Api';
import { Collection } from 'src/lib/api/types';
import CleintHeader from './HeaderComponent';

const Header = async () => {
  const contacts = (await Api.getData(Collection.Contacts))[0];
  const categories = await Api.getData(Collection.Categories);

  return <CleintHeader contacts={contacts} categories={categories} />;
};

export default Header;
