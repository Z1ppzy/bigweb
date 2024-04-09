import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPassword() {
  return (
    <div className='flex flex-col items-center mt-52 text-center mx-10 h-screen'>
      <form action='' className='flex flex-col gap-2'>
        <div className='gap-4'>
          <h1 className='font-bold text-2xl'>Забыли пароль?</h1>
        </div>
        <div>
          <label>
            Пожалуйста, введите ваш адрес электронной почты, чтобы мы могли
            отправить вам дальнейшие инструкции по сбросу пароля.
          </label>
        </div>
        <div>
          <Input
            type='email'
            autoComplete='email'
            placeholder='example@mail.ru'
          
          />
        </div>
        <div>
          <Button title='Нажмите'>Submit</Button>
        </div>
      </form>
    </div>
  );
}
