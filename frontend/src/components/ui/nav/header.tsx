import { Link, useLocation } from 'react-router-dom';
import { Select } from '../form';
import { UserDropdown } from './user-dropdown';

export const Header = () => {
  const { pathname } = useLocation();

  let currentLink = '';

  const crumbs = pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Link
          className='mx-2 after:content-[">"] after:ml-4 capitalize last:after:content-none'
          to={currentLink}
        >
          {crumb}
        </Link>
      );
    });

  return (
    <div className="sticky top-0 px-10 border-b-2 border-slate-300 h-16 w-full flex items-center justify-between">
      <div>{crumbs}</div>
      <div className="flex gap-8 items-center">
        <Select />
        <UserDropdown />
      </div>
    </div>
  );
};
