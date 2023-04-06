import sqlite3

connection = sqlite3.connect('database.db')

with open('database.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO Task (id, title, description, price) VALUES(?,?,?,?)", (2,"Task 2","Description 2",100))
cur.execute("INSERT INTO Task (id, title, description, price) VALUES(?,?,?,?)", (1,"Task 1","Description 1",100))

connection.commit()
connection.close()
