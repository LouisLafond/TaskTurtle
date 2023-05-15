import React from 'react';

function Navigation() {

    return (
        <nav id='nav'>
            <img src={`/images/franklin.png`} className="logo-nav" alt="Logo tortue" />
            <a href='/'>LOGIN</a>
            <a href='/home'>ACCUEIL</a>
            <a href='/tasks'>SERVICES</a>
            <a href='/tasks/create'>POSTER UNE TACHE</a>
            <a href='/tasks/user'>TACHES ACCEPTÉES</a>
            <img src={`/images/franklin.png`} className="logo-nav" alt="Logo tortue" />
        </nav>
    );
}

export default Navigation;