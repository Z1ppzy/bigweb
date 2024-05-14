import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface user {
  name: string;
  email: string;
  created_at: string;
  role: string;
  avatar: string;
}


export default function UserAvatar() {
  const [user, setUser] = useState<user>();
  useEffect(() => {
      const fetchUser = async () => {
        const user = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/api/user'
        );
        setUser(user.data);
      };
      fetchUser()
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchUser = async () => {
        const user = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/api/user'
        );
        setUser(user.data);
      };
      fetchUser()
    }, 5000)
    return () => clearInterval(intervalId)
  }, []);
  return (
    <Avatar>
      <AvatarImage
        src={
          user?.avatar
            ? `http://localhost:8000/storage/${user.avatar}`
            : '/12231231.jpg'
        }
        alt='User Avatar'
      />
      <AvatarFallback>None</AvatarFallback>
    </Avatar>
  );
}
