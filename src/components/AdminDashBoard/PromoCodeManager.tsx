import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from '../ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { toast } from 'react-toastify';
import { IoTrashBinOutline } from 'react-icons/io5';

interface PromoCode {
  id?: number;
  code: string;
  amount: number;
  max_usage?: number;
}

export default function PromoCodeManager() {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [newPromoCode, setNewPromoCode] = useState<PromoCode>({
    code: '',
    amount: 0,
    max_usage: undefined,
  });

  useEffect(() => {
    fetchPromoCodes();
  }, []);

  const fetchPromoCodes = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/api/promo-codes'
      );
      setPromoCodes(response.data);
    } catch (error) {
      console.error('Error fetching promo codes:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPromoCode({
      ...newPromoCode,
      [name]: name === 'amount' || name === 'max_usage' ? Number(value) : value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/api/promo-codes',
        newPromoCode
      );
      setNewPromoCode({ code: '', amount: 0, max_usage: undefined });
      toast.success('Промокод был успешно создан');
      fetchPromoCodes();
    } catch (error) {
      console.error('Error creating promo code:', error);
      toast.error('Произошла ошибка при создании промокода');
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(
        import.meta.env.VITE_BACKEND_URL + `/api/promo-codes/${id}`
      );
      toast.success('Промокод был успешно удалён');
      fetchPromoCodes();
    } catch (error) {
      console.error('Error deleting promo code:', error);
      toast.error('Произошла ошибка при удалении промокода');
    }
  };

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Управление промокодами</CardTitle>
        <CardDescription>
          Тут вы можете поощерять любимых игроков!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit}>
          <div className='flex flex-col space-y-2.5'>
            <Label>Название промокода:</Label>
            <Input
              type='text'
              name='code'
              value={newPromoCode.code}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='flex flex-col space-y-2.5'>
            <Label>Сумма получаемая промокодом:</Label>
            <Input
              type='number'
              name='amount'
              value={newPromoCode.amount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='flex flex-col space-y-2.5'>
            <Label>Кол-во использований:</Label>
            <Input
              type='number'
              name='max_usage'
              value={newPromoCode.max_usage ?? ''}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex justify-between mt-6'>
            <Button type='submit'>Создать промокод</Button>
          </div>
        </form>
        <CardTitle className='mt-5'>Существующие промокоды</CardTitle>

        <ul className='text-sm text-muted-foreground'>
          {promoCodes.map((promoCode) => (
            <li
              key={promoCode.id}
              className='flex justify-between items-center'
            >
              <span>
                {promoCode.code} - Сумма : {promoCode.amount} - Кол-во использ:{' '}
                {promoCode.max_usage ?? 'Unlimited'}
              </span>
              <Button
                variant='ghost'
                onClick={() => handleDelete(promoCode.id!)}
                
              >
                <IoTrashBinOutline className='text-xl' />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
