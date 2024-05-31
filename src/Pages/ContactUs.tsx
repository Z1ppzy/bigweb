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
import { Input } from '@headlessui/react';
import axios from 'axios';

const FormSchema = z.object({
  name: z.string().min(6, {
    message: 'Name must be at least 6 characters.',
  }),
  email: z.string().email({
    message: 'Must be a valid email.',
  }),
  picture: z
    .instanceof(File, {
      message: 'You must upload a file.',
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: 'File size should be less than 2MB.',
    }),
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 160 characters.',
    }),
  complaintType: z
    .string()
    .min(1, {
      message: 'Please select a complaint type.',
    })
    .nonempty({ message: 'Complaint type is required.' }),
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
    <div className='flex justify-center align-middle h-screen items-center'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4 border-2 p-20 rounded-2xl'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Ник в игре</FormLabel>
                <FormControl>
                  <Input
                    className='text-black w-72 h-8 rounded-md'
                    placeholder='Никнейм'
                    {...field}
                  />
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
                <FormLabel>Почта для ответа</FormLabel>
                <FormControl>
                  <Input
                    id='email'
                    className='text-black w-72 h-8 rounded-md'
                    placeholder='Почта'
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
                    placeholder='Опишите более подробно вашу ситуацию'
                    className='resize-none w-96'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
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
                    <SelectTrigger className='w-[220px]'>
                      <SelectValue placeholder='Выберите вид жалобы' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Вид жалоб</SelectLabel>
                        <SelectItem value='bug'>Bug/Cheats</SelectItem>
                        <SelectItem value='complaint'>Complaint</SelectItem>
                        <SelectItem value='unban'>Unban Request</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex justify-start'>
            <Button type='submit'>Отправить</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
