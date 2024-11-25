import { loginSchema } from '../../lib/auth';
import { Form, Input } from '../ui/form';
import { Link } from 'react-router-dom';
import { paths } from '../../config/path';

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
            <div className="mt-4 flex flex-col gap-2">
              <button className="p-2 bg-primary text-white rounded-md w-full">
                Submit
              </button>
              <Link
                to={paths.auth.register.getHref()}
                className="text-sm text-center text-primary"
              >
                I Don't have an account
              </Link>
              <Link to="#" className="text-sm text-center text-secondary-font">
                Forgot Password
              </Link>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
