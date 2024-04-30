import React, { ReactElement } from 'react';
import { Task } from '../models/Task';
import { useMutation } from '@apollo/client';
import { DESTROY_TASK } from '../services/QueryService';

interface IDisplayTaskProps {
  task: Task;
  viewLink: ReactElement;
  editLink: ReactElement;
}

function DisplayTask({
  task,
  viewLink: viewLink,
  editLink: editLink,
}: IDisplayTaskProps) {
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
      <div key={task.id}>
        <h1>{task.title}</h1>
        <div>{task.description}</div>
        <div>{task.dueDate?.toString()}</div>
        <div>Completed? {task.completed?.toString()}</div>
        {viewLink} {editLink}{' '}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </>
  );
}

export default DisplayTask;
