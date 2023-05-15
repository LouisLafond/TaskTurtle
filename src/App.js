import React from 'react';
import Home from './pages/Home.js';
import Tasks from './pages/Tasks.js';
import CreateTask from './pages/CreateTask.js';
import UserTasks from './pages/UserTasks.js';
import Login from './pages/Login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/tasks/user" element={<UserTasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;