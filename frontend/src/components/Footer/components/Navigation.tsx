'use client';

import NavigationHelper from '_helpers/navigation-helper';
import { Pages } from '_types/navigation';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1rem] w-full">
      <div>
        <Link
          href={`${NavigationHelper.getLink(Pages.home)}`}
          className="leading-4 hover:text-primary"
        >
          <h3 className="text-lg font-semibold">{NavigationHelper.getName(Pages.home)}</h3>
        </Link>
        <div className="flex flex-col text-muted text-sm gap-2 mt-2">
          {NavigationHelper.getSections(Pages.home).map((item) => (
            <Link
              href={{
                pathname: `${NavigationHelper.getLink(Pages.home)}`,
                hash: `#${item.id}`,
              }}
              key={item.id}
              className="leading-4 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Link
          href={`${NavigationHelper.getLink(Pages.installmentCredit)}`}
          className="leading-4 hover:text-primary"
        >
          <h3 className="text-lg font-semibold">
            {NavigationHelper.getName(Pages.installmentCredit)}
          </h3>
        </Link>
        <div className="flex flex-col text-muted text-sm gap-2 mt-2">
          {NavigationHelper.getSections(Pages.home).map((item) => (
            <Link
              href={{
                pathname: `${NavigationHelper.getLink(Pages.home)}`,
                hash: `#${item.id}`,
              }}
              key={item.id}
              className="leading-4 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Link
          href={`${NavigationHelper.getLink(Pages.installmentCredit)}`}
          className="leading-4 hover:text-primary"
        >
          <h3 className="text-lg font-semibold">
            {NavigationHelper.getName(Pages.installmentCredit)}
          </h3>
        </Link>
        <div className="flex flex-col text-muted text-sm gap-2 mt-2">
          {NavigationHelper.getSections(Pages.home).map((item) => (
            <Link
              href={{
                pathname: `${NavigationHelper.getLink(Pages.home)}`,
                hash: `#${item.id}`,
              }}
              key={item.id}
              className="leading-4 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Link
          href={`${NavigationHelper.getLink(Pages.installmentCredit)}`}
          className="leading-4 hover:text-primary"
        >
          <h3 className="text-lg font-semibold">
            {NavigationHelper.getName(Pages.installmentCredit)}
          </h3>
        </Link>
        <div className="flex flex-col text-muted text-sm gap-2 mt-2">
          {NavigationHelper.getSections(Pages.home).map((item) => (
            <Link
              href={{
                pathname: `${NavigationHelper.getLink(Pages.home)}`,
                hash: `#${item.id}`,
              }}
              key={item.id}
              className="leading-4 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
