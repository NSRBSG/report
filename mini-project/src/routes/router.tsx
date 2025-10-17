import { createBrowserRouter } from 'react-router';
import Layout from '../components/Layout';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Login from '../components/Login';
import Join from '../components/Join';
import About from '../components/About';
import Logout from '../components/Logout';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'join', element: <Join /> },
      {
        element: <PrivateRoute />,
        children: [
          { path: 'calc', element: <Calculator /> },
          { path: 'about', element: <About /> },
          { path: 'logout', element: <Logout /> },
        ],
      },
    ],
  },
]);
