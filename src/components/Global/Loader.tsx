export default function Loader() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='relative'>
        <div className='w-32 h-32 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin'></div>
        <div className='w-24 h-24 border-t-4 border-b-4 border-green-500 rounded-full animate-spin absolute top-4 left-4'></div>
        <div className='w-16 h-16 border-t-4 border-b-4 border-red-500 rounded-full animate-spin absolute top-8 left-8'></div>
        <span className='absolute inset-0 flex items-center justify-center text-xl font-bold'>
          Загрузка...
        </span>
      </div>
    </div>
  );
}
