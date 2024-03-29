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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function FormVanilla() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            Заявка
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Заявка на сервер «Vanilla»</DialogTitle>
            <DialogDescription>
              Для игры на нашем приватном и полностью Ванильном сервере, нужно
              пройти форму что дана ниже.
            </DialogDescription>
          </DialogHeader>
          <div className='py-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='name'>Имя</Label>
                <Input id='name' placeholder='Иван' />
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='name'>Ваш возраст</Label>
                <Input id='name' placeholder='16' />
              </div>
              <Label htmlFor='info'>Откуда узнали о сервере?</Label>
              <Input id='info' placeholder='Мониторинг' />
              <Label>Принимаете ли вы наши правила?</Label>
              <RadioGroup defaultValue='comfortable' id='rules'>
                <div className='flex flex-row gap-4'>
                  <div className='flex flex-row gap-2'>
                    <RadioGroupItem value='yes' id='r1' />
                    <Label htmlFor='r1'>Да</Label>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <RadioGroupItem value='no' id='r2' />
                    <Label htmlFor='r2'>Нет</Label>
                  </div>
                </div>
              </RadioGroup>
              <Label>Был ли опыт игры на подобных серверах?</Label>
              <RadioGroup defaultValue='comfortable'>
                <div className='flex flex-row gap-4'>
                  <div className='flex flex-row gap-2'>
                    <RadioGroupItem value='yes' id='r1' />
                    <Label htmlFor='r1'>Да</Label>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <RadioGroupItem value='no' id='r2' />
                    <Label htmlFor='r2'>Нет</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <Button>Отправить заявку</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
