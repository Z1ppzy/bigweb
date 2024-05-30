import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoaderComponents from '@/components/Global/LoaderComponents';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

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

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const currentNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
      <h1 className='font-bold text-xl font-Welcome w-full'>Новости нашего проекта</h1>
      {currentNews.length > 0 ? (
        currentNews.map((newsItem: NewsItem) => (
          <div key={newsItem.id} className='flex w-full h-[300px]'>
            <div>
              <img
                className='w-96 h-[250px] rounded-xl'
                src={`${import.meta.env.VITE_BACKEND_URL}${newsItem.image_path}`}
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

      <div className='w-full flex justify-center mt-4'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} />
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
              <PaginationNext  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default NewsPost;
