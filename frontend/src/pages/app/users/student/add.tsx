import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../../../components/ui/button.tsx';
import { Form, Input } from '../../../../components/ui/form';
import { schema } from '../../../../features/students/add-student';
import { paths } from '../../../../config/path.ts';

export const AddStudent = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <Form
        schema={schema}
        onSubmit={(values) => navigate(paths.app.users.students.getHref())}
        className=" grid grid-cols-2 gap-x-16"
      >
        {({ register, formState }) => (
          <>
            <Input
              type="text"
              label="Name:"
              id="name"
              registration={register('name')}
              error={formState.errors['name']}
              className="w-full"
            />
            <Input
              type="date"
              label="Date of Birth:"
              id="date-of-birth"
              placeholder="Enter The DOB"
              registration={register('dob')}
              error={formState.errors['dob']}
              className="w-full"
            />
            <Input
              type="email"
              label="Email:"
              id="E-mail"
              registration={register('email')}
              error={formState.errors['email']}
              className="w-full"
            />
            <Input
              label="Phone Number:"
              id="phone-number"
              registration={register('phoneNumber')}
              error={formState.errors['phoneNumber']}
              className="w-full"
            />
            <PrimaryButton
              disabled={formState.isLoading}
              className="mt-8 px-8 w-max"
            >
              Submit
            </PrimaryButton>
          </>
        )}
      </Form>
    </div>
  );
};
