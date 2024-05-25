import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BalanceResponse {
  balance: number;
}

export default function Balance () {
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBalance = async () => {
        try {
            const response = await axios.get<BalanceResponse>(import.meta.env.VITE_BACKEND_URL + '/api/balance', {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}` 
                }
            });
            setBalance(response.data.balance);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching balance:', error); 
            toast.error('Ошибка при получении баланса');
            setLoading(false);
        }
    };

    fetchBalance();
}, []);

  return (
    <div>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <p>Ваш баланс: {balance}</p>
      )}
      <ToastContainer />
    </div>
  );
};


