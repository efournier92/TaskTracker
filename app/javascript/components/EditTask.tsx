import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { UPDATE_TASK, getTaskByIdQuery } from '../services/QueryService';
import { useNavigate, useParams } from 'react-router-dom';

function EditTask() {
  let titleInput: HTMLInputElement;
  let descriptionInput: HTMLInputElement;
  let dueDateInput: HTMLInputElement;

  const [updateTask, {}] = useMutation(UPDATE_TASK);
  const navigate = useNavigate();

  const id = useParams()?.id || '';

  const getTaskQuery = useQuery(getTaskByIdQuery(id));

  if (getTaskQuery.loading) return <p>Loading...</p>;

  if (getTaskQuery.error) return <p>Error : {getTaskQuery.error.message}</p>;

  return (
    <>
      <h1>Update Task</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            updateTask({
              variables: {
                id: parseInt(id),
                title: titleInput.value,
                description: descriptionInput.value,
                dueDate: dueDateInput.value,
              },
            }).then((res: any) => {
              navigate(`/tasks/${res.data.updateTask.id}`);
            });
          }}
        >
          <input
            placeholder="Title"
            defaultValue={getTaskQuery.data.task.title}
            ref={(node: HTMLInputElement) => {
              titleInput = node;
            }}
          />

          <br />

          <input
            placeholder="Description"
            defaultValue={getTaskQuery.data.task.description}
            ref={(node: HTMLInputElement) => {
              descriptionInput = node;
            }}
          />

          <br />

          <input
            placeholder="Date (YYYY-MM-DD)"
            defaultValue={
              new Date(getTaskQuery.data.task.dueDate)
                .toISOString()
                .split('T')[0]
            }
            ref={(node: HTMLInputElement) => {
              dueDateInput = node;
            }}
          />

          <br />

          <button type="submit">Update Task</button>
        </form>
      </div>
    </>
  );
}

export default EditTask;
