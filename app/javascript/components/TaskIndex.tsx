import React from 'react';
import { useQuery } from '@apollo/client';
import { Task } from '../models/Task';
import TaskView from './TaskView';
import { GET_ALL_TASKS } from '../services/QueryService';

function TaskIndex() {
  const { loading, error, data } = useQuery(GET_ALL_TASKS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  // Sort by most recent first
  let allTasks = [...data.tasks]
    .sort((a: Task, b: Task) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    })
    .reverse()
    .map((task: Task) => (
      <TaskView
        key={task.id}
        task={task}
      />
    ));

  return <>{allTasks}</>;
}

export default TaskIndex;
