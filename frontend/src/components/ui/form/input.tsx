import { forwardRef } from 'react';
import { FieldWrapper, FieldWrapperPassThroughProps } from './index';
import { type UseFormRegisterReturn } from 'react-hook-form';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
    placeholder?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, id, label, className, registration, placeholder, error, ...props },
    ref
  ) => {
    return (
      <FieldWrapper id={id} label={label} error={error}>
        <input
          type={type}
          id={id}
          ref={ref}
          className={`py-2 px-4 bg-gray-100 rounded border-primary ${className}`}
          placeholder={placeholder}
          {...registration}
          {...props}
        />
      </FieldWrapper>
    );
  }
);
