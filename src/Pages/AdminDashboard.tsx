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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [type, setType] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    // formData.append('type', type);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/news',
        formData
      );
      if (response.status === 201) {
        alert('News created successfully');
      }
    } catch (error) {
      console.error('Error creating news', error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };
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
          className='p-6 text-center md:text-left font-bold text-2xl mx-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-purple-500'
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
                <form onSubmit={handleSubmit}>
                  <div className='grid w-full items-center gap-4'>
                    <div className='flex flex-col space-y-2.5'>
                      <Label htmlFor='name'>Заголовок</Label>
                      <Input
                        id='text'
                        autoComplete='off'
                        placeholder='Название новости'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <Label htmlFor='text'>Содержимое новости</Label>
                      <Textarea
                        placeholder='Содержимое новости'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                      <Label htmlFor='file'>Изображение новости</Label>
                      <Input type='file' onChange={handleFileChange} />
                    </div>
                    {/* <div className='flex flex-col space-y-2.5'>
                      <Label htmlFor='framework'>Вид новости</Label>
                      <Select>
                        <SelectTrigger id='framework'>
                          <SelectValue placeholder='Выбрать' />
                        </SelectTrigger>
                        <SelectContent position='item-aligned'>
                          <SelectItem value='event' onClick={() => setType('event')}>Ивент</SelectItem>
                          <SelectItem value='news' onClick={() => setType('news')}>Новость</SelectItem>
                          <SelectItem value='update' onClick={() => setType('update')}>Обновление</SelectItem>
                          <SelectItem value='maintenance' onClick={() => setType('maintenance')}>Технические работы</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                  </div>
                  <div className='flex flex-col items-center mt-4'>
                    <Button type='submit'>Опубликовать</Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className='flex justify-center'></CardFooter>
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
                    <div className='flex flex-col space-y-2.5'>
                      <Label htmlFor='name'>Никнейм</Label>
                      <Input
                        placeholder='Ник игрока'
                        autoComplete='off'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col space-y-2.5 text-left'>
                      {notFound && (
                        <p className='text-center'>Пользователь не найден</p>
                      )}
                      {user && (
                        <div>
                          <h1 className='font-bold'>Найденный игрок:</h1>
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
                    <div className='flex flex-col space-y-2.5'>
                      <Label htmlFor='name'>Никнейм</Label>
                      <Input
                        id='name'
                        autoComplete='off'
                        placeholder='Ник игрока'
                      />
                    </div>
                    <div className='flex flex-col space-y-2.5'>
                      <Label htmlFor='framework'>Роль</Label>
                      <Select>
                        <SelectTrigger id='framework'>
                          <SelectValue placeholder='Выбрать' />
                        </SelectTrigger>
                        <SelectContent position='popper'>
                          <SelectItem value='Avenger'>Avenger</SelectItem>
                          <SelectItem value='Elder'>Elder</SelectItem>
                          <SelectItem value='Enigma'>Enigma</SelectItem>
                          <SelectItem value='Phantom'>Phantom</SelectItem>
                          <SelectItem value='Sponsor'>Sponsor</SelectItem>
                          <SelectItem value='Arcane'>Arcane</SelectItem>
                          <SelectItem value='Legend'>Legend</SelectItem>
                          <SelectItem value='Titan'>Titan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className='flex justify-between mt-6'>
                    <Button variant='outline'>Проверить</Button>
                    <Button>Готово</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
