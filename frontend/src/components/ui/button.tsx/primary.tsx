import { forwardRef } from 'react';
import { ButtonProps } from '.';

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <button
        className={`p-2 bg-primary text-white rounded-md hover:bg-opacity-80 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
// export const PrimaryButton = ({
//     className,
//     ...props
//   }: ButtonProps) => {
//     return (
//       <button
//         className={`p-2 bg-primary text-white rounded-md hover:bg-opacity-80 ${className}`}
//         {...props}
//       />
//     );
//   };
  