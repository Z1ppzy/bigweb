export default function VotingList() {
  const votingSites = [
    {
      name: 'MinecraftZ',
      url: 'https://minecraftrating.ru/server/heavenlyweiner/',
      desctription: 'abobasososa',
    },
    {
      name: 'MinecraftS',
      url: 'https://minecraftrating.ru/server/heavenlyweiner/',
      desctription: 'abobasosa',
    },
    {
      name: 'MinecraftB',
      url: 'https://minecraftrating.ru/server/heavenlyweiner/',
      desctription: 'abobasososa',
    },
  ];
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {votingSites.map((site, index) => (
            <div
              key={index}
              className='p-4  text-center border rounded-lg shadow-md w-64 h-64'
            >
              <a
                href={site.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline'
              >
                {site.name}
              </a>
              <p>{site.desctription}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
