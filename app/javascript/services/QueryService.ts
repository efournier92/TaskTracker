import { gql } from '@apollo/client';

export const GET_ALL_TASKS = gql`
  query GetAllTasks {
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

export const GET_TASK_BY_ID = gql`
  query GetTaskById($id: ID!) {
    task(id: $id) {
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

export const CREATE_TASK = gql`
  mutation CreateTask(
    $title: String!
    $description: String!
    $dueDate: ISO8601Date!
    $completed: Boolean!
  ) {
    createTask(
      attributes: {
        title: $title
        description: $description
        dueDate: $dueDate
        completed: $completed
      }
    ) {
      id
      task {
        title
        description
        dueDate
        completed
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $id: ID!
    $title: String!
    $description: String!
    $dueDate: ISO8601Date!
    $completed: Boolean!
  ) {
    updateTask(
      id: $id
      attributes: {
        title: $title
        description: $description
        dueDate: $dueDate
        completed: $completed
      }
    ) {
      id
      task {
        title
        description
        dueDate
        completed
      }
    }
  }
`;

export const DESTROY_TASK = gql`
  mutation DestroyTask($id: ID!) {
    destroyTask(id: $id) {
      id
    }
  }
`;
