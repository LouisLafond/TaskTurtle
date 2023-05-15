import React, {useState} from 'react';
import { users } from '../users.js';

function Login() {

    const [user, setUser] = useState('');

    const handleLogin = () => {
        return () => {
            if (!user) return alert('Veuillez entrer un nom d\'utilisateur');

            const userFound = users.find((u) => u.name === user.toUpperCase());
            if (userFound) {
                localStorage.clear();
                localStorage.setItem('user', JSON.stringify(userFound));
                window.location.href = '/home';
            } else {
                alert('Utilisateur non trouvé, veuillez vérifier le nom entré');
            }
        }
    }

    return (
        <div id="login">
            <h1>LOGIN</h1>
            <p className='p'>
                Ceci est une page "fictive" d'authentification. Nous n'avons pas stocké les utilisateurs en base de données mais nous avons créé 9 utilisateurs "en dur" au format json.
            </p>
            <p className='p'>
                Pour vous connecter avec un de ces 9 utilisateurs, il faut suffit d'entrer un des noms (cf plus bas) dans le champ de formulaire ci-dessous, cet utilisateur sera alors stocké dans le localstorage de votre navigateur.
            </p>
            <p className='p'>
                Vous pouvez revenir sur cette page et ré-entrer un autre nom pour vous connecter avec un autre compte.
                Cette connexion va aussi vous attribuer une adresse pour la blockchain, en choisissant une des adresses générée par ganache.
            </p>

            <p className='p'> 
                Il n'y a donc pas de sécurité, mais l'objectif de ce projet est également d'utiliser solidity, nous avons donc décidé qu'il était judicieux de pouvoir vous donner accès a plusieurs utilisateurs pour facilement changer de compte et créer / accepter des tâches avec différents utilisateurs.
            </p>

            <p className='p'>Voici les 8 utilisateurs disponibles : </p>    

            <p className='p'>
            {users.map((user) => { 
                return (
                    <span key={user.id}> {user.name} | </span>
                )
            })}
            </p>
            <div className='input-container'>
                    <label htmlFor="name">utilisateur choisi (pas besoin des majuscules):</label>
                    <input type="text" placeholder="Entrez le nom de l'utilisateur souhaité" 
                        value={user} 
                        onChange={e => setUser(e.target.value)}  
                    />
            </div>
            <button className='button-markup' onClick={handleLogin()}>Se connecter</button>
        </div>
    );
}

export default Login;