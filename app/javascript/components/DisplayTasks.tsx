import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Task } from '../models/Task';
import DisplayTask from './DisplayTask';
import { getTasksQuery } from '../services/QueryService';
import { Link } from 'react-router-dom';

function DisplayTasks() {
  const { loading, error, data } = useQuery(getTasksQuery());

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return data.tasks.map((task: Task) => (
    <>
      <DisplayTask
        task={task}
        navigationLink={<Link to={`/tasks/${task.id}`}>Navigate</Link>}
      />
    </>
  ));
}

export default DisplayTasks;
