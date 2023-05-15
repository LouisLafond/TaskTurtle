https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project

# Configuration du projet

Créer un environnement virtuel python :
- cd api
- python -m venv venv
- source venv/bin/activate

Installer les dépendances dans l'environnement virtuel :
- pip install -r requirements.txt

Creer la base de données (locale au projet, utilisation de SQLite) :

- cd api
- python init_db.py

Compiler le smart contract :
- cd api
- python3 solidity.py

Lancer le backend :

- cd api
- flask run

Lancer le frontend (dans un autre terminal):

- aller a la racine du projet
- npm install
- npm run start

# Explication du projet

// image smart_contract_flask_ether.png in .md file
![alt text](smart_contract_flask_ether.png "Explication smart contract avec Flask et un noeud Ethereum")

Pour mettre tous les paquets python dans un fichier requirements.txt :
- pip freeze > requirements.txt
