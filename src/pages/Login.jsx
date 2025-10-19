import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { logInUser } = use(AuthContext);
  const handleLogInUser = (e) => {
    e.preventDefault();
    console.log(e.target);
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        alert('Login Succesfully Complete');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-[500px] p-16 shrink-0 shadow-2xl">
        <h2 className="text-center text-2xl font-semibold pb-8">
          Login your account
        </h2>
        <hr className="text-gray-200" />
        <form onSubmit={handleLogInUser} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center text-[14px]">
          Dont’t Have An Account ?{' '}
          <Link to="/auth/register" className="text-secondary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
