import background from '@/assets/slide2.png';

export default function Rules() {
  return (
    <div>
      <div className='relative'>
        <img src={background} className='object-cover w-full h-96' alt='' />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-center text-white'>
          Соблюдайте правила сервера
        </h1>
      </div>
      <div className='p-10 '>
        <h1 className='font-bold text-2xl'>Правила</h1>
        <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-20 w-fit rounded-lg'></p>
      </div>
      <div className='px-10'>
        <h1 className='font-bold text-xl'>1 Общее положение правил</h1>
        <ul className='font-normal pl-3 space-y-1'>
          <li>
            <strong>1.1</strong> Незнание правил не освобождают от
            ответственности
          </li>
          <li>
            <strong>1.2</strong> Если вы хотите заявить о нарушении, то стоит
            обратится в специальный канал
          </li>
          <li>
            <strong>1.3</strong> Ложные обращения могут нести наказание
          </li>
          <li>
            <strong>1.4</strong> Администрация в праве выдать вам наказание, в
            случае если подобного правила нет в списке и если администрация
            считает, что ваши действия могут нанести, наносят или уже нанесли
            вред проекту
          </li>
          <li>
            <strong>1.5</strong> Данные правила проекта распространяются как на
            внутриигровой сервер Minecraft, так и на сервер Discord
          </li>
          <li>
            <strong>1.6</strong> Наказание может быть снято с виновного в случае
            хорошего поведения или по пришествию определенного кол-во времени
            без дополнительных инцидентов. Подобная процедура названа
            “Амнистия”. Для её получения стоит обратится в канал
            #прошение-о-разбане
          </li>
          <li>
            <strong>1.7</strong> Участники проекта обязаны сообщить о нарушении,
            в противном случае факт умалчивания будет рассчитан как соучастие в
            нарушении
          </li>
        </ul>
        <h1 className='font-bold text-xl mt-2'>2 Администрация проекта</h1>
        <ul className='font-normal pl-3 space-y-1'>
          <li>
            <strong>2.1</strong> Администрация и модерация проекта может сама определять тяжесть
            и тип нарушения и также на основе своего мнения выносить приговор
          </li>
          <li>
           <strong>2.2</strong> Модераторы сервера являются такими же игроками, как и все
            остальные участники проекта. Они не могут использовать команды для
            получения предметов или получения преимущества над другими игроками.
            Модераторы и помощники также обязаны соблюдать правила
          </li>
          <li>
            <strong>2.3</strong> Просьба обращаться к администрации с уважением и описывать свои
            мысли без лишних эмоций и капса. Администрация является
            русскоязычной, из чего следует просьба обращаться на доступном для
            понимания языке
          </li>
          <li>
            <strong>2.4</strong> Администрация проекта не помогает игрокам с развитием и не
            вмешивается в их игровой процесс с целью помощи в развитии. Просьбы
            помощи в предоставлении какой-либо привилегии или внутриигрового
            предмета могут нести наказание
          </li>
          <li><strong>2.5</strong> Попытка обмана администрации строго наказуема</li>
          <li>
            <strong>2.6</strong> Модерации проекта запрещено злоупотреблять своими полномочиями и
            выдавать ложные наказания. Правила распространяются и на модерацию
          </li>
          <li>
            <strong>2.7</strong> Администрация в праве игнорировать ваши личные сообщения, в
            случае если в них не вложено никакой ценной информации. Просьба
            сообщать о своих проблемах одним большим сообщением, высказывая как
            можно больше ценной информации. Сообщения состоящие из одного слова
            (Прим.: "Привет", "Ответь") - игнорируются автоматически
          </li>
          <li>
            <strong>2.8</strong> Администрацию и модерацию не стоит торопить с принятием решения
            по какому-либо поводу. В случае несоблюдения может последовать
            наказание
          </li>
        </ul>
      </div>
    </div>
  );
}
