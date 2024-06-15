import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from 'react-beautiful-dnd';
import TaskItem from '@/components/Task/TaskItem';
import TaskForm from '@/components/Task/TaskForm';
import { Task, TaskForm as ITaskForm } from '@/types/Task';
import useCheckAuth from '@/hooks/useCheckAuth';
import useCheckRole from '@/hooks/useCheckRole';
import Loader from '@/components/Global/Loader';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/tasks`)
      .then((response) => {
        setTasks(response.data);
      });
  }, []);

  const addTask = (task: ITaskForm) => {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + `/api/tasks`, task)
      .then((response) => {
        setTasks([...tasks, response.data]);
      });
  };

  const deleteTask = (id: number) => {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + `/api/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      });
  };

  const updateTaskStatus = (task: Task, status: string) => {
    axios
      .put(import.meta.env.VITE_BACKEND_URL + `/api/tasks/${task.id}`, {
        ...task,
        status,
      })
      .then((response) => {
        setTasks(tasks.map((t) => (t.id === task.id ? response.data : t)));
      });
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const newTasks = Array.from(tasks);
    const [movedTask] = newTasks.splice(source.index, 1);
    movedTask.status = destination.droppableId;
    newTasks.splice(destination.index, 0, movedTask);

    setTasks(newTasks);

    axios
      .put(
        import.meta.env.VITE_BACKEND_URL + `/api/tasks/${movedTask.id}`,
        movedTask
      )
      .then((response) => {
        setTasks(
          newTasks.map((task) =>
            task.id === response.data.id ? response.data : task
          )
        );
      })
      .catch((error) => {
        console.error('Ошибка обновления задачи:', error);
        setTasks(tasks);
      });
  };

  const getTasksByStatus = (status: string) =>
    tasks.filter((task) => task.status === status);
  const isLoadingAuth = useCheckAuth();
  const isLoadingRole = useCheckRole('admin');

  if (isLoadingAuth || isLoadingRole) {
    return <Loader />;
  }

  return (
    <>
      <div className='md:w-[500px]'>
        <h1 className='font-bold text-xl'>Создать задачу</h1>
        <TaskForm onSubmit={addTask} />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <h1 className='text-center font-bold text-2xl md:text-4xl border-b-4 border-purple-700'>
            Список заданий
          </h1>
          <div className='flex md:flex-row flex-col px-4 gap-4'>
            <Droppable droppableId='pending'>
              {(provided: DroppableProvided) => (
                <div
                  className='flex-1'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h1 className='text-center text-xl font-semibold'>
                    Предстоящие задачи
                  </h1>
                  {getTasksByStatus('pending').map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided: DraggableProvided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className='mb-4'
                        >
                          <TaskItem task={task} onDelete={deleteTask} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId='in-progress'>
              {(provided: DroppableProvided) => (
                <div
                  className='flex-1'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h1 className='text-center text-xl font-semibold'>
                    Задачи в процессе
                  </h1>
                  {getTasksByStatus('in-progress').map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided: DraggableProvided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className='mb-4'
                        >
                          <TaskItem task={task} onDelete={deleteTask} />
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId='completed'>
              {(provided: DroppableProvided) => (
                <div
                  className='flex-1'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h1 className='text-center text-xl font-semibold'>
                    Завершенные задачи
                  </h1>
                  {getTasksByStatus('completed').map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided: DraggableProvided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className='mb-4'
                        >
                          <TaskItem task={task} onDelete={deleteTask} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </>
  );
}
