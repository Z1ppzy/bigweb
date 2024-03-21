import { Link } from 'react-router-dom';

export default function RegisterButton() {
  return (
    <Link
      to='/register'
      className='bg-someblack w-fit px-4 py-1 rounded-md text-iney font-bold dark:bg-white'
    >
      Зарегистрироваться
    </Link>
  );
}
