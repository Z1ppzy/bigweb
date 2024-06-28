interface Server {
  name: string;
  description: string;
  imgSrc: string;
}

const servers: Server[] = [
  {
    name: 'Semi-Classic',
    description: `Мы стремимся создать атмосферу, близкую к классическому выживанию
    в Minecraft.Здесь установлен только небольшой набор плагинов,
    чтобы сохранить ощущение ванильной игры. Одним из интересных
    аспектов нашего сервера является наличие элементов бартера. Вы
    сможете взаимодействовать с другими игроками, предлагая им свои
    ресурсы и предметы в обмен на нужные вам материалы. Это позволяет
    развивать экономику на сервере и стимулирует взаимодействие между
    игроками.`,
    imgSrc: '/semi-classic.png',
  },
  {
    name: 'Survival',
    description: `На нашем сервере установлен плагин Aurelium Skills, добавляющий
    прокачку вашего персонажа, углубляя ваш игровой процесс. Большие
    приваты дадут вам простор и позволят вам свободно развиваться и
    строить все, что вы запланируете, показывая свою креативность, не
    беспокоясь о внешних угрозах. Мы гордимся дружелюбным и активным
    сообществом, где вы сможете найти себе новых друзей.`,
    imgSrc: '/survival-minigames-image.jpg',
  },
  {
    name: 'Politic',
    description: `На нашем сервере установлен плагин Towny, который позволяет вам
    развивать свои города и вести политическую деятельность в Minecraft.
    Вы можете заниматься квестами, покорять карту реального мира и даже
    взаимодействовать с другими игроками на новом уровне. Наш сервер
    предлагает вам стать диктатором, дружелюбным королём или обычным
    гражданином, создавая уникальный опыт игры.`,
    imgSrc: '/Politic.png',
  },
];

export default function ServerInfo() {
  return (
    <>
      <h1 className='mt-8 md:mt-28 text-3xl md:text-4xl text-center md:text-left px-10 font-Welcome'>
        Наши сервера
      </h1>
      <div className='md:grid grid-cols-2 mt-10 md:px-10 px-4 gap-20'>
        {servers.map((server, index) => (
          <div key={index} className='flex flex-col mt-6 md:mt-0'>
            <h1 className='font-bold text-left text-2xl'>{server.name}</h1>
            <p className='bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 py-0.5 px-20 w-fit rounded-lg'></p>
            <div className='flex-1'>
              <p className='text-sm md:text-lg text-left mt-4 indent-2 '>
                {server.description}
              </p>
            </div>
            <div className='w-full md:h-52'>
              <img
                src={server.imgSrc}
                className='rounded-tr-3xl rounded-bl-3xl w-full h-auto md:h-52 object-cover mt-4'
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
