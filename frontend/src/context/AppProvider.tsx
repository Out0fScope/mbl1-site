import { ReactNode } from 'react';
import { LoadingProvider } from './LoadingProvider';
import { MatchMediaProvider } from './MatchMediaProvider';
import { ModalProvider } from './ModalProvider';
import { ScrollProvider } from './ScrollProvider';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      <LoadingProvider>
        <MatchMediaProvider>
          <ModalProvider>{children}</ModalProvider>
        </MatchMediaProvider>
      </LoadingProvider>
    </ScrollProvider>
  );
};

export default AppProvider;
