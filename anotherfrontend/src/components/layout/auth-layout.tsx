import { Head } from '../seo/head';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Head title="Login" />
      <div className="bg-auth-bg bg-cover w-full min-h-screen grid place-content-center">
        <div className="bg-white rounded-lg w-max px-8 py-12">{children}</div>
      </div>
    </>
  );
};
