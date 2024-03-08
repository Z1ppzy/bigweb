import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFoundPage from './Pages/NotFoundPage';
import Profile from './Pages/Profile'
import Register from './Pages/Register';


const router = createBrowserRouter ([
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
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/profile',
    element: <Profile />
  },
])

export default router;
