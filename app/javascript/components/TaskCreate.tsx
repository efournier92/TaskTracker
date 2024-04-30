import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TASK, GET_ALL_TASKS } from '../services/QueryService';
import { useNavigate } from 'react-router-dom';
import TaskCard from './TaskCard';
import { Task } from '../models/Task';

function TaskCreate() {
  const [createTask, {}] = useMutation(CREATE_TASK, {
    refetchQueries: [GET_ALL_TASKS, 'GetAllTasks'],
  });
  const navigate = useNavigate();

  const onCreateTask = (task: Task) => {
    createTask({
      variables: {
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        completed: task.completed,
      },
      onQueryUpdated(observableQuery) {
        return observableQuery.refetch();
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
