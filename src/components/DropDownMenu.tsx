import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TfiAlignRight } from 'react-icons/tfi';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';


export default function DropDownMenu() {
  const location = useLocation();
  const isActiveLink = (path: string) => location.pathname === path;
  return (
    <Sheet>
      <SheetTrigger>
        <div className='text-3xl pr-4 mt-4 text-white'>
          <TfiAlignRight />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <p className='text-center font-bold text-2xl'>Навигационное меню</p>
          </SheetTitle>
          <div className='flex flex-row justify-between '>
            <LoginButton />
            <RegisterButton />
          </div>
          <SheetDescription>
          <Link to='/' className={`flex flex-col text-center text-2xl ${isActiveLink('/') ? 'text-purple-800' : ''}`}>
              <span>
                Home
              </span>
            </Link>
            <Link to='/forgot_password' className={`flex flex-col text-center text-2xl ${isActiveLink('/forgot_password') ? 'text-purple-800' : ''}`}>
              <span>
                ForgotPassword
              </span>
            </Link>
            <Link to='/profile' className={`flex flex-col text-center text-2xl ${isActiveLink('/profile') ? 'text-purple-800' : ''}`}>
              <span>
                Profile
              </span>
            </Link>
            <Link to='/terms' className={`flex flex-col text-center text-2xl ${isActiveLink('/terms') ? 'text-purple-800' : ''}`}>
              <span>
                Terms
              </span>
            </Link>
            <Link to='/rules' className={`flex flex-col text-center text-2xl ${isActiveLink('/rules') ? 'text-purple-800' : ''}`}>
              <span >
                Rules
              </span>
            </Link>
            <Link to='/admindashboard' className={`flex flex-col text-center text-2xl ${isActiveLink('/admindashboard') ? 'text-purple-800' : ''}`}>
              <span>
                AdminDashboard
              </span>
            </Link>
            <Link to='/shop' className={`flex flex-col text-center text-2xl ${isActiveLink('/shop') ? 'text-purple-800' : ''}`}>
              <span>
                Shop
              </span>
            </Link>
            <Link to='/rewards' className={`flex flex-col text-center text-2xl ${isActiveLink('/rewards') ? 'text-purple-800' : ''}`}>
              <span>
                Rewards
              </span>
            </Link>
            <ThemeSwitch />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
