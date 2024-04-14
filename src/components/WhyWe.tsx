import { GiProcessor } from 'react-icons/gi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';

export default function WhyWe() {
  return (
      <div className='text-center'>
        <h1 className='mt-8 text-2xl'>
          <b>Почему именно мы?</b>
        </h1>
        <div className='mx-20 place-items-center md:grid grid-cols-3 mb-10 gap-20'>
          <div className='flex flex-col items-center mt-5'>
            <GiProcessor className='text-8xl text-purple-950 ' />
            <p className='font-light'>
              Мы тщательно оптимизируем сервер для обеспечения плавного и
              быстрого геймплея, даже на больших дистанциях и при большом
              количестве игроков.
            </p>
          </div>
          <div className='flex flex-col items-center mt-5'>
            <FaPeopleGroup className='text-8xl text-purple-950' />
            <p className='font-light'>
              Наша команда администраторов всегда готова помочь и поддержать
              игроков, создавая теплую и приветливую атмосферу на сервере.
            </p>
          </div>
          <div className='flex flex-col items-center mt-5'>
            <IoMdSettings className='text-8xl text-purple-950' />
            <p className='font-light'>
              Мы предлагаем широкий выбор настроек и плагинов, которые позволяют
              игрокам настраивать мир под свои предпочтения, делая каждое
              приключение уникальным.
            </p>
          </div>
        </div>
      </div>
  );
}