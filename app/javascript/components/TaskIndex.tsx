import React from 'react';
import { useQuery } from '@apollo/client';
import { Task } from '../models/Task';
import TaskView from './TaskView';
import { GET_ALL_TASKS } from '../services/QueryService';

function TaskIndex() {
  const { loading, error, data } = useQuery(GET_ALL_TASKS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const tasks = data.tasks.map((task: Task) => (
    <TaskView
      key={task.id}
      task={task}
    />
  ));

  return <>{tasks}</>;
}

export default TaskIndex;
