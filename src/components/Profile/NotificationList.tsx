import { useEffect, useState } from 'react';
import { getNotifications, markAsRead } from '@/services/notificationService';
import { Button } from '../ui/button';

interface Notification {
  id: number;
  title: string;
  message: string;
  read: boolean;
  type: string;
}

export default function NotificationList() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications();
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const handleMarkAsRead = async (id: number) => {
    await markAsRead(id);
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <ul className='my-10'>
      {notifications.map((notification) => (
        <li key={notification.id}>
          <div className='bg-slate-600 flex flex-col rounded-xl p-10 text-left mb-2'>
            <h2 className='text-lg font-medium'>{notification.title}</h2>
            <p>{notification.message}</p>
            <p className='text-right'>{notification.type}</p>
            {notification.read ? (
              <p className='text-gray-500'>Прочитано</p>
            ) : (
              <Button onClick={() => handleMarkAsRead(notification.id)}>
                Пометить как прочитанное
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};