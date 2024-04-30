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

export const CREATE_TASK = gql`
  mutation createTask(
    $title: String!
    $description: String!
    $dueDate: ISO8601Date!
  ) {
    createTask(
      attributes: {
        title: $title
        description: $description
        dueDate: $dueDate
      }
    ) {
      id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask(
    $id: ID!
    $title: String!
    $description: String!
    $dueDate: ISO8601Date!
  ) {
    updateTask(
      id: $id
      attributes: {
        title: $title
        description: $description
        dueDate: $dueDate
      }
    ) {
      id
    }
  }
`;
