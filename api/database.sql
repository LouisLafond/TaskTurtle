DROP TABLE IF EXISTS Task;

CREATE TABLE Task(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(200) NOT NULL, 
    description VARCHAR(200) NOT NULL,
    price FLOAT NOT NULL
    isAvailable BOOLEAN NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE User(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL, 
);


