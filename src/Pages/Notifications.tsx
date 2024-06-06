import useCheckAuth from '@/hooks/useCheckAuth';
import NotificationList from '@/components/Profile/NotificationList';
import Loader from '@/components/Global/Loader';

export default function Notifications() {
  const isLoading = useCheckAuth();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=''>
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
        <NotificationList />
      </div>
    </div>
  );
}
