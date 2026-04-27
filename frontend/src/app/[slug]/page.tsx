import Api from '_Api';
import { slugify } from '_helpers/slugify-helper';
import { Collection, ICategory } from 'src/lib/api/types';
import CategoryPage from './CatigoryPage';

interface CategoryProps {
  params: { slug: string };
}

const Category = async (props: CategoryProps) => {
  const categories: ICategory[] = await Api.getData(Collection.Categories);
  const params = await props.params;
  const category = categories.find((t) => slugify(t.title, { lower: true }) === params.slug);

  if (!category) return <div>Категория не найдена</div>;

  return <CategoryPage category={category} />;
};

export default Category;
