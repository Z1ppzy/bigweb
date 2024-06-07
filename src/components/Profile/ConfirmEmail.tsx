import { useState } from 'react';
import axios from 'axios';
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

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error('Введите почту');
    } else if (!validateEmail(email)) {
      toast.error('Введите действительную почту');
    } else {
      try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/send-verification-email', { email });

        if (response.status === 200) {
          toast.success('Письмо с дальнейшими инструкциями было отправлено на вашу почту');
        } else {
          toast.error('Ошибка при отправке письма');
        }
      } catch (error) {
        toast.error('Произошла ошибка');
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Card>
        <CardHeader>
          <CardTitle>Подтвердить электронную почту</CardTitle>
          <CardDescription>
            Введите актуальную почту для получения письма с подтверждением.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Введите актуальную почту</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.ru"
              autoComplete="email"
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
