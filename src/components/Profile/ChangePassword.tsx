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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const [isPasswordInputStarted, setIsPasswordInputStarted] = useState(false);

  useEffect(() => {
    setIsLengthValid(newPassword.length >= 8);
    setHasUpperCase(/[A-ZА-Я]/.test(newPassword));
    setHasLowerCase(/[a-zа-я]/.test(newPassword));
    setHasNumber(/\d/.test(newPassword));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(newPassword));
  }, [newPassword]);

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    if (!isPasswordInputStarted) {
      setIsPasswordInputStarted(true);
    }
  };

  const handleFocus = () => {
    if (!isPasswordInputStarted) {
      setIsPasswordInputStarted(true);
    }
  };

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      toast.error('Новые пароли не совпадают!');
      return;
    }

    if (!isLengthValid || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      toast.error('Пароль не соответствует всем требованиям!');
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
            onChange={handleNewPasswordChange}
            onFocus={handleFocus}
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
        {isPasswordInputStarted && (
          <div className='mt-4'>
            <p>Пароль должен соответствовать следующим требованиям:</p>
            <ul className='list-disc ml-5 mt-2'>
              <li className='flex items-center'>
                {isLengthValid ? '✔️' : '❌'} Минимум 8 символов
              </li>
              <li className='flex items-center'>
                {hasUpperCase ? '✔️' : '❌'} Содержит заглавную букву
              </li>
              <li className='flex items-center'>
                {hasLowerCase ? '✔️' : '❌'} Содержит строчную букву
              </li>
              <li className='flex items-center'>
                {hasNumber ? '✔️' : '❌'} Содержит цифру
              </li>
              <li className='flex items-center'>
                {hasSpecialChar ? '✔️' : '❌'} Содержит специальный символ (например, !@#$%^&*)
              </li>
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Сохранить изменения</Button>
      </CardFooter>
    </Card>
  );
}
