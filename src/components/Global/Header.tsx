import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import TypeIt from "typeit-react";

export default function Header() {
  return (
    <div className='flex flex-row justify-between bg-footer px-4 py-4 border-b border-white'>
      <div className='mt-2'>
        <Link to='/' 
        className='font-extrabold italic text-2xl text-white duration-300  hover:text-purple-600 font-Logo'>
          <TypeIt>HeavenlyWeiner</TypeIt>
        </Link>
      </div>
      <DropDownMenu />
    </div>
  );
}
