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
import { Badge } from '@/components/ui/badge';
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
      <div className='py-4 bg-[url(/public/glamorous.svg)]'>
        {user && (
          <h1 className='font-bold text-someblack text-3xl px-8 text-center dark:text-white'>
            <Greeting /> {user?.name}!
          </h1>
        )}{' '}
        {!user && <Skeleton className='h-[20px] w-[250px] rounded-xl' />}
        <div className='flex flex-row justify-center'>
          <div className='md:flex flex-col min-h-screen p-6 border-2 bg-white border-slate-400 dark:border-white rounded-lg shadow-lg'>
            <div className='py-5 px-8 text-left'>
              {user && (
                <div className='flex flex-col items-center md:flex-row '>
                  <UserAvatar />
                  <div className='flex flex-col md:pl-6 text-md text-someblack text-lg'>
                    <h1 className='font-medium dark:text-white'>
                      Почта:{' '}
                      <Badge variant='outline' className='border-purple-500'>
                        {user.email}
                      </Badge>
                    </h1>
                    <h1 className='font-medium dark:text-white'>
                      Роль:{' '}
                      <HoverCard>
                        <HoverCardTrigger>
                          <Badge
                            variant='outline'
                            className='border-purple-500 cursor-pointer'
                          >
                            {user.role}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          elder, enigma, phantom, titan, moder, admin
                        </HoverCardContent>
                      </HoverCard>
                    </h1>
                    <h1 className='font-medium dark:text-white'>
                      Аккаунт создан:{' '}
                      <Badge variant='outline' className='border-purple-500'>
                        {format(user.created_at, { date: 'medium' })}
                      </Badge>
                    </h1>
                  </div>
                </div>
              )}
              {!user && <Skeleton className='h-[80px] w-[250px] rounded-xl' />}
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
