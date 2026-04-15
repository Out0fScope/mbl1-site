import Api from '_Api';
import { Collection } from 'src/lib/api/types';
import CatalogPage from './GalleryPage';

const Gallery = async () => {
  const categories = await Api.getData(Collection.Categories);

  return <CatalogPage categories={categories} />;
};

export default Gallery;
