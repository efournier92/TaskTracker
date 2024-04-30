# TaskTracker

## Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
  - [Design Philosophy](#design-philosophy)
  - [Components](#components)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Build](#build)
  - [Test](#test)
- [Reflections](#reflections)
  - [Challenges](#challenges)
  - [Areas for Improvement](#areas-for-improvement)
- [Feature Stories](#feature-stories)

## Overview

- A simple task-management system to help users manage their daily tasks.

## Technologies

- Rails
- GraphQL
- React
- TypeScript

## Project Structure

### Design Philosophy

#### Approach

- Given I always approach development with business specifications in mind, I started the process by analyzing the requirements and laying out a set of simple [Feature Stories](#feature-stories).
  - This allowed me to drive my development according to somewhat realistic processes.

#### Back End Choices

- This represents a fairly vanilla implementation of a Rails 7 with a GraphQL implementation.
  - The theoretical intent being that another developer can easily dive into the codebase and find what they're expecting.

#### Front End Choices

- In scope of this exercise, the components were kept fairly sparse.
  - In the name of simplicity and to demonstrate reusability, the same form component is used for to view, create, and edit, tasks.
- The Material UI library was pulled in to make the view look nice without much effort.
  - _While this represents a large dependency, the philosophy was that, were this going to be a larger project with ongoing maintenance, we'd be happy to have all the benefits of this library at our disposal from inception._

### Components

#### Back End

- Given this was scope as a simple SPA, the only Rails route is `Home`.
  - This hands off routing control to the React app.
  - _We would likely want to rethink this paradigm, were we designing a more complex and feature-rich application._
- Graphql queries and mutations can be reviewed [here](https://github.com/efournier92/TaskTracker/tree/main/app/graphql)

#### Front End

- All React components can be found in the `app/javascript/component`.
  - All Task-related components start with `Task`, for simple sorting.
    - [`TaskCard`](https://github.com/efournier92/TaskTracker/tree/main/app/javascript/components/TaskCard.tsx) represents the main form view, consumed by all other Task-related action components:
      - [`TaskView`](https://github.com/efournier92/TaskTracker/tree/main/app/javascript/components/TaskView.tsx)
      - [`TaskCreate`](https://github.com/efournier92/TaskTracker/tree/main/app/javascript/components/TaskCreate.tsx)
      - [`TaskEdit`](https://github.com/efournier92/TaskTracker/tree/main/app/javascript/components/TaskEdit.tsx)

## Setup Instructions

### Prerequisites

- PostgreSQL is installed and running locally.
  - [Docs](https://www.postgresql.org/docs/current/tutorial-install.html)
- Ruby 3.2.2
  - `ruby -v`
- Rails
  - `gem install rails`

### Run

#### Install Necessary Gem Dependencies

```bash
bundle
```

#### Prepare the Database

```bash
export PGUSER="$REPLACE_WITH_YOUR_LOCAL_DB_USER"
export PGPASSWORD="$REPLACE_WITH_YOUR_LOCAL_DB_PASSWORD"
rails db:reset
rails db:migrate
```

#### Serve

```bash
npm run dev
rails s
```

### Test

```bash
rails test
rails spec
```

## Links

### Local

#### Root

- http://localhost:3000/

#### Graphiql > Sandbox IDE

- http://localhost:3000/graphiql

## Reflections

### Challenges

#### GraphQL Ramp Up

- Much of my time working on this project was spent ramping up on GraphQL.
  - _While this took some time, learning to understand and implement this tool is liable to pay dividends for me in the future._

#### Requirements

- Naturally, business requirements sometimes can get in the way of a developer's vision for an application.
  - In this case, I felt the requirements to implement routing and navigation complicated the app unnecessarily at this stage in development.
    - Had it not been for this requirement, I would have build it as a
    - Given the purpose here was to demonstrate skill, I'm not complaining.
      - However, had this been a feature requirement for a real application, I would have wanted to discuss it's necessity in more detail with the team.

### Areas for Improvement

- Instead of returning `Task.all` for our query, we would want to add a implement[connections](https://graphql-ruby.org/pagination/connection_concepts) in a future iteration, to be more performant.
- Presently, navigating to the `view-task` route will makes an additional `graphql` call to fetch details for the individual task.
  - While this call would be required were we to land on a route cold, we should bypass the call when navigating from the `TaskIndex` page, give we already have the details we need.
- Were we planning to extend the front-end application any further, we would most certainly want to integrate a test suite.
  - _While I forwent doing so in the interest of time (likely a fallacy), I'd be far more comfortable refactoring if I had a suite of specs to run._
- The front-end could benefit additional validations on inputs and rendering of error responses from GraphQL mutations, in the interest of enhancing UX.
- Some additional environment work should be done to avoid needing to export `PGUSER` and `PGPASSWORD` in order to configure the PostreSQL database.

## Feature Stories

### [X] TK-00000 > Back End > Initialize the Rails Application

#### Story

- As a developer, I need to create a fresh Rails application, so I can start building TaskTracker functionality.

#### Acceptance Criteria

- There exists a fresh Rails 7 application called `task-tracker`.
- The new project has a GitHub repo.
  - The contents are pushed there.
- The new application can be served via the `rails s` command.
- The README includes a list of feature stories for development.
  - _For lack of a proper ticketing system in scope of this assessment._

### [X] TK-00001 > Back End > Create the `Task` Model

#### Story

- As a developer, I want to a `Task` model, so I can persist tasks to the DB.

#### Acceptance Criteria

- The `Task` model includes the following attributes, with the corresponding specifications.
  - `id`
    - Type: Integer
    - _auto-generated_
  - `title`
    - Type: String
  - `description`
    - Type: Text
  - `completed`
    - Type: Boolean
    - _default: false_
  - `due_date`
    - Date
    - _optional_
- New instances of the model can be persisted to a PostgreSQL database.
- Some demo tasks are defined in `seeds.rb`

### [X] TK-00002 > Back End > Add GraphQL to the Rails Project

#### Story

- As a developer, I want to install GraphQL on the back end, so I can use it to interact with data and communicate with the front end.

#### Acceptance Criteria

- The Rails project includes GraphQL functionality.
- Developers can access the GraphQL IDE sandbox via the following url.
  - http://localhost:3000/graphiql

### [X] TK-00003 > Back End > Wire Up GraphQL for Task Management

#### Story

- As a developer, I want to use GraphQL to persist/access `Task` data to/from the database, so I can use it to efficently communicate with the front end.

#### Acceptance Criteria

- A GraphQL `Task` type has been defined.
- A GraphQL query type has been defined to return all tasks.
  - _To be iterated on for better performance in the future._
- The following GraphQL mutation types have been implemented:
  - `createTask`
  - `updateTask`
  - `deleteTask`
- All CRUD actions can be successfully performed to interact with `Task` data.
- Running the below sample query from the `graphiql` IDE should succeed in performing CRUD actions on `Task` data.

#### Sample Queries

##### Create

```text
mutation {
  createTask(
    title: "My New Task Title"
    description: "Here's a description of my task!"
    dueDate: "2024-04-24"
  ) {
    task {
      id
      title
      description
      completed
      dueDate
      createdAt
      updatedAt
    }
  }
}
```

##### Read

```text
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
```

##### Update

```text
mutation {
  updateTask(
    id: 4,
    attributes: {
      title: "My New Task Title"
      description: "Here's a description of my task!"
      dueDate: "2024-04-24"
      completed: true
    }
  ) {
    task{
      id
      title
      description
      completed
      dueDate
      createdAt
      updatedAt
    }
  }
}
```

##### Destroy

```text
mutation {
  destroyTask(
    id: #{CHOOSE_ID},
  ) {
    id
  }
}
```

### [X] TK-00004 > Front End > Serve a React App Via Rails

#### Story

- As a developer, I want to host a React front end from Rails, so I can start building a sweet component-based front end.

#### Acceptance Criteria

- A `Home` route is defined within Rails.
  - This route is mapped to the domain's root.
  - Hitting this route loads our React app.

### [X] TK-00005 > Front End > Integrate Apollo with React

#### Story

- As a developer, I want to consume the Apollo library from the app's React front end, so I can use GraphQL to intereact with `Task` data.

#### Acceptance Criteria

- The Apollo library is installed and accessible from the front-end Rails app.

### [X] TK-00006 > Front End > Add a React Component for Displaying a Task

#### Story

- As a user, I want to a React component for displaying an individual task, so I can view task details.

#### Acceptance Criteria

- The component displays the following task information:
  - Title.
  - Description.
  - Due Date.
  - Has the task been completed?
- The component includes a `Navigate` button.
  - _Clicking this button will eventually nagivate to a dedicated route._
    - _This route will include the task `id`._

### [X] TK-00007 > Front End > Add Routing Capability to React App

#### Story

- As a developer, I want to add routing functionality on the client side, so I can simulate route navigation from the React app.

#### Acceptance Criteria

- A user can navigate to a specific task.
  - The simulated route includes the task's `id`.
  - The route includes the react component for displaying a task.

### [X] TK-00008 > Front End > Add a React Component for Displaying a List of Tasks

#### Story

- As a user, I want to a React component for displaying a list of tasks, so I can view all my tasks from the apps Home page.

#### Acceptance Criteria

- The component displays a list of all tasks.
- The component renders on the `Home` route.

### [X] TK-00009 > Front End > Add a React Component for Creating a New Task

#### Story

- As a user, I want to a React for creating a new task, so I can save new tasks from the front end to the database.

#### Acceptance Criteria

- The user can click an `Add Task` from the root route.
- The component will open in a new route:
  - `/create`
- The component includes inputs for the following information.

  - Title.
    - _required_
  - Description.
    - _required_
  - Due Date.
    - _optional_

- The component includes a `Save` button.
  - Clicking the `Save` button persists the task to the database.
  - Clicking the `Save` navigates the user to the route to view the newly-created task.
  - If the `Save` button is never clicked, the new task data is never persisted.

### [X] TK-00010 > Front End > Add a React Component for Editing an Existing Task

#### Story

- As a user, I want to be able to edit an existing task, so I can make changes after it is initially saved.

#### Acceptance Criteria

- An `Edit` button has been added to the Task-View component.
  - Clicking this button will navigate to a route with the same component as is used for creating a task.
    - The inputs will be initialized with the task's preexisting data.
  - Clicking the `Save` button persists the task to the database.
  - Clicking the `Save` navigates the user to the route to view the newly-updated task.
  - If the `Save` button is never clicked, the updated task data will not be persisted.

### [X] TK-00011 > Front End > Add a Button for Deleting an Existing Task

#### Story

- As a user, I want to be able to delete an existing task, so I can erase it from the database.

#### Acceptance Criteria

- A `Delete` button has been added to the Task-View component.
  - Clicking this button will delete the task from the database.
  - Upon successful deletion, the task disappears from the user's list of tasks.
- The new `Delete` button has been added to the Task-Edit component.
  - The button is only displayed if the task has already been saved to the database.
    - It is not displayed if the task has never been saved.
  - Upon successful deletion, the user is redirected back to the `Home` route.

### [X] TK-00012 > Front End > Add Material Styling

#### Story

- As a developer, I want to add a Material UI library to the front end, so that users can enjoy a more stylish experience.

#### Acceptance Criteria

- Material UI components are consumable from the React application.
- Styles for all existing components have been enhanced using Material components.
