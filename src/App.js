import React from 'react';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks.js';
import CreateTask from './pages/CreateTask.js';
import UserTasks from './pages/UserTasks.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/tasks/user" element={<UserTasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;