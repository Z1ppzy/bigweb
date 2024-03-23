import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

export default function Header() {
  return (
    <div className='flex flex-row justify-between bg-footer px-4 py-4'>
      <div className='mt-2'>
        <Link to='/' 
        className='font-bold text-xl text-white duration-300  hover:text-purple-600'>
          HeavenlyWeiner
        </Link>
      </div>
      <DropDownMenu />
    </div>
  );
}
