from flask import Flask, g, jsonify, request
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
    # upper the name
    name = name.upper();
    title = data['title'];
    price = data['price'];
    content = data['content'];
    tel = data['tel'];

    c.execute("SELECT MAX(id) FROM Task");
    last_id = c.fetchone()[0];
    id = last_id+1;
    
    c.execute("INSERT INTO Task (id, title, description, price, isAvailable, user, tel) VALUES (?,?,?,?,?,?,?)", (id, title, content, price,1, name, tel));
    db.commit();
    c.close();
    return jsonify(
        message="Tâche créée avec succès."
    )

@app.route('/tasks/accept', methods=['POST', 'PATCH'])
def post_user_accept_task():
    db = get_db()
    c = db.cursor()

    data = request.get_json();
    name = data['name'];
    name = name.upper();
    task_id = data['task_id'];

    c.execute("UPDATE Task SET isAvailable = 0 WHERE id=?", [task_id]);
    db.commit();
    c.execute("SELECT MAX(id) FROM Task_User");
    last_id = c.fetchone()[0];
    id = last_id+1;

    c.execute("INSERT INTO Task_User(id, taskId, user, isAchieved) VALUES (?,?,?,?)", (id, task_id, name, 0));
    db.commit();
    c.close();
    return jsonify(
        message="Tâche ajoutée à la liste de : " + name + "."
    )

@app.route('/tasks/achieve', methods=['PATCH'])
def patch_user_achieve_task():
    db = get_db()
    c = db.cursor()
    data = request.get_json();
    id = data['id'];
    c.execute("UPDATE Task_User SET isAchieved = 1 WHERE id=?", [id]);
    db.commit();
    c.close();
    return jsonify(
        message="Tâche supprimée de la liste avec succès."
    )

@app.route('/tasks/user/<name>')
def get_user_tasks(name):
    db = get_db()
    c = db.cursor()
    name = name.upper();
    c.execute("SELECT * FROM Task_User " +
              "INNER JOIN Task ON Task_User.taskId = Task.id " +
              "WHERE Task_User.user = ?", [name]);
    tasks = c.fetchall()
    return jsonify(tasks)