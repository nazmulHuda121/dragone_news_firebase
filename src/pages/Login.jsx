import { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { logInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  // console.log(location);

  const handleLogInUser = (e) => {
    e.preventDefault();
    console.log(e.target);
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(location);

    logInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast('Login Succesfully Complete');
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
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
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
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
