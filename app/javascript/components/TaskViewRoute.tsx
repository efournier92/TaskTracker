import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_TASK_BY_ID } from '../services/QueryService';
import TaskView from './TaskView';

function TaskViewRoute() {
  const id = useParams()?.id || '';

  const { loading, error, data } = useQuery(GET_TASK_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1>View Task</h1>
      <TaskView task={data.task} />
    </>
  );
}

export default TaskViewRoute;
