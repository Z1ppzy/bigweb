import { useState } from 'react';
import axios from 'axios';
import { format } from '@formkit/tempo';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


interface User {
  name: string;
  email: string;
  created_at: string;
  role: string;
}

export const PlayerSearchCard = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [notFound, setNotFound] = useState(false);
 
  const handleSearch = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/users/search', { params: { name } });
      if (response.data) {
        setUser(response.data);
        setNotFound(false);
      } else {
        setUser(null);
        setNotFound(true);
      }
    } catch (error) {
      console.error('Ошибка при поиске пользователя', error);
      setUser(null);
      setNotFound(true);
    }
  };

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Поиск игрока по нику</CardTitle>
        <CardDescription>Найди своего любимого игрока в один клик :)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col space-y-2.5'>
          <Label htmlFor='name'>Никнейм</Label>
          <Input
            id='name'
            placeholder='Ник игрока'
            autoComplete='off'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {notFound && (
            <p className='text-center font-medium'>Пользователь не найден</p>
          )}
          {user && (
            <div>
              <h1 className='font-medium text-lg'>Найденный игрок:</h1>
              <div className='font-medium text-sm'>
                <p>Имя: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Дата создания: {format(user.created_at, { date: 'long' })}</p>
                <p>Роль: {user.role}</p>
              </div>
            </div>
          )}
        </div>
        <Button onClick={handleSearch} className='mt-4'>Найти</Button>
      </CardContent>
      <CardFooter />
    </Card>
  );
};
