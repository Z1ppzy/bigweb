import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      toast.error('Новые пароли не совпадают!');
      return;
    }

    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/api/change-password',
        {
          currentPassword,
          newPassword,
        }
      );
      toast.success('Пароль успешно изменен!');
    } catch (error) {
      toast.error('Произошла ошибка при изменении пароля!');
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Изменение пароля</CardTitle>
        <CardDescription>
          Измените свой пароль здесь. После сохранения вы выйдете из системы.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-1'>
          <Label htmlFor='currentpswd'>Текущий пароль</Label>
          <Input
            id='currentpswd'
            type='password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='newpswd'>Новый пароль</Label>
          <Input
            id='newpswd'
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='confirmpswd'>Подтверждение пароля</Label>
          <Input
            id='confirmpswd'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Сохранить изменения</Button>
      </CardFooter>
    </Card>
  );
}
