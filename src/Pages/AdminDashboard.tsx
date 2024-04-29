import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCheckRole from '@/hooks/useCheckRole';
import useCheckAuth from '@/hooks/useCheckAuth';
import Loader from '@/components/Global/Loader';
import RoleChangeCard from '@/components/AdminDashBoard/RoleChangeCard';
import { NewsCard } from '@/components/AdminDashBoard/NewsCard';
import { PlayerSearchCard } from '@/components/AdminDashBoard/PlayerSearchCard';


export default function AdminDashBoard() {
  const isLoadingAuth = useCheckAuth();
  const isLoadingRole = useCheckRole('admin');

  if (isLoadingAuth || isLoadingRole) {
    return <Loader />;
  }

  return (
    <>
      <div className=''>
        <h1
          className='p-6 text-center md:text-left font-bold text-2xl mx-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-purple-500'
          style={{ borderBottom: '3px solid', borderColor: '#6b46c1' }}
        >
          Панель управления-админа
        </h1>
        <div className='flex flex-wrap md:grid grid-cols-3 p-10 gap-5 justify-center'>
          <div className='flex flex-col items-center'>
           <NewsCard />
          </div>
          <div className='flex flex-col items-center '>
            <PlayerSearchCard />
          </div>
          <div className='flex flex-col items-center'>
            <RoleChangeCard />
          </div>
        </div>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </div>
    </>
  );
}
