import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div class="App">
      <header class="App-header">
        <img src={`/images/franklin.png`} class="App-logo" alt="Logo tortue" />
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;