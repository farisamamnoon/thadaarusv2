import { FieldError } from 'react-hook-form';
import { Label, Error } from './index';

type FieldWrapperProps = {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: FieldError;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'children' | 'className'
>;

export const FieldWrapper = ({
  id,
  label,
  error,
  children,
}: FieldWrapperProps) => {
  return (
    <div>
      <Label htmlFor={id} title={label} />
      {children}
      <Error message={error?.message} />
    </div>
  );
};
