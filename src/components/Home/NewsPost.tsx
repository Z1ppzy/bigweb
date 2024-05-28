import React from 'react';

interface NewsItem {
  image: string;
  title: string;
  content: string;
}

interface NewsPostProps {
  news: NewsItem[];
}

const NewsPost: React.FC<NewsPostProps> = ({ news }) => {
  return (
    <div className='w-full h-[300px] flex'>
      {news.length > 0 ? (
        news.map((newsItem: NewsItem, index: number) => (
          <div key={index} className='flex w-full h-full'>
            <div>
              <img
                className='w-96 h-full'
                src={newsItem.image}
                alt={newsItem.title}
              />
            </div>
            <div className='w-[300px]'>
              <h1>{newsItem.title}</h1>
              <p>{newsItem.content}</p>
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

const news: NewsItem[] = [
  {
    image: '/background2.jpg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rerum.',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis asperiores quaerat possimus molestiae quisquam dolore, quas voluptates. ',
  },
];

const App: React.FC = () => {
  return <NewsPost news={news} />;
};

export default App;
