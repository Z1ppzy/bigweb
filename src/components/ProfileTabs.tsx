import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChangePassword } from './ChangePassword';
import { ChangeAvatar } from './ChangeAvatar';
import Promocode from './Promocode';
import ConfirmEmail from './ConfirmEmail';

export function ProfileTabs() {
  return (
    <Tabs defaultValue='changepswd' className='w-[400px]'>
      <TabsList className=''>
        <TabsTrigger value='changepswd'>Смена пароля</TabsTrigger>
        <TabsTrigger value='changeavatar'>Персонализация</TabsTrigger>
        <TabsTrigger value='promocode'>Активация промокода</TabsTrigger>
        <TabsTrigger value='confirmationemail'>Подтверждение почты</TabsTrigger>
      </TabsList>
      <TabsContent value='changepswd'>
        <ChangePassword />
      </TabsContent>
      <TabsContent value='changeavatar'>
        <ChangeAvatar />
      </TabsContent>
      <TabsContent value='promocode'>
        <Promocode />
      </TabsContent>
      <TabsContent value='confirmationemail'>
        <ConfirmEmail />
      </TabsContent>
    </Tabs>
  );
}
