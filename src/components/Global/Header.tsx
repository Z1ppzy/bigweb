import { Link } from 'react-router-dom';
import SheetNavigation from './SheetNavigation';
import TypeIt from 'typeit-react';

export default function Header() {
  return (
    <div className='mt-6'>
    <div className='flex flex-row justify-between px-10'>
      <Link to='/' className='font-extrabold italic text-2xl md:text-3xl duration-300 hover:text-purple-600 font-Logo'>
        <div className='hidden md:block'>
          <TypeIt>HeavenlyWeiner</TypeIt>
        </div>
        <div className='block md:hidden'>
          <img src='/public/logo.png' alt='HeavenlyWeiner' className='w-auto h-14' />
        </div>
      </Link>
      <div className='flex'>
        <SheetNavigation />
      </div>
    </div>
    <div className='border-b-4 mx-8 border-purple-500 rounded-md mt-6'></div>
  </div>
  );
}
