import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Task } from '../models/Task';
import DisplayTask from './DisplayTask';

const GET_TASKS = gql`
  query allTasks {
    tasks {
      id
      title
      description
      completed
      dueDate
      createdAt
      updatedAt
    }
  }
`;

function DisplayTasks() {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return data.tasks.map((task: Task) => (
    <>
      <DisplayTask task={task} />
    </>
  ));
}

export default DisplayTasks;
