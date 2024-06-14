import { FaArrowCircleRight } from 'react-icons/fa';

export default function VotingList() {
  const votingSites = [
    {
      name: 'MinecraftZ',
      url: 'https://minecraftrating.ru/server/heavenlyweiner/',
      description: 'abobasososa',
    },
    {
      name: 'MinecraftS',
      url: 'https://minecraftrating.ru/server/heavenlyweiner/',
      description: 'abobasososa',
    },
    {
      name: 'MinecraftB',
      url: 'https://minecraftrating.ru/server/heavenlyweiner/',
      description: 'abobasososa',
    },
  ];
  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {votingSites.map((site, index) => (
          <div
            key={index}
            className='p-4 items-center flex flex-col justify-between text-center border rounded-lg shadow-md w-72 h-72 py-10'
          >
            <p rel='noopener noreferrer' className='text-blue-500'>
              {site.name}
            </p>
            <p>{site.description}</p>
            <a href={site.url} target='_blank'>
              <FaArrowCircleRight className='text-4xl text-blue-500 hover:scale-110 duration-500' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
