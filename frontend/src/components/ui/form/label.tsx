type LabelProps = {
  htmlFor?: string;
  title: string;
};

export const Label = ({ htmlFor, title }: LabelProps) => {
  return (
    <div className="mb-2 text-primary-font">
      <label htmlFor={htmlFor}>{title}</label>
    </div>
  );
};
