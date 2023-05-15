const taskContractAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_taskId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_worker",
				"type": "address"
			}
		],
		"name": "AcceptTask",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_taskId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_asker",
				"type": "address"
			}
		],
		"name": "CreateTask",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_taskId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_asker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_worker",
				"type": "address"
			}
		],
		"name": "EndTask",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskId",
				"type": "uint256"
			}
		],
		"name": "acceptTask",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskId",
				"type": "uint256"
			}
		],
		"name": "completeTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "createTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "task_list",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "taskId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "step",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "worker",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "asker",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
module.exports = { taskContractAbi }