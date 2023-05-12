import React from 'react';

function Navigation() {

    return (
        <nav id='nav'>
            <a href='/'>Accueil</a>
            <a href='/tasks'>Services</a>
            <a href='/tasks/create'>Proposer un service</a>
            <a href='/tasks/user'>Liste des tâches acceptées</a>
        </nav>
    );
}

export default Navigation;