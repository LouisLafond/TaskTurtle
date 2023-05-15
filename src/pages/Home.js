import React, { useEffect, useState } from 'react';
import Navigation from './Navigation.js';
function Home() {

  const [user, setUser] = useState({});

  useEffect(() => {
    // take user from localstorage 
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    } else {
      window.location.href = '/login';
    }
  }, []);


  return (
    <div id="home">
        <Navigation />
        <h1>Bienvenue {user.name}</h1>
        <h2>Vous êtes chez Task Turlte, la tortue qui vous permet de demander des services, mais aussi d'y répondre !</h2>
        <img src={`/images/franklin.png`} className="home-logo" alt="Logo tortue" />
    </div>
  );
}

export default Home;