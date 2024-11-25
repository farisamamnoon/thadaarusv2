import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { paths } from '../config/path';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.auth.login.path,
      lazy: async () => {
        const { Login } = await import('./auth/login');
        return { Component: Login };
      },
    },
    {
      path: paths.auth.register.path,
      lazy: async () => {
        const { Register } = await import('./auth/register');
        return { Component: Register };
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
