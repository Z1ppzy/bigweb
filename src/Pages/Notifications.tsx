import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notifications() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, []);
  return (
    <div className='h-screen'>
      <div className='p-4 md:p-10'>
        <h1 className='md:text-4xl text-3xl font-bold text-center md:text-left'>
          Центр уведомлений
        </h1>
        <div className='md:pr-96 mt-2'>
          <p className='text-center md:text-left font-light text-lg'>
            Все уведомления о различных событиях и действиях отображаются здесь.
            Если Вам отправили запрос на добавление в друзья или Ваше сообщение
            кому-то понравилось, мы немедленно сообщим Вам об этом. Будьте
            всегда в курсе всех событий!
          </p>
        </div>
        <div className='md:pr-52 mt-8'>
          <div className='bg-white w-full h-16 rounded-lg mt-2 text-black hover:bg-slate-300 duration-500 cursor-pointer'>
            <p className='p-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              asperiores.
            </p>
          </div>
          <div className='bg-white w-full h-16 rounded-lg mt-2 text-black hover:bg-slate-300 duration-500 cursor-pointer'>
            <p className='p-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              asperiores.
            </p>
          </div>
          <div className='bg-white w-full h-16 rounded-lg mt-2 text-black hover:bg-slate-300 duration-500 cursor-pointer'>
            <p className='p-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              asperiores.
            </p>
          </div>
          <div className='bg-white w-full h-16 rounded-lg mt-2 text-black hover:bg-slate-300 duration-500 cursor-pointer'>
            <p className='p-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              asperiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
