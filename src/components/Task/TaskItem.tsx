import React from 'react';
import { Task } from '@/shared/Task';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Button } from '../ui/button';

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <div className='bg-slate-400 rounded-xl p-4 h-36 flex flex-col justify-between'>
      <div>
        <h2 className='text-lg font-semibold'>{task.title}</h2>
        <p className='text-sm'>{task.description}</p>
      </div>
      <Button
        className='w-fit'
        onClick={() => onDelete(task.id)}
      >
        <FaRegTrashCan className='text-xl' />
      </Button>
    </div>
  );
};

export default TaskItem;
