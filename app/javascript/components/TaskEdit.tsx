import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { getTaskByIdQuery } from '../services/QueryService';
import { useNavigate, useParams } from 'react-router-dom';
import { UPDATE_TASK } from '../services/QueryService';
import { Task } from '../models/Task';
import TaskCard from './TaskCard';

function EditTask() {
  const [updateTask, {}] = useMutation(UPDATE_TASK);
  const navigate = useNavigate();

  const id = useParams()?.id || '';

  const getTaskQuery = useQuery(getTaskByIdQuery(id));

  if (getTaskQuery.loading) return <p>Loading...</p>;

  if (getTaskQuery.error) return <p>Error : {getTaskQuery.error.message}</p>;

  const onUpdateTask = (task: Task) => {
    updateTask({
      variables: {
        id: task.id,
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        completed: task.completed,
      },
    }).then(() => {
      navigate(`/view-task/${task.id}`);
    });
  };

  return (
    <>
      <h1>Edit Task</h1>
      <TaskCard
        task={getTaskQuery.data.task}
        isEditing={true}
        onSubmitAction={onUpdateTask}
      />
    </>
  );
}

export default EditTask;
