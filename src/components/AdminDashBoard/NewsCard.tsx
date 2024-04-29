import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export const NewsCard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/api/news',
        formData
      );
      if (response.status === 201) {
        toast.success('Новость была опубликована');
      }
    } catch (error) {
      console.error('Error creating news', error);
      toast.warn('Новость не опубликована');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Создание новостного поста</CardTitle>
        <CardDescription>
          Сделать пост в пару слов и один клик :)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-2.5'>
            <Label htmlFor='title'>Заголовок</Label>
            <Input
              id='title'
              autoComplete='off'
              placeholder='Название новости'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Label htmlFor='content'>Содержимое новости</Label>
            <Textarea
              id='content'
              placeholder='Содержимое новости'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Label htmlFor='file'>Изображение новости</Label>
            <Input type='file' onChange={handleFileChange} />
          </div>
          <Button type='submit' className='mt-4'>
            Опубликовать
          </Button>
        </form>
      </CardContent>
      <CardFooter />
    </Card>
  );
};
