import React, { ReactElement } from 'react';
import { Task } from '../models/Task';

interface IDisplayTaskProps {
  task: Task;
  navigationLink: ReactElement;
}

function DisplayTask({ task, navigationLink }: IDisplayTaskProps) {
  return (
    <>
      <div key={task.id}>
        <h1>{task.title}</h1>
        <div>{task.description}</div>
        <div>{task.dueDate?.toString()}</div>
        <div>Completed? {task.completed?.toString()}</div>
        {navigationLink}
      </div>
    </>
  );
}

export default DisplayTask;
