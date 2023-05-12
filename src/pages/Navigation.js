import React from 'react';

function Navigation() {

    return (
        <nav id='nav'>
            <a href='/'>ACCUEIL</a>
            <a href='/tasks'>SERVICES</a>
            <a href='/tasks/create'>POSTER UNE TACHE</a>
            <a href='/tasks/user'>LISTE DES TACHES ACCEPTEES</a>
        </nav>
    );
}

export default Navigation;