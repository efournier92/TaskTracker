import React from 'react';
import { Task } from '../models/Task';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import TaskCard from './TaskCard';
import { DESTROY_TASK, GET_ALL_TASKS } from '../services/QueryService';

interface IDisplayTaskProps {
  task: Task;
}

function TaskView({ task }: IDisplayTaskProps) {
  const [destroyTask, {}] = useMutation(DESTROY_TASK, {
    refetchQueries: [GET_ALL_TASKS, 'GetAllTasks'],
  });
  const navigate = useNavigate();

  function deleteTask(task: Task): void {
    destroyTask({
      variables: {
        id: task.id,
      },
      onQueryUpdated(observableQuery) {
        return observableQuery.refetch();
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
