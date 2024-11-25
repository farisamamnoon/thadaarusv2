import { registerSchema } from '../../lib/auth';
import { Form, Input } from '../ui/form';
import { AuthFooter } from './auth-footer';

export const RegisterForm = () => {
  return (
    <Form schema={registerSchema} onSubmit={(values) => console.log(values)}>
      {({ register, formState }) => (
        <>
          <Input
            type="text"
            label="Name:"
            placeholder="Name of the organization"
            id="org-name"
            registration={register('name')}
            error={formState.errors.name}
            className="w-full"
          />
          <Input
            type="text"
            label="Place:"
            placeholder="Place of the organization"
            id="org-place"
            registration={register('place')}
            error={formState.errors.place}
            className="w-full"
          />
          <Input
            type="text"
            label="Username:"
            placeholder="Enter the username for the admin"
            id="username"
            registration={register('username')}
            error={formState.errors.username}
            className="w-full"
          />
          <Input
            type="password"
            label="Password:"
            placeholder="Enter the password for the admin"
            id="password"
            registration={register('password')}
            error={formState.errors.password}
            className="w-full"
          />
          <AuthFooter mode="register" />
        </>
      )}
    </Form>
  );
};
