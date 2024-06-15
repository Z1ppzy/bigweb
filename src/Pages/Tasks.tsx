import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from '@/components/Task/TaskItem';
import TaskForm from '@/components/Task/TaskForm';
import { Task, TaskForm as ITaskForm } from '@/types/Task';

 export default function Tasks()  {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + '/api/tasks').then(response => {
      setTasks(response.data);
    });
  }, []);

  const addTask = (task: ITaskForm) => {
    axios.post(import.meta.env.VITE_BACKEND_URL + '/api/tasks', task).then(response => {
      setTasks([...tasks, response.data]);
    });
  };

  const deleteTask = (id: number) => {
    axios.delete(import.meta.env.VITE_BACKEND_URL + `/api/tasks/${id}`).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  return (
    <div>
      <h1 className='text-center font-bold text-2xl md:text-4xl border-b-4 border-purple-700'>Список заданий</h1>
      <div className='flex md:flex-row flex-col px-4 gap-4'>
        <div className='flex-1'>
          <h1 className='text-center text-xl font-semibold'>Предстоящие задачи</h1>
          {tasks.filter(task => task.status === 'pending').map(task => (
            <TaskItem key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </div>
        <div className='flex-1'>
          <h1 className='text-center text-xl font-semibold'>Задачи в процессе</h1>
          {tasks.filter(task => task.status === 'in-progress').map(task => (
            <TaskItem key={task.id} task={task} onDelete={deleteTask} />
          ))}
          <TaskForm onSubmit={addTask} />
        </div>
        <div className='flex-1'>
          <h1 className='text-center text-xl font-semibold'>Завершенные задачи</h1>
          {tasks.filter(task => task.status === 'completed').map(task => (
            <TaskItem key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </div>
      </div>
    </div>
  );
};