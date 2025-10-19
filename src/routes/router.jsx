import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import Home from '../pages/Home';
import AuthLayOut from '../layouts/AuthLayOut';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch('/news.json'),
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayOut></AuthLayOut>,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register,
      },
    ],
  },
  {
    path: '/news',
    element: <h2>News Layout</h2>,
  },
  {
    path: '/*',
    element: <h2>Error404</h2>,
  },
]);

export default router;
