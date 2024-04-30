import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getTaskByIdQuery } from '../services/QueryService';
import DisplayTask from './DisplayTask';

function DisplayTaskRoute() {
  const id = useParams()?.id || '';

  const { loading, error, data } = useQuery(getTaskByIdQuery(id));

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <DisplayTask
        task={data.task}
        viewLink={<Link to="/">Return</Link>}
        editLink={<Link to={`/edit-task/${id}`}>Edit</Link>}
      />
    </>
  );
}

export default DisplayTaskRoute;
