import Api from '_Api';
import { slugify } from '_helpers/slugify-helper';
import { Collection, ICategory } from 'src/lib/api/types';
import CategoryPage from './CategoryPage';

interface CategoryProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories: ICategory[] = await Api.getData(Collection.Categories);

  return categories.map((category) => ({
    slug: slugify(category.title, { lower: true }),
  }));
}

const Category = async ({ params }: CategoryProps) => {
  const { slug } = await params;
  const categories: ICategory[] = await Api.getData(Collection.Categories);
  const category = categories.find((t) => slugify(t.title, { lower: true }) === slug);

  if (!category) return <div>Категория пуста</div>;

  return <CategoryPage category={category} />;
};

export default Category;
