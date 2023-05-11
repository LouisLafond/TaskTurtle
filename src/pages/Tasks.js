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
            <h1 className='text-center'> Liste des tâches</h1>
            <div id='tasks-container'>
                {tasks.map((task) => (
                    <div key={task[0]} id='task'>
                        <h2 className='task-title'>{task[1]}</h2> {/* title */}
                        <p className='task-description'>{task[2]}</p> {/*description */}
                        <p className='task-price'> Prix : {task[3]} €</p> {/*price */}
                        <button className='task-button'>Je veux ce service</button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Tasks;