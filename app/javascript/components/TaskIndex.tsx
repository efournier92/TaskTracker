import React from 'react';
import { useQuery } from '@apollo/client';
import { Task } from '../models/Task';
import TaskView from './TaskView';
import { getTasksQuery } from '../services/QueryService';

function TaskIndex() {
  const { loading, error, data } = useQuery(getTasksQuery());

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return data.tasks.map((task: Task) => (
    <>
      <TaskView task={task} />
    </>
  ));
}

export default TaskIndex;
