import { ICategory } from 'src/lib/api/types';
import Card from './components/Card';

interface CatalogProps {
  categories: ICategory[];
}

const CatalogPage = async ({ categories }: CatalogProps) => {
  return (
    <section id="catalog" className="cursor-default scroll-mt-64">
      {/* Header */}
      <header className="text-center py-[1rem] md:py-[2rem]">
        <h1 className="text-3xl md:text-4xl font-bold mb-[1rem]">
          Каталог <span className="text-primary">MBL</span>
        </h1>
        <p className="text-muted text-lg py-[1rem]">
          Мебель на заказ, дизайн интерьера и индивидуальные решения
        </p>
      </header>

      {/* Content */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">
        {categories.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CatalogPage;
