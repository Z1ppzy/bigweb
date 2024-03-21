import { Link } from 'react-router-dom';

export default function LoginButton() {
  return (
    <Link
      to='/login'
      className='bg-someblack w-fit py-1 px-4 rounded-md text-iney font-bold dark:bg-white'
    >
      Войти
    </Link>
  );
}
