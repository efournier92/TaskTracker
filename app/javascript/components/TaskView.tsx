import React from 'react';
import { Task } from '../models/Task';
import { useMutation } from '@apollo/client';
import { DESTROY_TASK } from '../services/QueryService';
import TaskCard from './TaskCard';

interface IDisplayTaskProps {
  task: Task;
}

function TaskView({ task }: IDisplayTaskProps) {
  const [destroyTask, {}] = useMutation(DESTROY_TASK);

  function deleteTask(id: number): void {
    destroyTask({
      variables: {
        id: id,
      },
    }).then((res: any) => {
      // navigate(`/tasks/${res.data.updateTask.id}`);
    });
  }

  return (
    <>
      <TaskCard
        task={task}
        isEditing={false}
        onSubmitAction={() => {}}
      />
    </>
  );
}

export default TaskView;
