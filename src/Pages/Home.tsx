
import image from '../components/UP8WziwmIrf_cVkFYBrLzw.jpeg';
import { Link } from 'react-router-dom'

export default function ()  {
  return (
    <div className='bg-emerald-900 h-screen'>
      <div className='flex flex-row bg-slate-800 text-white py-4 pl-5'>
        <p className='hover:cursor-pointer text-2xl'>Blabla Craft</p>
      </div>
      <div className='flex flex-grow '>
        <div className='flex flex-col w-1/2'>
          <img src={image} alt='' className='mt-5 px-4 rounded-lg' />
        </div>
        <div className='flex flex-col w-1/2 items-center'>
          <p className='mt-40 px-24 text-white'>
            Добро пожаловать в миры Blabla Craft, где каждый блок может стать
            началом вашего величайшего приключения! 🌟 Здесь вас ждут
            неисследованные земли, захватывающие задания и дружелюбное
            сообщество строителей, исследователей и воинов. Поднимите паруса
            своего воображения, соорудите невиданные до сих пор сооружения и
            сражайтесь с легендарными монстрами. Присоединяйтесь к нам в Blabla
            Craft — и пусть каждый ваш шаг будет началом чего-то удивительного.
            Вперед, к приключениям! 🚀✨
          </p>
         <Link to='start' className='mt-20 bg-black px-4 w-60 h-30 py-4 rounded-md text-white text-center border-2 border-purple-400 hover:text-purple-400'>GOGOGO</Link>
        </div>
      </div>
    </div>
  );
};
