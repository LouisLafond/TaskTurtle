import React, {useEffect, useState} from 'react';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks.js';
import CreateTask from './pages/CreateTask.js';
import UserTasks from './pages/UserTasks.js';
import { ethers } from 'ethers';
import { taskContractAbi } from './appAbi.js';

function App() {
  const [appContract, setAppContract] = useState('')
  const taskContractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";
  const [workerAccount, setWorkerAccount] = useState();
  const [userAccount, setUserAccount] = useState();
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

  useEffect(() => {

    // async function test() {
    //   if(window.ethereum) {
    //     try {
    //         const accounts = await window.ethereum.request({
    //             method: "eth_requestAccounts",
    //         });
    //         setUserAccount(accounts[0]);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //   } else {
    //     alert('Meta Mask not detected');
    //   }
    // }

    //test()
    provider.listAccounts().then((accounts) => {
      console.log("accounts ", accounts);
      setUserAccount(accounts[0]);
      setWorkerAccount(accounts[1]);
    });
    console.log("prov ", provider)
    let signer = provider.getSigner(userAccount);
    console.log(userAccount);
    setAppContract(new ethers.Contract(taskContractAddress, taskContractAbi, signer));
  }, [userAccount]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks worker={workerAccount} appContract={appContract} userSolidity={userAccount} />} />
          <Route path="/tasks/create" element={<CreateTask worker={workerAccount} appContract={appContract} userSolidity={userAccount} />} />
          <Route path="/tasks/user" element={<UserTasks worker={workerAccount} appContract={appContract} userSolidity={userAccount} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;