import { NavLink } from 'react-router-dom';

export type NavItemProps = {
  Icon: React.ComponentType<{ active: boolean; size?: string }>;
  title: string;
  to: string;
};

export const NavItem = ({ Icon, title, to }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex gap-4 px-6 py-4 content-baseline hover:bg-slate-300 ${
          isActive && 'bg-slate-300'
        } rounded`
      }
    >
      {({ isActive }) => (
        <>
          <Icon active={isActive} size="25" />
          <p
            className={`font-medium ${
              isActive ? 'text-primary' : 'text-secondary-font'
            }`}
          >
            {title}
          </p>
        </>
      )}
    </NavLink>
  );
};
