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

export function ChangeAvatar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='flex flex-col'>
        <Label htmlFor='file'>Вставьте файл</Label>
          <Input
            type='file'
            className='text-white mt-2'
          ></Input>
          <div className='flex flex-row justify-between mt-6'>
            <Button
              className='w-32 flex'
              variant={'destructive'}
            >
              Удалить
            </Button>
            <Button className='w-32 flex '>
              Обновить
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
}
