import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function SuggestionBox() {
  return (
    <div className='px-10 py-10 md:px-32'>
      <div className='md:px-80'>
        <form className='flex flex-col items-center gap-6'>
          <div className='text-center'>
            <h1 className='text-center font-bold text-2xl'>
              Предложить идею по улучшению сервера
            </h1>
            <p className='font-light md:dark:font-extralight text-sm mt-0'>
              Идея должна быть адекватной и правильно выраженной!
            </p>
          </div>
          <Textarea placeholder='Снять зипзи с админа...' />
          <Button className='w-fit'>Отправить</Button>
        </form>
      </div>
    </div>
  );
}
