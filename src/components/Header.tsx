import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

export default function Header() {
  return (
    <div className='flex flex-row justify-between bg-footer'>
      <div className='font-bold text-xl px-4 py-4 rounded-lg mt-2 mb-2 '>
        <Link to='/' 
        className='text-white duration-300  hover:text-purple-600'>
          HeavenlyWeiner
        </Link>
      </div>
      <DropDownMenu />
    </div>
  );
}
