import { FaArrowCircleRight } from 'react-icons/fa';

export default function VotingList() {
  const votingSites = [
    {
      name: 'MinecraftRating',
      url: 'https://minecraftrating.ru/server/heavenlyweiner/',
      description: 'На данном сайте вы можете голосовать ежедневно и помочь серверу по его продвижению!',
    },
    {
      name: 'HotMC',
      url: 'https://hotmc.ru/vote-187743',
      description: 'На данном сайте вы можете голосовать ежедневно и помочь серверу по его продвижению!',
    },
  ];
  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        {votingSites.map((site, index) => (
          <div
            key={index}
            className='p-4 items-center flex flex-col justify-between text-center border border-slate-700 rounded-lg shadow-md w-72 h-72 md:w-96 md:h-96 py-10'
          >
            <p rel='noopener noreferrer' className='text-purple-600 text-xl'>
              {site.name}
            </p>
            <p>{site.description}</p>
            <a href={site.url} target='_blank'>
              <FaArrowCircleRight className='text-4xl md:text-6xl text-purple-600 hover:scale-110 duration-500' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}