import { Link } from 'react-router-dom';
import picture from '../assets/slide1.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  return (
    <>
      <div className='font-montserrat min-h-screen '>
        <div className='md:grid grid-cols-2'>
          <div className=''>
            <img
              src={picture}
              alt=''
              className='border-2 border-purple-700 md:w-96 h-96'
            />
          </div>
          <div className='mx-10 mt-5'>
            <h1 className='font-semibold text-center text-xl'>
              Начните свою историю в нашей виртуальной песочнице!
            </h1>
            <p className='text-center'>
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
        <div className='px-8 mt-10'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
