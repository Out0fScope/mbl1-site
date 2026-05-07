'use client';

import Breadcrumbs from '_components/Breadcrumbs';
import Navigation from '_helpers/navigation-helper';
import { slugify } from '_helpers/slugify-helper';
import { usePathname } from 'next/navigation';
import { createContext, useMemo } from 'react';
import { ICategory } from 'src/lib/api/types';
import { IBreadcrumb, IBreadcrumbsContext, IBreadcrumbsProviderProps } from './types';

const BreadcrumbsContext = createContext<IBreadcrumbsContext | null>(null);

interface Props extends IBreadcrumbsProviderProps {
  categories?: ICategory[];
}

const BreadcrumbsProvider = ({ children, categories = [] }: Props) => {
  const pathname = usePathname();

  const pathSegments = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);

  const resolveStaticPage = (href: string) => {
    return Navigation.getPages().find((p) => p.link === href);
  };

  const breadcrumbs: IBreadcrumb[] = useMemo(() => {
    const resolveCategory = (slug: string) => {
      return categories.find((c) => slugify(c.title, { lower: true }) === slug);
    };

    return [
      { name: 'Главная', href: '/' },

      ...pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');

        const staticPage = resolveStaticPage(href);

        if (staticPage) {
          return {
            name: staticPage.name,
            href,
          };
        }

        const category = resolveCategory(segment);

        return {
          name: category?.title ?? segment,
          href,
        };
      }),
    ];
  }, [pathSegments, categories]);

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbs }}>
      <Breadcrumbs />
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export { BreadcrumbsContext, BreadcrumbsProvider };
