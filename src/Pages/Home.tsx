import { Link } from 'react-router-dom';
import SliderImg from '@/components/SliderImg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuggestionBox from '@/components/SuggestionBox';
import AccordionServer from '@/components/AccordionServer';
import ServerInfo from '@/components/ServerInfo';
import WhyWe from '@/components/WhyWe';

export default function Home() {
  return (
    <>
      <div className=''>
        <div className='md:grid grid-cols-2 min-h-screen'>
          <div className='mt-10 md:mt-8'>
            <SliderImg />
          </div>
          <div className='px-10 mt-2 md:mt-10'>
            <h1 className='font-semibold text-xl text-center md:text-2xl'>
              Начните свою историю в нашей виртуальной песочнице!
            </h1>
            <p className='text-center font-extralight text-lg mt-4 md:mt-3'>
              Приветствуем Вас на нашем сервере Minecraft! Откройте для себя
              мир, где каждый шаг - это приключение. Уникальные плагины обогатят
              ваш игровой процесс, предоставляя возможности для творчества и
              исследований. Создайте воспоминания, играя и взаимодействуя с
              другими. Исследуйте каждый уголок нашего сервера и находите
              сокровища, скрытые в тайниках. Сражайтесь с монстрами, стройте
              невероятные сооружения и станьте частью сообщества, где каждый
              игрок ценится. Ваше следующее приключение начинается здесь!
            </p>
            <div className='mt-10 md:mt-8 text-center'>
              <Link
                to='/register'
                className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg px-10 md:px-16 py-4 text-white hover:text-teal-400 duration-500'
              >
                Начать играть
              </Link>
            </div>
          </div>
        </div>
        <div>
          <ServerInfo />
        </div>
        <div>
          <WhyWe />
        </div>
        <div className='px-8 mx-4 lg:mx-40 mb-10'>
          <AccordionServer />
        </div>
        <ToastContainer />
        <SuggestionBox />
      </div>
    </>
  );
}
