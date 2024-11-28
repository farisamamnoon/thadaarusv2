import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { paths } from '../config/path';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { ProtectedRoutes } from '../lib/auth';
import { AppLayout } from '../components/layout/app-layout';

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
    {
      path: paths.app.home.path,
      element: (
        <ProtectedRoutes>
          <AppLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: paths.app.attendance.teacher.getHref(),
          element: <p>Haiii</p> 
        }
      ]
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
