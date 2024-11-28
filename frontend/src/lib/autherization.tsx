import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from './auth';
import { paths } from '../config/path';

type AutherizationProps = {
  student?: React.ReactNode;
  teacher?: React.ReactNode;
  admin?: React.ReactNode;
};

export const Autherization = ({
  student,
  teacher,
  admin,
}: AutherizationProps) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    return (
      <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
    );
  }

  const component =
    user.data.role === 'ADMIN' ? admin
    : user.data.role === 'STUDENT' ? student
    : user.data.role === 'TEACHER' ? teacher 
    : null;

  return component;
};
