'use client';

import { BreadcrumbsContext } from '_context/BreadcrumbsProvider';
import { useContext } from 'react';

const useBreadCrumbs = () => {
  const context = useContext(BreadcrumbsContext);
  if (!context) throw new Error('useBreadCrumbs must be used inside <BreadcrumbsProvider>');

  return context;
};

export default useBreadCrumbs;
