import { createBrowserRouter } from 'react-router';
import Layout from '../components/Layout';
import Calculator from '../components/Calculator';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <div>Home Page</div>,
      },
      {
        path: 'calc',
        element: <Calculator />,
      },
      {
        path: 'about',
        element: <div>About Page</div>,
      },
    ],
  },
]);
