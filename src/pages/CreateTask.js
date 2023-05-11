import React, { useState } from 'react';

function CreateTask() {

    const [Proposition, setProposition] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/tasks')
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            setProposition(data)
        });
    }

    return (
        <div id="create-task">
            <h1 className='text-center'> Vous souhaitez proposer un service ?</h1>
                <form id='create-task-form' onSubmit={e => {handleSubmit(e)}}>
                    <div className='input-container'>
                        <label for="fname">Votre nom :</label>
                        <input type="text" placeholder="Votre nom de famille suffira !" id="fname" name="fname" size="50"/> 
                    </div>
                    <div className='input-container'>
                        <label for="fname">Titre du service :</label>
                        <input type="text" placeholder="Le titre du service que vous proposez." id="fname" name="fname" size="50"/> 
                    </div>
                    <div className='input-container'> 
                        <label for="fname">Service proposé :</label>
                        <textarea id="story" placeholder="Décrivez ici le service que vous souhaitez mettre à disposition. " name="story" rows="5" cols="50" />
                    </div>
                    <div className='input-container'>
                        <label for="fname">Coût horaire (€) :</label>
                        <input type="text" placeholder="En euros, le prix horaire que vous demandez." id="fname" name="fname" size="50"/> 
                    </div>                        
                    <input type='submit' className='button-markup' value="Valider"/>
                </form>
        </div>
    );
}

export default CreateTask;