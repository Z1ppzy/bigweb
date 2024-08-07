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
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <div className='lg:grid grid-cols-2 mt-6 md:mt-10'>
        <div>
          <SliderImg />
          <ServerStatus />
        </div>
        <div className='px-5 md:px-10 mt-10 md:mt-18'>
          <h1 className='font-semibold text-xl text-center md:text-4xl'>
            Начните свою историю в нашей виртуальной песочнице!
          </h1>
          <p className='text-center text-base md:text-xl mt-4 md:mt-8'>
            Приветствуем Вас на нашем сервере Minecraft! Откройте для себя мир,
            где каждый шаг - это приключение. Уникальные плагины обогатят ваш
            игровой процесс, предоставляя возможности для творчества и
            исследований. Создайте воспоминания, играя и взаимодействуя с
            другими. Исследуйте каждый уголок нашего сервера и находите
            сокровища, скрытые в тайниках. Сражайтесь с монстрами, стройте
            невероятные сооружения и станьте частью сообщества, где каждый игрок
            ценится. Ваше следующее приключение начинается здесь!
          </p>
          <div className='mt-10 md:mt-16 flex justify-center'>
            <Button asChild className='bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold text-lg md:text-2xl px-12 py-7 md:px-20 hover:text-slate-300 duration-800'>
              <Link to='/register'>Начать играть</Link>
            </Button>
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
      <div>
        {' '}
        <SuggestionBox />
      </div>
      <ToastContainer />
    </div>
  );
}
