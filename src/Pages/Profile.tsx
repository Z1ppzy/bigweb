import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from '@formkit/tempo';



axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface user {
  name: string;
  email: string;
  created_at: string;
  role: string;
}

export default function Profile() {
  const [user, setUser] = useState<user>();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
    const fetchUser = async () => {
      const user = await axios.get('http://localhost:8000/api/user');
      setUser(user.data);
      // console.log(user);
    };
    fetchUser();
  }, []);

  return (
    <>
      <div>
        {user && (
          <h1 className='font-bold text-someblack text-3xl p-6 text-center md:text-left'>
            Приветствуем вас, {user?.name}!
          </h1>
        )}{' '}
        {!user && <Skeleton className='h-[20px] w-[250px] rounded-xl' />}
        <div className='md:grid grid-cols-2 min-h-screen'>
          <div className=''>
            <div className='py-5 px-8 text-left'>
              {user && (
                <div className='flex flex-col items-center md:flex-row '>
                  <Avatar>
                    <AvatarImage src='12231231.jpg' alt='None' />
                    <AvatarFallback>None</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col pl-6 text-md text-someblack text-lg'>
                    <p>Почта: {user.email}</p>
                    <p>Роль:{user.role}</p>
                    <p>
                      Аккаунт создан:{' '}
                      {format(user.created_at, { date: 'medium' })}
                    </p>
                  </div>
                </div>
              )}
              {!user && <Skeleton className='h-[80px] w-[250px] rounded-xl' />}
            </div>
            <div className='px-8'>
              <button className='text-white w-fit bg-black px-3 py-1 rounded-md m-0.5 font-medium hover:text-purple-800 duration-500'>
                Смена пароля
              </button>
              <button className='text-white w-fit bg-black px-3 py-1 rounded-md m-0.5 font-medium hover:text-purple-800 duration-500'>
                Активация промокода
              </button>
              <button className='text-white w-fit bg-black px-3 py-1 rounded-md m-0.5 font-medium hover:text-purple-800 duration-500'>
                Подтверждение почты
              </button>
              <button className='text-white w-fit bg-black px-3 py-1 rounded-md m-0.5 font-medium hover:text-purple-800 duration-500'>
                Двухэтапная аутентификация
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
