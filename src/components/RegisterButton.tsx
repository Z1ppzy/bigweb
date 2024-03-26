import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function RegisterButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn) {
    return null;
  }
  return (
    <Link
      to='/register'
      className='bg-someblack w-fit px-4 py-1 rounded-md text-iney font-bold dark:bg-white'
    >
      Зарегистрироваться
    </Link>
  );
}
