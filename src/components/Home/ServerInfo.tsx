export default function ServerInfo() {
  return (
    <>
      <h1 className='mt-8 text-3xl md:text-4xl text-center md:text-left px-10 font-Welcome'>Наши сервера</h1>
      <div className='md:grid grid-cols-2 mt-10 md:px-10 px-4 gap-20'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-left text-2xl'>Semi-Classic</h1>
          <p className='bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 py-0.5 px-20 w-fit rounded-lg'></p>
          <div className='flex-1'>
            <p className='font-light text-left mt-4 indent-2'>
              Мы стремимся создать атмосферу, близкую к классическому выживанию
              в Minecraft.Здесь установлен только небольшой набор плагинов,
              чтобы сохранить ощущение ванильной игры. Одним из интересных
              аспектов нашего сервера является наличие элементов бартера. Вы
              сможете взаимодействовать с другими игроками, предлагая им свои
              ресурсы и предметы в обмен на нужные вам материалы. Это позволяет
              развивать экономику на сервере и стимулирует взаимодействие между
              игроками.
            </p>
          </div>
          <div className='w-full md:h-52'>
            <img
              src='/survival-minigames-image.jpg'
              className='rounded-tr-3xl rounded-bl-3xl w-full h-auto md:h-52 object-cover mt-4'
            />
          </div>
        </div>
        <div className='flex flex-col mt-6 md:mt-0'>
          <h1 className='font-bold text-left text-2xl'>Survival</h1>
          <p className='bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 py-0.5 px-20 w-fit rounded-lg'></p>
          <div className='flex-1'>
            <p className='font-light text-left mt-4 indent-2 '>
              На нашем сервере установлен плагин Aurelium Skills, добавляющий
              прокачку вашего персонажа, углубляя ваш игровой процесс. Большие
              приваты дадут вам простор и позволят вам свободно развиваться и
              строить все, что вы запланируете, показывая свою креативность, не
              беспокоясь о внешних угрозах. Мы гордимся дружелюбным и активным
              сообществом, где вы сможете найти себе новых друзей.
            </p>
          </div>
          <div className='w-full md:h-52'>
            <img
              src='/survival-minigames-image.jpg'
              className='rounded-tr-3xl rounded-bl-3xl w-full h-auto md:h-52 object-cover mt-4'
            />
          </div>
        </div>
      </div>
    </>
  );
}
