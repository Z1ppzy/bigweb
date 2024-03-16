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

export default function DropDownMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        {' '}
        <div className='text-3xl pr-4 mt-4'>
          <TfiAlignRight />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <span className='text-center'>Навигационное меню</span>
          </SheetTitle>
          <SheetDescription>
            <Link to='/login' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
                Login
              </span>
            </Link>
            <Link to='/register' className='flex flex-col'>
              <span className='text-center text-2xl hover:text-purple-950'>
                Register
              </span>
            </Link>
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
