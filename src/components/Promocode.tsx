import { useEffect, useState } from 'react';

export default function Promocode() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  
  return (
    <div className='fixed inset-0 flex flex-col text-center items-center justify-center bg-opacity-50 bg-gray-900'>
      <div className='rounded-xl bg-white p-32 md:p-52 flex flex-col items-center'>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, omnis.
        </h1>

        <input type='text' className='border-2 border-black rounded-xl' />
        <button className='w-fit py-1 px-6  bg-black text-white mt-2 rounded-md'>
          Подтвердить
        </button>
      </div>
    </div>
  );
}
