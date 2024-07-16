import React, { useState } from 'react';
import { TaskForm as ITaskForm } from '@/shared/Task';

interface TaskFormProps {
  onSubmit: (task: ITaskForm) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<ITaskForm>({ title: '', description: '', status: 'pending' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', description: '', status: 'pending' });
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow-md'>
      <input
        name='title'
        value={form.title}
        onChange={handleChange}
        placeholder='Название'
        className='w-full p-2 mb-2 border rounded'
        required
      />
      <input
        name='description'
        value={form.description}
        onChange={handleChange}
        placeholder='Описание'
        className='w-full p-2 mb-2 border rounded'
      />
      <select
        name='status'
        value={form.status}
        onChange={handleChange}
        className='w-full p-2 mb-2 border rounded'
      >
        <option value='pending'>Предстоящие</option>
        <option value='in-progress'>В процессе</option>
        <option value='completed'>Завершенные</option>
      </select>
      <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 rounded'
      >
        Добавить задачу
      </button>
    </form>
  );
};

export default TaskForm;