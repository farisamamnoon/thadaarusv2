import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../lib/auth';
import { Form, Input } from '../ui/form';
import { AuthFooter } from './auth-footer';
import { paths } from '../../config/path';

export const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Form
        schema={loginSchema}
        onSubmit={() => navigate(paths.app.home.getHref())}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="text"
              label="Username:"
              id="username"
              registration={register('username')}
              error={formState.errors['username']}
              className="w-full"
            />
            <Input
              type="password"
              label="Password:"
              id="password"
              registration={register('password')}
              error={formState.errors['password']}
              className="w-full"
            />
            <AuthFooter mode="login" />
          </>
        )}
      </Form>
    </div>
  );
};
