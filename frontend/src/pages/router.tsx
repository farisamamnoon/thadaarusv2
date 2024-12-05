import { useMemo } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, useQueryClient } from '@tanstack/react-query';

import { paths } from '../config/path';

import { ProtectedRoutes } from '../lib/auth';
import { AppLayout } from '../components/layout/app-layout';
import { Users } from './app/users';

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
          index: true,
          element: <Navigate to={paths.app.dashboard.getHref()} />,
        },
        {
          path: paths.app.dashboard.path,
          element: <div>Hai</div>,
        },
        {
          path: paths.app.users.path,
          element: <Users />,
          children: [
            {
              index: true,
              element: <Navigate to={paths.app.users.students.getHref()} />,
            },
            {
              path: paths.app.users.students.path,
              lazy: async () => {
                const { Students } = await import('./app/users/student/index');
                return { Component: Students };
              },
            },
            {
              path: paths.app.users.students.add.path,
              lazy: async () => {
                const { AddStudent } = await import('./app/users/student/add');
                return { Component: AddStudent };
              },
            },
            {
              path: paths.app.users.students.edit.path,
              lazy: async () => {
                const { EditStudent } = await import(
                  './app/users/student/edit'
                );
                return { Component: EditStudent };
              },
            },
            {
              path: paths.app.users.teachers.path,
              lazy: async () => {
                const { Teachers } = await import('./app/users/teacher/index');
                return { Component: Teachers };
              },
            },
          ],
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
