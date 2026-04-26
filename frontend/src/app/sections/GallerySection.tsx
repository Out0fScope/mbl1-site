import { HomeSections } from '_types/navigation';
import { ICategory } from 'src/lib/api/types';
import Card from '../components/Card';

interface CatalogProps {
  categories: ICategory[];
}

const GallerySection = async ({ categories }: CatalogProps) => {
  return (
    <section
      id={HomeSections.gallery}
      className="cursor-default scroll-mt-48 px-4 sm:px-12 lg:px-16 xl:px-24"
    >
      {/* Header */}
      <header className="py-2md:py-4">
        <h2 className="text-lg uppercase tracking-widest text-foreground">Галерея</h2>
      </header>

      {/* Content */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 py-4 md:py-8">
        {categories.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
