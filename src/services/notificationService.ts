import axios from 'axios';

export const getNotifications = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/notifications`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

export const markAsRead = async (id: number) => {
  try {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/notifications/${id}/read`);
  } catch (error) {
    console.error(`Error marking notification ${id} as read:`, error);
    throw error;
  }
};
