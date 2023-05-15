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
        <div id="home">
            <h1>LOGIN</h1>
            <p>Ceci est une page "fictive" de login. Nous n'avons pas stocké les utilisateurs en base de données mais nous avons créé 8 utilisateurs "en dur" au format json.
                Pour vous connecter avec un de ces 8 utilisateurs, il faut suffit d'entrer un de leur nom dans le champ de formulaire ci-dessous. 
                Vous pouvez revenir sur cette page et ré-entrer un autre nom pour vous connecter avec un autre compte.
                Cette connexion va aussi simuler une connexion à la blockchain, en choisissant une adresse généré par ganache.
                Nous stockons l'utilisateur dans le localstorage pour pouvoir le récupérer sur les autres pages.
                Dans une prochaine version, nous améliorerons la sécurité de la connexion en utilisant un système de token.
            </p>
            <p></p>
            <p>Voici les 8 utilisateurs disponibles : </p>    
            {users.map((user) => { 
                return (
                    <span key={user.id}> {user.name} </span>
                )
            })}
            <input value={user} onChange={e => setUser(e.target.value)} type="text" placeholder="Entrez le nom de l'utilisateur souhaité" />
            <button className='btn-markup' onClick={handleLogin()}>Se connecter</button>
        </div>
    );
}

export default Login;