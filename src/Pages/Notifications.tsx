import { useState } from 'react';
import useCheckAuth from '@/hooks/useCheckAuth';
import { Loader } from 'lucide-react';

interface Notification {
  id: number;
  message: string;
}

export default function Notifications() {
  const isLoading = useCheckAuth();
  const [notifications] = useState<Notification[]>([

    // { id: 1, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, asperiores.' },
    // { id: 2, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, asperiores.' },
  ]);

  if (isLoading) {
    return <Loader />;
  }

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
          {notifications.length === 0 ? (
            <p className='font-bold text-2xl text-center md:text-left'>У вас нет уведомлений.</p>
          ) : (
            notifications.map(notification => (
              <div key={notification.id} className='bg-white w-full h-16 rounded-lg mt-2 text-black hover:bg-slate-300 duration-500 cursor-pointer'>
                <p className='p-2'>
                  {notification.message}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
