import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');

    }
  }, []);

  return (
    <>
      <div className='py-10 mt-20 h-screen flex flex-col gap-10 justify-center items-center md:flex-row bg-slate-200'>
        <div className='w-80 h-80 bg-white text-center flex flex-col justify-center text-4xl'>1</div>
        <div className='w-80 h-80 bg-white text-center flex flex-col justify-center text-4xl'>2</div>
        <div className='w-80 h-80 bg-white text-center flex flex-col justify-center text-4xl'>3</div>
      </div>
    </>
  );
}
