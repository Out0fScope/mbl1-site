import Hero from 'public/hero.png';
import Image from 'next/image';

const IMAGE_ALT = 'Главная Mbl1';
const Home = async () => {
  return (
    <div className="cursor-default scroll-mt-64">
      <Image src={Hero} alt={IMAGE_ALT} priority className="h-200 object-contain" />
    </div>
  );
};

export default Home;
