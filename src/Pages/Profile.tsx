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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Profile() {
  return (
    <>
      <div className='mt-52 font-montserrat'>
        <div className='flex flex-row align-middle justify-center gap-5'>
          <div className='w-10 border h-10'>1</div>
          <div className='border rounded-md text-xl py-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant='outline'>Редактировать профиль</Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Редактирование профиля</DialogTitle>
                  <DialogDescription>
                    Внесите изменения в свой профиль здесь. Нажмите «Сохранить»
                    , когда закончите.
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='name' className='text-right'>
                      Name
                    </Label>
                    <Input
                      id='name'
                      value='Pedro Duarte'
                      className='col-span-3'
                    />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='username' className='text-right'>
                      Username
                    </Label>
                    <Input
                      id='username'
                      value='@peduarte'
                      className='col-span-3'
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type='submit'>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className='border py-4'>
            <p className='text-left text-lg font-bold px-10'>Безопасность</p>
            <div className='flex flex-col gap-3'>
              <Input
                className='col-span-3'
                type='password'
                name='currentPassword'
              />
              <Input
                className='col-span-3'
                name='newPassword'
                type='password'
                autoComplete='new-password'
              />
              <Input
                className='col-span-3'
                name='confirmNewPassword'
                type='password'
                autoComplete='new-password'
              />
              <Button>Change</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
