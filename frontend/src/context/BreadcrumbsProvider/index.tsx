'use client';

import Api from '_Api';
import { Collection } from '_api/types';
import Breadcrumbs from '_components/Breadcrumbs';
import Navigation from '_helpers/navigation-helper';
import { slugify } from '_helpers/slugify-helper';
import { usePathname } from 'next/navigation';
import { createContext, useEffect, useMemo, useState } from 'react';
import { ICategory } from 'src/lib/api/types';
import { IBreadcrumb, IBreadcrumbsContext, IBreadcrumbsProviderProps } from './types';

const BreadcrumbsContext = createContext<IBreadcrumbsContext | null>(null);

const BreadcrumbsProvider = ({ children }: IBreadcrumbsProviderProps) => {
  const pathname = usePathname();

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [topName, setTopName] = useState<string>('');

  const pathSegments = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);

  const firstSegment = pathSegments[0];

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    const fetchData = async () => {
      const pages = Navigation.getPages();

      // static page check
      const staticPage = pages.find((p) => p.link === '/' + firstSegment);

      setTopName(staticPage?.name ?? '');

      // dynamic category route ([slug])
      if (pathSegments.length === 1 && !staticPage) {
        const data = await Api.getData(Collection.Categories);
        setCategories(data);
      }
    };

    fetchData();
  }, [pathname, firstSegment, pathSegments.length]);

  // =========================
  // RESOLVERS
  // =========================
  const resolveStaticPage = (href: string) => {
    return Navigation.getPages().find((p) => p.link === href);
  };

  const resolveCategory = (slug: string) => {
    return categories.find((c) => slugify(c.title, { lower: true }) === slug);
  };

  // =========================
  // BREADCRUMBS
  // =========================
  const breadcrumbs: IBreadcrumb[] = useMemo(() => {
    return [
      { name: 'Главная', href: '/' },

      ...pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');

        // 1. static page
        const staticPage = resolveStaticPage(href);

        if (staticPage) {
          return {
            name: staticPage.name,
            href,
          };
        }

        // 2. dynamic category
        const category = resolveCategory(segment);

        return {
          name: category?.title ?? topName ?? segment,
          href,
        };
      }),
    ];
  }, [pathname, categories, topName, pathSegments]);

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbs }}>
      <Breadcrumbs />
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export { BreadcrumbsContext, BreadcrumbsProvider };
