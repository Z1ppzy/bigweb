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

interface LinkItem {
  path: string;
  label: string;
}

export default function DropDownMenu() {
  const location = useLocation();
  const isActiveLink = (path: string) => location.pathname === path;

  const links: LinkItem[] = [
    { path: '/', label: 'Главная' },
    { path: '/forgot_password', label: 'Забыли пароль' },
    { path: '/profile', label: 'Профиль' },
    { path: '/terms', label: 'Условия использования' },
    { path: '/rules', label: 'Правила' },
    { path: '/admindashboard', label: 'Панель управления' },
    { path: '/shop', label: 'Магазин' },
    { path: '/rewards', label: 'Награды' },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <div className="text-3xl pr-4 mt-4 text-white cursor-pointer">
          <TfiAlignRight />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <p className="text-center font-bold text-2xl">Навигационное меню</p>
          </SheetTitle>
          <div className="flex flex-row justify-between mt-4 mb-4">
            <LoginButton />
            <RegisterButton />
          </div>
          <SheetDescription>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col text-center text-2xl relative group transform transition-transform duration-300 ${
                  isActiveLink(link.path)
                    ? 'text-purple-800 scale-105'
                    : 'hover:scale-105 hover:text-purple-500'
                }`}
              >
                <span>{link.label}</span>
                {!isActiveLink(link.path) && (
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out bg-purple-500 scale-x-0 group-hover:scale-x-100`}
                  ></span>
                )}
              </Link>
            ))}
            <ThemeSwitch />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
