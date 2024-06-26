import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMail } from "react-icons/hi";
import { Button } from '../ui/button';
import Balance from '../Profile/Balance';

export default function LoginButton() {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate('/login');
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn) {
    return <><Link to='/notifications'><HiMail className='text-2xl text-center' /></Link><Balance /></>;
  }
  return (
      <Button onClick={loginClick}>Войти</Button>
  );
}

