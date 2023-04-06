import React, { useState, useEffect } from 'react';

function Home() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div id="home">
      <header className="home-header">
        <img src={`/images/franklin.png`} className="home-logo" alt="Logo tortue" />
        <p>The current time is {currentTime}.</p>

        <div id='menu'>
            <a href='/'>Home</a>
            <a href='/tasks'>Services</a>
            <a href='/login'>Login</a>
        </div>

      </header>
    </div>
  );
}

export default Home;