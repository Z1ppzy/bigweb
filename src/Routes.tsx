import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFoundPage from './Pages/NotFoundPage';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Terms from './Pages/Terms';
import ForgotPassword from './Pages/ForgotPassword';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
      {
        path: '/forgot_password',
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
