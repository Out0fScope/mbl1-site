import { ReactNode } from 'react';
import { ModalProvider } from './ModalProvider';
import { ScrollProvider } from './ScrollProvider';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      <ModalProvider>{children}</ModalProvider>
    </ScrollProvider>
  );
};

export default AppProvider;
