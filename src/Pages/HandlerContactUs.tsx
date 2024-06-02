import useCheckRole from '@/hooks/useCheckRole';
import useCheckAuth from '@/hooks/useCheckAuth';
import Loader from '@/components/Global/Loader';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface FormData {
  id: number;
  name: string;
  email: string;
  bio: string;
  complaintType: string;
}

export default function HandlerContactUS() {
  const [data, setData] = useState<FormData[]>([]);

  useEffect(() => {
    axios
      .get<FormData[]>(import.meta.env.VITE_BACKEND_URL + '/api/form')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the form data!', error);
      });
  }, []);

  const isLoadingAuth = useCheckAuth();
  const isLoadingRole = useCheckRole('admin');

  if (isLoadingAuth || isLoadingRole) {
    return <Loader />;
  }
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>
        Обработчик обратной связи
      </h1>
      <Table>
        <TableCaption>Список жалоб с обратной связи.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] text-center'>
              Никнейм отправителя
            </TableHead>
            <TableHead>Почта</TableHead>
            <TableHead>Описание</TableHead>
            <TableHead className='text-right'>Вид жалобы</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className='font-medium'>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.bio}</TableCell>
              <TableCell className='text-right'>{item.complaintType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
