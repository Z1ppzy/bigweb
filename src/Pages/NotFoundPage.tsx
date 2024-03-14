import { Link } from 'react-router-dom';


export default function NotFoundPage() {
  return <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen flex flex-col items-center justify-center'>
    <span className='text-white font-bold'>Страница не найдена!</span>
    <Link to='/' className='flex flex-col font-semibold bg-white text-black py-4 px-8 rounded-lg'>Вернуться на главную</Link>
  </div>;
}
