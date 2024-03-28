import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout');
      localStorage.clear();
      navigate('/login');
      setIsLoggedIn(false); 
    } catch (error) {
      console.error('Ошибка при выходе', error);
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return <button onClick={handleLogout}>Выход</button>;
}