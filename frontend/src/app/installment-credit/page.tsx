import Api from '_api/index';
import { Collection } from '_api/types';
import { BreadcrumbsProvider } from '_context/BreadcrumbsProvider';
import InstallmentCreditPage from './installmentCreditPage';

const installmentCredit = async () => {
  const categories = await Api.getData(Collection.Categories);

  return (
    <BreadcrumbsProvider categories={categories}>
      <InstallmentCreditPage />
    </BreadcrumbsProvider>
  );
};

export default installmentCredit;
