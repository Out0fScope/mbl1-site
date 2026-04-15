'use client';

import { slugify } from '_helpers/slugify-helper';
import Link from 'next/link';
import { ICategory } from 'src/lib/api/types';

interface IDropdownMenuProps {
  categories: ICategory[];
}

const DropdownMenu = ({ categories }: IDropdownMenuProps) => {
  return (
    <div
      className="
        flex gap-10
        px-8 py-8
        min-w-[800px]
        bg-background
        shadow-xl
      "
    >
      {categories.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 min-w-[12rem]">
          <Link
            href={`/catalog/${slugify(item.title, { lower: true })}`}
            className="text-xl font-medium text-primary mb-2 hover:text-primary-hover cursor-pointer"
          >
            {item.title}
          </Link>

          {item.sub_categories?.map((sub, index) => (
            <Link
              href={{
                pathname: `/catalog/${slugify(item.title, { lower: true })}`,
                query: { subCategory: slugify(sub.title, { lower: true }) },
              }}
              key={index}
              className="cursor-pointer hover:text-muted"
            >
              {sub.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
