import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
function PromoCodeCard() {
  const [promoCode, setPromoCode] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    isError: false,
    message: '',
  });

  const handleActivate = () => {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + '/api/activate-promo', {
        promoCode,
      })
      .then((response) => {
        setModalContent({ message: response.data.message, isError: false });
      })
      .catch((error) => {
        setModalContent({ message: error.message, isError: true });
      })
      .finally(() => {
        setIsModalOpen(true);
      });
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Активация промокода</CardTitle>
          <CardDescription>
            Введите определенное слово, которое даст вам небольшой бонус на
            нашем сервере :)
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <div className='space-y-1'>
            <Label htmlFor='promocode'>Промокод</Label>
            <Input
              id='promocode'
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleActivate}>Активировать</Button>
        </CardFooter>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle
              className={
                modalContent.isError ? 'text-red-900' : 'text-green-900'
              }
            >
              {modalContent.message}
            </DialogTitle>
          </DialogHeader>
          <div className='mt-4'>
            <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PromoCodeCard;
