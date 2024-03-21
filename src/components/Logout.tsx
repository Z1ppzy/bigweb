import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли токен авторизации в localStorage
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8000/api/logout');
      localStorage.clear();
      navigate('/login');
      setIsLoggedIn(false); // Обновляем состояние после выхода
    } catch (error) {
      console.error('Ошибка при выходе', error);
    }
  };

  // Показываем кнопку только если пользователь авторизован
  if (!isLoggedIn) {
    return null;
  }

  return <button onClick={handleLogout}>Выход</button>;
}