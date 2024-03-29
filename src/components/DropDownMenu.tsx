import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TfiAlignRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';


export default function DropDownMenu() {
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
            <Link to='/forgot_password' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
                ForgotPassword
              </span>
            </Link>
            <Link to='/profile' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
                Profile
              </span>
            </Link>
            <Link to='/terms' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
                Terms
              </span>
            </Link>
            <Link to='/rules' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
                Rules
              </span>
            </Link>
            <Link to='/admindashboard' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
                AdminDashboard
              </span>
            </Link>
            <Link to='/shop' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
                Shop
              </span>
            </Link>
            <Link to='/rewards' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
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
