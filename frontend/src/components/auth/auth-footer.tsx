import { Link } from 'react-router-dom';
import { paths } from '../../config/path';

type AuthFooterProps = {
  mode: 'login' | 'register';
};

export const AuthFooter = ({ mode }: AuthFooterProps) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <button
        className="p-2 bg-primary text-white rounded-md w-full"
        type="submit"
      >
        {mode === 'login' ? 'Login' : 'Create Account'}
      </button>
      <Link
        to={
          mode === 'login'
            ? paths.auth.register.getHref()
            : paths.auth.login.getHref()
        }
        className="text-sm text-center text-primary"
      >
        {mode === 'login'
          ? "I Don't have an account"
          : 'Already have an account'}
      </Link>
      {mode === 'login' && (
        <Link to="#" className="text-sm text-center text-secondary-font">
          Forgot Password
        </Link>
      )}
    </div>
  );
};
