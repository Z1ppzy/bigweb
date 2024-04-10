export default function ServerInfo() {
  return (
    <div>
      <div className='md:grid grid-cols-2'>
        <div className='px-10'>
          <h1 className='font-bold text-left text-2xl'>Semi-Classic</h1>
          <p className='bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 py-0.5 px-20 w-fit rounded-lg'></p>
          <p className='font-extralight text-center mt-4'>
            Мы стремимся создать атмосферу, близкую к классическому выживанию в
            Minecraft.Здесь установлен только небольшой набор
            плагинов, чтобы сохранить ощущение ванильной игры. Одним из
            интересных аспектов нашего сервера является наличие элементов
            бартера. Вы сможете взаимодействовать с другими игроками, предлагая
            им свои ресурсы и предметы в обмен на нужные вам материалы. Это
            позволяет развивать экономику на сервере и стимулирует
            взаимодействие между игроками.
          </p>
          <img src='/semi-classic.png' className='scale-75 rounded-xl' />
        </div>
        <div className='px-10'>
          <h1 className='font-bold text-left text-2xl'>Survival</h1>
          <p className='bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 py-0.5 px-20 w-fit rounded-lg'></p>
          <p className='font-extralight text-center mt-4'>
            На нашем сервере установлен плагин Aurelium Skills, добавляющий
            прокачку вашего персонажа, углубляя ваш игровой процесс. Большие
            приваты дадут вам простор и позволят вам свободно развиваться и
            строить все, что вы запланируете, показывая свою креативность, не
            беспокоясь о внешних угрозах. Мы гордимся дружелюбным и активным
            сообществом, где вы сможете найти себе новых друзей.
          </p>
          <img src='/survival-minigames-image.jpg' className='scale-75 rounded-xl' />
        </div>
      </div>
    </div>
  );
}
