import React, { useState, useEffect } from 'react';

function Services() {

    //const [services, setServices] = useState([]);
    const services = [
        {
            id: 1,
            name: "Service 1",
            description: "Description du service 1",
            price: 10,
            user: {
                name: "User 1",
            }
        },
        {
            id: 2,
            name: "Service 2",
            description: "Description du service 2",
            price: 17.15,
            user: {
                name: "User 2",
            }
        },
    ]

    useEffect(() => {
    // TODO : faire une requete au backend (fetch) pour recuperer les services proposés par les utilisateurs et les afficher.
    // Pour l'instant, on a pas de base de données donc on ne peut pas les recuperer.
    // On va donc utiliser un tableau de services en dur pour simuler un appel au backend (voir constante services plus haut).
    }, []);

    return (
        <div id="services">
            <h1>Services disponibles</h1>
            <div id='services-container'>
                {services.map((service) => (
                    <div class="service">
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p>{service.price} €</p>
                        <p>Proposé par {service.user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;