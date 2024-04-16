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

export function ChangePassword() {
  return (
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>
          Измените свой пароль здесь. После сохранения вы выйдете из системы.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-1'>
          <Label htmlFor='current'>Текущий пароль</Label>
          <Input id='current' type='password' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='new'>Новый пароль</Label>
          <Input id='new' type='password' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='confirm'>Подтверждение пароля</Label>
          <Input id='confirm' type='password' />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Сохранить изменения</Button>
      </CardFooter>
    </Card>
  );
}
