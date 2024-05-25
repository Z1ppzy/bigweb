import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

export default function useCheckAuth() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/user', {
          withCredentials: true,
        });
        setIsLoading(false);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.isAxiosError) {
          if (axiosError.response) {
            if (axiosError.response.status === 401) {
              navigate('/login');
            } else {
              navigate('/error');
            }
          } else {
            navigate('/login');
          }
        } else {
          navigate('/error');
        }
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  return isLoading;
}
