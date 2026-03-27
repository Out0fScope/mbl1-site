import Api from 'src/lib/api';
import { Collection } from 'src/lib/api/types';

const Home = async () => {
  const qwe = await Api.getData(Collection.Contacts);

  return <div className="cursor-default text-xl scroll-mt-64"></div>;
};

export default Home;
