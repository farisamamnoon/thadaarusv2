import { RegisterForm } from '../../components/auth/register-form';
import { AuthLayout } from '../../components/layout/auth-layout';

export const Register = () => {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold text-center mb-4">
        Register
      </h1>
      <p className="mb-8 text-sm">
        Please enter your organization details to register your account.
      </p>
      <RegisterForm />
    </AuthLayout>
  );
};
