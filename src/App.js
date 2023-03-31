import React from 'react';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services.js';

function App() {
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;