import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';

export default function AccordionServer() {
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
      <div className='mx-4 lg:mx-40 mb-10'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Как подключиться к серверу?</AccordionTrigger>
            <AccordionContent>
              Для подключения к нашему серверу убедитесь в актуальности версии
              Minecraft. Находясь уже в клиенте Minecraft перейдите во вкладку
              «Сетевая игра», после чего щелкните по «Добавить сервер» и введите
              нужный IP-адрес{' '}
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
              На нашем сервере установлены базовые правила игры, но подробнее с
              ними можно ознакомиться{' '}
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
    </>
  );
}
