import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const AuthLayOut = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="max-w-10/12 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <main className="max-w-10/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayOut;
