import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export default function AdminDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
    const fetchUser = async () => {
      const user = await axios.get('http://localhost:8000/api/user');
      if (user.data.role == 'player') {
        navigate('/login');
      }
    };
    fetchUser()
  }, []);

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-col items-center'>
        <h1>AdminDashboard</h1>
      </div>
      <div>
        <p>sdfsdfsdfsd</p>
      </div>
    </div>
  );
}
