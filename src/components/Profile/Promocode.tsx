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

export default function Promocode() {
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
            <Label htmlFor='name'>Промокод</Label>
            <Input id='name' />
          </div>                                                            
        </CardContent>
        <CardFooter>
          <Button>Активировать</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
