import Api from '_api/index';
import { Collection } from '_api/types';
import { BreadcrumbsProvider } from '_context/BreadcrumbsProvider';
import PrivacyPolicyPage from './PrivacyPolicyPage';

const installmentCredit = async () => {
  const categories = await Api.getData(Collection.Categories);

  return (
    <BreadcrumbsProvider categories={categories}>
      <PrivacyPolicyPage />
    </BreadcrumbsProvider>
  );
};

export default installmentCredit;
