// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TaskContract {

    // strucutre d'une tache
    struct Task {
        uint taskId; // id de la tache 
        string title; // titre de la tache
        string description; // description de la tache
        uint price; // prix de la tache
        uint step; // etape de la tache (créée = 0, acceptée = 1, complétée = 2)
        address worker; // celui qui effectue la tache
        address asker; // celui qui propose la tache
    }

    // Liste des tâches créées
    Task[] public task_list;

    // Evenements 
    // Une tâche est créée
    event CreateTask(
        uint _taskId, 
        uint _price,
        address _asker
    );

    // Une tâche est acceptée
    event AcceptTask(
        uint _taskId, 
        uint _price,
        address _worker
    );
    
    // Une tâche est cterminée
    event EndTask(
        uint _taskId,
        address _worker
    );


    // Functions 

    // Création d'une tâche
    function createTask(uint _taskId, string memory _title, string memory _description, uint _price) public {
        Task memory task = Task({
            taskId: _taskId,
            title: _title,
            description: _description,
            price: _price,
            step: 0,
            worker: address(0),
            asker: msg.sender
        });

        task_list.push(task);

        emit CreateTask(_taskId, _price, msg.sender);
    }

    // Accepter une tâche
    function acceptTask(uint _taskId) public payable {
        Task memory task;
        for (uint i = 0; i < task_list.length; i++) {
            if (task_list[i].taskId == _taskId) {
                task = task_list[i];
            }
        }
        
        require(task.step == 0, "Mauvais etat de la tache");
        require(msg.value == task.price, "Mauvais montant");
        
        task.step = 1;
        task.worker = msg.sender;

        emit AcceptTask(_taskId, msg.value, msg.sender);
    }

    function completeTask(uint _taskId) public {
        Task memory task;
        for (uint i = 0; i < task_list.length; i++) {
            if (task_list[i].taskId == _taskId) {
                task = task_list[i];
            }
        }

        require(task.step == 1, "Mauvais etat de la tache");
        require(msg.sender == task.worker, "Mauvais worker");

        task.step = 2;
        emit EndTask(_taskId,  msg.sender);
    }
}
