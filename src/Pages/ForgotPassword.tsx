import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Label } from '@radix-ui/react-label';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    // validation 
    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email) {
      toast.error('Пожалуйста, введите ваш email.');
    } else if (!validateEmail(email)) {
      toast.error('Неверный формат email.');
    } else {
      toast.success('Инструкции по сбросу пароля отправлены.');
      // logic for ForgotPassword
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div className='flex flex-col items-center mt-52 text-center mx-10 h-screen'>
      <ToastContainer />
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
        <h1 className='font-medium text-2xl'>Забыли пароль?</h1>
        <div>
          <Label htmlFor='email'>
            Пожалуйста, введите ваш адрес электронной почты, чтобы мы могли
            отправить вам дальнейшие инструкции по сбросу пароля.
          </Label>
        </div>
        <div>
          <Input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            placeholder='example@mail.ru'
            value={email}
            onChange={handleEmailChange}
            className='w-60 md:w-72'
          />
        </div>
        <div>
          <Button type="submit">Отправить</Button>
        </div>
      </form>
    </div>
  );
}
