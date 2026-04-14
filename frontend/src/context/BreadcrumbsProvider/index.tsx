'use client';

import Api from '_Api';
import { Collection } from '_api/types';
import Breadcrumbs from '_components/Breadcrumbs';
import Navigation from '_helpers/navigation-helper';
import { slugify } from '_helpers/slugify-helper';
import { Pages } from '_types/navigation';
import { usePathname } from 'next/navigation';
import { createContext, useEffect, useMemo, useState } from 'react';
import { IBreadcrumb, IBreadcrumbsContext, IBreadcrumbsProviderProps } from './types';

const BreadcrumbsContext = createContext<IBreadcrumbsContext | null>(null);

const BreadcrumbsProvider = ({ children }: IBreadcrumbsProviderProps) => {
  const pathname = usePathname();
  const [names, setNames] = useState<string[]>([]);
  const [topName, setTopName] = useState<string>('');

  // Fetch once
  useEffect(() => {
    const fetchData = async () => {
      const pathSegments = pathname.split('/').filter(Boolean);
      console.log(pathSegments);

      setTopName(
        Navigation.getPages().find((page) => page.href === '/' + pathSegments[0])?.label ?? ''
      );

      let data;

      switch (pathSegments[0]) {
        case Pages.catalog:
          data = await Api.getData(Collection.Categories);
          setNames(data.map((t) => t.title));

          break;
      }
    };

    fetchData();
  }, [pathname]);

  // ✅ Compute breadcrumbs instead of storing them
  const breadcrumbs: IBreadcrumb[] = useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);

    return [
      { name: 'Главная', href: '/' },
      ...pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');

        const name = names.find((t) => slugify(t, { lower: true }) === segment) ?? topName;

        return { name, href };
      }),
    ];
  }, [pathname, names, topName]);

  const value: IBreadcrumbsContext = {
    breadcrumbs,
  };

  return (
    <BreadcrumbsContext.Provider value={value}>
      <Breadcrumbs />
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export { BreadcrumbsContext, BreadcrumbsProvider };
