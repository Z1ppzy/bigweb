import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { format } from '@formkit/tempo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface user {
  name: string;
  email: string;
  created_at: string;
  role: string;
}

export default function AdminDashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
    const fetchUser = async () => {
      const user = await axios.get('http://localhost:8000/api/user');
      if (user.data.role == 'player') {
        navigate('/');
      }
    };
    fetchUser();
  }, []);
  const [name, setName] = useState('');
  const [user, setUser] = useState<user | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/search`,
        { params: { name } }
      );
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
    <>
      <div className=''>
        <h1
          className='text-center font-bold text-2xl mx-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-purple-500'
          style={{ borderBottom: '3px solid', borderColor: '#6b46c1' }}
        >
          Панель управления-админа
        </h1>
        <div className='flex flex-wrap md:grid grid-cols-3 p-10 gap-5 justify-center'>
          <div className='flex flex-col items-center'>
            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle>Создание новостного поста</CardTitle>
                <CardDescription>
                  Сделать пост в пару слов и один клик :)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className='grid w-full items-center gap-4'>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='name'>Заголовок</Label>
                      <Input id='text' placeholder='Название новости' />
                      <Label htmlFor='text'>Содержимое новости</Label>
                      <Textarea
                      />
                      <Input type='file' className='' />
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='framework'>Вид новости</Label>
                      <Select>
                        <SelectTrigger id='framework'>
                          <SelectValue placeholder='Выбрать'/>
                        </SelectTrigger>
                        <SelectContent position='popper'>
                          <SelectItem value='next'>Ивент</SelectItem>
                          <SelectItem value='sveltekit'>Новость</SelectItem>
                          <SelectItem value='astro'>Обновление</SelectItem>
                          <SelectItem value='nuxt'>
                            Технические работы
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className='flex justify-center'>
                <Button>Опубликовать</Button>
              </CardFooter>
            </Card>
          </div>
          <div className='flex flex-col items-center '>
            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle>Поиск игрока по нику</CardTitle>
                <CardDescription>
                  Найди своего любимого игрока в один клик :)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className='grid w-full items-center gap-4'>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='name'>Никнейм</Label>
                      <Input
                        placeholder='Ник игрока'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col space-y-1.5 text-left'>
                      <h1 className='font-bold'>Найденный игрок:</h1>
                      {notFound && <div>Пользователь не найден</div>}
                      {user && (
                        <div>
                          <p>Имя: {user.name}</p>
                          <p>Email: {user.email}</p>
                          <div>
                            <p>
                              Дата создания:{' '}
                              {format(user.created_at, { date: 'long' })}
                            </p>
                          </div>
                          <p>Роль: {user.role}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className='flex justify-center'>
                <Button onClick={handleSearch}>Найти</Button>
              </CardFooter>
            </Card>
          </div>
          <div className='flex flex-col items-center'>
            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle>Изменить роль</CardTitle>
                <CardDescription>
                  Сделать в один клик игрока бомжем или админом :)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className='grid w-full items-center gap-4'>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='name'>Никнейм</Label>
                      <Input id='name' placeholder='Ник игрока' />
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='framework'>Роль</Label>
                      <Select>
                        <SelectTrigger id='framework'>
                          <SelectValue placeholder='Выбрать' />
                        </SelectTrigger>
                        <SelectContent position='popper'>
                          <SelectItem value='next'>Next.js</SelectItem>
                          <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                          <SelectItem value='astro'>Astro</SelectItem>
                          <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button variant='outline'>Проверить</Button>
                <Button>Готово</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
