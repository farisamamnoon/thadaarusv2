import { LoginForm } from '../../components/auth/login-form';
import { AuthLayout } from '../../components/layout/auth-layout';

export const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
