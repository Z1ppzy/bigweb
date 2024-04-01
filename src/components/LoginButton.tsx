import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMail } from "react-icons/hi";
import FormVanila from '@/components/FormVanilla';

export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn) {
    return <><Link to='/notifications'><HiMail className='text-2xl text-center' /></Link><FormVanila /></>;
  }
  return (
    <Link
      to='/login'
      className='bg-someblack w-fit py-1 px-4 rounded-md text-iney font-bold dark:bg-white'
    >
      Войти
    </Link>
  );
}
