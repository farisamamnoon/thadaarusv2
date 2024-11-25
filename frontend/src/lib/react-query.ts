import { DefaultOptions } from '@tanstack/react-query';

export const queryConfig = {
  queries: {
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    retry: false,
  },
} satisfies DefaultOptions;
