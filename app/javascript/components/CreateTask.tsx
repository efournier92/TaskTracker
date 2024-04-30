import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { CREATE_TASK } from '../services/QueryService';
import { useNavigate } from 'react-router-dom';

function CreateTask() {
  let titleInput: HTMLInputElement;
  let descriptionInput: HTMLInputElement;
  let dueDateInput: HTMLInputElement;

  const [createTask, { data, loading, error }] = useMutation(CREATE_TASK);
  const navigate = useNavigate();

  return (
    <>
      <h1>Create Task</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            createTask({
              variables: {
                title: titleInput.value,
                description: descriptionInput.value,
                dueDate: dueDateInput.value,
              },
            }).then((res: any) => {
              navigate(`/tasks/${res.data.createTask.id}`);
            });
          }}
        >
          <input
            placeholder="Title"
            ref={(node: HTMLInputElement) => {
              titleInput = node;
            }}
          />

          <br />

          <input
            placeholder="Description"
            ref={(node: HTMLInputElement) => {
              descriptionInput = node;
            }}
          />

          <br />

          <input
            placeholder="Date (YYYY-MM-DD)"
            ref={(node: HTMLInputElement) => {
              dueDateInput = node;
            }}
          />

          <br />

          <button type="submit">Create Task</button>
        </form>
      </div>
    </>
  );
}

export default CreateTask;
