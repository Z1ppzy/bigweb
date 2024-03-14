import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';


export default function Header() {
  return (
    <div className='flex flex-row justify-between mt-2 pl-2'>
      <div className='font-bold text-xl px-4 py-2 rounded-lg'>
        <Link to='/'>HeavenlyWeiner</Link>
      </div>
      <DropDownMenu />
    </div>
  );
}
