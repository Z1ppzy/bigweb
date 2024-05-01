import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '../ui/card';
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table';
  
  export default function SuggestionBoxList() {
    return (
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Список того что любят наши игроки</CardTitle>
          <CardDescription>
            Узнай в один взгляд, что хотят наши игроки :)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Время</TableHead>
                <TableHead>Никнейм</TableHead>
                <TableHead>Содержимое идеи</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className='text-right'>$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter />
      </Card>
    );
  }
  