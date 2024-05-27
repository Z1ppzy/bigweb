import React, { useEffect, useState } from 'react';
import { getNotifications, markAsRead } from '@/services/notificationService';

interface Notification {
    id: number;
    title: string;
    message: string;
    read: boolean;
}

const NotificationList: React.FC = () => {
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
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };

    return (
        <div className='border border-slate-500 dark:border-white rounded-lg p-4'>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id} style={{ textDecoration: notification.read ? 'line-through' : 'none' }}>
                        <h3>{notification.title}</h3>
                        <p>{notification.message}</p>
                        {!notification.read && (
                            <button onClick={() => handleMarkAsRead(notification.id)}>Mark as Read</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationList;
