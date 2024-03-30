import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SuggestionBox from './SuggestionBox';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <SuggestionBox />
      <Footer />
    </>
  );
}
