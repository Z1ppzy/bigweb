import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFoundPage from './Pages/NotFoundPage';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Terms from './Pages/Terms';
import ForgotPassword from './Pages/ForgotPassword';
import Layout from './components/Layout';
import Rules from './Pages/Rules';
import AdminDashboard from './Pages/AdminDashboard';
import Shop from './Pages/Shop';
import Rewards from './Pages/Rewards';
import Notifications from './Pages/Notifications';

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
        path: '/notifications',
        element: <Notifications />,
      },
      {
        path: '/admindashboard',
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
