import React from 'react';
import Navigation from './Navigation.js';
function Home() {

  return (
    <div id="home">
        <Navigation />
        <h1>Task Turtle</h1>
        <h2>La tortue qui vous aide à gérer vos tâches</h2>
        <img src={`/images/franklin.png`} className="home-logo" alt="Logo tortue" />
    </div>
  );
}

export default Home;