import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8000/api/logout');
      localStorage.clear();
      navigate('/login');
    } catch (error) {
      console.error('Ошибка при выходе', error);
    }
  };
  return <button onClick={handleLogout}>Выход</button>;
}
