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

export * from './student/student';
export * from './teacher/teacher';
