import { slugify } from '_helpers/slugify-helper';
import Link from 'next/link';
import { ICategory } from 'src/lib/api/types';

interface CardProps {
  item: ICategory;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="flex justify-end p-4">
        <Link
          href={`/catalog/${slugify(item.title, { lower: true })}`}
          className="relative block group-hover:text-secondary rounded-sm
                      px-4 py-2 text-center text-primary border border-primary
                      transition-all duration-300
                      overflow-hidden cursor-pointer"
        >
          <span className="relative z-10">Подробнее</span>
          <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
