import { z } from 'zod';
import { User } from '../types/api';
import { configureAuth } from 'react-query-auth';
import { Navigate, useLocation } from 'react-router-dom';
import { paths } from '../config/path';

export const loginSchema = z.object({
  username: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(1, 'Required'),
  place: z.string().min(1, 'Required'),
  username: z.string().min(6, 'Must be atleast 6 characters'),
  password: z.string().min(8, 'Must be atleast 8 characters'),
});
export type RegisterInput = z.infer<typeof registerSchema>;

type ProtectedRoutesProps = {
  children: React.ReactNode;
};
const authConfig = {
  userFn: () => getUserDummy(),
  loginFn: (data: LoginInput) => getUserDummy(),
  registerFn: (data: RegisterInput) => getUserDummy(),
  logoutFn: () => Promise.resolve(),
};
const { useUser, useLogin, useLogout, useRegister } = configureAuth(authConfig);

const getUserDummy = (): Promise<User> =>
  Promise.resolve({
    username: 'faris',
    role: 'ADMIN',
    organizationId: 'laf',
  });

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    console.log({
      pathname: location.pathname,
      redirectTo: paths.auth.login.getHref(location.pathname),
    });
    return (
      <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
    );
  }

  return children;
};

export { useUser, useLogout, useRegister, useLogin };
