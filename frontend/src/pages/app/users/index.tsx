import { NavLink, Outlet } from 'react-router-dom';
import { paths } from '../../../config/path';

const links = [
  {
    name: 'Students',
    to: paths.app.attendance.students.getHref(),
  },
  {
    name: 'Teacher',
    to: paths.app.attendance.teacher.getHref(),
  },
];

export const Attendance = () => {
  return (
    <>
      <nav>
        {links.map((link) => (
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `px-8 py-1 ${
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