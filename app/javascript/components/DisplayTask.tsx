import React from 'react';
import { Task } from '../models/Task';

interface IDisplayTaskProps {
  task: Task;
}

function DisplayTask({ task }) {
  console.log(task);
  return (
    <>
      <div key={task.id}>
        <h1>{task.title}</h1>
        <div>{task.description}</div>
        <div>{task.dueDate}</div>
        <div>Completed? {task.completed.toString()}</div>
        <button>Navigate</button>
      </div>
    </>
  );
}

export default DisplayTask;
