import React, { useState, useEffect } from 'react';
import Navigation from './Navigation.js';
function Tasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/tasks')
        .then(res => res.json())
        .then(data => { 
            setTasks(data)
        });
      }, []);
    
    const sendTaskAcceptation = (e, task_id) => {
        e.preventDefault();
        let name = window.prompt("Entrez votre nom :");
        fetch('/tasks/accept', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                task_id: task_id
            })
        })
        .then(response => response.json)
        .then(data => console.log(data))
        .catch((error) => console.log(error))
    }

    return (
        <div id="tasks">
            <Navigation />
            <h1 className='text-center'> Liste des tâches disponibles</h1>
            <div id='tasks-container'>
                {tasks.map((task) => (
                    <div id='task' key={task[0]}>
                        <div>
                            <h2 className='task-title'>{task[1]}</h2> {/* title */}
                            <p className='task-description'>{task[2]}</p> {/*description */}
                            <p className='task-price'> Rémunération : {task[3]} €</p> {/*price */}
                            <p className='task-tel'> Contact : {task[6]}</p> {/*telephone */}
                            <p className='task-author'> Demandé par : {task[5]}</p> {/*Demandeur */}
                        </div>

                        <form id='accept-task-form' onSubmit={e => {sendTaskAcceptation(e, task[0])}} method='post'>
                            <h3 className='text-center'>Vous souhaitez effectuer cette tâche ? </h3>
                            <input type='submit' className='button-markup' value="Accepter cette tâche"/>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tasks;