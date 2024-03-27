import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from '@formkit/tempo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FormVanilla from '@/components/FormVanilla';
import Greeting from '@/components/Greeting';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface user {
  name: string;
  email: string;
  created_at: string;
  role: string;
  avatar: string;
}

export default function Profile() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
          'http://localhost:8000/api/avatar/upload',
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        'http://localhost:8000/api/avatar/delete'
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [user, setUser] = useState<user>();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
    const fetchUser = async () => {
      const user = await axios.get('http://localhost:8000/api/user');
      setUser(user.data);
      // console.log();
    };
    fetchUser();
  }, []);

  return (
    <>
      <div className='py-4'>
        {user && (
          <h1 className='font-bold text-someblack text-3xl px-8 text-center md:text-left dark:text-white'>
            <Greeting /> {user?.name}!
          </h1>
        )}{' '}
        {!user && <Skeleton className='h-[20px] w-[250px] rounded-xl' />}
        <div className='md:grid grid-cols-2 min-h-screen'>
          <div className=''>
            <div className='py-5 px-8 text-left'>
              {user && (
                <div className='flex flex-col items-center md:flex-row '>
                  <Avatar>
                    <AvatarImage
                      src={
                        user.avatar
                          ? `http://localhost:8000/storage/${user.avatar}`
                          : 'public/12231231.jpg'
                      }
                      alt='User Avatar'
                    />
                    <AvatarFallback>None</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col md:pl-6 text-md text-someblack text-lg'>
                    <p className='font-medium dark:text-white'>
                      Почта: <b> {user.email}</b>
                    </p>
                    <p className='font-medium dark:text-white'>
                      Роль: <b>{user.role}</b>
                    </p>
                    <p className='font-medium dark:text-white'>
                      Аккаунт создан:{' '}
                      <b>{format(user.created_at, { date: 'medium' })}</b>
                    </p>
                    <div className='flex flex-col'>
                      <Input
                        type='file'
                        className='text-white mt-2'
                        onChange={handleFileChange}
                      ></Input>
                      <div className='flex flex-row justify-between mt-6'>
                        <Button onClick={handleDelete} className='w-32 flex'>
                          Удалить
                        </Button>
                        <Button onClick={handleUpload} className='w-32 flex '>
                          Обновить
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {!user && <Skeleton className='h-[80px] w-[250px] rounded-xl' />}
            </div>
            <div className='p-8 flex flex-wrap gap-1.5'>
              <Button className='w-full md:w-fit'>Смена пароля</Button>
              <Button className='w-full md:w-fit'>Активация промокода</Button>
              <Button className='w-full md:w-fit'>Подтверждение почты</Button>
              <Button className='w-full md:w-fit'>
                Двухэтапная аутентификация
              </Button>
              <Button className='w-full md:w-fit'>Персонализация</Button>
              <FormVanilla />
            </div>
          </div>
          <div className='p-10 md:mx-16 text-iney'>
            <div className='text-center w-full bg-slate-500 mb-2 p-10 rounded-lg duration-500 hover:scale-110'>
              <p>Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, alias!
              </p>
            </div>
            <div className='text-center w-full bg-slate-900 p-10 rounded-lg duration-500 hover:scale-110'>
              <p>Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, saepe lore!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
