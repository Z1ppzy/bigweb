import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function FormVanilla() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Заявка на сервер «Vanilla»</DialogTitle>
            <DialogDescription>
              Для игры на нашем приватном и полностью Ванильном сервере, нужно
              пройти форму что дана ниже.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Имя
              </Label>
              <Input
                id='name'
                autoComplete='off'
                
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='old' className='text-right'>
                Возраст
              </Label>
              <Input
                id='old'
                autoComplete='off'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='info' className='text-right'>
                Откуда узнали о сервере?
              </Label>
              <Input
                id='info'
                autoComplete='off'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='exp' className='text-right'>
                Был ли опыт в подобных серверах
              </Label>
              <Input
                id='exp'
                autoComplete='off'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
              Принимаете ли вы наши правила и обещаете их соблюдать?
              </Label>
              <Input
                id='username'
                autoComplete='off'
                className='col-span-3'
              />
            </div>
          </div>

          <DialogFooter>
            <Button type='submit'>Отправить заявку</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
