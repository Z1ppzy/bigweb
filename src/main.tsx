import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';
import { ThemeProvider } from '@/components/Global/theme-provider';

ReactDOM.createRoot(document.getElementById('heavenlyweiner')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <RouterProvider router={router} />
  </ThemeProvider>
);
