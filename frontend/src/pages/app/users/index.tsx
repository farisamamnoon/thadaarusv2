import { NavLink, Outlet } from 'react-router-dom';
import { paths } from '../../../config/path';

const links = [
  {
    name: 'Students',
    to: paths.app.users.students.getHref(),
  },
  {
    name: 'Teacher',
    to: paths.app.users.teachers.getHref(),
  },
];

export const Users = () => {
  return (
    <>
      <nav>
        {links.map((link) => (
          <NavLink
            to={link.to}
            key={link.to}
            className={({ isActive }) =>
              `px-8 py-2 ${
                isActive
                  ? 'border-secondary-font  border-b-2  text-primary-font font-semibold'
                  : ' text-secondary-font '
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export * from './student';
export * from './teacher';
