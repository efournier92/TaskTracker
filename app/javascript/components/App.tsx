import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskCreate from './TaskCreate';
import TaskIndex from './TaskIndex';
import NavigationBar from './NavigationBar';
import TaskViewRoute from './TaskViewRoute';
import EditTask from './TaskEdit';

function App() {
  return (
    <>
      <div id="react-app-container">
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route
              path="/"
              element={<TaskIndex />}
            />
            <Route
              path="/view-task/:id"
              element={<TaskViewRoute />}
            />
            <Route
              path="/create-task"
              element={<TaskCreate />}
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
