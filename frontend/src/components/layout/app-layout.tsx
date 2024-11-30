import { Link, Outlet } from 'react-router-dom';
import { roleBasedNavItems } from '../../config/nav-items';
import { useUser } from '../../lib/auth';
import { Logo } from '../assets/Logo';
import { Header, NavItem } from '../ui/nav';
import { paths } from '../../config/path';

export const AppLayout = () => {
  const user = useUser();
  let navlinks;
  switch (user.data?.role) {
    case 'ADMIN':
      navlinks = roleBasedNavItems.ADMIN;
      break;
    case 'STUDENT':
      navlinks = roleBasedNavItems.STUDENT;
      break;
    case 'TEACHER':
      navlinks = roleBasedNavItems.TEACHER;
      break;
  }

  return (
    <div className="min-h-full w-full flex">
      <aside className="fixed inset-y-0 left-0 bg-slate-200 w-60">
        <div className="h-16 border-b-2 border-slate-300 grid place-content-center">
          <Link to={paths.app.home.getHref()}>
            <Logo />
          </Link>
        </div>
        <nav className="h-full my-8 mx-4 flex flex-col">
          {navlinks?.map((navItem, index) => (
            <NavItem {...navItem} key={index} />
          ))}
        </nav>
      </aside>
      <div className="pl-60 w-full">
        <Header />
        <div className='mt-8 mx-10'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
