import { ReactNode } from 'react';
import { LoadingProvider } from './LoadingProvider';
import { ModalProvider } from './ModalProvider';
import { ScrollProvider } from './ScrollProvider';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      <LoadingProvider>
        <ModalProvider>{children}</ModalProvider>
      </LoadingProvider>
    </ScrollProvider>
  );
};

export default AppProvider;
