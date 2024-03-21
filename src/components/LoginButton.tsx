import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли токен авторизации в localStorage
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  // Не отображаем кнопку "Войти", если пользователь уже авторизован
  if (isLoggedIn) {
    return null;
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
