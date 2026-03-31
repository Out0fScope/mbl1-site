import Api from '_Api';
import { slugify } from '_helpers/slugify-helper';
import { Collection, ICategory } from 'src/lib/api/types';

interface CatalogCategoryProps {
  params: { slug: string };
}

const CatalogCategoryPage = async (props: CatalogCategoryProps) => {
  const categories: ICategory[] = await Api.getData(Collection.Categories);
  const params = await props.params;
  const category = categories.find((t) => slugify(t.title, { lower: true }) === params.slug);

  if (!category) return <div>Категория не найдена</div>;

  return (
    <>
      {category.sub_categories?.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </>
  );
};

export default CatalogCategoryPage;
