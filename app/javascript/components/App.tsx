import React from 'react';
import DisplayTasks from './DisplayTasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayTaskRoute from './DisplayTaskRoute';

function App() {
  return (
    <>
      <div id="react-app-container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<DisplayTasks />}
            />
            <Route
              path="/tasks/:id"
              element={<DisplayTaskRoute />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
