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
import { useEffect } from 'react';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
const formSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Ваш логин должен содержать 5 символов' })
    .max(50),
  password: z
    .string()
    .min(6, { message: 'Ваш пароль должен содержать 6 символов' })
    .max(50),
});

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/profile');
    }
  }, []);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');

      const res = await axios.post('http://localhost:8000/login', body, config);
      navigate('/profile');
      localStorage.setItem('authToken', res.data.token);
    } catch (err) {}
  }

  return (
    <div className='w-96 m-auto h-screen'>
      <Link to='/'>
        <img src='logo.png' className='float-end animate-bounce  duration-1000' alt='' />
      </Link>
      <p className='text-center mt-10 mb-16 font-bold text-2xl'>
        Войти в учетную запись HW
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mx-7'>
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
                    {...field}
                  />
                </FormControl>
                <FormDescription>Введите адрес электронной почты, который использовали при регистрации </FormDescription>
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
            <Checkbox id='terms' />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Запомнить вход с этого устройства
            </label>
          </div>

          <Button type='submit'>Войти</Button>
        </form>
      </Form>
      <p className='text-center'>
        <Link to='/forgot_password' className='hover:text-purple-800'>
          Забыли пароль?
        </Link>
      </p>
    </div>
  );
}
