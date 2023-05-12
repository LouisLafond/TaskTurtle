import sqlite3

connection = sqlite3.connect('database.db')

with open('database.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

# On garde si jamais on enregistre les utilisateurs en bdd
# cur.execute("INSERT INTO User (id, name) VALUES(?,?,?)", (1,"Durand"))
# cur.execute("INSERT INTO User (id, name) VALUES(?,?,?)", (2,"Carabistouille"))
# cur.execute("INSERT INTO User (id, name) VALUES(?,?,?)", (3,"Durand"))
# cur.execute("INSERT INTO User (id, name) VALUES(?,?,?)", (4,"Lucet"))

cur.execute("INSERT INTO Task (id, title, description, price, isAvailable, user, tel) VALUES(?,?,?,?,?,?, ?)", (1,"Tonte de pelouse","Je viens chez vous donner un rafraîchissement à l'herbe de votre jardin !", 20, 1, "Truffe", "06 78 56 34 12"));
cur.execute("INSERT INTO Task (id, title, description, price, isAvailable, user, tel) VALUES(?,?,?,?,?,?, ?)", (2,"Coupe de cheveux homme","Je viens couper vos cheveux pour avoir un beau dégradé",14, 1, "Dideron", "06 78 56 34 12"))
cur.execute("INSERT INTO Task (id, title, description, price, isAvailable, user, tel) VALUES(?,?,?,?,?,?, ?)", (3,"Vente de crêpes","Une petite crêpe pour le goûter ?",3, 1, "Alexis", "06 78 56 34 12"))
cur.execute("INSERT INTO Task (id, title, description, price, isAvailable, user, tel) VALUES(?,?,?,?,?,?, ?)", (4,"Réparation plomberie","Un problème de tuyauterie ? Je suis votre homme",10, 1, "Gerbet", "06 78 56 34 12"))
cur.execute("INSERT INTO Task (id, title, description, price, isAvailable, user, tel) VALUES(?,?,?,?,?,?, ?)", (5,"Vidange voiture","N'oubliez pas la vidange !",10, 1, "Latouche", "06 78 56 34 12"))

cur.execute("INSERT INTO Task_User (id, taskId, user, isAchieved) VALUES(?,?,?,?)", (1,1,"Truffe",0))
cur.execute("INSERT INTO Task_User (id, taskId, user, isAchieved) VALUES(?,?,?,?)", (2,2,"Truffe",0))

connection.commit()
connection.close()
