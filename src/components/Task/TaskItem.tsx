import React from 'react';
import { Task } from '@/types/Task';
import { Button } from '@/components/ui/button';
import { FaRegTrashCan } from "react-icons/fa6";


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
      className='w-fit flex'
        onClick={() => onDelete(task.id)}
      >
        <FaRegTrashCan />
      </Button>
    </div>
  );
};

export default TaskItem;
