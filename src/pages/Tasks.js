import React, { useState, useEffect } from 'react';
import Navigation from './Navigation.js';
import { taskContractAbi } from '../appAbi.js';
import { ethers } from 'ethers';

function Tasks() {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const taskContractAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";
    const [tasks, setTasks] = useState([]);
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

        fetch('/tasks')
        .then(res => res.json())
        .then(data => { 
            setTasks(data)
        });
      }, []);

    async function acceptTaskWithSolidity(task_id){
        await appContract.acceptTask(task_id)
    }

    const sendTaskAcceptation = (e, task_id, asker) => {
        e.preventDefault();
        
        if (user.name === asker) {
            alert('Vous ne pouvez pas accepter votre propre tâche !');
            return;
        }
        acceptTaskWithSolidity(task_id);
        fetch('/tasks/accept', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: user.name,
                task_id: task_id
            })
        })
        .then(response => response.json())
        .then(data => {
            setTasks(tasks.filter(task => task[0] !== task_id));
            document.querySelector('.feedback').style.opacity = 1;
            setFeedback(data.message);
            console.log(data)
            // display feedback div during 3sec and hide it
            setTimeout(() => {
                setFeedback('');
                // select feedback div to set visibilty to hidden
                document.querySelector('.feedback').style.opacity = 0;
            }
            , 3000);
        })
        .catch((error) => console.log(error))
    }

    return (
        <div id="tasks">
            <Navigation />
            <h1 className='text-center'> {user.name}, souhaitez-vous accepter une de ces tâches ?</h1>
            <div id='tasks-container'>
                {tasks.map((task) => {
                    if(task[4] === 1) {
                        return (
                            <div id='task' key={task[0]}>
                                <div>
                                    <h2 className='task-title'>{task[1]}</h2> {/* title */}
                                    <p className='task-description'>{task[2]}</p> {/*description */}
                                    <p className='task-price'> Rémunération : {task[3]} ETH</p> {/*price */}
                                    <p className='task-tel'> Contact : {task[6]}</p> {/*telephone */}
                                    <p className='task-author'> Demandé par : {task[5]}</p> {/*Demandeur */}
                                </div>

                                <form id='accept-task-form' onSubmit={e => {sendTaskAcceptation(e, task[0], task[5])}} method='post'>
                                    <h3 className='text-center'>Vous souhaitez effectuer cette tâche ? </h3>
                                    <input type='submit' className='button-markup' value="Accepter cette tâche"/>
                                </form>
                            </div>
                        )
                    }

                    return null;
                })}
            </div>

            <div className='feedback' id='feedback-accept-task'>
                {feedback}
            </div>
        </div>
    );
}

export default Tasks;