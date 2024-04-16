import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function RoleChangeCard() {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Изменить роль</CardTitle>
        <CardDescription>
          Сделать в один клик игрока бомжем или админом :)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-2.5'>
              <Label htmlFor='name'>Никнейм</Label>
              <Input id='name' autoComplete='off' placeholder='Ник игрока' />
            </div>
            <div className='flex flex-col space-y-2.5'>
              <Label htmlFor='framework'>Роль</Label>
              <Select>
                <SelectTrigger id='framework'>
                  <SelectValue placeholder='Выбрать' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='Avenger'>Avenger</SelectItem>
                  <SelectItem value='Elder'>Elder</SelectItem>
                  <SelectItem value='Enigma'>Enigma</SelectItem>
                  <SelectItem value='Phantom'>Phantom</SelectItem>
                  <SelectItem value='Sponsor'>Sponsor</SelectItem>
                  <SelectItem value='Arcane'>Arcane</SelectItem>
                  <SelectItem value='Legend'>Legend</SelectItem>
                  <SelectItem value='Titan'>Titan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex justify-between mt-6'>
            <Button variant='outline'>Проверить</Button>
            <Button>Готово</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
