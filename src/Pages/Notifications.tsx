export default function Notifications() {
  return (
    <div className='h-screen'>
      <div className='p-4 md:p-10'>
        <h1 className='text-2xl font-bold text-center md:text-left'>Центр уведомлений</h1>
        <div className='md:pr-96 mt-2'>
          <p className='text-center md:text-left font-medium text-lg'>
            Все уведомления о различных событиях и действиях отображаются здесь.
            Если Вам отправили запрос на добавление в друзья или Ваше сообщение
            кому-то понравилось, мы немедленно сообщим Вам об этом. Будьте
            всегда в курсе всех событий!
          </p>
        </div>
        <div className='md:pr-52'>
          <div className='bg-white w-full h-20 rounded-lg mt-2 text-black'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
            asperiores.
          </div>
          <div className='bg-white w-full h-20 rounded-lg mt-2 text-black'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            officia!
          </div>
          <div className='bg-white w-full h-20 rounded-lg mt-2 text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            atque?
          </div>
          <div className='bg-white w-full h-20 rounded-lg mt-2 text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            repellat?
          </div>
        </div>
      </div>
    </div>
  );
}
