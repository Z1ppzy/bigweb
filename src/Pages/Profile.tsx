import axios from 'axios';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from '@formkit/tempo';
import Greeting from '@/components/Profile/Greeting';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '@/components/Global/Loader';
import useCheckAuth from '@/hooks/useCheckAuth';
import { ProfileTabs } from '@/components/Profile/ProfileTabs';
import UserAvatar from '@/components/Profile/UserAvatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface user {
  name: string;
  email: string;
  created_at: string;
  role: string;
  avatar: string;
}

export default function Profile() {
  const [user, setUser] = useState<user>();
  useEffect(() => {
    const fetchUser = async () => {
      const user = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/api/user'
      );
      setUser(user.data);
    };
    fetchUser();
  }, []);
  const isLoading = useCheckAuth();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className='bg-[url(/public/glamorous.svg)] pb-6'>
        {user && (
          <h1 className='font-extrabold font-Welcome text-black text-3xl px-8 py-6 text-center dark:text-white'>
            <Greeting /> {user?.name}!
          </h1>
        )}{' '}
        {!user && <div className='flex justify-center p-6'><Skeleton className='h-[60px] w-[390px] rounded-xl' /></div>}
        <div className='flex flex-row justify-center'>
          <div className='md:flex flex-col min-h-screen border bg-white dark:bg-background p-10 border-slate-400 dark:border-purple-900 rounded-lg shadow-lg'>
            <div className='py-5 px-8 text-left'>
              {user && (
                <div className='flex flex-col items-center md:flex-row '>
                  <UserAvatar />
                  <div className='flex flex-col md:pl-6 text-md text-someblack text-lg border border-slate-400 px-10 py-4 ml-6 rounded-xl'>
                    <h1 className='font-medium dark:text-white'>
                      Почта:{' '}
                        {user.email}

                    </h1>
                    <h1 className='font-medium dark:text-white'>
                      Роль:{' '}
                      <HoverCard>
                        <HoverCardTrigger>
                            {user.role}
                        </HoverCardTrigger>
                        <HoverCardContent>
                          elder, enigma, phantom, titan, moder, admin
                        </HoverCardContent>
                      </HoverCard>
                    </h1>
                    <h1 className='font-medium dark:text-white'>
                      Аккаунт создан:{' '}
                        {format(user.created_at, { date: 'medium' })}
                    </h1>
                  </div>
                </div>
              )}
              {!user && <div className='flex align-middle justify-center items-center'><Skeleton className='h-[100px] w-[350px] rounded-xl' /></div>}
            </div>
            <div>
              <ProfileTabs />
            </div>
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
