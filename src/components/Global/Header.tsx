import { Link } from 'react-router-dom';
import SheetNavigation from './SheetNavigation';
import TypeIt from "typeit-react";

export default function Header() {
  return (
    <div className='flex flex-row justify-between border-b-4 px-4 py-4'>
      <div className='mt-2'>
        <Link to='/' 
        className='font-extrabold italic text-2xl duration-300  hover:text-purple-600 font-Logo'>
          <TypeIt>HeavenlyWeiner</TypeIt>
        </Link>
      </div>
      <SheetNavigation />
    </div>
  );
}
