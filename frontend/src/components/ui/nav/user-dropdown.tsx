import { useState } from 'react';
import { useUser } from '../../../lib/auth';
import { Link } from 'react-router-dom';

export const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const user = useUser();
  const name = user.data?.username.charAt(0) || '';

  return (
    <>
      <div
        className="bg-red-200 rounded-full h-8 w-8 font-bold text-primary-font capitalize cursor-pointer grid place-content-center"
        onClick={() => setOpen(!open)}
      >
        {name}
      </div>
      {open && (
        <div className="absolute top-16 right-10 bg-white border flex flex-col divide-y">
          <Link
            to="#"
            className="px-6 py-4  hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Settings
          </Link>
          <Link
            to="#"
            className="px-6 py-4 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Change Password
          </Link>
          <Link
            to="#"
            className="px-6 py-4 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Logout
          </Link>
        </div>
      )}
    </>
  );
};
