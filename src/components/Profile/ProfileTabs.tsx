import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChangePassword } from './ChangePassword';
import { ChangeAvatar } from './ChangeAvatar';
import Promocode from './Promocode';
import ConfirmEmail from './ConfirmEmail';

export function ProfileTabs() {
  return (
    <Tabs defaultValue='changepswd'>
      <TabsList className='flex flex-col md:flex-row w-full'>
        <TabsTrigger value='changepswd'>Смена пароля</TabsTrigger>
        <TabsTrigger value='changeavatar'>Персонализация</TabsTrigger>
        <TabsTrigger value='promocode'>Активация промокода</TabsTrigger>
        <TabsTrigger value='confirmationemail'>Подтверждение почты</TabsTrigger>
      </TabsList>
        <TabsContent value='changepswd' className='w-[400px] mx-auto'>
          <ChangePassword />
        </TabsContent>
        <TabsContent value='changeavatar' className='w-[400px] mx-auto'>
          <ChangeAvatar />
        </TabsContent>
        <TabsContent value='promocode' className='w-[400px] mx-auto'>
          <Promocode />
        </TabsContent>
        <TabsContent value='confirmationemail' className='w-[400px] mx-auto'>
          <ConfirmEmail />
        </TabsContent>
    </Tabs>
  );
}
