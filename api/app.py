from flask import Flask, g, jsonify, request, redirect, url_for
import sqlite3

DATABASE = 'database.db'

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Créé une connexion à la base récupére la connexion existante 
def get_db(): 
             
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

# Ferme la connexion proprement
@app.teardown_appcontext
def close_connection(exception):  
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/tasks')
def get_tasks():
    db = get_db()
    c = db.cursor()
    c.execute("SELECT * FROM Task")
    tasks = c.fetchall()
    return jsonify(tasks)

@app.route('/tasks/create', methods=['POST'])
def post_task():
    db = get_db()
    c = db.cursor()

    data = request.get_json();
    name = data['name'];
    title = data['title'];
    price = data['price'];
    content = data['content'];

    c.execute("SELECT MAX(id) FROM Task");
    last_id = c.fetchone()[0];
    id = last_id+1;
    
    c.execute("INSERT INTO Task (id, title, description, price, isAvailable, user) VALUES (?,?,?,?,?,?)", (id, title, content, price,1, name));
    db.commit();
    c.close();
    return redirect(url_for('get_tasks'));