export const LoginForm = () => {
  return (
    <div>
      <h1>Login to Account</h1>
      <p>Please enter your Username and Password to continue</p>
      <form>
        <label htmlFor="username">Enter Username</label>
        <input id="username" />
        <label htmlFor="password">Enter Password</label>
        <input id="password" />
      </form>
    </div>
  );
};
