import React, { ReactElement } from 'react';
import { Task } from '../models/Task';

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
  return (
    <>
      <div key={task.id}>
        <h1>{task.title}</h1>
        <div>{task.description}</div>
        <div>{task.dueDate?.toString()}</div>
        <div>Completed? {task.completed?.toString()}</div>
        {viewLink} {editLink}
      </div>
    </>
  );
}

export default DisplayTask;
