import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/'); 
  };

  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen flex flex-col items-center justify-center px-4 lg:px-8'>
      <div className='text-center flex flex-col items-center'>
        <span className='text-white font-bold text-xl md:text-2xl'>
          Упс! Кажется, вы заблудились.
        </span>
        <span className='text-white font-medium text-md sm:text-lg md:text-xl mb-3'>
          Страница, которую вы ищете, не существует или была перемещена.
        </span>
        <Button
          onClick={navigateToHome}
          variant={'secondary'}
          className='py-2 px-4 md:px-8 md:py-3 font-medium text-md sm:text-lg'
        >
          Перейти на главную
        </Button>
      </div>
    </div>
  );
}
