import React, { useState } from 'react';
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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ConfirmEmail() {
  const [email, setEmail] = useState('');

  const validateEmail = (email: String) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (!email) {
      toast.error('Введите почту');
    } else if (!validateEmail(email)) {
      toast.error('Введите действительную почту');
    } else {
      toast.success('Дальнейшие действия были отправлены в письме');
    }
  };

  return (
    <div>
      <ToastContainer />
      <Card>
        <CardHeader>
          <CardTitle>Подтвердить электронную почту</CardTitle>
          <CardDescription>
            Введите определенное слово, которое даст вам небольшой бонус на нашем сервере :)
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <div className='space-y-1'>
            <Label htmlFor='email'>Введите актуальную почту</Label>
            <Input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Подтвердить почту</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
