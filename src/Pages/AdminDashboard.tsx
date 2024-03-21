import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { format } from '@formkit/tempo';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface user {
  name: string;
  email: string;
  created_at: string;
  role: string;
}

export default function AdminDashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
    const fetchUser = async () => {
      const user = await axios.get('http://localhost:8000/api/user');
      if (user.data.role == 'player') {
        navigate('/');
      }
    };
    fetchUser();
  }, []);
  const [name, setName] = useState('');
  const [user, setUser] = useState<user | null>(null); // Используйте интерфейс User
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/search`,
        { params: { name } }
      );
      if (response.data) {
        setUser(response.data);
        setNotFound(false);
      } else {
        setUser(null); // Указываем null, если пользователь не найден
        setNotFound(true);
      }
    } catch (error) {
      console.error('Ошибка при поиске пользователя', error);
      setUser(null); // Также устанавливаем null в случае ошибки
      setNotFound(true);
    }
  };

  return (
    <>
      <div className='h-screen'>
        <h1
          className='text-center font-bold text-2xl mx-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-purple-500'
          style={{ borderBottom: '3px solid', borderColor: '#6b46c1' }}
        >
          Панель управления-админа
        </h1>
        <div className='flex flex-col md:grid grid-cols-3 mx-10'>
          <div className='flex flex-col items-center'>
            <h1 className='mb-3 text-center font-bold mt-2'>
              Редактор новостей
            </h1>
            <label htmlFor=''>Заголовок</label>
            <input
              type='text'
              className='text-black border-2 rounded-sm w-60 h-8 focus:outline-none px-1'
            />
            <label htmlFor=''>Содержимое</label>
            <input
              type='text'
              className='text-black border-2 rounded-sm w-60 h-8 focus:outline-none px-1'
            />
            <label htmlFor=''>Картинка новости:</label>
            <Input type='file' className='w-68 h-8' />
            <button className='w-fit px-2 py-1 bg-slate-800 mt-2'>
              Отправить
            </button>
          </div>
          <div className='flex flex-col items-center '>
            <h1 className='text-center font-bold mt-8 md:mt-2'>Найти игрока</h1>
            <input
              type='text'
              className='text-black  border-2 rounded-sm w-60 h-8 focus:outline-none px-1'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Введите ник пользователя'
            />
            <button
              onClick={handleSearch}
              className='bg-gray-700 w-fit py-1 px-3 rounded-md mt-4'
            >
              Поиск
            </button>
            <h1 className='font-bold'>Найденный игрок:</h1>
            {notFound && <div>Пользователь не найден</div>}
            {user && (
              <div>
                <div>Имя: {user.name}</div>
                <div>Email: {user.email}</div>
                <div>Дата создания: {format(user.created_at, { date: 'long' })}</div>
                <div>Роль: {user.role}</div>
              </div>
            )}
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='mt-2 text-center font-bold'>Выдать роль</h1>
            <label htmlFor=''>Никнейм</label>
            <input
              type='text'
              className='text-black  border-2 rounded-sm w-60 h-8 focus:outline-none px-1'
            />
            <label htmlFor=''>Выбрать роль</label>
            <button className='bg-gray-700 w-fit py-1 px-3 rounded-md mt-4'>
              Готово
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
