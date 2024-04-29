import { gql } from '@apollo/client';

export const getTasksQuery = () => {
  return gql`
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
};

export const getTaskByIdQuery = (id: string) => {
  return gql`
    query getTasksById {
      task(id: ${id}) {
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
};
