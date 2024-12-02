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
import { Attendance, StudentAttendance, TeacherAttendance } from './app/users';

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
          path: paths.app.attendance.path,
          element: <Attendance />,
          children: [
            {
              index: true,
              element: (
                <Navigate to={paths.app.attendance.students.getHref()} />
              ),
            },
            {
              path: paths.app.attendance.students.path,
              element: <StudentAttendance />,
            },
            {
              path: paths.app.attendance.teacher.path,
              element: <TeacherAttendance />,
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
