import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getTaskByIdQuery } from '../services/QueryService';
import TaskView from './TaskView';

function TaskViewRoute() {
  const id = useParams()?.id || '';

  const { loading, error, data } = useQuery(getTaskByIdQuery(id));

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <TaskView task={data.task} />
    </>
  );
}

export default TaskViewRoute;
