import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, []);

  const handleButtonClick = () => {
    toast.success('Пароль был успешно изменен', {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  return (
    <>
      <div className='py-10 mt-20 h-screen flex flex-col gap-10 justify-center items-center md:flex-row bg-slate-200'>
        <div className='w-80 h-80 bg-white flex flex-col '>
          <p className='p-4 justify-start text-xl'>Change Password</p>
          <div className='flex flex-col items-center gap-5'>
            <input
              placeholder='oldPassword'
              className='px-1 w-60 h-10 border-2 rounded-md border-footer focus:border-purple-700 focus:outline-none'
            />
            <input
              placeholder='newPassword'
              className='px-1 w-60 h-10 border-2 rounded-md border-footer focus:border-purple-700 focus:outline-none'
            />
            <input
              placeholder='confirmPassword'
              className='px-1 w-60 h-10 border-2 rounded-md border-footer focus:border-purple-700 focus:outline-none'
            />
            <button
              onClick={handleButtonClick}
              className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-10 py-2 rounded-xl mb-5'
            >
              Confirm
            </button>
          </div>
        </div>
        <div className='w-80 h-80 bg-white text-center flex flex-col justify-center text-4xl'>
          Change Email Address
        </div>
        <div className='w-80 h-80 bg-white text-center flex flex-col justify-center text-4xl'>
          Two Factor Authentication
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
