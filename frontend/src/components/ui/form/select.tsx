import { ChangeEvent } from 'react';

type SelectProps = {
  className?: string | undefined;
  options: Option[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string | undefined;
};

export type Option = {
  value: string | number | 'all';
  label: string;
};

export const Select = ({
  className,
  options,
  onChange,
  defaultValue,
}: SelectProps) => {
  return (
    <select
      className={`py-2 px-4 border-2 border-slate-200 rounded appearance-none ${className}`}
      onChange={onChange}
    >
      {defaultValue !== undefined && (
        <option value="all">{defaultValue}</option>
      )}
      {options.map((option, index) => (
        <option key={`${index}${option.value}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
