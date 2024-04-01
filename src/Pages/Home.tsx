import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SliderImg from '@/components/SliderImg';
import { GiProcessor } from 'react-icons/gi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuggestionBox from '@/components/SuggestionBox';


export default function Home() {
  const CopyIP = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.info(' IP-адрес был скопирован в буфер обмена!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Slide,
    });
  };

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
            <p className='text-center text-lg mt-4 md:mt-3'>
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
          <h1 className='mt-8 text-2xl text-center md:text-4xl'>
            <b>Почему именно мы?</b>
          </h1>

        <div className='mx-10 place-items-center md:grid grid-cols-3 md:mx-32 text-center mb-10 gap-20'>
          <div className='flex flex-col items-center mt-5'>
            <GiProcessor className='text-8xl text-purple-950 ' />
            <p>
              Мы тщательно оптимизируем сервер для обеспечения плавного и
              быстрого геймплея, даже на больших дистанциях и при большом
              количестве игроков.
            </p>
          </div>
          <div className='flex flex-col items-center mt-5'>
            <FaPeopleGroup className='text-8xl text-purple-950' />
            <p>
              Наша команда администраторов всегда готова помочь и поддержать
              игроков, создавая теплую и приветливую атмосферу на сервере.
            </p>
          </div>
          <div className='flex flex-col items-center mt-5'>
            <IoMdSettings className='text-8xl text-purple-950' />
            <p>
              Мы предлагаем широкий выбор настроек и плагинов, которые позволяют
              игрокам настраивать мир под свои предпочтения, делая каждое
              приключение уникальным.
            </p>
          </div>
        </div>
        <div className='px-8 mx-4 lg:mx-40 mb-10'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Как подключиться к серверу?</AccordionTrigger>
              <AccordionContent>
                Для подключения к нашему серверу убедитесь в актуальности версии
                Minecraft. Находясь уже в клиенте Minecraft перейдите во вкладку
                «Сетевая игра», после чего щелкните по «Добавить сервер» и
                введите нужный IP-адрес{' '}
                <span
                  onClick={() => CopyIP('mc.heavenlyweiner.ru')}
                  className='hover:text-purple-800 duration-500 font-bold cursor-pointer'
                >
                  mc.heavenlyweiner.ru
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                Как установить голосовой чат на наш сервер?
              </AccordionTrigger>
              <AccordionContent>
                Для этого вам потребуется модифицированная актуальная версия
                Minecraft Fabric и установить мод{' '}
                <a
                  href='https://modrinth.com/plugin/plasmo-voice/versions#all-versions'
                  className='hover:text-purple-800 font-bold duration-500'
                  target='_blank'
                >
                  PlasmoVoice
                </a>{' '}
                в корневую папку лаунчера (mods), после чего зайти на сервер и
                нажать кнопку "V".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>
                Какие правила существуют на сервере?
              </AccordionTrigger>
              <AccordionContent>
                На нашем сервере установлены базовые правила игры, но подробнее
                с ними можно ознакомиться{' '}
                <Link
                  to='/rules'
                  className='font-bold hover:text-purple-800 duration-500'
                >
                  тут
                </Link>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <ToastContainer />
        <SuggestionBox />
      </div>
    </>
  );
}
