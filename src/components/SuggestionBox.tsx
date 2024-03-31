import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function SuggestionBox() {
  return (
    <div className='w-full h-fit text-center p-6'>
      <div className='gap-3 flex flex-col items-center'>   
        <h1 className='font-bold text-xl'>Предложить идею по улучшению сервера</h1>
        <p className='font-light md:font-extralight text-sm mt-0'>Идея должна быть адекватной и правильно выраженной!</p>
        <Textarea className='max-w-xl' placeholder='Снять зипзи с админа' />
        <Button className='w-fit'>Отправить</Button>
      </div>
    </div>
  );
}
