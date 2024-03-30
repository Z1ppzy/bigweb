import { Button } from './ui/button';
import { Input } from './ui/input';

export default function SuggestionBox() {
  return (
    <div className='w-full h-fit text-center p-6'>
      <div className=' gap-4 flex flex-col'>
        <h1 className='font-bold text-xl'>Предложить идею по улучшению сервера</h1>
        <Input type='text'className='' />
        <Button>Отправить</Button>
      </div>
    </div>
  );
}
