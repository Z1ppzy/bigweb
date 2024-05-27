import { useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'react-toastify';

export default function SendNotification() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      message,
      type,
      title,
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/api/notifications',
        data
      );

      if (response.status === 201) {
        toast.success('Уведомление успешно отправлено!');
        setName('');
        setMessage('');
        setType('');
        setTitle('');
      }
    } catch (error) {
      console.error('Ошибка при отправке уведомления:', error);
      toast.error('Не удалось отправить уведомление.');
    }
  };

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Отправить уведомление</CardTitle>
        <CardDescription>
          Сделать в пару кликов испуганного пользователя
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-2.5'>
              <Label htmlFor='username'>Никнейм</Label>
              <Input
                id='username'
                autoComplete='off'
                placeholder='Ник игрока'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col space-y-2.5'>
              <Label htmlFor='title'>Заголовок</Label>
              <Input
                id='title'
                autoComplete='off'
                placeholder='Введите заголовок'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='flex flex-col space-y-2.5'>
              <Label htmlFor='message'>Сообщение для уведомления</Label>
              <Textarea
                id='message'
                placeholder='Введите сообщение'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className='flex flex-col space-y-2.5'>
              <Label htmlFor='notificationType'>Тип уведомления</Label>
              <Select value={type} onValueChange={(value) => setType(value)}>
                <SelectTrigger id='notificationType'>
                  <SelectValue placeholder='Выбрать' />
                </SelectTrigger>
                <SelectContent position='item-aligned'>
                  <SelectItem value='System'>System</SelectItem>
                  <SelectItem value='Warning'>Warning</SelectItem>
                  <SelectItem value='Error'>Error</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type='submit' className='mt-6'>
            Готово
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
