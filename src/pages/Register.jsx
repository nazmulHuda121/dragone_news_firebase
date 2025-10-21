import { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState('');
  const [passError, setPassError] = useState('');
  const navigate = useNavigate();
  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError('Name should be more than 5 Charecter');
      return;
    } else {
      setNameError('');
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 5) {
      setPassError('Password at least 6 charecter require');
      return;
    } else {
      setPassError('');
    }

    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/');
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        toast('Registation Complete');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-[500px] p-16 shrink-0 shadow-2xl">
          <h2 className="text-center text-2xl font-semibold pb-8">
            Register your account
          </h2>
          <hr className="text-gray-200" />
          <form onSubmit={handleRegisterUser} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />
              {nameError && <p className="text-red-300 text-xs">{nameError}</p>}
              <label className="label">Photo URL</label>
              {/* Photo URL */}
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />
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
              {passError && <p className="text-red-400 text-xs">{passError}</p>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p className="text-center text-[14px]">
            Allready Have An Account ?{' '}
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
