import { LoginForm } from '../../components/auth/login-form';
import { AuthLayout } from '../../components/layout/auth-layout';

export const Login = () => {
  return (
    <AuthLayout>
      <h1 className='text-2xl font-semibold text-center mb-4'>Login to Account</h1>
      <p className='mb-8 text-sm'>Please enter your Username and Password to continue</p>
      <LoginForm />
    </AuthLayout>
  );
};
