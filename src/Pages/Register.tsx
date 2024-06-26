import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
const formSchema = z.object({
  email: z.string().email('Неккоректно указан email'),
  login: z
    .string()
    .min(5, { message: 'Ваш логин должен содержать 5 символов' })
    .max(32),
  password: z
    .string()
    .min(8, { message: 'Ваш пароль должен содержать 8 символов' })
    .max(50),
});

export default function Register() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };
      const body = JSON.stringify(values);
      await axios.get(import.meta.env.VITE_BACKEND_URL + '/sanctum/csrf-cookie');
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/register',
        body,
        config
      );
      navigate('/profile');
      console.log(res);
    } catch (err) {}
  }

  return (
    <div className='md:w-96 m-auto h-screen'>
      <Link to='/'>
        <img src='logo.png' className='float-end animate-bounce' alt='' />
      </Link>
      <p className='text-center mt-20 md:mt-10 mb-16 font-bold text-2xl'>
        Создать учетную запись HW
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mx-7'>
          <FormField
            control={form.control}
            name='login'
            render={({ field }) => (
              <FormItem>
                <FormLabel>ЛОГИН</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='Введите свой логин'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Помните, что логин должен быть удобным для вас и одновременно
                  безопасным.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Введите адрес электронной почты'
                    type='email'
                    autoComplete='email'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Не используйте адрес электронной почты, в котором указано ваше
                  реальное имя.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>ПАРОЛЬ</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    autoComplete='new-password'
                    placeholder='Введите пароль'
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex items-center space-x-2'>
            <Checkbox id='terms' required />
            <label
              htmlFor='terms'
              className='text-sm text-center font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 '
            >
              Я принимаю
              <Link to='/terms' className='hover:text-purple-800 font-medium'>
                <> Условия использования.</>
              </Link>
            </label>
          </div>
          <div className='flex justify-start'>
            <Button type='submit'>Зарегистрироваться</Button>
          </div>
        </form>
      </Form>
      <div>
        <p className='text-center font-light mt-5'>
          Уже зарегистрированы?
          <Link to='/login' className='font-medium hover:text-purple-800'>
            <> Войти</>
          </Link>
        </p>
      </div>
    </div>
  );
}
