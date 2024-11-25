import { loginSchema } from '../../lib/auth';
import { Form, Input } from '../ui/form';
import { Link } from 'react-router-dom';
import { paths } from '../../config/path';
import { AuthFooter } from './auth-footer';

export const LoginForm = () => {
  return (
    <div>
      <Form schema={loginSchema} onSubmit={(values) => console.log(values)}>
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
