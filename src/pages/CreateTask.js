import React, { useEffect, useState } from 'react';
import Navigation from './Navigation.js';
import { taskContractAbi } from '../appAbi.js';
import { ethers } from 'ethers';

function CreateTask() {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const taskContractAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [price, setPrice] = useState(0);
    const [tel, setTel] = useState('');
    const [feedback, setFeedback] = useState(''); // feedback from backend [success or error]
    const [user, setUser] = useState({});
    const [signer, setSigner] = useState();
    const [appContract, setAppContract] = useState('')
    useEffect(() => {
        // take user from localstorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
        } else {
            window.location.href = '/login';
        }

        provider.listAccounts().then((accounts) => {
            setSigner(accounts[user.id]);
        });

        let contract_signer = provider.getSigner(signer);
        setAppContract(new ethers.Contract(taskContractAddress, taskContractAbi, contract_signer));
    }, []);

    async function createTaskWithSolidity(id){
        await appContract.createTask(id,title, content, price)
    }

    const sendTaskCreation = (e) => {
        e.preventDefault();
        // post request to backend
        fetch('/tasks/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: user.name,
                title: title,
                content: content,
                price: price,
                tel: tel
            })
        })
        .then(response => response.json())
        .then(data => {
            createTaskWithSolidity(data.id);

            document.querySelector('.feedback').style.opacity = 1;
            setFeedback(data.message);
            // display feedback div during 3sec and hide it
            setTimeout(() => {
                setFeedback('');
                // select feedback div to set visibilty to hidden
                document.querySelector('.feedback').style.opacity = 0;
            }
            , 3000);

        })
        .catch((error) => {
            setFeedback(error.message);
        });
    }

   

    return (
        <div id="create-task">
            <Navigation />
            <h1 className='text-center'> Vous avez besoin d'un service ?</h1>
            <form id='create-task-form' onSubmit={e => {sendTaskCreation(e)}} method='post'>
                <div className='input-container'>
                    <label htmlFor="title">Titre de la tâche :</label>
                    <input type="text" placeholder="Le titre du service dont vous avez besoin." id="title" name="title" size="50"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    /> 
                </div>
                <div className='input-container'> 
                    <label htmlFor="content">Tâche demandée :</label>
                    <textarea id="content" placeholder="Décrivez ici le service que vous souhaitez demander. " name="content" rows="5" cols="50"
                    value={content} 
                    onChange={e => setContent(e.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="price">Coût (ETH) :</label>
                    <input type="number" placeholder="En ether, le prix horaire que vous demandez." id="price" name="price" size="50"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    /> 
                </div>      
                <div className='input-container'>
                    <label htmlFor="tel">Votre numéro de téléphone (pour qu'on puisse vous demander plus d'informations) :</label>
                    <input type='text' placeholder="06 86 78 54 23" id="tel" name="tel" size="50"
                    value={tel}
                    onChange={e => setTel(e.target.value)}
                    /> 
                </div>                  
                <input type='submit' className='button-markup' value="Valider"/>
            </form>

            <div className='feedback'>
                {feedback}
            </div>
        </div>
    );
}

export default CreateTask;