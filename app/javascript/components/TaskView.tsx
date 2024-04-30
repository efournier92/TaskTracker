import React from 'react';
import { Task } from '../models/Task';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import TaskCard from './TaskCard';
import { DESTROY_TASK } from '../services/QueryService';

interface IDisplayTaskProps {
  task: Task;
}

function TaskView({ task }: IDisplayTaskProps) {
  const [destroyTask, {}] = useMutation(DESTROY_TASK);
  const navigate = useNavigate();

  function deleteTask(id: number): void {
    destroyTask({
      variables: {
        id: id,
      },
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <>
      <TaskCard
        task={task}
        isEditing={false}
        onSubmitAction={deleteTask}
      />
    </>
  );
}

export default TaskView;
