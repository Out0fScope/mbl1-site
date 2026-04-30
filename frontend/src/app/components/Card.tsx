import { slugify } from '_helpers/slugify-helper';
import Link from 'next/link';
import { ICategory } from 'src/lib/api/types';

const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

interface CardProps {
  item: ICategory;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden shadow-lg min-h-[18rem] h-full text-white">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${url}/assets/${item.image?.id}?access_token=GbOjzxPfosOPItS_v28R-DYNyFR5kBN7)`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-4 group-hover:opacity-0 transition-all duration-500">
        <div className="font-bold text-2xl text-primary mb-2">{item.title}</div>
        <p className="text-card text-base">{item.description}</p>
      </div>

      {/* BUTTON */}
      <div className="relative z-10 flex justify-end p-4">
        <Link
          href={`/${slugify(item.title, { lower: true })}`}
          className="relative block px-4 py-2 text-center
                     border border-card text-card
                     overflow-hidden transition-all duration-300"
        >
          <span className="relative z-10">Подробнее</span>

          {/* hover fill */}
          <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
