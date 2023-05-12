import React, { useEffect, useState } from "react";
import Navigation from "./Navigation.js";

function UserTasks() {

    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        let name = prompt("Quel est votre nom ?")
        setName(name)
        fetch('/tasks/user/' + name)
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            });
    }, []);

    const endTask = (e, id) => {
        e.preventDefault();
        fetch('/tasks/achieve', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
        <div id="user-tasks">
            <Navigation />
            <h1 className='text-center'> Liste des tâches de { name }</h1>
            <div id='tasks-container'>
                {tasks.map((task) => (
                    <div key={task[0]} id='task'>
                        <p>fait : {task[3]}</p>
                        <h2 className='task-title'>{task[5]}</h2> {/* title */}
                        <p className='task-description'>{task[6]}</p> {/*description */}
                        <p className='task-price'> Prix : {task[7]} €</p> {/*price */}
                        <p className='task-tel'> Contact : {task[10]}</p> {/*telephone */}
                        <p className='task-author'> Demandé par : {task[9]}</p> {/*Demandeur */}
                        <form onSubmit={e => { endTask(e, task[0])}} method="post">
                            <button className='button-markup'>J'ai terminé cette tâche</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>    
    );
}

export default UserTasks;