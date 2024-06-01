import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';
import { Input } from '@/components/ui/input';



const FormSchema = z.object({
  name: z.string().min(6, {
    message: 'Имя должно содержать не менее 6 символов.',
  }),
  email: z.string().email({
    message: 'Должен быть действительный адрес электронной почты.',
  }),
  picture: z
    .instanceof(File, {
      message: 'You must upload a file.',
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: 'Размер файла должен быть не более 2 МБ.',
    }),
  bio: z
    .string()
    .min(10, {
      message: 'Описание должно быть не менее 10 символов.',
    })
    .max(240, {
      message: 'Длина описания не должна превышать 240 символов.',
    }),
  complaintType: z
    .string()
    .min(1, {
      message: 'Пожалуйста, выберите тип жалобы.',
    })
    .nonempty({ message: 'Требуется указать тип жалобы.' }),
});

export default function ContactUs() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + '/api/form', data)
      .then((response) => {
        console.log(response.data);
        toast({
          title: 'Успешно отправлено!',
          description: 'Ваши данные были успешно отправлены на сервер.',
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: 'Ошибка при отправке',
          description: 'Произошла ошибка при отправке ваших данных на сервер.',
        });
      });
  }

  return (
    <div className='flex justify-center align-middle  items-center my-20'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4 md:border-2 md:p-20 rounded-2xl'
        >
          <h1 className='text-2xl font-bold text-white text-center mb-4'>
            Форма обратной связи
          </h1>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Ваш ник</FormLabel>
                <FormControl>
                  <Input placeholder='Example' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Ваша почта</FormLabel>
                <FormControl>
                  <Input
                    id='email'
                    placeholder='example@gmail.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание проблемы</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Я строил дом и мне его взорвали..'
                    className='resize-none w-96'
                    {...field}
                  />
                </FormControl>
                <FormDescription className='w-96'>
                  Постарайтесь максимально подробно расписать вашу проблему, для
                  более быстрого и четкого решения.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='picture'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel htmlFor='picture'>
                  Загрузите фотографию для пруфа
                </FormLabel>
                <FormControl>
                  <Input
                    id='picture'
                    type='file'
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        field.onChange(e.target.files[0]);
                      } else {
                        field.onChange(null);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='complaintType'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Выберите вид жалобы</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Выберите вид жалобы' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Вид жалоб</SelectLabel>
                        <SelectItem value='bug'>Баги/Читы</SelectItem>
                        <SelectItem value='complaint'>Жалоба</SelectItem>
                        <SelectItem value='unban'>
                          Прошение о разбане
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex justify-start'>
            <Button type='submit' className='w-full h-10 bg-purple-600 text-white rounded-md hover:bg-purple-700'>Отправить</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
