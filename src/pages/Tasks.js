import React, { useState, useEffect } from 'react';

function Tasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/tasks')
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            setTasks(data)
        });
      }, []);

    return (
        <div id="tasks">
            <h1>Liste des tâches</h1>
            <div id='tasks-container'>
                {tasks.map((task)  => (
                    <div key={task[0]}>
                        <h2>{task[0]}</h2>
                        <h2>{task[1]}</h2>
                        <h2>{task[2]}</h2>
                        <h2>{task[3]}</h2>
                    </div>
                    // <div key={task.id}>
                    //     <h2>{task.title}</h2>
                    //     <p>{task.description}</p>
                    //     <p>{task.price} €</p>
                    // </div>
                ))}
            </div>
        </div>
    );
}

export default Tasks;