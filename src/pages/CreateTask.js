import React, { useState } from 'react';

function CreateTask() {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // post request to backend
        fetch('/tasks/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                title: title,
                content: content,
                price: price
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div id="create-task">
            <h1 className='text-center'> Vous souhaitez proposer un service ?</h1>
            <form id='create-task-form' onSubmit={e => {handleSubmit(e)}} method='post'>
                <div className='input-container'>
                    <label htmlFor="name">Votre nom :</label>
                    <input type="text" placeholder="Votre nom de famille suffira !" id="name" name="name" size="50"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    /> 
                </div>
                <div className='input-container'>
                    <label htmlFor="title">Titre du service :</label>
                    <input type="text" placeholder="Le titre du service que vous proposez." id="title" name="title" size="50"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    /> 
                </div>
                <div className='input-container'> 
                    <label htmlFor="content">Service proposé :</label>
                    <textarea id="content" placeholder="Décrivez ici le service que vous souhaitez mettre à disposition. " name="content" rows="5" cols="50"
                    value={content} 
                    onChange={e => setContent(e.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="price">Coût horaire (€) :</label>
                    <input type="number" placeholder="En euros, le prix horaire que vous demandez." id="price" name="price" size="50"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    /> 
                </div>                        
                <input type='submit' className='button-markup' value="Valider"/>
            </form>
        </div>
    );
}

export default CreateTask;