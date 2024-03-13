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
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';

export default function Home() {
  return (
    <>
      <div className=''>
        <div className='md:grid grid-cols-2  min-h-screen'>
          <div className='mt-10 md:mt-8'>
            <SliderImg />
          </div>
          <div className='mx-10 mt-9 md:mt-20'>
            <h1 className='font-semibold text-center text-base md:text-xl'>
              Начните свою историю в нашей виртуальной песочнице!
            </h1>
            <p className='text-center mt-2 mx-2 md:mx-12'>
              Приветствуем Вас на нашем сервере Minecraft! Откройте для себя
              мир, где каждый шаг - это приключение. Уникальные плагины обогатят
              ваш игровой процесс, предоставляя возможности для творчества и
              исследований. Создайте воспоминания, играя и взаимодействуя с
              другими. Исследуйте каждый уголок нашего сервера и находите
              сокровища, скрытые в тайниках. Сражайтесь с монстрами, стройте
              невероятные сооружения и станьте частью сообщества, где каждый
              игрок ценится. Ваше следующее приключение начинается здесь!
            </p>
            <div className='text-center mt-4'>
              <Link to='/register'>
                <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-2 rounded-lg px-14 py-3 text-white hover:text-teal-400'>
                  Начать играть
                </button>
              </Link>
            </div>
          </div>

        </div>
        <h1 className='text-center text-xl mt-10'>
          <b>Почему именно мы?</b>
        </h1>
        <div className='place-items-center md:grid grid-cols-3 mx-48 text-center mb-10 gap-60'>
          <div className='flex flex-col items-center mt-3'>
            <FaPeopleGroup className='text-8xl text-purple-950' />
            <p>
              Каждому игроку будет продоставляться качественная поддержка
              администрации сервера!
            </p>
          </div>
          <div className='flex flex-col items-center mt-3'>
            <GiProcessor className='text-8xl text-purple-950' />
            <p>
              Сервер использует лучшее оборудование, что гарантирует мощность и
              стабильность нашему прокету!
            </p>
          </div>
          <div className='flex flex-col items-center mt-3'>
            <LiaChalkboardTeacherSolid className='text-8xl text-purple-950' />
            <p>
              Немного о нас. Мы игроки Майнкрафта, что решились сделать своей
              приятный уголок для игры.
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
                введите нужный IP-адрес(mc.heavenlyweiner.ru)
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
                  className='hover:text-purple-800 font-bold'
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
                <Link to='/rules' className='font-bold hover:text-purple-800'>
                  тут
                </Link>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
