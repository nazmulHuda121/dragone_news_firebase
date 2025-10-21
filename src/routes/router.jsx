import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import Home from '../pages/Home';
import AuthLayOut from '../layouts/AuthLayOut';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from '../Provider/PrivateRoute';
import Loading from '../pages/Loading';

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
        hydrateFallbackElement: <Loading />,
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
    path: '/news-details/:id',
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: '/*',
    element: <h2>Error404</h2>,
  },
]);

export default router;
