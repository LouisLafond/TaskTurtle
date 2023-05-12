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

    return (
        <div id="user-tasks">
            <Navigation />
            <h1 className='text-center'> Liste des tâches de { name }</h1>
            <div id='tasks-container'>
                {tasks.map((task) => (
                    <div key={task[0]} id='task'>
                        <h2 className='task-title'>{task[5]}</h2> {/* title */}
                        <p className='task-description'>{task[6]}</p> {/*description */}
                        <p className='task-price'> Prix : {task[7]} €</p> {/*price */}
                        <button className='button-markup'>J'ai terminé cette tâche</button>
                    </div>
                ))}

            </div>
        </div>    
    );
}

export default UserTasks;