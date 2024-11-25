type ErrorProps = { message?: string };

export const Error = ({ message }: ErrorProps) => {
  return (
    <div role="alert" className="text-sm font-semibold text-red-500">
      {message}
    </div>
  );
};
