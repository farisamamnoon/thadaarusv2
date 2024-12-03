import { ChangeEvent } from 'react';

type SearchProps = {
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ className, onChange }: SearchProps) => {
  return (
    <input
      placeholder="Search"
      className={`py-2 px-4 bg-gray-100 rounded border-primary ${className}`}
      onChange={onChange}
    />
  );
};
