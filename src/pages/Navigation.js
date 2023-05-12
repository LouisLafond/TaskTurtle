import React from 'react';

function Navigation() {

    return (
        <nav id='nav'>
            <img src={`/images/franklin.png`} className="logo-nav" alt="Logo tortue" />
            <a href='/'>ACCUEIL</a>
            <a href='/tasks'>SERVICES</a>
            <a href='/tasks/create'>POSTER UNE TACHE</a>
            <a href='/tasks/user'>LISTE DES TACHES ACCEPTEES</a>
            <img src={`/images/franklin.png`} className="logo-nav" alt="Logo tortue" />

        </nav>
    );
}

export default Navigation;