import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-col justify-center text-center items-center h-screen px-10'>
      <form className='md:w-96 md:h-96 flex flex-col gap-2 font-light text-base'>
        <h1 className='font-bold text-2xl'>Забыли пароль?</h1>
        <Label htmlFor='email'>
          Пожалуйста, введите ваш адрес электронной почты, чтобы мы могли
          отправить вам дальнейшие инструкции по сбросу пароля.
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          value={email}
          placeholder='example@mail.ru'
          onChange={handleEmailChange}
        />
        <p>
          Если у вас возникли проблемы, <Link to='/contactus' className='text-purple-800'>свяжитесь с нами</Link> или
          посетите наши <span className='text-purple-800'>социальные сети</span>.
        </p>
        <Button>Отправить</Button>
      </form>
      <ToastContainer />
    </div>
  );
}
