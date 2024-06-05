import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SliderImg from '@/components/Home/SliderImg';
import SuggestionBox from '@/components/Home/SuggestionBox';
import AccordionServer from '@/components/Home/AccordionServer';
import ServerInfo from '@/components/Home/ServerInfo';
import WhyUs from '@/components/Home/WhyUs';
import NewsPost from '@/components/Home/NewsPost';
import ServerStatus from '@/components/Home/ServerStatus';

export default function Home() {
  return (
    <>
        <div className='lg:grid grid-cols-2 min-h-screen mt-12 md:mt-16'>
          <div>
            <SliderImg />
            <ServerStatus />
          </div>
          <div className='px-5 md:px-10 mt-10 md:mt-20'>
            <h1 className='font-semibold text-xl text-center md:text-4xl'>
              Начните свою историю в нашей виртуальной песочнице!
            </h1>
            <p className='text-center font-light text-xl mt-4 md:mt-8'>
              Приветствуем Вас на нашем сервере Minecraft! Откройте для себя
              мир, где каждый шаг - это приключение. Уникальные плагины обогатят
              ваш игровой процесс, предоставляя возможности для творчества и
              исследований. Создайте воспоминания, играя и взаимодействуя с
              другими. Исследуйте каждый уголок нашего сервера и находите
              сокровища, скрытые в тайниках. Сражайтесь с монстрами, стройте
              невероятные сооружения и станьте частью сообщества, где каждый
              игрок ценится. Ваше следующее приключение начинается здесь!
            </p>
            <div className='mt-10 md:mt-16 text-center'>
              <Link
                to='/register'
                className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg font-bold text-2xl px-10 md:px-16 py-4 text-white hover:text-slate-300 duration-500'
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
          <WhyUs />
        </div>
        <div>
          <NewsPost />
        </div>
        <div>
          <AccordionServer />
        </div>
        <ToastContainer />
        <SuggestionBox />
    </>
  );
}
