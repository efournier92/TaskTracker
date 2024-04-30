import React from 'react';
import DisplayTasks from './DisplayTasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayTaskRoute from './DisplayTaskRoute';
import CreateTask from './CreateTask';
import { Link } from 'react-router-dom';
import EditTask from './EditTask';

function App() {
  return (
    <>
      <div id="react-app-container">
        <BrowserRouter>
          <Link to="/create-task">New Task</Link>
          <Routes>
            <Route
              path="/"
              element={<DisplayTasks />}
            />
            <Route
              path="/tasks/:id"
              element={<DisplayTaskRoute />}
            />
            <Route
              path="/create-task"
              element={<CreateTask />}
            />
            <Route
              path="/edit-task/:id"
              element={<EditTask />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
