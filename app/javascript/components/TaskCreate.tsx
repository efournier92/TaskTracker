import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../services/QueryService';
import { useNavigate } from 'react-router-dom';
import TaskCard from './TaskCard';
import { Task } from '../models/Task';

function TaskCreate() {
  const [createTask] = useMutation(CREATE_TASK);
  const navigate = useNavigate();

  const onCreateTask = (task: Task) => {
    createTask({
      variables: {
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
      },
    }).then((res: any) => {
      navigate(`/view-task/${res.data.createTask.id}`);
    });
  };

  return (
    <>
      <h1>Create Task</h1>
      <TaskCard
        task={new Task('', '', new Date(), false)}
        isEditing={true}
        onSubmitAction={onCreateTask}
      />
    </>
  );
}

export default TaskCreate;
