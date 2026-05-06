import Api from '_api/index';
import { Collection } from '_api/types';
import AboutSection from './sections/AboutSection';
import GallerySection from './sections/GallerySection';
import HeroSection from './sections/HeroSection';
import ReviewsSection from './sections/ReviewsSection';

const Home = async () => {
  const categories = await Api.getData(Collection.Categories);

  console.log(process.env.API_TOKEN);

  return (
    <>
      <HeroSection />
      <GallerySection categories={categories} />
      <AboutSection />
      <ReviewsSection />
    </>
  );
};

export default Home;
