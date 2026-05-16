import { ReactNode } from 'react';
import { AnalyticsProvider } from './AnalyticsProvider';
import { LoadingProvider } from './LoadingProvider';
import { MatchMediaProvider } from './MatchMediaProvider';
import { ModalProvider } from './ModalProvider';
import { ScrollProvider } from './ScrollProvider';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      <LoadingProvider>
        <AnalyticsProvider>
          <MatchMediaProvider>
            <ModalProvider>{children}</ModalProvider>
          </MatchMediaProvider>
        </AnalyticsProvider>
      </LoadingProvider>
    </ScrollProvider>
  );
};

export default AppProvider;
