import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "../config/path";
import { Login } from "./auth/login";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.auth.login.path,
      Component: Login,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
