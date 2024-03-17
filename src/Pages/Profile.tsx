import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
                  <div className='flex flex-col md:pl-6 text-md text-someblack text-lg'>
                    <p className='font-medium'>
                      Почта: <b> {user.email}</b>
                    </p>
                    <p className='font-medium'>
                      Роль: <b>{user.role}</b>
                    </p>
                    <p className='font-medium'>
                      Аккаунт создан:{' '}
                      <b>{format(user.created_at, { date: 'medium' })}</b>
                    </p>
                  </div>
                </div>
              )}
              {!user && <Skeleton className='h-[80px] w-[250px] rounded-xl' />}
            </div>
            <div className='px-8'>
              <button className='w-full md:w-fit border-2 border-someblack text-purple-600 px-3 py-1 rounded-md m-0.5 font-medium hover:scale-105 hover:text-purple-800 duration-500'>
                Смена пароля
              </button>
              <button className='w-full md:w-fit border-2 border-someblack text-purple-600 px-3 py-1 rounded-md m-0.5 font-medium hover:scale-105 hover:text-purple-800 duration-500'>
                Активация промокода
              </button>
              <button className=' w-full md:w-fit border-2 border-someblack text-purple-600 px-3 py-1 rounded-md m-0.5 font-medium hover:scale-105 hover:text-purple-800 duration-500'>
                Подтверждение почты
              </button>
              <button className=' w-full  md:w-fit border-2 border-someblack text-purple-600 px-3 py-1 rounded-md m-0.5 font-medium hover:scale-105 hover:text-purple-800 duration-500'>
                Двухэтапная аутентификация
              </button>
            </div>
          </div>
          <div className='p-10 md:mx-16 '>
            <Link to='/shop'>
              <div className='mb-2 flex text-center justify-center w-full h-fit bg-gradient-to-r from-sky-500 to-indigo-500  rounded-lg hover:scale-105 duration-500 cursor-pointer'>
                <div className=' p-4'>
                  <p className='font-bold text-md md:text-2xl text-center text-iney'>
                    ПОПОЛНИТЬ БАЛАНС
                  </p>
                  <p className='font-bold text-md md:text-xl mt-3 text-center text-iney'>
                    ТЕКУЩИЙ БАЛАНС:
                  </p>
                  <p className='font-bold text-xl md:text-2xl text-center text-iney'>
                    0
                  </p>
                </div>
              </div>
            </Link>
            <Link to='/rewards'>
              <div className='mt-2 flex flex-col p-10 justify-center items-center w-full h-fit shadow-xl hover:shadow-2xl rounded-lg hover:scale-105 duration-500 cursor-pointer '>
                <p className='text-iney text-xl text-center font-bold mt-'>
                  А вы уже забрали свою награду?
                </p>
                <p className='text-iney text-lg text-center font-bold mt-2'>
                  Если нет, то скорее получите ее!!!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
