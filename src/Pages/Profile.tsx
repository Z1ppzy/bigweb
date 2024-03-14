import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from "@formkit/tempo";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface user {
  name: string;
  email: string;
  created_at: string;
  role: string;
}

export default function Profile() {
  const [user, setUser] = useState<user>();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
    const fetchUser = async () => {
      const user = await axios.get('http://localhost:8000/api/user');
      setUser(user.data);
      // console.log(user);
    };
    fetchUser();
  }, []);


  return (
    <>
      <div>
        <h1 className='font-bold text-someblack text-3xl p-6 text-center md:text-left'>
          Приветствуем вас, {user?.name}!
        </h1>
        <div className='md:grid grid-cols-2 min-h-screen'>
          <div className=''>
            <div className='py-5 px-8 text-left'>
              {user && (
                <div className='flex flex-row'>
                  <Avatar>
                    <AvatarImage
                      src='12231231.jpg'
                      alt='None'
                    />
                    <AvatarFallback>None</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col pl-6 text-md text-someblack text-lg'>
                  <p>Почта: {user.email}</p>
                  <p>Роль:{user.role}</p>
                  <p>Аккаунт создан: {format(user.created_at, {date: 'medium'})}</p>
                  </div>

                </div>
              )}
              {!user && <Skeleton className='h-[80px] w-[250px] rounded-xl' />}
            </div>
            <div className='flex flex-row'>Смена пароля Активировать промокод</div>
          </div>
          <div className='mx-10 '>
            <div className='bg-gradient-to-r from-sky-500 to-indigo-500 py-5 px-5 rounded-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              repellat perspiciatis numquam iure autem unde quisquam, adipisci
              voluptatum dicta rem rerum qui, officia, non iusto reprehenderit
              repellendus et! Quisquam libero itaque commodi natus odio,
              voluptatum rerum minus dolorem tempore hic temporibus beatae
              officia suscipit saepe architecto corrupti dolorum. Numquam,
              illum.
            </div>
            <div className='bg-slate-100 py-5 px-5 mt-5 rounded-md'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              fugiat corporis hic accusantium, porro dolor, exercitationem velit
              rerum impedit odio nihil expedita corrupti temporibus error minus,
              voluptatum odit nostrum unde sint. Laborum, porro asperiores esse
              sit perferendis, consequuntur doloremque ad aspernatur debitis
              accusantium iure dolorum voluptatibus, minus rem ab sint.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
