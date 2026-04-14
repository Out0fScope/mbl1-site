import { ReactNode } from 'react';
import { BreadcrumbsProvider } from './BreadcrumbsProvider';
import { ModalProvider } from './ModalProvider';
import { ScrollProvider } from './ScrollProvider';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      <BreadcrumbsProvider>
        <ModalProvider>{children}</ModalProvider>
      </BreadcrumbsProvider>
    </ScrollProvider>
  );
};

export default AppProvider;
