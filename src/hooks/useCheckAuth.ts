import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

export default function useCheckAuth() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('http://localhost:8000/api/user', {
          withCredentials: true,
        });
        setIsLoading(false);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 401) {
          navigate('/login');
        }
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  return isLoading;
}
