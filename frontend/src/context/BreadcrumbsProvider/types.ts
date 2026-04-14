import { ReactNode } from 'react';

interface IBreadcrumb {
  name: string;
  href: string;
}

interface IBreadcrumbsContext {
  breadcrumbs: IBreadcrumb[];
}

interface IBreadcrumbsProviderProps {
  children: ReactNode;
}

export type { IBreadcrumb, IBreadcrumbsContext, IBreadcrumbsProviderProps };
