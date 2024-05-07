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
            <Link
              to='/'
              className={`flex flex-col text-center text-2xl relative group 
              }`}
            >
              <span>Главная</span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out ${
                  isActiveLink('/')
                    ? 'bg-purple-800 scale-x-100'
                    : 'scale-x-0 group-hover:bg-purple-800 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              to='/forgot_password'
              className={`flex flex-col text-center text-2xl relative group ${
                isActiveLink('/forgot_password') ? 'active' : ''
              }`}
            >
              <span>Забыли пароль</span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out ${
                  isActiveLink('/forgot_password')
                    ? 'bg-purple-800 scale-x-100'
                    : 'scale-x-0 group-hover:bg-purple-800 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              to='/profile'
              className={`flex flex-col text-center text-2xl relative group ${
                isActiveLink('/profile') ? 'active' : ''
              }`}
            >
              <span>Профиль</span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out ${
                  isActiveLink('/profile')
                    ? 'bg-purple-800 scale-x-100'
                    : 'scale-x-0 group-hover:bg-purple-800 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              to='/terms'
              className={`flex flex-col text-center text-2xl relative group ${
                isActiveLink('/terms') ? 'active' : ''
              }`}
            >
              <span>Условия использования</span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out ${
                  isActiveLink('/terms')
                    ? 'bg-purple-800 scale-x-100'
                    : 'scale-x-0 group-hover:bg-purple-800 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              to='/rules'
              className={`flex flex-col text-center text-2xl relative group ${
                isActiveLink('/rules') ? 'active' : ''
              }`}
            >
              <span>Правила</span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out ${
                  isActiveLink('/rules')
                    ? 'bg-purple-800 scale-x-100'
                    : 'scale-x-0 group-hover:bg-purple-800 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              to='/admindashboard'
              className={`flex flex-col text-center text-2xl relative group ${
                isActiveLink('/admindashboard') ? 'active' : ''
              }`}
            >
              <span>Панель управления</span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out ${
                  isActiveLink('/admindashboard')
                    ? 'bg-purple-800 scale-x-100'
                    : 'scale-x-0 group-hover:bg-purple-800 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              to='/shop'
              className={`flex flex-col text-center text-2xl relative group ${
                isActiveLink('/shop') ? 'active' : ''
              }`}
            >
              <span>Магазин</span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out ${
                  isActiveLink('/shop')
                    ? 'bg-purple-800 scale-x-100'
                    : 'scale-x-0 group-hover:bg-purple-800 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              to='/rewards'
              className={`flex flex-col text-center text-2xl relative group ${
                isActiveLink('/rewards') ? 'active' : ''
              }`}
            >
              <span>Награды</span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out ${
                  isActiveLink('/rewards')
                    ? 'bg-purple-800 scale-x-100'
                    : 'scale-x-0 group-hover:bg-purple-800 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <ThemeSwitch />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
