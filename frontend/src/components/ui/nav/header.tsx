import { Select } from '../form';
import { UserDropdown } from './user-dropdown';

export const Header = () => {
  return (
    <div className="sticky top-0 px-10 border-b-2 border-slate-300 h-16 w-full flex items-center justify-between">
      <div>
        <Select />
      </div>
      <UserDropdown />
    </div>
  );
};
