import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const validPromoCodes = ['PROMO2024', 'DISCOUNT50', 'BONUS30']; 

export default function Promocode() {
  const [promoCode, setPromoCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ message: '', isError: false });

  const handleActivate = () => {
    if (validPromoCodes.includes(promoCode)) {
      setModalContent({ message: 'Промокод активирован!', isError: false });
    } else {
      setModalContent({ message: 'Такого промокода не существует!', isError: true });
    }
    setIsModalOpen(true);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Активация промокода</CardTitle>
          <CardDescription>
            Введите определенное слово, которое даст вам небольшой бонус на нашем сервере :)
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




      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className={`w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${
                    modalContent.isError ? 'bg-red-100' : 'bg-green-100'
                  }`}
                >
                  <Dialog.Title
                    as='h3'
                    className={`text-lg font-medium leading-6 ${
                      modalContent.isError ? 'text-red-900' : 'text-green-900'
                    }`}
                  >
                    {modalContent.message}
                  </Dialog.Title>
                  <div className='mt-4'>
                    <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
