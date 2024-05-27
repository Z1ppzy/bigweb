
import api from '@/components/api/api';

export const getNotifications = async () => {
    const response = await api.get('/notifications');
    return response.data;
};

export const markAsRead = async (id: number) => {
    await api.post(`/notifications/${id}/read`);
};
