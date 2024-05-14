import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface User {
  name: string;
  email: string;
  created_at: string;
  role: string;
  avatar: string;
}

export function ChangeAvatar() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [user, setUser] = useState<User>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);

      try {
        const response = await axios.post(
          import.meta.env.VITE_BACKEND_URL + '/api/avatar/upload',
          formData
        );
        console.log(response.data);
        toast.success('Аватар успешно обновлен!');
        const fetchedUser = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/api/user'
        );
        setUser(fetchedUser.data);
      } catch (error) {
        console.error(error);
        toast.error('Ошибка при обновлении аватара.');
      }
    } else {
      toast.warn('Вы не выбрали файл!');
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/api/user'
      );
      setUser(fetchedUser.data);
    };
    fetchUser();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_BACKEND_URL + '/api/avatar/delete'
      );
      console.log(response.data);
      toast.success('Аватар успешно удален!');
      const fetchedUser = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/api/user'
      );
      setUser(fetchedUser.data);
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при удалении аватара.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Смена аватара профиля</CardTitle>
        <CardDescription>
          Внесите изменения вашей аватарки здесь. Нажмите "Обновить", когда закончите. Если аватар не нравится нажмите "Удалить".
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='flex flex-col'>
          <Input
            type='file'
            className='text-white mt-2'
            onChange={handleFileChange}
          ></Input>
          <div className='flex flex-row justify-between mt-6'>
            <Button
              onClick={handleDelete}
              className='w-32 flex'
              variant={'destructive'}
            >
              Удалить
            </Button>
            <Button onClick={handleUpload} className='w-32 flex '>
              Обновить
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}