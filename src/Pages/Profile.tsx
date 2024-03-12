import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
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
    toast.success('Пароль был успешно изменен!', {
      position: 'top-right',
      autoClose: 2500,
      transition: Slide,
    });
  };

  const handleButtonClick2 = () => {
    toast.success('Почта была успешно изменена!', {
      position: 'top-right',
      autoClose: 2500,
      transition: Slide,
    });
  };
  const handleButtonClick3 = () => {
    toast.warn('Вы были перенаправлены на qr-code', {
      position: 'top-right',
      autoClose: 2500,
      transition: Slide,
    });
  };

  return (
    <>
      <div className='py-10 mt-20 h-screen flex flex-col gap-10 justify-center items-center md:flex-row bg-slate-200'>
        <div className='w-80 h-80 bg-white flex flex-col '>
          <p className='p-4 justify-start text-xl'>Change Password</p>
          <div className='flex flex-col items-center gap-5'>
            <input
              type='password'
              placeholder='oldPassword'
              className='px-1 w-60 h-10 border-2 rounded-md border-footer focus:border-purple-700 focus:outline-none'
            />
            <input
              type='password'
              autoComplete='new-password'
              placeholder='newPassword'
              className='px-1 w-60 h-10 border-2 rounded-md border-footer focus:border-purple-700 focus:outline-none'
            />
            <input
              type='password'
              autoComplete='off'
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

        <div className='w-80 h-80 bg-white flex flex-col '>
          <p className='p-4 justify-start text-xl'>Change Email Address</p>
          <div className='flex flex-col items-center gap-5'>
            <input
              type='email'
              autoComplete='email'
              placeholder='oldEmail'
              className='px-1 w-60 h-10 border-2 rounded-md border-footer focus:border-purple-700 focus:outline-none'
            />
            <input
              type='email'
              autoComplete='off'
              placeholder='newEmail'
              className='px-1 w-60 h-10 border-2 rounded-md border-footer focus:border-purple-700 focus:outline-none'
            />
            <button
              onClick={handleButtonClick2}
              className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-10 py-2 rounded-xl mb-5'
            >
              Confirm
            </button>
          </div>
        </div>
        <div className='w-80 h-80 bg-white flex flex-col '>
          <p className='p-4 justify-start text-xl'>Two Factor Authentication</p>
          <div className='flex flex-col items-center'>
            <button
              onClick={handleButtonClick3}
              className='bg-green-500 text-white px-10 py-2 rounded-xl mb-5'
            >
              Confirm
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
