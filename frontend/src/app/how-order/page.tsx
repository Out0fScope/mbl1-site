import Api from '_api/index';
import { Collection } from '_api/types';
import { BreadcrumbsProvider } from '_context/BreadcrumbsProvider';
import HowOrderPage from './howOrderPage';

const HowOrder = async () => {
  const categories = await Api.getData(Collection.Categories);

  return (
    <BreadcrumbsProvider categories={categories}>
      <HowOrderPage />
    </BreadcrumbsProvider>
  );
};

export default HowOrder;
