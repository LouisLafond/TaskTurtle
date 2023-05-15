import React, { useEffect, useState } from "react";
import Navigation from "./Navigation.js";
import { ethers } from 'ethers';
import { taskContractAbi } from '../appAbi.js';

function UserTasks() {

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

        fetch('/tasks/user/' + user.name)
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            });
    }, []);

    async function endTaskWithSolidity(task_id){
        await appContract.completeTask(task_id)
    }

    const endTask = (e, id) => {
        endTaskWithSolidity(id);
        e.preventDefault();
        fetch('/tasks/achieve', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
            })
        })
        .then(response => response.json())
        .then(data =>  {
            setTasks(tasks.filter(task => task[0] !== id));
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
    }

    return (
        <div id="user-tasks">
            <Navigation />
            <h1 className='text-center'> { user.name }, voici les tâches que vous avez acceptées</h1>
            <div id='tasks-container'>
                { tasks.map((task) => {
                    if(task[3] === 0) {
                        return (
                            <div key={task[0]} id='task'>
                                    <h2 className='task-title'>{task[5]}</h2> 
                                    <p className='task-description'>{task[6]}</p> 
                                    <p className='task-price'> Rémunération : {task[7]} ETH</p> 
                                    <p className='task-tel'> Contact : {task[10]}</p> 
                                    <p className='task-author'> Demandé par : {task[9]}</p> 
                                    <form onSubmit={e => { endTask(e, task[0])}} method="post">
                                        <button className='button-markup'>J'ai terminé cette tâche</button>
                                    </form>
                            </div>
                        )
                    }

                    return null;
                })}
            </div>
            <div className='feedback' id='feedback-end-task'>
                {feedback}
            </div>
        </div>    
    );
}

export default UserTasks;