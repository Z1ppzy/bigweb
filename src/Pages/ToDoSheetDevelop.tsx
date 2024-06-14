export default function ToDoSheetDevelop() {
  return (
    <div>
      <h1 className='text-center font-bold text-2xl md:text-4xl border-b-4 border-purple-700'>
        Список заданий
      </h1>
      <div className='flex md:flex-row flex-col px-4 gap-4'>
        <div>
          <h1 className='text-center font-semibold'>Предстоящие задачи</h1>
          <p className='bg-slate-400 rounded-xl p-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            magni fugit totam earum at deserunt maxime provident, molestiae nisi
            impedit.
          </p>
        </div>
        <div>
          <h1 className='text-center font-semibold'>Задачи в процессе</h1>
          <p className='bg-slate-400 rounded-xl p-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            magni fugit totam earum at deserunt maxime provident, molestiae nisi
            impedit.
          </p>
        </div>
        <div>
          <h1 className='text-center font-semibold'>Завершенные задачи</h1>
          <p className='bg-slate-400 rounded-xl p-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            magni fugit totam earum at deserunt maxime provident, molestiae nisi
            impedit.
          </p>
        </div>
      </div>
    </div>
  );
}
