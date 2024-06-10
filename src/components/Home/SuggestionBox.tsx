import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Label } from '@/components/ui/label';

export default function SuggestionBox() {
  const [text, setText] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (text === '') {
      toast.warn('Пожалуйста, заполните содержимое');
    } else {
      try {
        const response = await axios.post(
          import.meta.env.VITE_BACKEND_URL + '/api/suggestions',
          {
            suggestion: text,
          }
        );
        if (response.status === 200) {
          toast.success('Успешно отправлено');
          setText('');
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          toast.error('Пожалуйста, авторизуйтесь, чтобы оставить предложение.');
        } else {
          toast.error('Произошла ошибка при отправке');
        }
      }
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
            <Label htmlFor='suggestion'>
              Идея должна быть адекватной и правильно выраженной!
            </Label>
          </div>
          <Textarea
            placeholder='Снять зипзи с админа...'
            value={text}
            onChange={handleChange}
            className='w-full'
            name='suggestion'
            id='suggestion'
          />
          <Button className='w-fit' type='submit' variant='outline'>
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
}
