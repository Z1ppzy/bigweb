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

export default function ConfirmEmail() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Подтвердить электронную почту</CardTitle>
          <CardDescription>
            Введите определенное слово, которое даст вам небольшой бонус на нашем сервере :)
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <div className='space-y-1'>
            <Label htmlFor='email'>Введите актуальную почту</Label>
            <Input id='email' type='email' />
          </div>                                                            
        </CardContent>
        <CardFooter>
          <Button>Подтвердить почту</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
