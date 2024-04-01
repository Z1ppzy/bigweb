import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogoutButton from './LogoutButton';
import { Button } from './ui/button';

export default function RegisterButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn) {
    return <LogoutButton />;
  }
  return (
    <Link to='/register'>
      <Button variant={'outline'}>Зарегистрироваться</Button>
    </Link>
  );
}
