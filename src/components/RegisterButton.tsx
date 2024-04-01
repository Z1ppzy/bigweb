import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogoutButton from './LogoutButton';
import { Button } from './ui/button';

export default function RegisterButton() {
  const navigate = useNavigate();

  const registerClick = () => {
    navigate('/register');
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn) {
    return <LogoutButton />;
  }
  return (

      <Button onClick={registerClick} variant={'outline'}>Зарегистрироваться</Button>

  );
}
