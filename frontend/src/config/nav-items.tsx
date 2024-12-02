import {
  ClassIcon,
  DashIcon,
  DollarIcon,
  ExamIcon,
  AttendanceIcon,
  UsersIcon,
  HomeworkIcon,
} from '../components/assets/nav-icons';
import { NavItemProps } from '../components/ui/nav';
import { Role } from '../types/api';
import { paths } from './path';

type RoleBasedNavItems = Record<Role, NavItemProps[]>;

export const roleBasedNavItems: RoleBasedNavItems = {
  ADMIN: [
    {
      Icon: DashIcon,
      title: 'Dashboard',
      to: paths.app.dashboard.getHref(),
    },
    {
      Icon: DollarIcon,
      title: 'Account',
      to: paths.app.account.fees.getHref(),
    },
    {
      Icon: ClassIcon,
      title: 'Classes',
      to: paths.app.classes.getHref(),
    },
    {
      Icon: ExamIcon,
      title: 'Exam',
      to: paths.app.exams.getHref(),
    },
    {
      Icon: AttendanceIcon,
      title: 'Attendance',
      to: paths.app.attendance.path,
    },
    {
      Icon: UsersIcon,
      title: 'Users',
      to: paths.app.users.students.getHref(),
    },
  ],
  STUDENT: [
    {
      Icon: AttendanceIcon,
      title: 'Attendance',
      to: paths.student.attendance.getHref(),
    },
    {
      Icon: ExamIcon,
      title: 'Exams',
      to: paths.student.mark.getHref(),
    },
    {
      Icon: DollarIcon,
      title: 'Fees',
      to: paths.student.fees.getHref(),
    },
    {
      Icon: HomeworkIcon,
      title: 'Homework',
      to: paths.student.homework.getHref(),
    },
  ],
  TEACHER: [
    {
      Icon: AttendanceIcon,
      title: 'Attendance',
      to: paths.app.attendance.class.getHref(),
    },
    {
      Icon: ExamIcon,
      title: 'Exams',
      to: paths.app.exams.getHref(),
    },
    {
      Icon: DollarIcon,
      title: 'Fees',
      to: paths.app.account.fees.getHref(),
    },
    {
      Icon: HomeworkIcon,
      title: 'Homework',
      to: paths.app.homework.getHref(),
    },
  ],
};
