import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { toast } from 'react-toastify';

export default function SuggestionBox() {
  const [text, setText] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (text === '') {
      toast.warn('Пожалуйста, заполните содержимое');
    } else {
      toast.success('Успешно отправлено');
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <div className='px-10 py-10'>
      <div className='max-w-md lg:max-w-xl mx-auto'>
        <form
          className='flex flex-col items-center gap-6'
          onSubmit={handleSubmit}
        >
          <div className='text-center'>
            <h1 className='text-center font-bold text-2xl'>
              Предложить идею по улучшению сервера
            </h1>
            <p className='font-light md:dark:font-extralight  mt-0'>
              Идея должна быть адекватной и правильно выраженной!
            </p>
          </div>
          <Textarea
            placeholder='Снять зипзи с админа...'
            value={text}
            onChange={handleChange}
            className='w-full'
          />
          <Button className='w-fit' type='submit'>
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
}
