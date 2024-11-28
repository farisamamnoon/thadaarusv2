import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, Suspense, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { queryConfig } from '../lib/react-query';
import { ErrorBoundary } from 'react-error-boundary';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryConfig })
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>There was an error</div>}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
