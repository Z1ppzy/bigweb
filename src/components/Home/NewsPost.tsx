import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoaderComponents from '@/components/Global/LoaderComponents';

interface NewsItem {
  id: number;
  image_path: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const NewsPost: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + '/api/news')
      .then((response) => {
        setNews(response.data.news);
        setLoading(false);
      })
      .catch(() => {
        setError('Ошибка при загрузке новостей');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
       <LoaderComponents /> 
      </>
    );
  }

  if (error) {
    return <p className='font-bold text-xl text-center p-20'>Ошибка при загрузке новостей!!!</p>;
  }

  return (
    <div className='w-full flex flex-wrap gap-6 px-10'>
      <h1 className='font-bold text-xl font-Welcome'>Новости нашего проекта</h1>
      {news ? (
        news.map((newsItem: NewsItem, index: number) => (
          <div key={index} className='flex w-full h-[300px]'>
            <div>
              <img
                className='w-96 h-full rounded-xl'
                src={`${import.meta.env.VITE_BACKEND_URL}${
                  newsItem.image_path
                }`}
                alt={newsItem.title}
              />
            </div>
            <div className='w-[400px] p-10'>
              <h1>{newsItem.title}</h1>
              <p className='font-Welcome'>{newsItem.content}</p>
            </div>
          </div>
        ))
      ) : (
        <div className='w-full h-full flex justify-center items-center'>
          <p className='font-bold text-xl'>Нет доступных новостей!!!</p>
        </div>  
      )}
    </div>
  );
};

export default NewsPost;
