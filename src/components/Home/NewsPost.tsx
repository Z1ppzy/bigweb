import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoaderComponents from '@/components/Global/LoaderComponents';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface NewsItem {
  id: number;
  image_path: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + '/api/news')
      .then((response) => {
        const sortedNews = response.data.news.sort(
          (a: NewsItem, b: NewsItem) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setNews(sortedNews);
        setLoading(false);
      })
      .catch(() => {
        setError('Ошибка при загрузке новостей');
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const currentNews = news.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }) +
      ' в ' +
      date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      })
    );
  };

  if (loading) {
    return <LoaderComponents />;
  }

  if (error) {
    return (
      <p className='font-bold text-xl text-center p-20'>
        Ошибка при загрузке новостей!!!
      </p>
    );
  }

  return (
    <div className='w-full flex flex-wrap gap-6 px-4 md:px-10'>
      <h1 className='font-bold text-xl font-Welcome w-full md:text-left'>
        Новости проекта
      </h1>
      {currentNews.length > 0 ? (
        currentNews.map((newsItem: NewsItem) => (
          <div
            key={newsItem.id}
            className='flex flex-col md:flex-row w-full h-auto md:h-[300px]'
          >
            <div className='flex-shrink-0'>
              <img
                className='w-full md:w-[500px] h-[270px] rounded-xl object-cover'
                src={`${import.meta.env.VITE_BACKEND_URL}${
                  newsItem.image_path
                }`}
                alt={newsItem.title}
              />
              <p className='text-gray-500 text-center md:text-left'>
                {formatDate(newsItem.created_at)}
              </p>
            </div>
            <div className='md:w-[600px] p-4 md:pl-10'>
              <h1 className='text-center md:text-left font-extrabold'>
                {newsItem.title}
              </h1>
              <p className='font-Welcome px-2 md:px-5'>{newsItem.content}</p>
            </div>
          </div>
        ))
      ) : (
        <div className='w-full h-full flex justify-center items-center'>
          <p className='font-bold text-xl'>Нет доступных новостей!!!</p>
        </div>
      )}

      <div className='w-full flex justify-center mt-4'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
