import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Terms from './pages/Terms';
import ForgotPassword from './pages/ForgotPassword';
import Layout from './components/Layout';
import Rules from './pages/Rules';
import AdminDashBoard from './pages/AdminDashBoard';
import Shop from './pages/Shop';
import Rewards from './pages/Rewards';

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
        path: '/rewards',
        element: <Rewards />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
      {
        path: '/forgot_password',
        element: <ForgotPassword />,
      },
      {
        path: '/rules',
        element: <Rules />,
      },
      {
        path: '/admindashboard',
        element: <AdminDashBoard />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
